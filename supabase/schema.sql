create table if not exists public.site_state (
  id text primary key,
  state jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists public.site_state_history (
  id bigserial primary key,
  state_id text not null,
  state jsonb not null,
  post_count integer not null default 0,
  saved_at timestamptz not null default now()
);

alter table public.site_state disable row level security;
alter table public.site_state_history disable row level security;

insert into public.site_state (id, state)
values ('primary', '{}'::jsonb)
on conflict (id) do nothing;

create index if not exists site_state_history_state_id_idx
on public.site_state_history (state_id, saved_at desc);

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

insert into storage.buckets (id, name, public)
values ('post-media', 'post-media', true)
on conflict (id) do update
set public = excluded.public;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'storage'
      and tablename = 'objects'
      and policyname = 'Allow public uploads to post-media'
  ) then
    create policy "Allow public uploads to post-media"
    on storage.objects
    for insert
    to public
    with check (bucket_id = 'post-media');
  end if;
end
$$;
