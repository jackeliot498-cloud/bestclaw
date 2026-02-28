-- Allow admins to manage agents and related tables

create policy "admins can insert agents" on agents for insert
with check (exists (select 1 from admins where admins.user_id = auth.uid()));

create policy "admins can update agents" on agents for update
using (exists (select 1 from admins where admins.user_id = auth.uid()));

create policy "admins can insert agent translations" on agent_translations for insert
with check (exists (select 1 from admins where admins.user_id = auth.uid()));

create policy "admins can update agent translations" on agent_translations for update
using (exists (select 1 from admins where admins.user_id = auth.uid()));

create policy "admins can insert categories" on categories for insert
with check (exists (select 1 from admins where admins.user_id = auth.uid()));

create policy "admins can insert category translations" on category_translations for insert
with check (exists (select 1 from admins where admins.user_id = auth.uid()));

create policy "admins can insert agent categories" on agent_categories for insert
with check (exists (select 1 from admins where admins.user_id = auth.uid()));
