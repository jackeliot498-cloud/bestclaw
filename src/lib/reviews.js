import { supabase } from './supabase'

export const fetchReviewsSummary = async ({ agentId }) => {
  const { data, error } = await supabase
    .from('reviews')
    .select('rating')
    .eq('agent_id', agentId)

  if (error) throw error

  const total = data.length
  const avg = total ? data.reduce((sum, item) => sum + (item.rating || 0), 0) / total : 0

  return { total, avg: Number(avg.toFixed(1)) }
}

export const submitReview = async ({ agentId, rating, comment }) => {
  const { data, error } = await supabase
    .from('reviews')
    .insert({ agent_id: agentId, rating, comment })
    .select('id')
    .single()

  if (error) throw error
  return data
}
