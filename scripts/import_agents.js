import fs from 'node:fs'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const datasetPath = process.argv[2]

if (!supabaseUrl || !serviceRoleKey) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

if (!datasetPath) {
  console.error('Usage: node scripts/import_agents.js <data.json>')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, serviceRoleKey)

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const data = JSON.parse(fs.readFileSync(datasetPath, 'utf8'))

const ensureCategory = async (slug) => {
  const { data: existing } = await supabase.from('categories').select('id').eq('slug', slug).maybeSingle()
  if (existing) return existing.id

  const { data: inserted, error } = await supabase.from('categories').insert({ slug }).select('id').single()
  if (error) throw error

  await supabase.from('category_translations').insert([
    { category_id: inserted.id, locale: 'en', name: slug.charAt(0).toUpperCase() + slug.slice(1) },
    {
      category_id: inserted.id,
      locale: 'zh',
      name: slug === 'engineering' ? '编程' : slug === 'research' ? '研究' : slug === 'design' ? '设计' : slug === 'automation' ? '自动化' : slug === 'support' ? '客服' : '写作',
    },
  ])

  return inserted.id
}

const upsertAgent = async (item, categoryId) => {
  const slug = slugify(item.name)
  const { data: existing } = await supabase.from('agents').select('id').eq('slug', slug).maybeSingle()

  let agentId = existing?.id

  if (!agentId) {
    const { data: inserted, error } = await supabase
      .from('agents')
      .insert({
        slug,
        status: 'published',
        website: item.website,
        pricing: item.pricing,
        is_open_source: item.open_source,
        is_local: item.local,
        logo_url: item.logo_storage_url || item.logo_url,
        logo_path: item.logo_path || null,
        logo_source: item.logo_source || null,
      })
      .select('id')
      .single()

    if (error) throw error
    agentId = inserted.id
  } else {
    await supabase
      .from('agents')
      .update({
        website: item.website,
        pricing: item.pricing,
        is_open_source: item.open_source,
        is_local: item.local,
        logo_url: item.logo_storage_url || item.logo_url,
        logo_path: item.logo_path || null,
        logo_source: item.logo_source || null,
      })
      .eq('id', agentId)
  }

  const translations = [
    {
      agent_id: agentId,
      locale: 'en',
      name: item.name,
      summary: item.summary,
      highlights: ['Highlights TBD'],
      guide_steps: ['Install and sign in', 'Connect data', 'Run tasks'],
      use_cases: ['Onboarding', 'Content ops', 'Research'],
    },
    {
      agent_id: agentId,
      locale: 'zh',
      name: item.name,
      summary: item.summary,
      highlights: ['待补充亮点'],
      guide_steps: ['安装并登录', '连接数据', '执行任务'],
      use_cases: ['上手', '内容运营', '研究'],
    },
  ]

  for (const translation of translations) {
    await supabase.from('agent_translations').upsert(translation, { onConflict: 'agent_id,locale' })
  }

  await supabase.from('agent_categories').upsert({ agent_id: agentId, category_id: categoryId })
}

const run = async () => {
  for (const item of data) {
    const categoryId = await ensureCategory(item.category)
    await upsertAgent(item, categoryId)
    console.log(`Upserted ${item.name}`)
  }
}

run().catch((err) => {
  console.error(err.message)
  process.exit(1)
})
