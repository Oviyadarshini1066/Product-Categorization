import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { nanoid } from 'nanoid'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataDir = path.resolve(__dirname, '../../data')

async function ensure(file) {
  await fs.mkdir(dataDir, { recursive: true })
  try { await fs.access(file) } catch { await fs.writeFile(file, '[]', 'utf-8') }
}

export function buildCollectionStore(name) {
  const file = path.join(dataDir, `${name}.json`)

  async function readAll() {
    await ensure(file)
    const raw = await fs.readFile(file, 'utf-8')
    return JSON.parse(raw)
  }
  async function writeAll(items) {
    await fs.writeFile(file, JSON.stringify(items, null, 2), 'utf-8')
  }

  return {
    async list(query = {}) {
      const items = await readAll()
      // Basic filters by query fields (exact match) and simple q search in name/title
      let out = items.slice()
      if (query.q) {
        const needle = String(query.q).toLowerCase()
        out = out.filter(i =>
          String(i.name || i.title || '').toLowerCase().includes(needle)
        )
      }
      for (const [k, v] of Object.entries(query)) {
        if (k === 'q') continue
        out = out.filter(i => String(i[k] ?? '').toLowerCase() === String(v).toLowerCase())
      }
      return out
    },
    async create(payload = {}) {
      const items = await readAll()
      const now = new Date().toISOString()
      const id = nanoid(12)
      const item = { id, createdAt: now, ...payload }
      items.push(item)
      await writeAll(items)
      return item
    },
    async update(id, patch = {}) {
      const items = await readAll()
      const idx = items.findIndex(i => i.id === id)
      if (idx === -1) return null
      items[idx] = { ...items[idx], ...patch, updatedAt: new Date().toISOString() }
      await writeAll(items)
      return items[idx]
    },
    async remove(id) {
      const items = await readAll()
      const next = items.filter(i => i.id !== id)
      if (next.length === items.length) return false
      await writeAll(next)
      return true
    }
  }
}
