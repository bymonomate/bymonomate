const getEnv = (key) => {
  const value = String(process.env[key] || "").trim();
  if (!value) {
    throw new Error(`Missing required env: ${key}`);
  }
  return value;
};

const getSupabaseUrl = () => getEnv("SUPABASE_URL");
const getSupabaseKey = () => getEnv("SUPABASE_SERVICE_ROLE_KEY");

const supabaseRequest = async (path, options = {}) => {
  const response = await fetch(`${getSupabaseUrl()}/rest/v1${path}`, {
    method: options.method || "GET",
    headers: {
      apikey: getSupabaseKey(),
      Authorization: `Bearer ${getSupabaseKey()}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      Prefer: options.prefer || "return=representation",
      ...(options.headers || {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Supabase request failed: ${response.status}`);
  }

  if (response.status === 204) return null;
  return response.json();
};

module.exports = {
  supabaseRequest,
};
