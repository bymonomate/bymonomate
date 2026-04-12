# Vercel + Supabase setup

## 1. Supabase

1. Open the SQL editor.
2. Run [`supabase/schema.sql`](/Users/datt/Documents/Portfolio/supabase/schema.sql).
3. Copy:
   - `Project URL`
   - `service_role` key

## 2. Vercel

1. Import this project from GitHub.
2. In `Settings > Environment Variables`, add:
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `MONOMATE_ADMIN_PASSWORD`
   - `MONOMATE_ADMIN_SESSION_SECRET`
   - `RESEND_API_KEY` (optional, for inquiry emails)
   - `INQUIRY_EMAIL_TO` (optional, defaults to `monomate@bymonomate.com`)
   - `INQUIRY_EMAIL_FROM` (optional, defaults to `Monomate <onboarding@resend.dev>`)
3. Redeploy the project.

## 3. Result

- Visitors read shared site data from `/api/site-state`
- Admin login checks `/api/admin-auth`
- Admin edits save shared state through `/api/site-state`
- Inquiry threads sync through `/api/inquiries`
- Basic local state remains only for browser-specific items such as client session id
