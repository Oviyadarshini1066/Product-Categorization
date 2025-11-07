import React, { useEffect, useState } from 'react'
import { Staff, Doctors } from '../api'

export default function AdministrationPage() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', role: '', department: '', contact: '' })
  const [doctors, setDoctors] = useState([])
  const [doctorForm, setDoctorForm] = useState({ name: '', specialty: '', contact: '', licenseNo: '' })

  async function load() {
    setLoading(true)
    setError('')
    try {
      const [staff, docs] = await Promise.all([
        Staff.list(), Doctors.list()
      ])
      setItems(staff); setDoctors(docs)
    } catch { setError('Failed to load admin data') }
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  async function create(e) {
    e.preventDefault()
    try { await Staff.create(form); setForm({ name: '', role: '', department: '', contact: '' }); await load() } catch { setError('Failed to create') }
  }
  async function remove(id) { try { await Staff.remove(id); await load() } catch { setError('Failed to delete') } }
  async function patch(id, patch) { try { await Staff.patch(id, patch); await load() } catch { setError('Failed to update') } }

  // Doctor management
  async function createDoctor(e) {
    e.preventDefault()
    try { await Doctors.create(doctorForm); setDoctorForm({ name: '', specialty: '', contact: '', licenseNo: '' }); await load() } catch { setError('Failed to add doctor') }
  }
  async function removeDoctor(id) { try { await Doctors.remove(id); await load() } catch { setError('Failed to delete doctor') } }
  async function patchDoctor(id, patch) { try { await Doctors.patch(id, patch); await load() } catch { setError('Failed to update doctor') } }


  return (
    <div className="container">
      <header className="header">
        <h1>Administration {loading ? '…' : ''}</h1>
      </header>
      {error && <div className="error" role="alert">{error}</div>}

      <div className="main" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <form className="card" onSubmit={createDoctor}>
          <h3>Doctor Management</h3>
          <div className="field"><label>Name</label><input value={doctorForm.name} onChange={e=>setDoctorForm({...doctorForm,name:e.target.value})} required/></div>
          <div className="field"><label>Specialty</label><input value={doctorForm.specialty} onChange={e=>setDoctorForm({...doctorForm,specialty:e.target.value})}/></div>
          <div className="field"><label>Contact</label><input value={doctorForm.contact} onChange={e=>setDoctorForm({...doctorForm,contact:e.target.value})}/></div>
          <div className="field"><label>License No</label><input value={doctorForm.licenseNo} onChange={e=>setDoctorForm({...doctorForm,licenseNo:e.target.value})}/></div>
          <div className="actions"><button type="submit">Add Doctor</button></div>
        </form>

        <div>
          <h3>Doctors</h3>
          <ul className="list">
            {doctors.map(d => (
              <li key={d.id} className="list-item">
                <div className="title"><span>{d.name}</span></div>
                <div className="meta">
                  {d.specialty && <span className="badge">{d.specialty}</span>}
                  {d.contact && <span className="badge">{d.contact}</span>}
                  <button className="link" onClick={()=>patchDoctor(d.id,{ specialty: prompt('Update specialty', d.specialty||'') ?? d.specialty })}>Edit</button>
                  <button className="link" onClick={()=>removeDoctor(d.id)}>Delete</button>
                </div>
              </li>
            ))}
            {doctors.length===0 && <li className="list-item"><div className="title"><span className="muted">No doctors</span></div></li>}
          </ul>
        </div>
      </div>

      <div className="main" style={{ gridTemplateColumns: '1fr 2fr', marginTop: 16 }}>
        <form className="card" onSubmit={create}>
          <h3>Add Staff</h3>
          <div className="field"><label>Name</label><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required/></div>
          <div className="field"><label>Role</label><input value={form.role} onChange={e=>setForm({...form,role:e.target.value})}/></div>
          <div className="field"><label>Department</label><input value={form.department} onChange={e=>setForm({...form,department:e.target.value})}/></div>
          <div className="field"><label>Contact</label><input value={form.contact} onChange={e=>setForm({...form,contact:e.target.value})}/></div>
          <div className="actions"><button type="submit">Save</button></div>
        </form>

        <div>
          <h3>Staff List</h3>
          <ul className="list">
            {items.map(s => (
              <li key={s.id} className="list-item">
                <div className="title"><span>{s.name}</span></div>
                <div className="meta">
                  {s.role && <span className="badge">{s.role}</span>}
                  {s.department && <span className="badge">{s.department}</span>}
                  {s.contact && <span className="badge">{s.contact}</span>}
                  <button className="link" onClick={()=>patch(s.id,{ role: prompt('Update role', s.role || '') || s.role })}>Edit</button>
                  <button className="link" onClick={()=>remove(s.id)}>Delete</button>
                </div>
              </li>
            ))}
            {items.length===0 && <li className="list-item"><div className="title"><span className="muted">No staff</span></div></li>}
          </ul>
        </div>
      </div>

      {/* Manage Appointments removed. Use Booking page for scheduling and calendar view. */}
    </div>
  )
}
