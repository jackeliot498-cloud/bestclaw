import fs from 'node:fs'
import path from 'node:path'

const supabaseUrl = process.env.SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const bucketName = process.env.SUPABASE_BUCKET || 'agent-logos'

if (!supabaseUrl || !serviceRoleKey) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const datasetPath = process.argv[2]
if (!datasetPath) {
  console.error('Usage: node scripts/upload_logos.js <data.json>')
  process.exit(1)
}

const data = JSON.parse(fs.readFileSync(datasetPath, 'utf8'))
const outDir = path.join(process.cwd(), 'tmp', 'logos')
fs.mkdirSync(outDir, { recursive: true })

const downloadLogo = async (logoUrl, filePath) => {
  const res = await fetch(logoUrl)
  if (!res.ok) throw new Error(`Failed to download ${logoUrl}`)
  const buffer = Buffer.from(await res.arrayBuffer())
  fs.writeFileSync(filePath, buffer)
}

const uploadLogo = async (filePath, storagePath, contentType) => {
  const res = await fetch(`${supabaseUrl}/storage/v1/object/${bucketName}/${storagePath}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${serviceRoleKey}`,
      'Content-Type': contentType || 'image/png',
      'x-upsert': 'true',
    },
    body: fs.readFileSync(filePath),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text)
  }
}

const inferContentType = (filePath) => {
  if (filePath.endsWith('.svg')) return 'image/svg+xml'
  if (filePath.endsWith('.webp')) return 'image/webp'
  if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) return 'image/jpeg'
  return 'image/png'
}

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const run = async () => {
  for (const item of data) {
    if (!item.logo_url) {
      console.log(`Skip ${item.name}: no logo_url`) 
      continue
    }
    const ext = path.extname(new URL(item.logo_url).pathname) || '.png'
    const filename = `${slugify(item.name)}${ext}`
    const filePath = path.join(outDir, filename)
    const storagePath = filename

    await downloadLogo(item.logo_url, filePath)
    await uploadLogo(filePath, storagePath, inferContentType(filePath))

    item.logo_path = storagePath
    item.logo_storage_url = `${supabaseUrl}/storage/v1/object/public/${bucketName}/${storagePath}`
    console.log(`Uploaded ${item.name}`)
  }

  fs.writeFileSync(datasetPath, JSON.stringify(data, null, 2))
  console.log('Dataset updated with logo_path/logo_storage_url')
}

run().catch((err) => {
  console.error(err.message)
  process.exit(1)
})
