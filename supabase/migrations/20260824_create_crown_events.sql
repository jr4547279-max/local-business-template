create table if not exists public.crown_events (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('QUIZ','MUSIC','FESTIVAL','OTHER')),
  title text not null,
  event_date date not null,
  event_time text not null,
  description text not null default '',
  recurrence text not null default '',
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists crown_events_date_idx on public.crown_events (event_date, published);

alter table public.crown_events enable row level security;

grant select on public.crown_events to anon, authenticated;

grant insert, update, delete on public.crown_events to authenticated;

create policy "Public can read published Crown events"
on public.crown_events
for select
to anon, authenticated
using (published = true);

create policy "Authenticated users can manage Crown events"
on public.crown_events
for all
to authenticated
using (true)
with check (true);

insert into public.crown_events (type, title, event_date, event_time, description, recurrence, published)
values
  ('QUIZ', 'Themed quiz night', '2026-09-04', '7:30pm', 'A proper pub quiz with complimentary hot buffet.', 'Regular — check the latest pub update for confirmation.', false),
  ('MUSIC', 'Live music & garden session', '2026-09-12', '8:00pm', 'Live music in the enclosed rear garden when scheduled.', 'Occasional — dates announced by the pub.', false),
  ('FESTIVAL', 'Beer festival', '2026-10-03', '12:00pm', 'A celebration of changing beers and good company.', 'Regular seasonal event.', false);
