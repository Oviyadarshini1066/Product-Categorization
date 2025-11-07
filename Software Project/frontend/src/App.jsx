import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom'
import PatientsPage from './pages/PatientsPage'
import DoctorsPage from './pages/DoctorsPage'
import AppointmentsPage from './pages/AppointmentsPage'
import BillsPage from './pages/BillsPage'
import ReportsPage from './pages/ReportsPage'
import PharmacyPage from './pages/PharmacyPage'
import AdministrationPage from './pages/AdministrationPage'
import { Patients, Doctors, Appointments, Bills } from './api'
import AdmissionsPage from './pages/AdmissionsPage'
import PrescriptionsPage from './pages/PrescriptionsPage'
import SuppliersPage from './pages/SuppliersPage'
import LabOrdersPage from './pages/LabOrdersPage'
import AppointmentBooking from './pages/AppointmentBooking'

export default function App() {
  return (
    <Router>
      <div className="layout no-sidebar">
        <header className="topbar">
          <div className="brand">CityCare Hospital</div>
        </header>
        <section className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<PatientsPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/billing" element={<BillsPage />} />
            <Route path="/pharmacy" element={<PharmacyPage />} />
            <Route path="/administration" element={<AdministrationPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/prescriptions" element={<PrescriptionsPage />} />
            <Route path="/suppliers" element={<SuppliersPage />} />
            <Route path="/lab-orders" element={<LabOrdersPage />} />
            <Route path="/appointment-booking" element={<AppointmentBooking />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </section>
      </div>
    </Router>
  )
}

function ActivePatientsPanel() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [appointments, setAppointments] = useState([])
  const [patients, setPatients] = useState([])

  useEffect(() => {
    let mounted = true
    async function load() {
      try {
        setLoading(true)
        const [apts, pats] = await Promise.all([
          Appointments.list(),
          Patients.list()
        ])
        if (!mounted) return
        setAppointments(apts)
        setPatients(pats)
      } catch (e) {
        if (!mounted) return
        setError('Failed to load patient activity')
      } finally {
        if (mounted) setLoading(false)
      }
    }
    load()
    return () => { mounted = false }
  }, [])

  const byId = new Map(patients.map(p => [String(p.id), p]))
  const activeSet = new Set()
  const inactiveSet = new Set()
  for (const a of appointments) {
    const pid = String(a.patientId)
    if (!pid) continue
    if ((a.status || '').toLowerCase() === 'treated') inactiveSet.add(pid)
    else activeSet.add(pid)
  }
  // If a patient appears as both untreated and treated, consider them active if any untreated exists
  for (const pid of inactiveSet) {
    if (activeSet.has(pid)) inactiveSet.delete(pid)
  }

  const active = [...activeSet].map(id => byId.get(id)).filter(Boolean)
  const inactive = [...inactiveSet].map(id => byId.get(id)).filter(Boolean)

  return (
    <div className="card" style={{ marginTop: 16 }}>
      <div className="header">
        <h2>Active Patients</h2>
        <div className="muted">Untreated: {active.length} · Treated: {inactive.length}</div>
      </div>
      {error && <div className="error">{error}</div>}
      {loading ? (
        <div className="muted">Loading…</div>
      ) : (
        <div className="main">
          <div className="left">
            <div className="card">
              <div className="header"><h3 className="page-title">Untreated</h3></div>
              <ul className="list">
                {active.length === 0 && <li className="muted">No active patients</li>}
                {active.map(p => (
                  <li key={p.id} className="list-item">
                    <div className="title">
                      <span className="badge" title="Active">Active</span>
                      <span>{p.name || p.fullName || `Patient #${p.id}`}</span>
                    </div>
                    <Link className="btn-ghost" to="/patients">Open</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="header"><h3 className="page-title">Treated</h3></div>
              <ul className="list">
                {inactive.length === 0 && <li className="muted">No recently treated patients</li>}
                {inactive.map(p => (
                  <li key={p.id} className="list-item">
                    <div className="title">
                      <span className="badge" title="Inactive">Inactive</span>
                      <span>{p.name || p.fullName || `Patient #${p.id}`}</span>
                    </div>
                    <Link className="btn-ghost" to="/patients">Open</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h1>CityCare Hospital — Dashboard</h1>
      <p className="muted">Welcome to the Hospital Management Portal. Use the tiles below to jump into a module.</p>

      <div className="tiles">
        <DashboardTile to="/patients" title="Patients" desc="Register patients and track medical history" icon="👤" />
        <DashboardTile to="/doctors" title="Doctors" desc="Manage doctors and specialties" icon="🩺" />
        <DashboardTile to="/billing" title="Billing" desc="Create invoices and track payments" icon="💳" />
        <DashboardTile to="/pharmacy" title="Pharmacy" desc="Inventory and stock updates" icon="💊" />
        <DashboardTile to="/administration" title="Administration" desc="Staff and departments" icon="🏥" />
        <DashboardTile to="/reports" title="Reports" desc="Clinical and discharge summaries" icon="📄" />
        <DashboardTile to="/admissions" title="ADT" desc="Admit, transfer, discharge" icon="🏥" />
        <DashboardTile to="/prescriptions" title="Prescriptions" desc="Doctor orders to pharmacy" icon="🧾" />
        <DashboardTile to="/lab-orders" title="Lab Orders" desc="Tests, samples, results" icon="🧪" />
        <DashboardTile to="/suppliers" title="Suppliers" desc="Pharmacy partners" icon="🚚" />
        <DashboardTile to="/appointment-booking" title="Appointment Booking" desc="Book, view, cancel, availability" icon="🗓️" />
      </div>
    </div>
  )
}

function Stub({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <p className="muted">This module is a placeholder. Add your forms, tables, and workflows here.</p>
    </div>
  )
}

function DashboardTile({ to, title, desc, icon }) {
  return (
    <Link to={to} className="tile">
      <div className="tile-icon" aria-hidden>{icon}</div>
      <div className="tile-meta">
        <div className="tile-title">{title}</div>
        <div className="tile-desc">{desc}</div>
      </div>
    </Link>
  )
}

function AssignmentsPanel() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [appointments, setAppointments] = useState([])
  const [patients, setPatients] = useState([])
  const [doctors, setDoctors] = useState([])
  const [assignChoice, setAssignChoice] = useState({})

  useEffect(() => {
    let mounted = true
    async function load() {
      try {
        setLoading(true)
        const [apts, pats, docs] = await Promise.all([
          Appointments.list(),
          Patients.list(),
          Doctors.list()
        ])
        if (!mounted) return

        // Auto mark status by date: past -> treated, future/today -> untreated
        const now = new Date()
        const updates = []
        const treatedPatientIds = new Set()
        const normalized = apts.map(a => {
          const raw = a.date || a.datetime || ''
          const d = raw ? new Date(raw) : null
          const desired = d && d < now ? 'treated' : 'untreated'
          const current = (a.status || '').toLowerCase() || 'untreated'
          if (d && desired !== current) {
            updates.push({ id: a.id, status: desired, patientId: a.patientId })
            if (desired === 'treated') treatedPatientIds.add(String(a.patientId))
            return { ...a, status: desired }
          }
          return a
        })
        // Persist differing statuses (best-effort)
        if (updates.length) {
          try {
            await Promise.all(updates.map(u => Appointments.patch(u.id, { status: u.status })))
            // If any became treated, mark their bills paid
            if (treatedPatientIds.size) {
              const allBills = await Bills.list()
              const toPay = allBills.filter(b => treatedPatientIds.has(String(b.patientId)) && b.status !== 'paid')
              await Promise.all(toPay.map(b => Bills.patch(b.id, { status: 'paid' })))
            }
          } catch (_) { /* ignore and keep local state */ }
        }

        setAppointments(normalized)
        setPatients(pats)
        setDoctors(docs)
      } catch (e) {
        if (!mounted) return
        setError('Failed to load assignments')
      } finally {
        if (mounted) setLoading(false)
      }
    }
    load()
    return () => { mounted = false }
  }, [])

  function nameById(list, id) {
    const x = list.find(i => String(i.id) === String(id))
    return x ? (x.name || x.fullName || x.title || `#${id}`) : `#${id}`
  }

  async function toggleStatus(appt) {
    const next = appt.status === 'treated' ? 'untreated' : 'treated'
    const updated = await Appointments.patch(appt.id, { status: next })
    setAppointments(prev => prev.map(a => a.id === appt.id ? updated : a))
    if (next === 'treated') {
      try {
        // Fetch bills and mark this patient's bills as paid
        const allBills = await Bills.list()
        const target = allBills.filter(b => String(b.patientId) === String(appt.patientId) && b.status !== 'paid')
        await Promise.all(target.map(b => Bills.patch(b.id, { status: 'paid' })))
      } catch (_) {}
    }
  }

  const patientIdsWithAppt = new Set(appointments.map(a => String(a.patientId)))
  const unassigned = patients.filter(p => !patientIdsWithAppt.has(String(p.id)))

  async function assignPatient(pid) {
    const docId = assignChoice[pid]
    if (!docId) return
    // Default to one hour in the future so the new assignment is untreated by date rule
    const inOneHour = new Date(Date.now() + 60 * 60 * 1000).toISOString()
    const created = await Appointments.create({ patientId: pid, doctorId: docId, date: inOneHour, status: 'untreated' })
    setAppointments(prev => [created, ...prev])
    setAssignChoice(prev => ({ ...prev, [pid]: '' }))
  }

  return (
    <div className="card" style={{ marginTop: 16 }}>
      <div className="header">
        <h2>Doctor Assignments</h2>
      </div>
      {error && <div className="error">{error}</div>}
      {loading ? (
        <div className="muted">Loading…</div>
      ) : (
        <>
          <div className="card" style={{ marginBottom: 12 }}>
            <div className="header">
              <h3 className="page-title">Unassigned Patients</h3>
              <div className="muted">{unassigned.length} need assignment</div>
            </div>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Patient</th>
                    <th>Assign Doctor</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {unassigned.length === 0 && (
                    <tr><td className="muted" colSpan={3}>All patients have an assigned appointment</td></tr>
                  )}
                  {unassigned.map(p => (
                    <tr key={p.id}>
                      <td>{p.name || p.fullName || `Patient #${p.id}`}</td>
                      <td>
                        <select value={assignChoice[p.id] || ''} onChange={e => setAssignChoice(prev => ({ ...prev, [p.id]: e.target.value }))}>
                          <option value="">Select a doctor…</option>
                          {doctors.map(d => (
                            <option value={d.id} key={d.id}>{d.name || d.fullName || `Doctor #${d.id}`}</option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <button className="btn-secondary" onClick={() => assignPatient(p.id)} disabled={!assignChoice[p.id]}>Assign</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {appointments.map(a => (
                  <tr key={a.id}>
                    <td>{nameById(patients, a.patientId)}</td>
                    <td>{nameById(doctors, a.doctorId)}</td>
                    <td>{a.date || a.datetime || ''}</td>
                    <td>
                      <span className={`status ${a.status === 'treated' ? 'treated' : 'untreated'}`}>
                        {a.status === 'treated' ? 'Treated' : 'Untreated'}
                      </span>
                    </td>
                    <td className="actions">
                      <button onClick={() => toggleStatus(a)}>
                        Mark {a.status === 'treated' ? 'Untreated' : 'Treated'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  )
}
