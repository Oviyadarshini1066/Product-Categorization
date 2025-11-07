import React, { useEffect, useState } from 'react'
import { Patients } from '../api'

export default function PatientsPage() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', dob: '', gender: '', contact: '', address: '', history: '' })

  async function load() {
    setLoading(true)
    setError('')
    try {
      const pats = await Patients.list()
      setItems(pats)
    } catch { setError('Failed to load patients') }
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  async function create(e) {
    e.preventDefault()
    try { await Patients.create(form); setForm({ name: '', dob: '', gender: '', contact: '', address: '', history: '' }); await load() } catch { setError('Failed to create') }
  }
  async function remove(id) { try { await Patients.remove(id); await load() } catch { setError('Failed to delete') } }
  async function patch(id, patch) { try { await Patients.patch(id, patch); await load() } catch { setError('Failed to update') } }

  // Simplified view: show all registered patients

  return (
    <div className="container">
      <header className="header">
        <h1>Patients {loading ? '…' : ''}</h1>
      </header>
      {error && <div className="error" role="alert">{error}</div>}

      <div className="main" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <form className="card" onSubmit={create}>
          <h3>Patient Registration</h3>
          <div className="field"><label>Name</label><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required/></div>
          <div className="field"><label>DOB</label><input type="date" value={form.dob} onChange={e=>setForm({...form,dob:e.target.value})}/></div>
          <div className="field"><label>Gender</label><input value={form.gender} onChange={e=>setForm({...form,gender:e.target.value})}/></div>
          <div className="field"><label>Contact</label><input value={form.contact} onChange={e=>setForm({...form,contact:e.target.value})}/></div>
          <div className="field"><label>Address</label><input value={form.address} onChange={e=>setForm({...form,address:e.target.value})}/></div>
          <div className="field"><label>History</label><input value={form.history} onChange={e=>setForm({...form,history:e.target.value})}/></div>
          <div className="actions"><button type="submit">Save</button></div>
        </form>

        <div>
          <div className="card" style={{ marginBottom: 12 }}>
            <h3 className="page-title">Patients</h3>
          </div>

          <ul className="list">
            {items.map(p => (
              <li key={p.id} className="list-item">
                <div className="title"><span>{p.name}</span></div>
                <div className="meta">
                  {p.dob && <span className="badge">DOB {p.dob}</span>}
                  {p.gender && <span className="badge">{p.gender}</span>}
                  {p.history && <span className="badge">{p.history}</span>}
                  <button className="link" onClick={()=>patch(p.id,{ history: prompt('Update history', p.history || '') || p.history })}>Edit</button>
                  <button className="link" onClick={()=>remove(p.id)}>Delete</button>
                </div>
              </li>
            ))}
            {items.length===0 && (
              <li className="list-item"><div className="title"><span className="muted">No records</span></div></li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
