import { supabase } from './supabase'

export const isAdmin = async () => {
  const { data: session } = await supabase.auth.getSession()
  if (!session?.session?.user) return false

  const { data } = await supabase.from('admins').select('id').eq('user_id', session.session.user.id).maybeSingle()
  return Boolean(data)
}

export const fetchSubmissions = async () => {
  const { data, error } = await supabase
    .from('submissions')
    .select('id, name, website, summary, use_case, status, category, pricing, is_open_source, is_local, logo_url, contact_email, created_at')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export const updateSubmissionStatus = async (id, status) => {
  const { error } = await supabase.from('submissions').update({ status }).eq('id', id)
  if (error) throw error
}

export const fetchGuidesAdmin = async () => {
  const { data, error } = await supabase
    .from('guides')
    .select('id, slug, status, guide_translations(locale, title)')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export const updateGuideStatus = async (id, status) => {
  const { error } = await supabase.from('guides').update({ status }).eq('id', id)
  if (error) throw error
}

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const categoryNameZh = (slug) => {
  if (slug === 'engineering') return '编程'
  if (slug === 'research') return '研究'
  if (slug === 'design') return '设计'
  if (slug === 'automation') return '自动化'
  if (slug === 'support') return '客服'
  return '写作'
}

export const createAgentFromSubmission = async (submission) => {
  const slug = slugify(submission.name)
  const { data: existing } = await supabase.from('agents').select('id').eq('slug', slug).maybeSingle()

  let agentId = existing?.id

  if (!agentId) {
    const { data: inserted, error } = await supabase
      .from('agents')
      .insert({
        slug,
        status: 'published',
        website: submission.website,
        pricing: submission.pricing,
        is_open_source: submission.is_open_source,
        is_local: submission.is_local,
        logo_url: submission.logo_url,
      })
      .select('id')
      .single()

    if (error) throw error
    agentId = inserted.id
  }

  await supabase.from('agent_translations').upsert(
    {
      agent_id: agentId,
      locale: 'en',
      name: submission.name,
      summary: submission.summary,
      highlights: ['Highlights TBD'],
      guide_steps: ['Install and sign in', 'Connect data', 'Run tasks'],
      use_cases: ['Onboarding', 'Content ops', 'Research'],
    },
    { onConflict: 'agent_id,locale' }
  )

  await supabase.from('agent_translations').upsert(
    {
      agent_id: agentId,
      locale: 'zh',
      name: submission.name,
      summary: submission.summary,
      highlights: ['待补充亮点'],
      guide_steps: ['安装并登录', '连接数据', '执行任务'],
      use_cases: ['上手', '内容运营', '研究'],
    },
    { onConflict: 'agent_id,locale' }
  )

  if (submission.category) {
    const { data: cat } = await supabase.from('categories').select('id').eq('slug', submission.category).maybeSingle()
    let categoryId = cat?.id
    if (!categoryId) {
      const { data: insertedCat, error } = await supabase.from('categories').insert({ slug: submission.category }).select('id').single()
      if (error) throw error
      categoryId = insertedCat.id
      await supabase.from('category_translations').insert([
        { category_id: categoryId, locale: 'en', name: submission.category.charAt(0).toUpperCase() + submission.category.slice(1) },
        { category_id: categoryId, locale: 'zh', name: categoryNameZh(submission.category) },
      ])
    }
    await supabase.from('agent_categories').upsert({ agent_id: agentId, category_id: categoryId })
  }

  return agentId
}
