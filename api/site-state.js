const { verifyAdminToken } = require("./_auth");
const { supabaseRequest } = require("./_supabase");

const STATE_ID = "primary";
const getPostCount = (state) => (Array.isArray(state?.posts) ? state.posts.length : 0);

const getAuthorizationToken = (req) => {
  const header = String(req.headers.authorization || "");
  if (!header.startsWith("Bearer ")) return "";
  return header.slice(7).trim();
};

module.exports = async (req, res) => {
  try {
    if (req.method === "GET") {
      const rows = await supabaseRequest(
        `/site_state?id=eq.${STATE_ID}&select=state,updated_at`,
        { prefer: "return=representation" }
      );
      const row = Array.isArray(rows) ? rows[0] : null;
      res.status(200).json({
        state: row?.state || null,
        updatedAt: row?.updated_at || "",
      });
      return;
    }

    if (req.method === "POST") {
      const token = getAuthorizationToken(req);
      if (!verifyAdminToken(token)) {
        res.status(401).json({ error: "UNAUTHORIZED" });
        return;
      }

      const state = req.body?.state;
      const force = req.body?.force === true;
      if (!state || typeof state !== "object") {
        res.status(400).json({ error: "INVALID_STATE" });
        return;
      }

      const currentRows = await supabaseRequest(
        `/site_state?id=eq.${STATE_ID}&select=state,updated_at`,
        { prefer: "return=representation" }
      );
      const currentRow = Array.isArray(currentRows) ? currentRows[0] : null;
      const currentState = currentRow?.state || null;
      const currentPostCount = getPostCount(currentState);
      const nextPostCount = getPostCount(state);

      if (!force && currentPostCount > 0 && nextPostCount > 0 && nextPostCount < currentPostCount) {
        res.status(409).json({
          error: "POST_COUNT_SHRINK_BLOCKED",
          detail: `current=${currentPostCount}, next=${nextPostCount}`,
        });
        return;
      }

      if (currentState && typeof currentState === "object") {
        await supabaseRequest("/site_state_history", {
          method: "POST",
          body: {
            state_id: STATE_ID,
            state: currentState,
            saved_at: currentRow?.updated_at || new Date().toISOString(),
            post_count: currentPostCount,
          },
          headers: {
            Prefer: "return=minimal",
          },
        });
      }

      const rows = await supabaseRequest("/site_state", {
        method: "POST",
        body: {
          id: STATE_ID,
          state,
          updated_at: new Date().toISOString(),
        },
        headers: {
          Prefer: "resolution=merge-duplicates,return=representation",
        },
      });

      const row = Array.isArray(rows) ? rows[0] : null;
      res.status(200).json({
        ok: true,
        updatedAt: row?.updated_at || new Date().toISOString(),
      });
      return;
    }

    res.status(405).json({ error: "METHOD_NOT_ALLOWED" });
  } catch (error) {
    res.status(500).json({
      error: "SITE_STATE_REQUEST_FAILED",
      detail: String(error.message || error),
    });
  }
};
