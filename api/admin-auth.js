const { createAdminToken } = require("./_auth");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "METHOD_NOT_ALLOWED" });
    return;
  }

  const expectedPassword = String(process.env.MONOMATE_ADMIN_PASSWORD || "").trim();
  if (!expectedPassword) {
    res.status(500).json({ error: "ADMIN_PASSWORD_NOT_CONFIGURED" });
    return;
  }

  const password = String(req.body?.password || "").trim();
  if (!password || password !== expectedPassword) {
    res.status(401).json({ error: "INVALID_PASSWORD" });
    return;
  }

  const session = createAdminToken();
  res.status(200).json(session);
};
