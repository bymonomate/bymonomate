create table if not exists public.site_state (
  id text primary key,
  state jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.site_state disable row level security;

insert into public.site_state (id, state)
values ('primary', '{}'::jsonb)
on conflict (id) do nothing;

create table if not exists public.inquiries (
  id text primary key,
  title text not null,
  client_id text not null,
  client_name text not null default '광고주',
  visibility text not null default 'private',
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.inquiry_messages (
  id text primary key,
  inquiry_id text not null references public.inquiries(id) on delete cascade,
  sender text not null,
  text text not null,
  created_at timestamptz not null default now()
);

create index if not exists inquiries_updated_at_idx on public.inquiries (updated_at desc);
create index if not exists inquiry_messages_inquiry_id_idx on public.inquiry_messages (inquiry_id, created_at asc);

alter table public.inquiries disable row level security;
alter table public.inquiry_messages disable row level security;
