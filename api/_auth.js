const crypto = require("crypto");

const TOKEN_TTL_MS = 1000 * 60 * 60 * 8;

const toBase64Url = (value) =>
  Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");

const fromBase64Url = (value) => {
  const normalized = String(value || "").replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  return Buffer.from(padded, "base64").toString("utf8");
};

const getSigningSecret = () =>
  String(
    process.env.MONOMATE_ADMIN_SESSION_SECRET ||
      process.env.MONOMATE_ADMIN_PASSWORD ||
      "monomate-admin-session"
  );

const signPayload = (payload) =>
  crypto.createHmac("sha256", getSigningSecret()).update(payload).digest("hex");

const createAdminToken = () => {
  const payload = JSON.stringify({
    role: "admin",
    exp: Date.now() + TOKEN_TTL_MS,
  });
  const encoded = toBase64Url(payload);
  const signature = signPayload(encoded);
  return {
    token: `${encoded}.${signature}`,
    expiresAt: new Date(Date.now() + TOKEN_TTL_MS).toISOString(),
  };
};

const verifyAdminToken = (token) => {
  if (!token || typeof token !== "string" || !token.includes(".")) return false;
  const [encoded, signature] = token.split(".");
  if (!encoded || !signature) return false;
  const expected = signPayload(encoded);
  if (signature.length !== expected.length) {
    return false;
  }
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) {
    return false;
  }
  try {
    const payload = JSON.parse(fromBase64Url(encoded));
    return payload?.role === "admin" && Number(payload?.exp || 0) > Date.now();
  } catch (error) {
    return false;
  }
};

module.exports = {
  createAdminToken,
  verifyAdminToken,
};
