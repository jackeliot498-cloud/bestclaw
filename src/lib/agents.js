import { supabase } from './supabase'

export const fetchAgents = async ({ locale = 'en', limit = 30 } = {}) => {
  const { data, error } = await supabase
    .from('agents')
    .select('id, slug, website, pricing, is_open_source, is_local, agent_translations(locale, name, summary), agent_categories(categories(id, category_translations(locale, name)))')
    .eq('status', 'published')
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) throw error

  return data.map((agent) => {
    const translation = agent.agent_translations.find((item) => item.locale === locale) || agent.agent_translations[0]
    return {
      id: agent.id,
      slug: agent.slug,
      website: agent.website,
      pricing: agent.pricing,
      isOpenSource: agent.is_open_source,
      isLocal: agent.is_local,
      name: translation?.name,
      summary: translation?.summary,
    }
  })
}

export const fetchAgentDetail = async ({ slug, locale = 'en' }) => {
  const { data, error } = await supabase
    .from('agents')
    .select('id, slug, website, pricing, is_open_source, is_local, agent_translations(locale, name, summary, highlights, guide_steps, use_cases)')
    .eq('status', 'published')
    .eq('slug', slug)
    .single()

  if (error) throw error

  const translation = data.agent_translations.find((item) => item.locale === locale) || data.agent_translations[0]
  return {
    id: data.id,
    slug: data.slug,
    website: data.website,
    pricing: data.pricing,
    isOpenSource: data.is_open_source,
    isLocal: data.is_local,
    name: translation?.name,
    summary: translation?.summary,
    highlights: translation?.highlights || [],
    guideSteps: translation?.guide_steps || [],
    useCases: translation?.use_cases || [],
  }
}
