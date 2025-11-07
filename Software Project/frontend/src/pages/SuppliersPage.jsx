import React, { useEffect, useState } from 'react'
import { Suppliers } from '../api'

export default function SuppliersPage() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', contact: '', email: '', address: '' })

  async function load() {
    setLoading(true)
    setError('')
    try { setItems(await Suppliers.list()) } catch { setError('Failed to load suppliers') }
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  async function create(e) {
    e.preventDefault()
    try { await Suppliers.create(form); setForm({ name: '', contact: '', email: '', address: '' }); await load() } catch { setError('Failed to create') }
  }
  async function remove(id) { try { await Suppliers.remove(id); await load() } catch { setError('Failed to delete') } }
  async function patch(id, patch) { try { await Suppliers.patch(id, patch); await load() } catch { setError('Failed to update') } }

  return (
    <div className="container">
      <header className="header">
        <h1>Suppliers {loading ? '…' : ''}</h1>
      </header>
      {error && <div className="error" role="alert">{error}</div>}

      <div className="main" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <form className="card" onSubmit={create}>
          <h3>Add Supplier</h3>
          <div className="field"><label>Name</label><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required/></div>
          <div className="field"><label>Contact</label><input value={form.contact} onChange={e=>setForm({...form,contact:e.target.value})}/></div>
          <div className="field"><label>Email</label><input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></div>
          <div className="field"><label>Address</label><input value={form.address} onChange={e=>setForm({...form,address:e.target.value})}/></div>
          <div className="actions"><button type="submit">Save</button></div>
        </form>

        <div>
          <h3>Supplier Directory</h3>
          <ul className="list">
            {items.map(s => (
              <li key={s.id} className="list-item">
                <div className="title"><span>{s.name}</span></div>
                <div className="meta">
                  {s.contact && <span className="badge">{s.contact}</span>}
                  {s.email && <span className="badge">{s.email}</span>}
                  <button className="link" onClick={()=>patch(s.id,{ contact: prompt('Update contact', s.contact || '') || s.contact })}>Edit</button>
                  <button className="link" onClick={()=>remove(s.id)}>Delete</button>
                </div>
              </li>
            ))}
            {items.length===0 && <li className="list-item"><div className="title"><span className="muted">No suppliers</span></div></li>}
          </ul>
        </div>
      </div>
    </div>
  )
}
