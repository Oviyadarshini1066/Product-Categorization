import React, { useEffect, useState } from 'react'
import { Reports, Patients } from '../api'

export default function ReportsPage() {
  const [items, setItems] = useState([])
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ patientId: '', type: 'discharge', summary: '', date: '' })

  async function load() {
    setLoading(true)
    setError('')
    try { setItems(await Reports.list()); setPatients(await Patients.list()) } catch { setError('Failed to load reports') }
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  async function create(e) {
    e.preventDefault()
    try { await Reports.create(form); setForm({ patientId: '', type: 'discharge', summary: '', date: '' }); await load() } catch { setError('Failed to create') }
  }
  async function remove(id) { try { await Reports.remove(id); await load() } catch { setError('Failed to delete') } }
  async function patch(id, patch) { try { await Reports.patch(id, patch); await load() } catch { setError('Failed to update') } }

  const nameById = (list, id) => {
    const x = list.find(i => String(i.id) === String(id))
    return x ? (x.name || x.fullName || x.title || `#${id}`) : '(Deleted patient)'
  }
  const visibleReports = items.filter(r => patients.some(p => String(p.id) === String(r.patientId)))

  return (
    <div className="container">
      <header className="header">
        <h1>Reports {loading ? '…' : ''}</h1>
      </header>
      {error && <div className="error" role="alert">{error}</div>}

      <div className="main" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <form className="card" onSubmit={create}>
          <h3>Add Report</h3>
          <div className="field"><label>Patient</label>
            <select value={form.patientId} onChange={e=>setForm({...form,patientId:e.target.value})} required>
              <option value="">Select</option>
              {patients.map(p=> <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>
          <div className="field"><label>Type</label>
            <select value={form.type} onChange={e=>setForm({...form,type:e.target.value})}>
              <option value="discharge">Discharge</option>
              <option value="lab">Lab</option>
              <option value="radiology">Radiology</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="field"><label>Date</label><input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/></div>
          <div className="field"><label>Summary</label><input value={form.summary} onChange={e=>setForm({...form,summary:e.target.value})}/></div>
          <div className="actions"><button type="submit">Save</button></div>
        </form>

        <div>
          <h3>Report List</h3>
          <ul className="list">
            {visibleReports.map(r => (
              <li key={r.id} className="list-item">
                <div className="title"><span>{r.type}</span></div>
                <div className="meta">
                  {r.patientId && <span className="badge">{nameById(patients, r.patientId)}</span>}
                  {r.date && <span className="badge">{r.date}</span>}
                  {r.summary && <span className="badge">{r.summary}</span>}
                  <button className="link" onClick={()=>patch(r.id,{ summary: prompt('Update summary', r.summary || '') || r.summary })}>Edit</button>
                  <button className="link" onClick={()=>remove(r.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
