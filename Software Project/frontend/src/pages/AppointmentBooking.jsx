import React, { useEffect, useMemo, useState } from 'react'
import { Appointments, Patients, Doctors } from '../api'

export default function AppointmentBooking() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [doctors, setDoctors] = useState([])
  const [patients, setPatients] = useState([])
  const [appts, setAppts] = useState([])

  // Booking form
  const [doctorId, setDoctorId] = useState('')
  const [patientId, setPatientId] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [reason, setReason] = useState('')

  // Availability editor (per selected doctor)
  const [avail, setAvail] = useState({ start: '09:00', end: '17:00', slot: 60 })

  async function load() {
    setLoading(true)
    setError('')
    try {
      const [docs, pats, apts] = await Promise.all([
        Doctors.list(), Patients.list(), Appointments.list()
      ])
      setDoctors(docs); setPatients(pats); setAppts(apts)
      if (!doctorId && docs.length) setDoctorId(String(docs[0].id))
    } catch { setError('Failed to load booking data') }
    setLoading(false)
  }
  useEffect(()=>{ load() }, [])

  // derive availability from doctor record or editor defaults
  const doc = doctors.find(d => String(d.id)===String(doctorId)) || {}
  const startTime = doc.startTime || avail.start
  const endTime = doc.endTime || avail.end
  const slotMin = Number(doc.slotMinutes || avail.slot)

  // time slot helpers
  const pad = n => String(n).padStart(2,'0')
  const stepTimes = (start, end, stepMin) => {
    const out = []
    let h = Number(start.split(':')[0]); let m = Number(start.split(':')[1])
    const [eh, em] = end.split(':').map(Number)
    const endMin = eh*60+em
    while ((h*60+m) <= endMin) { out.push(`${pad(h)}:${pad(m)}`); m += stepMin; while(m>=60){ m-=60; h+=1 } }
    return out
  }
  const slots = useMemo(()=> stepTimes(startTime, endTime, slotMin), [startTime, endTime, slotMin])

  // Ignore orphaned appointments where patient was deleted
  const validAppts = useMemo(() => appts.filter(a =>
    patients.some(p => String(p.id) === String(a.patientId))
  ), [appts, patients])

  // taken slots for selected date/doctor
  const taken = useMemo(() => new Set(validAppts
    .filter(a => String(a.doctorId)===String(doctorId) && a.date===date)
    .map(a => a.time)), [validAppts, doctorId, date])

  function isConflict(dId, d, t, ignoreId) {
    return validAppts.some(a => String(a.doctorId)===String(dId) && a.date===d && a.time===t && a.id!==ignoreId)
  }

  async function book() {
    if (!doctorId || !patientId || !date || !time) { setError('Select doctor, patient, date and time'); return }
    if (isConflict(doctorId, date, time)) { setError('Selected slot already booked'); return }
    try {
      await Appointments.create({ doctorId, patientId, date, time, reason, status: 'untreated' })
      setReason(''); setTime(''); await load()
    } catch { setError('Failed to book appointment') }
  }

  async function cancel(id, apptDate, apptTime) {
    // Only allow cancel before scheduled time
    const now = new Date()
    const when = new Date(`${apptDate}T${apptTime}`)
    if (when <= now) { setError('Cannot cancel past appointments'); return }
    try { await Appointments.remove(id); await load() } catch { setError('Failed to cancel') }
  }

  async function saveAvailability() {
    if (!doctorId) return
    try {
      await Doctors.patch(doctorId, { startTime: avail.start, endTime: avail.end, slotMinutes: avail.slot })
      await load()
    } catch { setError('Failed to save availability') }
  }

  const toDate = (raw) => (raw ? new Date(raw) : null)
  const now = new Date()
  const mine = validAppts.filter(a => String(a.doctorId)===String(doctorId))
  const upcoming = mine.filter(a => {
    const d = toDate(a.date); if (!d) return true
    return d >= new Date(now.getFullYear(), now.getMonth(), now.getDate())
  }).sort((a,b)=> (a.date+a.time).localeCompare(b.date+b.time))
  const past = mine.filter(a => {
    const d = toDate(a.date); if (!d) return false
    return d < new Date(now.getFullYear(), now.getMonth(), now.getDate())
  }).sort((a,b)=> (a.date+a.time).localeCompare(b.date+b.time)).reverse()

  const nameById = (list, id) => {
    const x = list.find(i => String(i.id)===String(id));
    return x ? (x.name || x.fullName || `#${id}`) : '(Deleted patient)'
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Appointment Booking {loading?'…':''}</h1>
      </header>
      {error && <div className="error" role="alert">{error}</div>}

      <div className="main" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <div className="card">
          <h3>Book Appointment</h3>
          <div className="field"><label>Doctor</label>
            <select value={doctorId} onChange={e=>setDoctorId(e.target.value)}>
              {doctors.map(d=> <option key={d.id} value={d.id}>{d.name} {d.specialty?`— ${d.specialty}`:''}</option>)}
            </select>
          </div>
          <div className="field"><label>Patient</label>
            <select value={patientId} onChange={e=>setPatientId(e.target.value)}>
              <option value="">Select</option>
              {patients.map(p=> <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          </div>
          <div className="field"><label>Date</label><input type="date" value={date} onChange={e=>{ setDate(e.target.value); setTime('') }} /></div>
          <div className="field"><label>Time</label>
            <select value={time} onChange={e=>setTime(e.target.value)} disabled={!date}>
              <option value="">Select</option>
              {slots.map(t => (
                <option key={t} value={t} disabled={taken.has(t)}>{t} {taken.has(t)?'(Booked)':''}</option>
              ))}
            </select>
          </div>
          <div className="field"><label>Reason</label><input value={reason} onChange={e=>setReason(e.target.value)} placeholder="Optional"/></div>
          <div className="actions"><button type="button" onClick={book}>Book</button></div>
        </div>

        <div>
          <div className="card" style={{ marginBottom: 12 }}>
            <h3>Doctor Schedule Management</h3>
            <div className="form-grid">
              <div className="field"><label>Start</label><input type="time" value={avail.start} onChange={e=>setAvail({...avail,start:e.target.value})} /></div>
              <div className="field"><label>End</label><input type="time" value={avail.end} onChange={e=>setAvail({...avail,end:e.target.value})} /></div>
              <div className="field"><label>Slot (min)</label><input type="number" min="10" step="5" value={avail.slot} onChange={e=>setAvail({...avail,slot:Number(e.target.value)||30})} /></div>
            </div>
            <div className="actions"><button type="button" onClick={saveAvailability}>Save Availability</button></div>
          </div>

          <div className="main" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="card">
              <div className="header"><h3 className="page-title">Upcoming Appointments</h3></div>
              <ul className="list">
                {upcoming.length===0 && <li className="list-item"><div className="title"><span className="muted">No upcoming</span></div></li>}
                {upcoming.map(a => (
                  <li key={a.id} className="list-item">
                    <div className="title"><span>{a.date} {a.time}</span></div>
                    <div className="meta">
                      <span className="badge">{nameById(patients, a.patientId)}</span>
                      <button className="btn-danger" onClick={()=>cancel(a.id, a.date, a.time)}>Cancel</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <div className="header"><h3 className="page-title">Past Appointments</h3></div>
              <ul className="list">
                {past.length===0 && <li className="list-item"><div className="title"><span className="muted">No past items</span></div></li>}
                {past.map(a => (
                  <li key={a.id} className="list-item">
                    <div className="title"><span>{a.date} {a.time}</span></div>
                    <div className="meta">
                      <span className="badge">{nameById(patients, a.patientId)}</span>
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
