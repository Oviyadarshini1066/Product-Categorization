import React, { useEffect, useState } from 'react'
import { Prescriptions, Patients, Doctors } from '../api'

export default function PrescriptionsPage() {
  const [items, setItems] = useState([])
  const [patients, setPatients] = useState([])
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ patientId: '', doctorId: '', medicines: [], notes: '', status: 'open' })
  const [med, setMed] = useState({ name: '', morning: 0, afternoon: 0, evening: 0, night: 0 })

  async function load() {
    setLoading(true)
    setError('')
    try {
      const [list, pats, docs] = await Promise.all([
        Prescriptions.list(), Patients.list(), Doctors.list()
      ])
      setItems(list); setPatients(pats); setDoctors(docs)
    } catch { setError('Failed to load prescriptions') }
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  async function create(e) {
    e.preventDefault()
    const payload = { ...form }
    try {
      await Prescriptions.create(payload)
      setForm({ patientId: '', doctorId: '', medicines: [], notes: '', status: 'open' })
      setMed({ name: '', morning: 0, afternoon: 0, evening: 0, night: 0 })
      await load()
    } catch { setError('Failed to create') }
  }
  async function remove(id) { try { await Prescriptions.remove(id); await load() } catch { setError('Failed to delete') } }
  async function patch(id, patch) { try { await Prescriptions.patch(id, patch); await load() } catch { setError('Failed to update') } }

  function addMedicine(e) {
    e.preventDefault()
    if (!med.name) return
    const entry = {
      name: med.name,
      morning: Number(med.morning) || 0,
      afternoon: Number(med.afternoon) || 0,
      evening: Number(med.evening) || 0,
      night: Number(med.night) || 0
    }
    setForm(prev => ({ ...prev, medicines: [...prev.medicines, entry] }))
    setMed({ name: '', morning: 0, afternoon: 0, evening: 0, night: 0 })
  }

  const patientName = (id) => {
    const p = patients.find(x => String(x.id) === String(id))
    return p ? (p.name || p.fullName || `#${id}`) : '(Deleted patient)'
  }
  const visibleItems = items.filter(r => patients.some(p => String(p.id) === String(r.patientId)))

  return (
    <div className="container">
      <header className="header">
        <h1>Prescriptions {loading ? '…' : ''}</h1>
      </header>
      {error && <div className="error" role="alert">{error}</div>}

      <div className="main" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <form className="card" onSubmit={create}>
          <h3>New Prescription</h3>
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
          <div className="section">
            <h4>Medicines & dosage</h4>
            <div className="form-grid">
              <div className="field"><label>Name</label><input value={med.name} onChange={e=>setMed({...med,name:e.target.value})} /></div>
              <div className="field"><label>Morning</label><input type="number" min="0" value={med.morning} onChange={e=>setMed({...med,morning:e.target.value})} /></div>
              <div className="field"><label>Afternoon</label><input type="number" min="0" value={med.afternoon} onChange={e=>setMed({...med,afternoon:e.target.value})} /></div>
              <div className="field"><label>Evening</label><input type="number" min="0" value={med.evening} onChange={e=>setMed({...med,evening:e.target.value})} /></div>
              <div className="field"><label>Night</label><input type="number" min="0" value={med.night} onChange={e=>setMed({...med,night:e.target.value})} /></div>
            </div>
            <div className="actions"><button type="button" className="btn-secondary" onClick={addMedicine}>Add Medicine</button></div>
            {form.medicines.length>0 && (
              <ul className="list" style={{ marginTop: 8 }}>
                {form.medicines.map((m,i)=>(
                  <li key={i} className="list-item">
                    <div className="title"><span>{m.name}</span></div>
                    <div className="meta">
                      <span className="badge">M:{m.morning||0}</span>
                      <span className="badge">A:{m.afternoon||0}</span>
                      <span className="badge">E:{m.evening||0}</span>
                      <span className="badge">N:{m.night||0}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="field"><label>Notes</label><input value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})}/></div>
          <div className="field"><label>Status</label>
            <select value={form.status} onChange={e=>setForm({...form,status:e.target.value})}>
              <option value="open">Open</option>
              <option value="dispensed">Dispensed</option>
            </select>
          </div>
          <div className="actions"><button type="submit">Save</button></div>
        </form>

        <div>
          <h3>Prescription List</h3>
          <ul className="list">
            {visibleItems.map(r => (
              <li key={r.id} className="list-item">
                <div className="title"><span>{patientName(r.patientId)}</span></div>
                <div className="meta" style={{ flexWrap: 'wrap', gap: 6 }}>
                  {(Array.isArray(r.medicines) ? r.medicines : []).map((m, idx) => {
                    if (typeof m === 'string') {
                      return <span key={idx} className="badge">{m}</span>
                    }
                    const ms = [m.morning||0, m.afternoon||0, m.evening||0, m.night||0]
                    return <span key={idx} className="badge">{m.name} — M:{ms[0]} A:{ms[1]} E:{ms[2]} N:{ms[3]}</span>
                  })}
                  <button className="link" onClick={()=>remove(r.id)}>Delete</button>
                </div>
              </li>
            ))}
            {visibleItems.length===0 && <li className="list-item"><div className="title"><span className="muted">No prescriptions</span></div></li>}
          </ul>
        </div>
      </div>
    </div>
  )
}
