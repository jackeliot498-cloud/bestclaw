-- BestClaw seed data (MVP demo)

-- Categories
insert into categories (id, slug) values
  (gen_random_uuid(), 'writing'),
  (gen_random_uuid(), 'engineering'),
  (gen_random_uuid(), 'research'),
  (gen_random_uuid(), 'design'),
  (gen_random_uuid(), 'automation'),
  (gen_random_uuid(), 'support')
returning *;

-- Category translations
insert into category_translations (category_id, locale, name)
select id, 'en', initcap(slug) from categories;

insert into category_translations (category_id, locale, name)
select id,
  'zh',
  case slug
    when 'writing' then '写作'
    when 'engineering' then '编程'
    when 'research' then '研究'
    when 'design' then '设计'
    when 'automation' then '自动化'
    when 'support' then '客服'
  end
from categories;

-- Agents
insert into agents (id, slug, status, website, pricing, is_open_source, is_local)
values
  (gen_random_uuid(), 'cursor', 'published', 'https://www.cursor.com', 'freemium', false, false),
  (gen_random_uuid(), 'perplexity', 'published', 'https://www.perplexity.ai', 'freemium', false, false),
  (gen_random_uuid(), 'notion-ai', 'published', 'https://www.notion.so/product/ai', 'paid', false, false),
  (gen_random_uuid(), 'make-ai', 'published', 'https://www.make.com', 'freemium', false, false),
  (gen_random_uuid(), 'elicit', 'published', 'https://elicit.com', 'freemium', false, false),
  (gen_random_uuid(), 'canva-ai', 'published', 'https://www.canva.com/ai', 'freemium', false, false);

-- Agent translations
insert into agent_translations (agent_id, locale, name, summary, highlights, guide_steps, use_cases)
select id, 'en',
  case slug
    when 'cursor' then 'Cursor'
    when 'perplexity' then 'Perplexity'
    when 'notion-ai' then 'Notion AI'
    when 'make-ai' then 'Make + AI'
    when 'elicit' then 'Elicit'
    when 'canva-ai' then 'Canva AI'
  end,
  case slug
    when 'cursor' then 'AI-first IDE with code generation and refactoring in-context.'
    when 'perplexity' then 'Answer engine + research copilot for fast discovery.'
    when 'notion-ai' then 'Smart writing and summarization inside collaborative docs.'
    when 'make-ai' then 'Low-code workflows connecting tools and data sources.'
    when 'elicit' then 'Research assistant that extracts key findings from papers.'
    when 'canva-ai' then 'Generate design assets, presentations, and marketing visuals.'
  end,
  '["Highlights TBD"]'::jsonb,
  '["Install and sign in", "Connect data", "Run tasks"]'::jsonb,
  '["Onboarding", "Content ops", "Research"]'::jsonb
from agents;

insert into agent_translations (agent_id, locale, name, summary, highlights, guide_steps, use_cases)
select id, 'zh',
  case slug
    when 'cursor' then 'Cursor'
    when 'perplexity' then 'Perplexity'
    when 'notion-ai' then 'Notion AI'
    when 'make-ai' then 'Make + AI'
    when 'elicit' then 'Elicit'
    when 'canva-ai' then 'Canva AI'
  end,
  case slug
    when 'cursor' then 'AI 编程 IDE，支持代码生成、重构与上下文协作。'
    when 'perplexity' then '答案引擎 + 研究助理，适合快速检索与引用。'
    when 'notion-ai' then '文档协作中的智能写作与整理助手。'
    when 'make-ai' then '低代码自动化平台，适合跨系统流程编排。'
    when 'elicit' then '学术研究助理，自动提取论文关键发现。'
    when 'canva-ai' then '快速生成设计稿、营销物料与演示模板。'
  end,
  '["待补充亮点"]'::jsonb,
  '["安装并登录", "连接数据", "执行任务"]'::jsonb,
  '["上手", "内容运营", "研究"]'::jsonb
from agents;

-- Agent categories
insert into agent_categories (agent_id, category_id)
select a.id, c.id
from agents a
join categories c on (
  (a.slug in ('cursor') and c.slug = 'engineering') or
  (a.slug in ('perplexity','elicit') and c.slug = 'research') or
  (a.slug in ('notion-ai') and c.slug = 'writing') or
  (a.slug in ('make-ai') and c.slug = 'automation') or
  (a.slug in ('canva-ai') and c.slug = 'design')
);

-- Guides
insert into guides (id, slug, status) values
  (gen_random_uuid(), 'choose-agent', 'published'),
  (gen_random_uuid(), 'agent-playbook', 'published'),
  (gen_random_uuid(), 'starter-agents', 'published');

insert into guide_translations (guide_id, locale, title, summary, content)
select id, 'en',
  case slug
    when 'choose-agent' then 'How to choose the right AI agent'
    when 'agent-playbook' then 'A playbook for research + content workflows'
    when 'starter-agents' then '10 high-value agents to start with'
  end,
  case slug
    when 'choose-agent' then 'Pick by goals, budget, and data sensitivity.'
    when 'agent-playbook' then 'Break tasks down, pick tools, reuse templates.'
    when 'starter-agents' then 'Coverage across writing, code, support, and ops.'
  end,
  'Content coming soon.'
from guides;

insert into guide_translations (guide_id, locale, title, summary, content)
select id, 'zh',
  case slug
    when 'choose-agent' then '新手指南：如何选择合适的 AI Agent'
    when 'agent-playbook' then '通用玩法：用 Agent 做研究与内容生产'
    when 'starter-agents' then '工具合集：10 个高性价比的 Agent'
  end,
  case slug
    when 'choose-agent' then '从目标、预算、数据安全三维度快速筛选。'
    when 'agent-playbook' then '拆分任务 → 选择工具 → 模板复用。'
    when 'starter-agents' then '覆盖写作、编程、客服、运营等场景。'
  end,
  '内容即将上线。'
from guides;
