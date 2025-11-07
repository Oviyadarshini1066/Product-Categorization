import React, { useEffect, useState } from 'react'
import { Doctors, Appointments, Patients } from '../api'

export default function DoctorsPage() {
  const [items, setItems] = useState([])
  const [appointments, setAppointments] = useState([])
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', specialty: '', contact: '', licenseNo: '' })
  const [selected, setSelected] = useState('')

  async function load() {
    setLoading(true)
    setError('')
    try {
      const [docs, apts, pats] = await Promise.all([Doctors.list(), Appointments.list(), Patients.list()])
      setItems(docs)
      setAppointments(apts)
      setPatients(pats)
      if (!selected && docs.length) setSelected(String(docs[0].id))
    } catch { setError('Failed to load doctors') }
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  async function create(e) {
    e.preventDefault()
    try { await Doctors.create(form); setForm({ name: '', specialty: '', contact: '', licenseNo: '' }); await load() } catch { setError('Failed to create') }
  }
  async function remove(id) { try { await Doctors.remove(id); await load() } catch { setError('Failed to delete') } }
  async function patch(id, patch) { try { await Doctors.patch(id, patch); await load() } catch { setError('Failed to update') } }


  const nameById = (list, id) => {
    const x = list.find(i => String(i.id) === String(id));
    return x ? (x.name || x.fullName || x.title || `#${id}`) : `#${id}`
  }

  const forDoctor = appointments.filter(a => String(a.doctorId) === String(selected))
  const now = new Date()
  const toDate = (raw) => (raw ? new Date(raw) : null)
  const upcoming = forDoctor.filter(a => {
    const d = toDate(a.date || a.datetime)
    return !d || d >= now
  })
  const completed = forDoctor.filter(a => {
    const d = toDate(a.date || a.datetime)
    return !!d && d < now
  })

  return (
    <div className="container">
      <header className="header">
        <h1>Doctors {loading ? '…' : ''}</h1>
      </header>
      {error && <div className="error" role="alert">{error}</div>}

      <div className="main" style={{ gridTemplateColumns: '1fr' }}>
        <div>
          <div className="card" style={{ marginBottom: 12 }}>
            <h3 className="page-title">Doctor Directory</h3>
            <div className="field">
              <label>View schedule for</label>
              <select value={selected} onChange={e=>setSelected(e.target.value)}>
                {items.map(d => (
                  <option key={d.id} value={d.id}>{d.name} {d.specialty ? `— ${d.specialty}` : ''}</option>
                ))}
              </select>
            </div>

            {/* Scheduling removed intentionally; use Booking page for creating appointments */}
          </div>

          <div className="main" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="card">
              <div className="header"><h3 className="page-title">Upcoming</h3></div>
              <ul className="list">
                {upcoming.length===0 && <li className="list-item"><div className="title"><span className="muted">No upcoming</span></div></li>}
                {upcoming.map(a => (
                  <li key={a.id} className="list-item">
                    <div className="title"><span>{nameById(patients, a.patientId)}</span></div>
                    <div className="meta">
                      {a.date && <span className="badge">{a.date}</span>}
                      <span className="badge">Upcoming</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <div className="header"><h3 className="page-title">Completed</h3></div>
              <ul className="list">
                {completed.length===0 && <li className="list-item"><div className="title"><span className="muted">No completed</span></div></li>}
                {completed.map(a => (
                  <li key={a.id} className="list-item">
                    <div className="title"><span>{nameById(patients, a.patientId)}</span></div>
                    <div className="meta">
                      {a.date && <span className="badge">{a.date}</span>}
                      <span className="badge">Completed</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
