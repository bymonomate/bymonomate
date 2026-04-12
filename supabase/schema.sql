create table if not exists public.site_state (
  id text primary key,
  state jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.site_state disable row level security;

insert into public.site_state (id, state)
values ('primary', '{}'::jsonb)
on conflict (id) do nothing;
