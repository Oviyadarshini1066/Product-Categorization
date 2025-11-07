import React, { useEffect, useState } from 'react'
import { Labs, Patients, Doctors } from '../api'

export default function LabOrdersPage() {
  const [items, setItems] = useState([])
  const [patients, setPatients] = useState([])
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ patientId: '', doctorId: '', test: '', sampleId: '', status: 'ordered', result: '' })

  async function load() {
    setLoading(true)
    setError('')
    try {
      const [list, pats, docs] = await Promise.all([
        Labs.list(), Patients.list(), Doctors.list()
      ])
      setItems(list); setPatients(pats); setDoctors(docs)
    } catch { setError('Failed to load lab orders') }
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  async function create(e) {
    e.preventDefault()
    try { await Labs.create(form); setForm({ patientId: '', doctorId: '', test: '', sampleId: '', status: 'ordered', result: '' }); await load() } catch { setError('Failed to create') }
  }
  async function remove(id) { try { await Labs.remove(id); await load() } catch { setError('Failed to delete') } }
  async function patch(id, patch) { try { await Labs.patch(id, patch); await load() } catch { setError('Failed to update') } }

  const patientName = (id) => {
    const p = patients.find(x => String(x.id) === String(id))
    return p ? (p.name || p.fullName || `#${id}`) : '(Deleted patient)'
  }
  const doctorName = (id) => {
    const d = doctors.find(x => String(x.id) === String(id))
    return d ? (d.name || d.fullName || `#${id}`) : '(Deleted doctor)'
  }
  const visibleItems = items.filter(o =>
    patients.some(p => String(p.id) === String(o.patientId)) &&
    doctors.some(d => String(d.id) === String(o.doctorId))
  )

  return (
    <div className="container">
      <header className="header">
        <h1>Lab Orders {loading ? '…' : ''}</h1>
      </header>
      {error && <div className="error" role="alert">{error}</div>}

      <div className="main" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <form className="card" onSubmit={create}>
          <h3>New Lab Order</h3>
          <div className="field"><label>Patient</label>
            <select value={form.patientId} onChange={e=>setForm({...form,patientId:e.target.value})} required>
              <option value="">Select</option>
              {patients.map(p=> <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>
          <div className="field"><label>Doctor</label>
            <select value={form.doctorId} onChange={e=>setForm({...form,doctorId:e.target.value})} required>
              <option value="">Select</option>
              {doctors.map(d=> <option key={d.id} value={d.id}>{d.name}</option>)}
            </select>
          </div>
          <div className="field"><label>Test</label><input value={form.test} onChange={e=>setForm({...form,test:e.target.value})} required/></div>
          <div className="field"><label>Sample ID</label><input value={form.sampleId} onChange={e=>setForm({...form,sampleId:e.target.value})}/></div>
          <div className="field"><label>Status</label>
            <select value={form.status} onChange={e=>setForm({...form,status:e.target.value})}>
              <option value="ordered">Ordered</option>
              <option value="collected">Collected</option>
              <option value="reported">Reported</option>
            </select>
          </div>
          <div className="field"><label>Result</label><input value={form.result} onChange={e=>setForm({...form,result:e.target.value})} placeholder="Attach summary or link"/></div>
          <div className="actions"><button type="submit">Save</button></div>
        </form>

        <div>
          <h3>Orders</h3>
          <ul className="list">
            {visibleItems.map(o => (
              <li key={o.id} className="list-item">
                <div className="title"><span>{o.test}</span></div>
                <div className="meta">
                  {o.patientId && <span className="badge">{patientName(o.patientId)}</span>}
                  {o.doctorId && <span className="badge">{doctorName(o.doctorId)}</span>}
                  {o.sampleId && <span className="badge">Sample {o.sampleId}</span>}
                  <span className="badge">{o.status}</span>
                  <button className="link" onClick={()=>patch(o.id,{ status: o.status==='ordered'?'collected':(o.status==='collected'?'reported':'ordered') })}>Next Status</button>
                  <button className="link" onClick={()=>remove(o.id)}>Delete</button>
                </div>
              </li>
            ))}
            {visibleItems.length===0 && <li className="list-item"><div className="title"><span className="muted">No orders</span></div></li>}
          </ul>
        </div>
      </div>
    </div>
  )
}
