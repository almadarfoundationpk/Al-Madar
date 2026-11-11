-- Run this entire file in Supabase SQL Editor.
-- Create a single administrator manually in Supabase Authentication > Users.
-- Do not enable public reads on donor or volunteer records.

create extension if not exists pgcrypto;

create table if not exists public.donations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  amount numeric(12,2) not null check (amount > 0),
  campaign text not null check (campaign in ('Food','Education','Health','Water initiatives','General fund')),
  transaction_ref text not null,
  transfer_date date not null,
  anonymous boolean not null default false,
  receipt_path text not null,
  status text not null default 'pending' check (status in ('pending','verified','rejected'))
);

create table if not exists public.volunteer_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  city text not null,
  department text,
  kind text not null default 'Volunteer',
  message text
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  subject text,
  message text not null
);

alter table public.donations enable row level security;
alter table public.volunteer_applications enable row level security;
alter table public.contact_messages enable row level security;

-- Public visitors may submit forms but cannot read or update submissions.
drop policy if exists "public submit donation" on public.donations;
create policy "public submit donation" on public.donations for insert to anon, authenticated
with check (status = 'pending');

drop policy if exists "public submit volunteer application" on public.volunteer_applications;
create policy "public submit volunteer application" on public.volunteer_applications for insert to anon, authenticated
with check (true);

drop policy if exists "public submit contact message" on public.contact_messages;
create policy "public submit contact message" on public.contact_messages for insert to anon, authenticated
with check (true);

-- Authenticated admin access. Create only Hasham's admin account in Supabase.
drop policy if exists "admin read donations" on public.donations;
create policy "admin read donations" on public.donations for select to authenticated using (auth.uid() is not null);
drop policy if exists "admin update donations" on public.donations;
create policy "admin update donations" on public.donations for update to authenticated using (auth.uid() is not null) with check (auth.uid() is not null);

drop policy if exists "admin read volunteers" on public.volunteer_applications;
create policy "admin read volunteers" on public.volunteer_applications for select to authenticated using (auth.uid() is not null);
drop policy if exists "admin read contact messages" on public.contact_messages;
create policy "admin read contact messages" on public.contact_messages for select to authenticated using (auth.uid() is not null);

-- Private receipt storage bucket. No public read policy is created.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('donation-receipts','donation-receipts',false,5242880,array['image/jpeg','image/png','image/webp','application/pdf'])
on conflict (id) do nothing;

drop policy if exists "public upload donation receipts" on storage.objects;
create policy "public upload donation receipts" on storage.objects for insert to anon, authenticated
with check (bucket_id = 'donation-receipts');

drop policy if exists "admin read donation receipts" on storage.objects;
create policy "admin read donation receipts" on storage.objects for select to authenticated
using (bucket_id = 'donation-receipts' and auth.uid() is not null);

-- IMPORTANT SECURITY NOTE:
-- This starter policy treats any authenticated Supabase user as an admin.
-- Keep exactly one Auth user (Hasham) and do not enable public sign-up.
-- For a production team, replace this with a dedicated admin-role table/policy.
