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
    .select('id, name, website, summary, use_case, status, created_at')
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
