import fs from 'node:fs'
import path from 'node:path'

const inputPath = process.argv[2]
if (!inputPath) {
  console.error('Usage: node scripts/resolve_logos.js <data.json>')
  process.exit(1)
}

const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'))

const pickLogo = (html) => {
  const candidates = []
  const linkRegex = /<link[^>]+rel=["']([^"']+)["'][^>]*>/gi
  let match
  while ((match = linkRegex.exec(html))) {
    const rel = match[1]
    const tag = match[0]
    const hrefMatch = tag.match(/href=["']([^"']+)["']/i)
    if (!hrefMatch) continue
    const href = hrefMatch[1]
    if (rel.includes('apple-touch-icon')) candidates.push({ score: 3, href })
    if (rel.includes('icon')) candidates.push({ score: 2, href })
  }
  const ogMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i)
  if (ogMatch) candidates.push({ score: 1, href: ogMatch[1] })
  candidates.sort((a, b) => b.score - a.score)
  return candidates[0]?.href
}

const resolveUrl = (base, href) => {
  try {
    return new URL(href, base).toString()
  } catch {
    return null
  }
}

const run = async () => {
  for (const item of data) {
    if (item.logo_url) continue
    try {
      const res = await fetch(item.website, { redirect: 'follow' })
      const html = await res.text()
      const logoHref = pickLogo(html)
      if (!logoHref) {
        item.logo_url = null
        item.logo_source = 'missing'
        continue
      }
      const resolved = resolveUrl(item.website, logoHref)
      item.logo_url = resolved
      item.logo_source = logoHref.includes('apple-touch-icon') ? 'apple-touch-icon' : 'site-icon'
    } catch (err) {
      item.logo_url = null
      item.logo_source = 'missing'
    }
  }

  fs.writeFileSync(inputPath, JSON.stringify(data, null, 2))
  console.log('Logo URLs resolved')
}

run()
