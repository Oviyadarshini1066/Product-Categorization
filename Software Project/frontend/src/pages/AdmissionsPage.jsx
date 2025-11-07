import React, { useEffect, useState } from 'react'
import { Admissions, Transfers, Discharges, Patients, Doctors } from '../api'

export default function AdmissionsPage() {
  const [patients, setPatients] = useState([])
  const [doctors, setDoctors] = useState([])
  const [admissions, setAdmissions] = useState([])
  const [transfers, setTransfers] = useState([])
  const [discharges, setDischarges] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [tab, setTab] = useState('admit')
  const [admit, setAdmit] = useState({ patientId: '', doctorId: '', ward: '', reason: '' })
  const [transfer, setTransfer] = useState({ patientId: '', fromWard: '', toWard: '', note: '' })
  const [discharge, setDischarge] = useState({ patientId: '', summary: '' })

  async function load() {
    setLoading(true)
    setError('')
    try {
      const [pats, docs, adms, trs, dchs] = await Promise.all([
        Patients.list(), Doctors.list(), Admissions.list(), Transfers.list(), Discharges.list()
      ])
      setPatients(pats); setDoctors(docs)
      setAdmissions(adms); setTransfers(trs); setDischarges(dchs)
    } catch { setError('Failed to load ADT data') }
    setLoading(false)
  }
  useEffect(() => { load() }, [])

  async function createAdmission(e) {
    e.preventDefault()
    try { await Admissions.create(admit); setAdmit({ patientId: '', doctorId: '', ward: '', reason: '' }); await load() } catch { setError('Failed to admit') }
  }
  async function createTransfer(e) {
    e.preventDefault()
    try { await Transfers.create(transfer); setTransfer({ patientId: '', fromWard: '', toWard: '', note: '' }); await load() } catch { setError('Failed to transfer') }
  }
  async function createDischarge(e) {
    e.preventDefault()
    try { await Discharges.create(discharge); setDischarge({ patientId: '', summary: '' }); await load() } catch { setError('Failed to discharge') }
  }
  async function removeOne(kind, id) {
    const map = { admissions: Admissions, transfers: Transfers, discharges: Discharges }
    try { await map[kind].remove(id); await load() } catch { setError('Failed to delete') }
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Admissions / Transfers / Discharges {loading ? '…' : ''}</h1>
      </header>
      {error && <div className="error" role="alert">{error}</div>}

      <div className="main" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <div className="card">
          <div className="controls">
            <button type="button" className={tab==='admit'?"btn-secondary":"btn-ghost"} onClick={()=>setTab('admit')}>Admit</button>
            <button type="button" className={tab==='transfer'?"btn-secondary":"btn-ghost"} onClick={()=>setTab('transfer')}>Transfer</button>
            <button type="button" className={tab==='discharge'?"btn-secondary":"btn-ghost"} onClick={()=>setTab('discharge')}>Discharge</button>
          </div>

          {tab === 'admit' && (
            <form onSubmit={createAdmission}>
              <h3>Admit Patient</h3>
              <div className="field"><label>Patient</label>
                <select value={admit.patientId} onChange={e=>setAdmit({...admit,patientId:e.target.value})} required>
                  <option value="">Select</option>
                  {patients.map(p=> <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </div>
              <div className="field"><label>Doctor</label>
                <select value={admit.doctorId} onChange={e=>setAdmit({...admit,doctorId:e.target.value})} required>
                  <option value="">Select</option>
                  {doctors.map(d=> <option key={d.id} value={d.id}>{d.name}</option>)}
                </select>
              </div>
              <div className="field"><label>Ward/Room</label><input value={admit.ward} onChange={e=>setAdmit({...admit,ward:e.target.value})}/></div>
              <div className="field"><label>Reason</label><input value={admit.reason} onChange={e=>setAdmit({...admit,reason:e.target.value})}/></div>
              <div className="actions"><button type="submit">Save</button></div>
            </form>
          )}

          {tab === 'transfer' && (
            <form onSubmit={createTransfer}>
              <h3>Transfer Patient</h3>
              <div className="field"><label>Patient</label>
                <select value={transfer.patientId} onChange={e=>setTransfer({...transfer,patientId:e.target.value})} required>
                  <option value="">Select</option>
                  {patients.map(p=> <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </div>
              <div className="field"><label>From Ward</label><input value={transfer.fromWard} onChange={e=>setTransfer({...transfer,fromWard:e.target.value})}/></div>
              <div className="field"><label>To Ward</label><input value={transfer.toWard} onChange={e=>setTransfer({...transfer,toWard:e.target.value})}/></div>
              <div className="field"><label>Note</label><input value={transfer.note} onChange={e=>setTransfer({...transfer,note:e.target.value})}/></div>
              <div className="actions"><button type="submit">Save</button></div>
            </form>
          )}

          {tab === 'discharge' && (
            <form onSubmit={createDischarge}>
              <h3>Discharge Patient</h3>
              <div className="field"><label>Patient</label>
                <select value={discharge.patientId} onChange={e=>setDischarge({...discharge,patientId:e.target.value})} required>
                  <option value="">Select</option>
                  {patients.map(p=> <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </div>
              <div className="field"><label>Summary</label><input value={discharge.summary} onChange={e=>setDischarge({...discharge,summary:e.target.value})}/></div>
              <div className="actions"><button type="submit">Save</button></div>
            </form>
          )}
        </div>

        <div>
          <div className="card" style={{ marginBottom: 12 }}>
            <h3 className="page-title">Recent Admissions</h3>
            <ul className="list">
              {admissions.map(a=> (
                <li key={a.id} className="list-item">
                  <div className="title"><span>Patient #{a.patientId}</span></div>
                  <div className="meta"><span className="badge">Ward {a.ward}</span><button className="link" onClick={()=>removeOne('admissions', a.id)}>Delete</button></div>
                </li>
              ))}
              {admissions.length===0 && <li className="list-item"><div className="title"><span className="muted">No admissions</span></div></li>}
            </ul>
          </div>

          <div className="card" style={{ marginBottom: 12 }}>
            <h3 className="page-title">Transfers</h3>
            <ul className="list">
              {transfers.map(t=> (
                <li key={t.id} className="list-item">
                  <div className="title"><span>Patient #{t.patientId}</span></div>
                  <div className="meta"><span className="badge">{t.fromWard} → {t.toWard}</span><button className="link" onClick={()=>removeOne('transfers', t.id)}>Delete</button></div>
                </li>
              ))}
              {transfers.length===0 && <li className="list-item"><div className="title"><span className="muted">No transfers</span></div></li>}
            </ul>
          </div>

          <div className="card">
            <h3 className="page-title">Discharges</h3>
            <ul className="list">
              {discharges.map(d=> (
                <li key={d.id} className="list-item">
                  <div className="title"><span>Patient #{d.patientId}</span></div>
                  <div className="meta"><span className="badge">{d.summary || 'Summary'}</span><button className="link" onClick={()=>removeOne('discharges', d.id)}>Delete</button></div>
                </li>
              ))}
              {discharges.length===0 && <li className="list-item"><div className="title"><span className="muted">No discharges</span></div></li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
