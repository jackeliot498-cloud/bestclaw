import fs from 'node:fs'

const supabaseUrl = process.env.SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const bucketName = process.env.SUPABASE_BUCKET || 'agent-logos'

if (!supabaseUrl || !serviceRoleKey) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const createBucket = async () => {
  const res = await fetch(`${supabaseUrl}/storage/v1/bucket`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${serviceRoleKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: bucketName,
      name: bucketName,
      public: true,
    }),
  })

  if (!res.ok) {
    const text = await res.text()
    if (text.includes('duplicate key')) {
      console.log(`Bucket already exists: ${bucketName}`)
      return
    }
    console.error(text)
    process.exit(1)
  }

  console.log(`Bucket created: ${bucketName}`)
}

const makePolicyHint = () => {
  const note = `\nNext: ensure storage bucket '${bucketName}' is public or add RLS policy.`
  fs.writeFileSync('supabase/storage-note.txt', note)
}

await createBucket()
makePolicyHint()
