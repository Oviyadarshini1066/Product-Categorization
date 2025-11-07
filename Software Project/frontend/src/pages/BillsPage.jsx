import React, { useEffect, useState } from 'react'
import { Bills, Patients } from '../api'

export default function BillsPage() {
  const [items, setItems] = useState([])
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ patientId: '', items: '', total: '', status: 'unpaid' })

  async function load() {
    setLoading(true)
    setError('')
    try { setItems(await Bills.list()); setPatients(await Patients.list()) } catch { setError('Failed to load bills') }
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  async function create(e) {
    e.preventDefault()
    const payload = { ...form, items: form.items ? form.items.split(',').map(s=>({ desc: s.trim() })) : [] }
    try { await Bills.create(payload); setForm({ patientId: '', items: '', total: '', status: 'unpaid' }); await load() } catch { setError('Failed to create') }
  }
  async function remove(id) { try { await Bills.remove(id); await load() } catch { setError('Failed to delete') } }
  async function patch(id, patch) { try { await Bills.patch(id, patch); await load() } catch { setError('Failed to update') } }

  return (
    <div className="container">
      <header className="header">
        <h1>Billing {loading ? '…' : ''}</h1>
      </header>
      {error && <div className="error" role="alert">{error}</div>}

      <div className="main" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <form className="card" onSubmit={create}>
          <h3>Create Bill</h3>
          <div className="field"><label>Patient</label>
            <select value={form.patientId} onChange={e=>setForm({...form,patientId:e.target.value})} required>
              <option value="">Select</option>
              {patients.map(p=> <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>
          <div className="field"><label>Items (comma separated)</label><input value={form.items} onChange={e=>setForm({...form,items:e.target.value})}/></div>
          <div className="field"><label>Total</label><input value={form.total} onChange={e=>setForm({...form,total:e.target.value})}/></div>
          <div className="field"><label>Status</label>
            <select value={form.status} onChange={e=>setForm({...form,status:e.target.value})}>
              <option value="unpaid">Unpaid</option>
              <option value="paid">Paid</option>
            </select>
          </div>
          <div className="actions"><button type="submit">Save</button></div>
        </form>

        <div>
          <h3>Invoices</h3>
          <ul className="list">
            {items.map(b => (
              <li key={b.id} className="list-item">
                <div className="title"><span>Bill #{b.id.slice(-6)}</span></div>
                <div className="meta">
                  {b.patientId && <span className="badge">Patient #{b.patientId}</span>}
                  {b.total && <span className="badge">Total {b.total}</span>}
                  <span className="badge">{b.status}</span>
                  <button className="link" onClick={()=>patch(b.id,{ status: b.status === 'paid' ? 'unpaid' : 'paid' })}>Toggle Paid</button>
                  <button className="link" onClick={()=>remove(b.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
