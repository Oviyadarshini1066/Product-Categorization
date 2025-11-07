import React, { useEffect, useState } from 'react'
import { Appointments, Patients, Doctors } from '../api'

export default function AppointmentsPage() {
  const [items, setItems] = useState([])
  const [patients, setPatients] = useState([])
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ patientId: '', doctorId: '', date: '', time: '', reason: '' })

  async function load() {
    setLoading(true)
    setError('')
    try {
      setItems(await Appointments.list())
      setPatients(await Patients.list())
      setDoctors(await Doctors.list())
    } catch {
      setError('Failed to load appointments')
    }
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  async function create(e) {
    e.preventDefault()
    try { await Appointments.create(form); setForm({ patientId: '', doctorId: '', date: '', time: '', reason: '' }); await load() } catch { setError('Failed to create') }
  }
  async function remove(id) { try { await Appointments.remove(id); await load() } catch { setError('Failed to delete') } }
  async function patch(id, patch) { try { await Appointments.patch(id, patch); await load() } catch { setError('Failed to update') } }

  // Only upcoming appointments: date/time >= now
  const now = new Date()
  const toDateTime = (a) => {
    const d = a.date || a.datetime
    if (!d) return null
    // combine date + time if provided
    const iso = a.time ? `${d}T${a.time}` : d
    const dt = new Date(iso)
    return isNaN(dt.getTime()) ? null : dt
  }
  const upcoming = items.filter(a => {
    const dt = toDateTime(a)
    return !dt || dt >= now
  })

  return (
    <div className="container">
      <header className="header">
        <h1>Appointments {loading ? '…' : ''}</h1>
      </header>
      {error && <div className="error" role="alert">{error}</div>}

      <div className="main" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <form className="card" onSubmit={create}>
          <h3>Book Appointment</h3>
          <div className="field"><label>Patient</label>
            <select value={form.patientId} onChange={e=>setForm({...form,patientId:e.target.value})} required>
              <option value="">Select</option>
              {patients.map(p=> <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>
          <div className="field"><label>Doctor</label>
            <select value={form.doctorId} onChange={e=>setForm({...form,doctorId:e.target.value})} required>
              <option value="">Select</option>
              {doctors.map(d=> <option key={d.id} value={d.id}>{d.name} ({d.specialty})</option>)}
            </select>
          </div>
          <div className="field"><label>Date</label><input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} required/></div>
          <div className="field"><label>Time</label><input type="time" value={form.time} onChange={e=>setForm({...form,time:e.target.value})} required/></div>
          <div className="field"><label>Reason</label><input value={form.reason} onChange={e=>setForm({...form,reason:e.target.value})}/></div>
          <div className="actions"><button type="submit">Save</button></div>
        </form>

        <div>
          <h3>Upcoming Appointments</h3>
          <ul className="list">
            {upcoming.map(a => (
              <li key={a.id} className="list-item">
                <div className="title"><span>{a.date} {a.time}</span></div>
                <div className="meta">
                  {a.patientId && <span className="badge">Patient #{a.patientId}</span>}
                  {a.doctorId && <span className="badge">Doctor #{a.doctorId}</span>}
                  {a.reason && <span className="badge">{a.reason}</span>}
                  <button className="link" onClick={()=>patch(a.id,{ reason: prompt('Update reason', a.reason || '') || a.reason })}>Edit</button>
                  <button className="link" onClick={()=>remove(a.id)}>Delete</button>
                </div>
              </li>
            ))}
            {upcoming.length === 0 && (
              <li className="list-item"><div className="title"><span className="muted">No upcoming appointments</span></div></li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
