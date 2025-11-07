// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom';
import PatientsPage from './pages/PatientsPage';
import DoctorsPage from './pages/DoctorsPage';
import AppointmentsPage from './pages/AppointmentsPage';
import BillsPage from './pages/BillsPage';
import ReportsPage from './pages/ReportsPage';
import PharmacyPage from './pages/PharmacyPage';
import AdministrationPage from './pages/AdministrationPage';
import { Patients, Doctors, Appointments, Bills } from './api';
import AdmissionsPage from './pages/AdmissionsPage';
import PrescriptionsPage from './pages/PrescriptionsPage';
import SuppliersPage from './pages/SuppliersPage';
import LabOrdersPage from './pages/LabOrdersPage';
import AppointmentBooking from './pages/AppointmentBooking';
export default function App() {
  if (stryMutAct_9fa48("40")) {
    {}
  } else {
    stryCov_9fa48("40");
    return <Router>
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
    </Router>;
  }
}
function ActivePatientsPanel() {
  if (stryMutAct_9fa48("41")) {
    {}
  } else {
    stryCov_9fa48("41");
    const [loading, setLoading] = useState(stryMutAct_9fa48("42") ? false : (stryCov_9fa48("42"), true));
    const [error, setError] = useState(stryMutAct_9fa48("43") ? "Stryker was here!" : (stryCov_9fa48("43"), ''));
    const [appointments, setAppointments] = useState(stryMutAct_9fa48("44") ? ["Stryker was here"] : (stryCov_9fa48("44"), []));
    const [patients, setPatients] = useState(stryMutAct_9fa48("45") ? ["Stryker was here"] : (stryCov_9fa48("45"), []));
    useEffect(() => {
      if (stryMutAct_9fa48("46")) {
        {}
      } else {
        stryCov_9fa48("46");
        let mounted = stryMutAct_9fa48("47") ? false : (stryCov_9fa48("47"), true);
        async function load() {
          if (stryMutAct_9fa48("48")) {
            {}
          } else {
            stryCov_9fa48("48");
            try {
              if (stryMutAct_9fa48("49")) {
                {}
              } else {
                stryCov_9fa48("49");
                setLoading(stryMutAct_9fa48("50") ? false : (stryCov_9fa48("50"), true));
                const [apts, pats] = await Promise.all(stryMutAct_9fa48("51") ? [] : (stryCov_9fa48("51"), [Appointments.list(), Patients.list()]));
                if (stryMutAct_9fa48("54") ? false : stryMutAct_9fa48("53") ? true : stryMutAct_9fa48("52") ? mounted : (stryCov_9fa48("52", "53", "54"), !mounted)) return;
                setAppointments(apts);
                setPatients(pats);
              }
            } catch (e) {
              if (stryMutAct_9fa48("55")) {
                {}
              } else {
                stryCov_9fa48("55");
                if (stryMutAct_9fa48("58") ? false : stryMutAct_9fa48("57") ? true : stryMutAct_9fa48("56") ? mounted : (stryCov_9fa48("56", "57", "58"), !mounted)) return;
                setError(stryMutAct_9fa48("59") ? "" : (stryCov_9fa48("59"), 'Failed to load patient activity'));
              }
            } finally {
              if (stryMutAct_9fa48("60")) {
                {}
              } else {
                stryCov_9fa48("60");
                if (stryMutAct_9fa48("62") ? false : stryMutAct_9fa48("61") ? true : (stryCov_9fa48("61", "62"), mounted)) setLoading(stryMutAct_9fa48("63") ? true : (stryCov_9fa48("63"), false));
              }
            }
          }
        }
        load();
        return () => {
          if (stryMutAct_9fa48("64")) {
            {}
          } else {
            stryCov_9fa48("64");
            mounted = stryMutAct_9fa48("65") ? true : (stryCov_9fa48("65"), false);
          }
        };
      }
    }, stryMutAct_9fa48("66") ? ["Stryker was here"] : (stryCov_9fa48("66"), []));
    const byId = new Map(patients.map(stryMutAct_9fa48("67") ? () => undefined : (stryCov_9fa48("67"), p => stryMutAct_9fa48("68") ? [] : (stryCov_9fa48("68"), [String(p.id), p]))));
    const activeSet = new Set();
    const inactiveSet = new Set();
    for (const a of appointments) {
      if (stryMutAct_9fa48("69")) {
        {}
      } else {
        stryCov_9fa48("69");
        const pid = String(a.patientId);
        if (stryMutAct_9fa48("72") ? false : stryMutAct_9fa48("71") ? true : stryMutAct_9fa48("70") ? pid : (stryCov_9fa48("70", "71", "72"), !pid)) continue;
        if (stryMutAct_9fa48("75") ? (a.status || '').toLowerCase() !== 'treated' : stryMutAct_9fa48("74") ? false : stryMutAct_9fa48("73") ? true : (stryCov_9fa48("73", "74", "75"), (stryMutAct_9fa48("76") ? (a.status || '').toUpperCase() : (stryCov_9fa48("76"), (stryMutAct_9fa48("79") ? a.status && '' : stryMutAct_9fa48("78") ? false : stryMutAct_9fa48("77") ? true : (stryCov_9fa48("77", "78", "79"), a.status || (stryMutAct_9fa48("80") ? "Stryker was here!" : (stryCov_9fa48("80"), '')))).toLowerCase())) === (stryMutAct_9fa48("81") ? "" : (stryCov_9fa48("81"), 'treated')))) inactiveSet.add(pid);else activeSet.add(pid);
      }
    }
    // If a patient appears as both untreated and treated, consider them active if any untreated exists
    for (const pid of inactiveSet) {
      if (stryMutAct_9fa48("82")) {
        {}
      } else {
        stryCov_9fa48("82");
        if (stryMutAct_9fa48("84") ? false : stryMutAct_9fa48("83") ? true : (stryCov_9fa48("83", "84"), activeSet.has(pid))) inactiveSet.delete(pid);
      }
    }
    const active = stryMutAct_9fa48("85") ? [...activeSet].map(id => byId.get(id)) : (stryCov_9fa48("85"), (stryMutAct_9fa48("86") ? [] : (stryCov_9fa48("86"), [...activeSet])).map(stryMutAct_9fa48("87") ? () => undefined : (stryCov_9fa48("87"), id => byId.get(id))).filter(Boolean));
    const inactive = stryMutAct_9fa48("88") ? [...inactiveSet].map(id => byId.get(id)) : (stryCov_9fa48("88"), (stryMutAct_9fa48("89") ? [] : (stryCov_9fa48("89"), [...inactiveSet])).map(stryMutAct_9fa48("90") ? () => undefined : (stryCov_9fa48("90"), id => byId.get(id))).filter(Boolean));
    return <div className="card" style={stryMutAct_9fa48("91") ? {} : (stryCov_9fa48("91"), {
      marginTop: 16
    })}>
      <div className="header">
        <h2>Active Patients</h2>
        <div className="muted">Untreated: {active.length} · Treated: {inactive.length}</div>
      </div>
      {stryMutAct_9fa48("94") ? error || <div className="error">{error}</div> : stryMutAct_9fa48("93") ? false : stryMutAct_9fa48("92") ? true : (stryCov_9fa48("92", "93", "94"), error && <div className="error">{error}</div>)}
      {loading ? <div className="muted">Loading…</div> : <div className="main">
          <div className="left">
            <div className="card">
              <div className="header"><h3 className="page-title">Untreated</h3></div>
              <ul className="list">
                {stryMutAct_9fa48("97") ? active.length === 0 || <li className="muted">No active patients</li> : stryMutAct_9fa48("96") ? false : stryMutAct_9fa48("95") ? true : (stryCov_9fa48("95", "96", "97"), (stryMutAct_9fa48("99") ? active.length !== 0 : stryMutAct_9fa48("98") ? true : (stryCov_9fa48("98", "99"), active.length === 0)) && <li className="muted">No active patients</li>)}
                {active.map(stryMutAct_9fa48("100") ? () => undefined : (stryCov_9fa48("100"), p => <li key={p.id} className="list-item">
                    <div className="title">
                      <span className="badge" title="Active">Active</span>
                      <span>{stryMutAct_9fa48("103") ? (p.name || p.fullName) && `Patient #${p.id}` : stryMutAct_9fa48("102") ? false : stryMutAct_9fa48("101") ? true : (stryCov_9fa48("101", "102", "103"), (stryMutAct_9fa48("105") ? p.name && p.fullName : stryMutAct_9fa48("104") ? false : (stryCov_9fa48("104", "105"), p.name || p.fullName)) || (stryMutAct_9fa48("106") ? `` : (stryCov_9fa48("106"), `Patient #${p.id}`)))}</span>
                    </div>
                    <Link className="btn-ghost" to="/patients">Open</Link>
                  </li>))}
              </ul>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="header"><h3 className="page-title">Treated</h3></div>
              <ul className="list">
                {stryMutAct_9fa48("109") ? inactive.length === 0 || <li className="muted">No recently treated patients</li> : stryMutAct_9fa48("108") ? false : stryMutAct_9fa48("107") ? true : (stryCov_9fa48("107", "108", "109"), (stryMutAct_9fa48("111") ? inactive.length !== 0 : stryMutAct_9fa48("110") ? true : (stryCov_9fa48("110", "111"), inactive.length === 0)) && <li className="muted">No recently treated patients</li>)}
                {inactive.map(stryMutAct_9fa48("112") ? () => undefined : (stryCov_9fa48("112"), p => <li key={p.id} className="list-item">
                    <div className="title">
                      <span className="badge" title="Inactive">Inactive</span>
                      <span>{stryMutAct_9fa48("115") ? (p.name || p.fullName) && `Patient #${p.id}` : stryMutAct_9fa48("114") ? false : stryMutAct_9fa48("113") ? true : (stryCov_9fa48("113", "114", "115"), (stryMutAct_9fa48("117") ? p.name && p.fullName : stryMutAct_9fa48("116") ? false : (stryCov_9fa48("116", "117"), p.name || p.fullName)) || (stryMutAct_9fa48("118") ? `` : (stryCov_9fa48("118"), `Patient #${p.id}`)))}</span>
                    </div>
                    <Link className="btn-ghost" to="/patients">Open</Link>
                  </li>))}
              </ul>
            </div>
          </div>
        </div>}
    </div>;
  }
}
function Dashboard() {
  if (stryMutAct_9fa48("119")) {
    {}
  } else {
    stryCov_9fa48("119");
    return <div>
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
    </div>;
  }
}
function Stub({
  title
}) {
  if (stryMutAct_9fa48("120")) {
    {}
  } else {
    stryCov_9fa48("120");
    return <div>
      <h1>{title}</h1>
      <p className="muted">This module is a placeholder. Add your forms, tables, and workflows here.</p>
    </div>;
  }
}
function DashboardTile({
  to,
  title,
  desc,
  icon
}) {
  if (stryMutAct_9fa48("121")) {
    {}
  } else {
    stryCov_9fa48("121");
    return <Link to={to} className="tile">
      <div className="tile-icon" aria-hidden>{icon}</div>
      <div className="tile-meta">
        <div className="tile-title">{title}</div>
        <div className="tile-desc">{desc}</div>
      </div>
    </Link>;
  }
}
function AssignmentsPanel() {
  if (stryMutAct_9fa48("122")) {
    {}
  } else {
    stryCov_9fa48("122");
    const [loading, setLoading] = useState(stryMutAct_9fa48("123") ? false : (stryCov_9fa48("123"), true));
    const [error, setError] = useState(stryMutAct_9fa48("124") ? "Stryker was here!" : (stryCov_9fa48("124"), ''));
    const [appointments, setAppointments] = useState(stryMutAct_9fa48("125") ? ["Stryker was here"] : (stryCov_9fa48("125"), []));
    const [patients, setPatients] = useState(stryMutAct_9fa48("126") ? ["Stryker was here"] : (stryCov_9fa48("126"), []));
    const [doctors, setDoctors] = useState(stryMutAct_9fa48("127") ? ["Stryker was here"] : (stryCov_9fa48("127"), []));
    const [assignChoice, setAssignChoice] = useState({});
    useEffect(() => {
      if (stryMutAct_9fa48("128")) {
        {}
      } else {
        stryCov_9fa48("128");
        let mounted = stryMutAct_9fa48("129") ? false : (stryCov_9fa48("129"), true);
        async function load() {
          if (stryMutAct_9fa48("130")) {
            {}
          } else {
            stryCov_9fa48("130");
            try {
              if (stryMutAct_9fa48("131")) {
                {}
              } else {
                stryCov_9fa48("131");
                setLoading(stryMutAct_9fa48("132") ? false : (stryCov_9fa48("132"), true));
                const [apts, pats, docs] = await Promise.all(stryMutAct_9fa48("133") ? [] : (stryCov_9fa48("133"), [Appointments.list(), Patients.list(), Doctors.list()]));
                if (stryMutAct_9fa48("136") ? false : stryMutAct_9fa48("135") ? true : stryMutAct_9fa48("134") ? mounted : (stryCov_9fa48("134", "135", "136"), !mounted)) return;

                // Auto mark status by date: past -> treated, future/today -> untreated
                const now = new Date();
                const updates = stryMutAct_9fa48("137") ? ["Stryker was here"] : (stryCov_9fa48("137"), []);
                const treatedPatientIds = new Set();
                const normalized = apts.map(a => {
                  if (stryMutAct_9fa48("138")) {
                    {}
                  } else {
                    stryCov_9fa48("138");
                    const raw = stryMutAct_9fa48("141") ? (a.date || a.datetime) && '' : stryMutAct_9fa48("140") ? false : stryMutAct_9fa48("139") ? true : (stryCov_9fa48("139", "140", "141"), (stryMutAct_9fa48("143") ? a.date && a.datetime : stryMutAct_9fa48("142") ? false : (stryCov_9fa48("142", "143"), a.date || a.datetime)) || (stryMutAct_9fa48("144") ? "Stryker was here!" : (stryCov_9fa48("144"), '')));
                    const d = raw ? new Date(raw) : null;
                    const desired = (stryMutAct_9fa48("147") ? d || d < now : stryMutAct_9fa48("146") ? false : stryMutAct_9fa48("145") ? true : (stryCov_9fa48("145", "146", "147"), d && (stryMutAct_9fa48("150") ? d >= now : stryMutAct_9fa48("149") ? d <= now : stryMutAct_9fa48("148") ? true : (stryCov_9fa48("148", "149", "150"), d < now)))) ? stryMutAct_9fa48("151") ? "" : (stryCov_9fa48("151"), 'treated') : stryMutAct_9fa48("152") ? "" : (stryCov_9fa48("152"), 'untreated');
                    const current = stryMutAct_9fa48("155") ? (a.status || '').toLowerCase() && 'untreated' : stryMutAct_9fa48("154") ? false : stryMutAct_9fa48("153") ? true : (stryCov_9fa48("153", "154", "155"), (stryMutAct_9fa48("156") ? (a.status || '').toUpperCase() : (stryCov_9fa48("156"), (stryMutAct_9fa48("159") ? a.status && '' : stryMutAct_9fa48("158") ? false : stryMutAct_9fa48("157") ? true : (stryCov_9fa48("157", "158", "159"), a.status || (stryMutAct_9fa48("160") ? "Stryker was here!" : (stryCov_9fa48("160"), '')))).toLowerCase())) || (stryMutAct_9fa48("161") ? "" : (stryCov_9fa48("161"), 'untreated')));
                    if (stryMutAct_9fa48("164") ? d || desired !== current : stryMutAct_9fa48("163") ? false : stryMutAct_9fa48("162") ? true : (stryCov_9fa48("162", "163", "164"), d && (stryMutAct_9fa48("166") ? desired === current : stryMutAct_9fa48("165") ? true : (stryCov_9fa48("165", "166"), desired !== current)))) {
                      if (stryMutAct_9fa48("167")) {
                        {}
                      } else {
                        stryCov_9fa48("167");
                        updates.push(stryMutAct_9fa48("168") ? {} : (stryCov_9fa48("168"), {
                          id: a.id,
                          status: desired,
                          patientId: a.patientId
                        }));
                        if (stryMutAct_9fa48("171") ? desired !== 'treated' : stryMutAct_9fa48("170") ? false : stryMutAct_9fa48("169") ? true : (stryCov_9fa48("169", "170", "171"), desired === (stryMutAct_9fa48("172") ? "" : (stryCov_9fa48("172"), 'treated')))) treatedPatientIds.add(String(a.patientId));
                        return stryMutAct_9fa48("173") ? {} : (stryCov_9fa48("173"), {
                          ...a,
                          status: desired
                        });
                      }
                    }
                    return a;
                  }
                });
                // Persist differing statuses (best-effort)
                if (stryMutAct_9fa48("175") ? false : stryMutAct_9fa48("174") ? true : (stryCov_9fa48("174", "175"), updates.length)) {
                  if (stryMutAct_9fa48("176")) {
                    {}
                  } else {
                    stryCov_9fa48("176");
                    try {
                      if (stryMutAct_9fa48("177")) {
                        {}
                      } else {
                        stryCov_9fa48("177");
                        await Promise.all(updates.map(stryMutAct_9fa48("178") ? () => undefined : (stryCov_9fa48("178"), u => Appointments.patch(u.id, stryMutAct_9fa48("179") ? {} : (stryCov_9fa48("179"), {
                          status: u.status
                        })))));
                        // If any became treated, mark their bills paid
                        if (stryMutAct_9fa48("181") ? false : stryMutAct_9fa48("180") ? true : (stryCov_9fa48("180", "181"), treatedPatientIds.size)) {
                          if (stryMutAct_9fa48("182")) {
                            {}
                          } else {
                            stryCov_9fa48("182");
                            const allBills = await Bills.list();
                            const toPay = stryMutAct_9fa48("183") ? allBills : (stryCov_9fa48("183"), allBills.filter(stryMutAct_9fa48("184") ? () => undefined : (stryCov_9fa48("184"), b => stryMutAct_9fa48("187") ? treatedPatientIds.has(String(b.patientId)) || b.status !== 'paid' : stryMutAct_9fa48("186") ? false : stryMutAct_9fa48("185") ? true : (stryCov_9fa48("185", "186", "187"), treatedPatientIds.has(String(b.patientId)) && (stryMutAct_9fa48("189") ? b.status === 'paid' : stryMutAct_9fa48("188") ? true : (stryCov_9fa48("188", "189"), b.status !== (stryMutAct_9fa48("190") ? "" : (stryCov_9fa48("190"), 'paid'))))))));
                            await Promise.all(toPay.map(stryMutAct_9fa48("191") ? () => undefined : (stryCov_9fa48("191"), b => Bills.patch(b.id, stryMutAct_9fa48("192") ? {} : (stryCov_9fa48("192"), {
                              status: stryMutAct_9fa48("193") ? "" : (stryCov_9fa48("193"), 'paid')
                            })))));
                          }
                        }
                      }
                    } catch (_) {/* ignore and keep local state */}
                  }
                }
                setAppointments(normalized);
                setPatients(pats);
                setDoctors(docs);
              }
            } catch (e) {
              if (stryMutAct_9fa48("194")) {
                {}
              } else {
                stryCov_9fa48("194");
                if (stryMutAct_9fa48("197") ? false : stryMutAct_9fa48("196") ? true : stryMutAct_9fa48("195") ? mounted : (stryCov_9fa48("195", "196", "197"), !mounted)) return;
                setError(stryMutAct_9fa48("198") ? "" : (stryCov_9fa48("198"), 'Failed to load assignments'));
              }
            } finally {
              if (stryMutAct_9fa48("199")) {
                {}
              } else {
                stryCov_9fa48("199");
                if (stryMutAct_9fa48("201") ? false : stryMutAct_9fa48("200") ? true : (stryCov_9fa48("200", "201"), mounted)) setLoading(stryMutAct_9fa48("202") ? true : (stryCov_9fa48("202"), false));
              }
            }
          }
        }
        load();
        return () => {
          if (stryMutAct_9fa48("203")) {
            {}
          } else {
            stryCov_9fa48("203");
            mounted = stryMutAct_9fa48("204") ? true : (stryCov_9fa48("204"), false);
          }
        };
      }
    }, stryMutAct_9fa48("205") ? ["Stryker was here"] : (stryCov_9fa48("205"), []));
    function nameById(list, id) {
      if (stryMutAct_9fa48("206")) {
        {}
      } else {
        stryCov_9fa48("206");
        const x = list.find(stryMutAct_9fa48("207") ? () => undefined : (stryCov_9fa48("207"), i => stryMutAct_9fa48("210") ? String(i.id) !== String(id) : stryMutAct_9fa48("209") ? false : stryMutAct_9fa48("208") ? true : (stryCov_9fa48("208", "209", "210"), String(i.id) === String(id))));
        return x ? stryMutAct_9fa48("213") ? (x.name || x.fullName || x.title) && `#${id}` : stryMutAct_9fa48("212") ? false : stryMutAct_9fa48("211") ? true : (stryCov_9fa48("211", "212", "213"), (stryMutAct_9fa48("215") ? (x.name || x.fullName) && x.title : stryMutAct_9fa48("214") ? false : (stryCov_9fa48("214", "215"), (stryMutAct_9fa48("217") ? x.name && x.fullName : stryMutAct_9fa48("216") ? false : (stryCov_9fa48("216", "217"), x.name || x.fullName)) || x.title)) || (stryMutAct_9fa48("218") ? `` : (stryCov_9fa48("218"), `#${id}`))) : stryMutAct_9fa48("219") ? `` : (stryCov_9fa48("219"), `#${id}`);
      }
    }
    async function toggleStatus(appt) {
      if (stryMutAct_9fa48("220")) {
        {}
      } else {
        stryCov_9fa48("220");
        const next = (stryMutAct_9fa48("223") ? appt.status !== 'treated' : stryMutAct_9fa48("222") ? false : stryMutAct_9fa48("221") ? true : (stryCov_9fa48("221", "222", "223"), appt.status === (stryMutAct_9fa48("224") ? "" : (stryCov_9fa48("224"), 'treated')))) ? stryMutAct_9fa48("225") ? "" : (stryCov_9fa48("225"), 'untreated') : stryMutAct_9fa48("226") ? "" : (stryCov_9fa48("226"), 'treated');
        const updated = await Appointments.patch(appt.id, stryMutAct_9fa48("227") ? {} : (stryCov_9fa48("227"), {
          status: next
        }));
        setAppointments(stryMutAct_9fa48("228") ? () => undefined : (stryCov_9fa48("228"), prev => prev.map(stryMutAct_9fa48("229") ? () => undefined : (stryCov_9fa48("229"), a => (stryMutAct_9fa48("232") ? a.id !== appt.id : stryMutAct_9fa48("231") ? false : stryMutAct_9fa48("230") ? true : (stryCov_9fa48("230", "231", "232"), a.id === appt.id)) ? updated : a))));
        if (stryMutAct_9fa48("235") ? next !== 'treated' : stryMutAct_9fa48("234") ? false : stryMutAct_9fa48("233") ? true : (stryCov_9fa48("233", "234", "235"), next === (stryMutAct_9fa48("236") ? "" : (stryCov_9fa48("236"), 'treated')))) {
          if (stryMutAct_9fa48("237")) {
            {}
          } else {
            stryCov_9fa48("237");
            try {
              if (stryMutAct_9fa48("238")) {
                {}
              } else {
                stryCov_9fa48("238");
                // Fetch bills and mark this patient's bills as paid
                const allBills = await Bills.list();
                const target = stryMutAct_9fa48("239") ? allBills : (stryCov_9fa48("239"), allBills.filter(stryMutAct_9fa48("240") ? () => undefined : (stryCov_9fa48("240"), b => stryMutAct_9fa48("243") ? String(b.patientId) === String(appt.patientId) || b.status !== 'paid' : stryMutAct_9fa48("242") ? false : stryMutAct_9fa48("241") ? true : (stryCov_9fa48("241", "242", "243"), (stryMutAct_9fa48("245") ? String(b.patientId) !== String(appt.patientId) : stryMutAct_9fa48("244") ? true : (stryCov_9fa48("244", "245"), String(b.patientId) === String(appt.patientId))) && (stryMutAct_9fa48("247") ? b.status === 'paid' : stryMutAct_9fa48("246") ? true : (stryCov_9fa48("246", "247"), b.status !== (stryMutAct_9fa48("248") ? "" : (stryCov_9fa48("248"), 'paid'))))))));
                await Promise.all(target.map(stryMutAct_9fa48("249") ? () => undefined : (stryCov_9fa48("249"), b => Bills.patch(b.id, stryMutAct_9fa48("250") ? {} : (stryCov_9fa48("250"), {
                  status: stryMutAct_9fa48("251") ? "" : (stryCov_9fa48("251"), 'paid')
                })))));
              }
            } catch (_) {}
          }
        }
      }
    }
    const patientIdsWithAppt = new Set(appointments.map(stryMutAct_9fa48("252") ? () => undefined : (stryCov_9fa48("252"), a => String(a.patientId))));
    const unassigned = stryMutAct_9fa48("253") ? patients : (stryCov_9fa48("253"), patients.filter(stryMutAct_9fa48("254") ? () => undefined : (stryCov_9fa48("254"), p => stryMutAct_9fa48("255") ? patientIdsWithAppt.has(String(p.id)) : (stryCov_9fa48("255"), !patientIdsWithAppt.has(String(p.id))))));
    async function assignPatient(pid) {
      if (stryMutAct_9fa48("256")) {
        {}
      } else {
        stryCov_9fa48("256");
        const docId = assignChoice[pid];
        if (stryMutAct_9fa48("259") ? false : stryMutAct_9fa48("258") ? true : stryMutAct_9fa48("257") ? docId : (stryCov_9fa48("257", "258", "259"), !docId)) return;
        // Default to one hour in the future so the new assignment is untreated by date rule
        const inOneHour = new Date(stryMutAct_9fa48("260") ? Date.now() - 60 * 60 * 1000 : (stryCov_9fa48("260"), Date.now() + (stryMutAct_9fa48("261") ? 60 * 60 / 1000 : (stryCov_9fa48("261"), (stryMutAct_9fa48("262") ? 60 / 60 : (stryCov_9fa48("262"), 60 * 60)) * 1000)))).toISOString();
        const created = await Appointments.create(stryMutAct_9fa48("263") ? {} : (stryCov_9fa48("263"), {
          patientId: pid,
          doctorId: docId,
          date: inOneHour,
          status: stryMutAct_9fa48("264") ? "" : (stryCov_9fa48("264"), 'untreated')
        }));
        setAppointments(stryMutAct_9fa48("265") ? () => undefined : (stryCov_9fa48("265"), prev => stryMutAct_9fa48("266") ? [] : (stryCov_9fa48("266"), [created, ...prev])));
        setAssignChoice(stryMutAct_9fa48("267") ? () => undefined : (stryCov_9fa48("267"), prev => stryMutAct_9fa48("268") ? {} : (stryCov_9fa48("268"), {
          ...prev,
          [pid]: stryMutAct_9fa48("269") ? "Stryker was here!" : (stryCov_9fa48("269"), '')
        })));
      }
    }
    return <div className="card" style={stryMutAct_9fa48("270") ? {} : (stryCov_9fa48("270"), {
      marginTop: 16
    })}>
      <div className="header">
        <h2>Doctor Assignments</h2>
      </div>
      {stryMutAct_9fa48("273") ? error || <div className="error">{error}</div> : stryMutAct_9fa48("272") ? false : stryMutAct_9fa48("271") ? true : (stryCov_9fa48("271", "272", "273"), error && <div className="error">{error}</div>)}
      {loading ? <div className="muted">Loading…</div> : <>
          <div className="card" style={stryMutAct_9fa48("274") ? {} : (stryCov_9fa48("274"), {
          marginBottom: 12
        })}>
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
                  {stryMutAct_9fa48("277") ? unassigned.length === 0 || <tr><td className="muted" colSpan={3}>All patients have an assigned appointment</td></tr> : stryMutAct_9fa48("276") ? false : stryMutAct_9fa48("275") ? true : (stryCov_9fa48("275", "276", "277"), (stryMutAct_9fa48("279") ? unassigned.length !== 0 : stryMutAct_9fa48("278") ? true : (stryCov_9fa48("278", "279"), unassigned.length === 0)) && <tr><td className="muted" colSpan={3}>All patients have an assigned appointment</td></tr>)}
                  {unassigned.map(stryMutAct_9fa48("280") ? () => undefined : (stryCov_9fa48("280"), p => <tr key={p.id}>
                      <td>{stryMutAct_9fa48("283") ? (p.name || p.fullName) && `Patient #${p.id}` : stryMutAct_9fa48("282") ? false : stryMutAct_9fa48("281") ? true : (stryCov_9fa48("281", "282", "283"), (stryMutAct_9fa48("285") ? p.name && p.fullName : stryMutAct_9fa48("284") ? false : (stryCov_9fa48("284", "285"), p.name || p.fullName)) || (stryMutAct_9fa48("286") ? `` : (stryCov_9fa48("286"), `Patient #${p.id}`)))}</td>
                      <td>
                        <select value={stryMutAct_9fa48("289") ? assignChoice[p.id] && '' : stryMutAct_9fa48("288") ? false : stryMutAct_9fa48("287") ? true : (stryCov_9fa48("287", "288", "289"), assignChoice[p.id] || (stryMutAct_9fa48("290") ? "Stryker was here!" : (stryCov_9fa48("290"), '')))} onChange={stryMutAct_9fa48("291") ? () => undefined : (stryCov_9fa48("291"), e => setAssignChoice(stryMutAct_9fa48("292") ? () => undefined : (stryCov_9fa48("292"), prev => stryMutAct_9fa48("293") ? {} : (stryCov_9fa48("293"), {
                      ...prev,
                      [p.id]: e.target.value
                    }))))}>
                          <option value="">Select a doctor…</option>
                          {doctors.map(stryMutAct_9fa48("294") ? () => undefined : (stryCov_9fa48("294"), d => <option value={d.id} key={d.id}>{stryMutAct_9fa48("297") ? (d.name || d.fullName) && `Doctor #${d.id}` : stryMutAct_9fa48("296") ? false : stryMutAct_9fa48("295") ? true : (stryCov_9fa48("295", "296", "297"), (stryMutAct_9fa48("299") ? d.name && d.fullName : stryMutAct_9fa48("298") ? false : (stryCov_9fa48("298", "299"), d.name || d.fullName)) || (stryMutAct_9fa48("300") ? `` : (stryCov_9fa48("300"), `Doctor #${d.id}`)))}</option>))}
                        </select>
                      </td>
                      <td>
                        <button className="btn-secondary" onClick={stryMutAct_9fa48("301") ? () => undefined : (stryCov_9fa48("301"), () => assignPatient(p.id))} disabled={stryMutAct_9fa48("302") ? assignChoice[p.id] : (stryCov_9fa48("302"), !assignChoice[p.id])}>Assign</button>
                      </td>
                    </tr>))}
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
                {appointments.map(stryMutAct_9fa48("303") ? () => undefined : (stryCov_9fa48("303"), a => <tr key={a.id}>
                    <td>{nameById(patients, a.patientId)}</td>
                    <td>{nameById(doctors, a.doctorId)}</td>
                    <td>{stryMutAct_9fa48("306") ? (a.date || a.datetime) && '' : stryMutAct_9fa48("305") ? false : stryMutAct_9fa48("304") ? true : (stryCov_9fa48("304", "305", "306"), (stryMutAct_9fa48("308") ? a.date && a.datetime : stryMutAct_9fa48("307") ? false : (stryCov_9fa48("307", "308"), a.date || a.datetime)) || (stryMutAct_9fa48("309") ? "Stryker was here!" : (stryCov_9fa48("309"), '')))}</td>
                    <td>
                      <span className={stryMutAct_9fa48("310") ? `` : (stryCov_9fa48("310"), `status ${(stryMutAct_9fa48("313") ? a.status !== 'treated' : stryMutAct_9fa48("312") ? false : stryMutAct_9fa48("311") ? true : (stryCov_9fa48("311", "312", "313"), a.status === (stryMutAct_9fa48("314") ? "" : (stryCov_9fa48("314"), 'treated')))) ? stryMutAct_9fa48("315") ? "" : (stryCov_9fa48("315"), 'treated') : stryMutAct_9fa48("316") ? "" : (stryCov_9fa48("316"), 'untreated')}`)}>
                        {(stryMutAct_9fa48("319") ? a.status !== 'treated' : stryMutAct_9fa48("318") ? false : stryMutAct_9fa48("317") ? true : (stryCov_9fa48("317", "318", "319"), a.status === (stryMutAct_9fa48("320") ? "" : (stryCov_9fa48("320"), 'treated')))) ? stryMutAct_9fa48("321") ? "" : (stryCov_9fa48("321"), 'Treated') : stryMutAct_9fa48("322") ? "" : (stryCov_9fa48("322"), 'Untreated')}
                      </span>
                    </td>
                    <td className="actions">
                      <button onClick={stryMutAct_9fa48("323") ? () => undefined : (stryCov_9fa48("323"), () => toggleStatus(a))}>
                        Mark {(stryMutAct_9fa48("326") ? a.status !== 'treated' : stryMutAct_9fa48("325") ? false : stryMutAct_9fa48("324") ? true : (stryCov_9fa48("324", "325", "326"), a.status === (stryMutAct_9fa48("327") ? "" : (stryCov_9fa48("327"), 'treated')))) ? stryMutAct_9fa48("328") ? "" : (stryCov_9fa48("328"), 'Untreated') : stryMutAct_9fa48("329") ? "" : (stryCov_9fa48("329"), 'Treated')}
                      </button>
                    </td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </>}
    </div>;
  }
}