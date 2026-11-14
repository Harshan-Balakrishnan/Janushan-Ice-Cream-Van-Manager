-- Additive staff activity audit for Janushan Ice Cream Van Manager.
-- Existing operational tables and historical records remain unchanged.

create table if not exists public.business_activity_events (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  actor_user_id uuid not null references auth.users(id) on delete restrict,
  event_type text not null check (event_type in (
    'cash_closeout_saved','expense_recorded','stock_movement_recorded',
    'stock_count_submitted','stock_count_reviewed'
  )),
  entity_type text not null check (char_length(entity_type) between 1 and 40),
  entity_id text not null default '',
  summary text not null default '' check (char_length(summary) <= 180),
  created_at timestamptz not null default now()
);

create index if not exists business_activity_events_business_created_idx
  on public.business_activity_events (business_id, created_at desc);
create index if not exists business_activity_events_actor_created_idx
  on public.business_activity_events (actor_user_id, created_at desc);

alter table public.business_activity_events enable row level security;

drop policy if exists "Owners can read business activity events" on public.business_activity_events;
create policy "Owners can read business activity events"
  on public.business_activity_events for select to authenticated
  using (exists (
    select 1 from public.business_members bm
    where bm.business_id = business_activity_events.business_id
      and bm.user_id = auth.uid() and bm.role = 'owner'
  ));

revoke all on public.business_activity_events from anon, authenticated;
grant select on public.business_activity_events to authenticated;

create or replace function public.log_business_activity(
  p_business_id uuid, p_event_type text, p_entity_type text,
  p_entity_id text default '', p_summary text default ''
)
returns uuid language plpgsql security definer set search_path = public
as $$
declare new_event_id uuid;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  if p_event_type not in (
    'cash_closeout_saved','expense_recorded','stock_movement_recorded',
    'stock_count_submitted','stock_count_reviewed'
  ) then raise exception 'Unsupported activity event'; end if;
  if not exists (
    select 1 from public.business_members bm
    where bm.business_id = p_business_id and bm.user_id = auth.uid()
  ) then raise exception 'Business membership required'; end if;

  insert into public.business_activity_events
    (business_id,actor_user_id,event_type,entity_type,entity_id,summary)
  values
    (p_business_id,auth.uid(),p_event_type,left(coalesce(p_entity_type,'activity'),40),
     left(coalesce(p_entity_id,''),120),left(coalesce(p_summary,''),180))
  returning id into new_event_id;
  return new_event_id;
end;
$$;

revoke all on function public.log_business_activity(uuid,text,text,text,text) from public, anon;
grant execute on function public.log_business_activity(uuid,text,text,text,text) to authenticated;
