const { verifyAdminToken } = require("./_auth");
const { supabaseRequest } = require("./_supabase");

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const getAuthorizationToken = (req) => {
  const header = String(req.headers.authorization || "");
  if (!header.startsWith("Bearer ")) return "";
  return header.slice(7).trim();
};

const isAdminRequest = (req) => verifyAdminToken(getAuthorizationToken(req));

const sendInquiryEmail = async ({ conversation, message }) => {
  const apiKey = String(process.env.RESEND_API_KEY || "").trim();
  if (!apiKey) return false;

  const to = String(process.env.INQUIRY_EMAIL_TO || "monomate@bymonomate.com").trim();
  const from = String(process.env.INQUIRY_EMAIL_FROM || "Monomate <onboarding@resend.dev>").trim();
  const subject = `[Monomate 문의] ${conversation.title}`;
  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
      <h2>새 프로젝트 의뢰 메시지</h2>
      <p><strong>문의 제목:</strong> ${escapeHtml(conversation.title)}</p>
      <p><strong>광고주 이름:</strong> ${escapeHtml(conversation.clientName || "광고주")}</p>
      <p><strong>가시성:</strong> ${escapeHtml(conversation.visibility || "private")}</p>
      <p><strong>상태:</strong> ${escapeHtml(conversation.status || "new")}</p>
      <hr />
      <p>${escapeHtml(message.text).replace(/\n/g, "<br />")}</p>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html,
    }),
  });

  return response.ok;
};

const composeConversations = (inquiries = [], messages = []) =>
  inquiries.map((inquiry) => {
    const threadMessages = messages
      .filter((message) => message.inquiry_id === inquiry.id)
      .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
      .map((message) => ({
        id: message.id,
        sender: message.sender,
        text: message.text,
        createdAt: message.created_at,
      }));

    return {
      id: inquiry.id,
      title: inquiry.title,
      updatedAt: inquiry.updated_at,
      visibility: inquiry.visibility,
      status: inquiry.status,
      clientId: inquiry.client_id,
      clientName: inquiry.client_name,
      unreadAdmin: false,
      unreadClient: false,
      messages: threadMessages,
    };
  });

module.exports = async (req, res) => {
  try {
    if (req.method === "GET") {
      const clientId = String(req.query.clientId || "").trim();
      const admin = isAdminRequest(req);
      if (!admin && !clientId) {
        res.status(400).json({ error: "CLIENT_ID_REQUIRED" });
        return;
      }

      const inquiryPath = admin
        ? "/inquiries?select=*&order=updated_at.desc"
        : `/inquiries?client_id=eq.${encodeURIComponent(clientId)}&select=*&order=updated_at.desc`;

      const inquiries = await supabaseRequest(inquiryPath, { prefer: "return=representation" });
      const inquiryIds = new Set(Array.isArray(inquiries) ? inquiries.map((item) => item.id) : []);
      const allMessages = inquiryIds.size
        ? await supabaseRequest("/inquiry_messages?select=*&order=created_at.asc", {
            prefer: "return=representation",
          })
        : [];
      const messages = Array.isArray(allMessages)
        ? allMessages.filter((message) => inquiryIds.has(message.inquiry_id))
        : [];

      res.status(200).json({
        conversations: composeConversations(inquiries, messages),
      });
      return;
    }

    if (req.method === "POST") {
      const action = String(req.body?.action || "").trim();
      if (action === "create") {
        const conversation = req.body?.conversation;
        if (!conversation?.id) {
          res.status(400).json({ error: "INVALID_CONVERSATION" });
          return;
        }
        const inquiries = await supabaseRequest("/inquiries", {
          method: "POST",
          headers: {
            Prefer: "resolution=merge-duplicates,return=representation",
          },
          body: {
            id: conversation.id,
            title: conversation.title,
            client_id: conversation.clientId,
            client_name: conversation.clientName,
            visibility: conversation.visibility,
            status: conversation.status,
            created_at: conversation.messages?.[0]?.createdAt || new Date().toISOString(),
            updated_at: conversation.updatedAt || new Date().toISOString(),
          },
        });

        const firstMessage = conversation.messages?.[0];
        if (firstMessage) {
          await supabaseRequest("/inquiry_messages", {
            method: "POST",
            headers: {
              Prefer: "resolution=merge-duplicates,return=representation",
            },
            body: {
              id: firstMessage.id,
              inquiry_id: conversation.id,
              sender: firstMessage.sender,
              text: firstMessage.text,
              created_at: firstMessage.createdAt || new Date().toISOString(),
            },
          });
        }

        const normalizedMessages = firstMessage
          ? [
              {
                id: firstMessage.id,
                inquiry_id: conversation.id,
                sender: firstMessage.sender,
                text: firstMessage.text,
                created_at: firstMessage.createdAt,
              },
            ]
          : [];

        res.status(200).json({
          ok: true,
          conversation: composeConversations(inquiries, normalizedMessages)[0] || null,
        });
        return;
      }

      if (action === "message") {
        const conversationId = String(req.body?.conversationId || "").trim();
        const message = req.body?.message;
        const clientId = String(req.body?.clientId || "").trim();
        const clientName = String(req.body?.clientName || "광고주").trim();
        if (!conversationId || !message?.text) {
          res.status(400).json({ error: "INVALID_MESSAGE" });
          return;
        }

        const inquiryRows = await supabaseRequest(`/inquiries?id=eq.${encodeURIComponent(conversationId)}&select=*`, {
          prefer: "return=representation",
        });
        const inquiry = Array.isArray(inquiryRows) ? inquiryRows[0] : null;
        if (!inquiry) {
          res.status(404).json({ error: "INQUIRY_NOT_FOUND" });
          return;
        }

        const createdAt = new Date().toISOString();
        const sender = String(message.sender || "client");
        const nextStatus = sender === "admin" ? "answered" : "answered";

        const insertedMessages = [
          {
            id: `message-${Date.now()}`,
            inquiry_id: conversationId,
            sender,
            text: String(message.text || ""),
            created_at: createdAt,
          },
        ];

        if (sender === "client") {
          insertedMessages.push({
            id: `message-${Date.now()}-reply`,
            inquiry_id: conversationId,
            sender: "admin",
            text:
              /(브랜딩|로고|아이덴티티|brand)/i.test(message.text)
                ? "브랜딩 문의 감사합니다. 필요한 산출물 범위와 참고 무드, 목표 일정을 남겨주시면 검토 후 답변드릴게요."
                : /(랜딩|페이지|웹|사이트|lp)/i.test(message.text)
                  ? "랜딩페이지 문의 감사합니다. 페이지 목적과 필요한 섹션, 일정이 있으면 함께 남겨주세요."
                  : /(템플릿|굿즈|판매|구매|다운로드|소스)/i.test(message.text)
                    ? "판매/구매 문의 감사합니다. 원하시는 상품명과 사용 목적을 알려주시면 확인 후 안내드릴게요."
                    : "문의 감사합니다. 작업 범위, 일정, 예산, 참고 레퍼런스를 남겨주시면 확인 후 답변드릴게요.",
            created_at: new Date(Date.now() + 1000).toISOString(),
          });
        }

        await supabaseRequest("/inquiry_messages", {
          method: "POST",
          headers: {
            Prefer: "resolution=merge-duplicates,return=representation",
          },
          body: insertedMessages,
        });

        const updatedRows = await supabaseRequest("/inquiries", {
          method: "POST",
          headers: {
            Prefer: "resolution=merge-duplicates,return=representation",
          },
          body: {
            id: conversationId,
            title: inquiry.title,
            client_id: inquiry.client_id || clientId,
            client_name: inquiry.client_name || clientName,
            visibility: inquiry.visibility || "private",
            status: nextStatus,
            created_at: inquiry.created_at,
            updated_at: insertedMessages.at(-1)?.created_at || createdAt,
          },
        });

        const allMessages = await supabaseRequest(
          `/inquiry_messages?inquiry_id=eq.${encodeURIComponent(conversationId)}&select=*&order=created_at.asc`,
          { prefer: "return=representation" }
        );

        let emailSent = false;
        if (sender === "client") {
          emailSent = await sendInquiryEmail({
            conversation: {
              ...inquiry,
              title: inquiry.title,
              clientName: inquiry.client_name || clientName,
              visibility: inquiry.visibility || "private",
              status: nextStatus,
            },
            message: insertedMessages[0],
          });
        }

        res.status(200).json({
          ok: true,
          emailSent,
          conversation: composeConversations(updatedRows, allMessages)[0] || null,
        });
        return;
      }

      res.status(400).json({ error: "UNKNOWN_ACTION" });
      return;
    }

    res.status(405).json({ error: "METHOD_NOT_ALLOWED" });
  } catch (error) {
    res.status(500).json({
      error: "INQUIRY_REQUEST_FAILED",
      detail: String(error.message || error),
    });
  }
};
