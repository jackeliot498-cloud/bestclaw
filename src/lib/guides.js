import { supabase } from './supabase'

export const fetchGuides = async ({ locale = 'en', limit = 12 } = {}) => {
  const { data, error } = await supabase
    .from('guides')
    .select('id, slug, guide_translations(locale, title, summary)')
    .eq('status', 'published')
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) throw error

  return data.map((guide) => {
    const translation = guide.guide_translations.find((item) => item.locale === locale) || guide.guide_translations[0]
    return {
      id: guide.id,
      slug: guide.slug,
      title: translation?.title,
      summary: translation?.summary,
    }
  })
}

export const fetchGuideDetail = async ({ slug, locale = 'en' }) => {
  const { data, error } = await supabase
    .from('guides')
    .select('id, slug, guide_translations(locale, title, summary, content)')
    .eq('status', 'published')
    .eq('slug', slug)
    .single()

  if (error) throw error

  const translation = data.guide_translations.find((item) => item.locale === locale) || data.guide_translations[0]
  return {
    id: data.id,
    slug: data.slug,
    title: translation?.title,
    summary: translation?.summary,
    content: translation?.content,
  }
}
