import React, { useEffect, useState } from 'react'
import { Inventory } from '../api'

export default function PharmacyPage() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', sku: '', stock: '', unit: 'pcs', reorderLevel: '' })

  async function load() {
    setLoading(true)
    setError('')
    try { setItems(await Inventory.list()) } catch { setError('Failed to load inventory') }
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  async function create(e) {
    e.preventDefault()
    try { await Inventory.create(form); setForm({ name: '', sku: '', stock: '', unit: 'pcs', reorderLevel: '' }); await load() } catch { setError('Failed to create') }
  }
  async function remove(id) { try { await Inventory.remove(id); await load() } catch { setError('Failed to delete') } }
  async function patch(id, patch) { try { await Inventory.patch(id, patch); await load() } catch { setError('Failed to update') } }

  return (
    <div className="container">
      <header className="header">
        <h1>Pharmacy {loading ? '…' : ''}</h1>
      </header>
      {error && <div className="error" role="alert">{error}</div>}

      <div className="main" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <form className="card" onSubmit={create}>
          <h3>Add Item</h3>
          <div className="field"><label>Name</label><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required/></div>
          <div className="field"><label>SKU</label><input value={form.sku} onChange={e=>setForm({...form,sku:e.target.value})}/></div>
          <div className="field"><label>Stock</label><input value={form.stock} onChange={e=>setForm({...form,stock:e.target.value})}/></div>
          <div className="field"><label>Unit</label><input value={form.unit} onChange={e=>setForm({...form,unit:e.target.value})}/></div>
          <div className="field"><label>Reorder Level</label><input value={form.reorderLevel} onChange={e=>setForm({...form,reorderLevel:e.target.value})}/></div>
          <div className="actions"><button type="submit">Save</button></div>
        </form>

        <div>
          <h3>Inventory</h3>
          <ul className="list">
            {items.map(it => (
              <li key={it.id} className="list-item">
                <div className="title"><span>{it.name}</span></div>
                <div className="meta">
                  {it.sku && <span className="badge">{it.sku}</span>}
                  {it.stock && <span className="badge">Stock {it.stock}{it.unit ? ' '+it.unit : ''}</span>}
                  {it.reorderLevel && <span className="badge">Reorder {it.reorderLevel}</span>}
                  <button className="link" onClick={()=>patch(it.id,{ stock: prompt('Update stock', it.stock || '') || it.stock })}>Edit</button>
                  <button className="link" onClick={()=>remove(it.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
