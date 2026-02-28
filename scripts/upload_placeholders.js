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
  console.error('Usage: node scripts/upload_placeholders.js <data.json>')
  process.exit(1)
}

const data = JSON.parse(fs.readFileSync(datasetPath, 'utf8'))
const outDir = path.join(process.cwd(), 'tmp', 'placeholders')
fs.mkdirSync(outDir, { recursive: true })

const slugify = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const initials = (name) => {
  const parts = name.replace(/[^A-Za-z0-9 ]/g, '').trim().split(/\s+/)
  const first = parts[0]?.[0] || 'A'
  const second = parts[1]?.[0] || ''
  return (first + second).toUpperCase()
}

const gradientFor = (name) => {
  const gradients = [
    ['#6CF6FF', '#B56CFF'],
    ['#FF8EC8', '#6CF6FF'],
    ['#7CFFB2', '#6C8CFF'],
    ['#FFC56C', '#FF8EC8'],
    ['#6CE3FF', '#6CFFDA'],
  ]
  const index = name.length % gradients.length
  return gradients[index]
}

const renderSvg = (name) => {
  const [start, end] = gradientFor(name)
  const label = initials(name)
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop stop-color="${start}"/>
      <stop offset="1" stop-color="${end}"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="120" fill="url(#grad)"/>
  <circle cx="384" cy="120" r="48" fill="rgba(255,255,255,0.18)"/>
  <circle cx="120" cy="392" r="64" fill="rgba(0,0,0,0.08)"/>
  <text x="50%" y="52%" text-anchor="middle" fill="white" font-size="140" font-family="'Manrope', Arial, sans-serif" font-weight="700" dominant-baseline="middle">
    ${label}
  </text>
</svg>`
}

const uploadSvg = async (svg, storagePath) => {
  const res = await fetch(`${supabaseUrl}/storage/v1/object/${bucketName}/${storagePath}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${serviceRoleKey}`,
      'Content-Type': 'image/svg+xml',
      'x-upsert': 'true',
    },
    body: svg,
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(text)
  }
}

const run = async () => {
  for (const item of data) {
    if (item.logo_url) continue
    const filename = `${slugify(item.name)}.svg`
    const filePath = path.join(outDir, filename)
    const svg = renderSvg(item.name)
    fs.writeFileSync(filePath, svg)
    await uploadSvg(svg, filename)
    item.logo_path = filename
    item.logo_storage_url = `${supabaseUrl}/storage/v1/object/public/${bucketName}/${filename}`
    item.logo_source = 'placeholder'
    console.log(`Placeholder uploaded: ${item.name}`)
  }

  fs.writeFileSync(datasetPath, JSON.stringify(data, null, 2))
  console.log('Placeholders complete')
}

run().catch((err) => {
  console.error(err.message)
  process.exit(1)
})
