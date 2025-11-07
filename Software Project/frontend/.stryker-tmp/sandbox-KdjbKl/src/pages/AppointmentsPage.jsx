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
import { Appointments, Patients, Doctors } from '../api';
export default function AppointmentsPage() {
  if (stryMutAct_9fa48("915")) {
    {}
  } else {
    stryCov_9fa48("915");
    const [items, setItems] = useState(stryMutAct_9fa48("916") ? ["Stryker was here"] : (stryCov_9fa48("916"), []));
    const [patients, setPatients] = useState(stryMutAct_9fa48("917") ? ["Stryker was here"] : (stryCov_9fa48("917"), []));
    const [doctors, setDoctors] = useState(stryMutAct_9fa48("918") ? ["Stryker was here"] : (stryCov_9fa48("918"), []));
    const [loading, setLoading] = useState(stryMutAct_9fa48("919") ? true : (stryCov_9fa48("919"), false));
    const [error, setError] = useState(stryMutAct_9fa48("920") ? "Stryker was here!" : (stryCov_9fa48("920"), ''));
    const [form, setForm] = useState(stryMutAct_9fa48("921") ? {} : (stryCov_9fa48("921"), {
      patientId: stryMutAct_9fa48("922") ? "Stryker was here!" : (stryCov_9fa48("922"), ''),
      doctorId: stryMutAct_9fa48("923") ? "Stryker was here!" : (stryCov_9fa48("923"), ''),
      date: stryMutAct_9fa48("924") ? "Stryker was here!" : (stryCov_9fa48("924"), ''),
      time: stryMutAct_9fa48("925") ? "Stryker was here!" : (stryCov_9fa48("925"), ''),
      reason: stryMutAct_9fa48("926") ? "Stryker was here!" : (stryCov_9fa48("926"), '')
    }));
    async function load() {
      if (stryMutAct_9fa48("927")) {
        {}
      } else {
        stryCov_9fa48("927");
        setLoading(stryMutAct_9fa48("928") ? false : (stryCov_9fa48("928"), true));
        setError(stryMutAct_9fa48("929") ? "Stryker was here!" : (stryCov_9fa48("929"), ''));
        try {
          if (stryMutAct_9fa48("930")) {
            {}
          } else {
            stryCov_9fa48("930");
            setItems(await Appointments.list());
            setPatients(await Patients.list());
            setDoctors(await Doctors.list());
          }
        } catch {
          if (stryMutAct_9fa48("931")) {
            {}
          } else {
            stryCov_9fa48("931");
            setError(stryMutAct_9fa48("932") ? "" : (stryCov_9fa48("932"), 'Failed to load appointments'));
          }
        }
        setLoading(stryMutAct_9fa48("933") ? true : (stryCov_9fa48("933"), false));
      }
    }
    useEffect(() => {
      if (stryMutAct_9fa48("934")) {
        {}
      } else {
        stryCov_9fa48("934");
        load();
      }
    }, stryMutAct_9fa48("935") ? ["Stryker was here"] : (stryCov_9fa48("935"), []));
    async function create(e) {
      if (stryMutAct_9fa48("936")) {
        {}
      } else {
        stryCov_9fa48("936");
        e.preventDefault();
        try {
          if (stryMutAct_9fa48("937")) {
            {}
          } else {
            stryCov_9fa48("937");
            await Appointments.create(form);
            setForm(stryMutAct_9fa48("938") ? {} : (stryCov_9fa48("938"), {
              patientId: stryMutAct_9fa48("939") ? "Stryker was here!" : (stryCov_9fa48("939"), ''),
              doctorId: stryMutAct_9fa48("940") ? "Stryker was here!" : (stryCov_9fa48("940"), ''),
              date: stryMutAct_9fa48("941") ? "Stryker was here!" : (stryCov_9fa48("941"), ''),
              time: stryMutAct_9fa48("942") ? "Stryker was here!" : (stryCov_9fa48("942"), ''),
              reason: stryMutAct_9fa48("943") ? "Stryker was here!" : (stryCov_9fa48("943"), '')
            }));
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("944")) {
            {}
          } else {
            stryCov_9fa48("944");
            setError(stryMutAct_9fa48("945") ? "" : (stryCov_9fa48("945"), 'Failed to create'));
          }
        }
      }
    }
    async function remove(id) {
      if (stryMutAct_9fa48("946")) {
        {}
      } else {
        stryCov_9fa48("946");
        try {
          if (stryMutAct_9fa48("947")) {
            {}
          } else {
            stryCov_9fa48("947");
            await Appointments.remove(id);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("948")) {
            {}
          } else {
            stryCov_9fa48("948");
            setError(stryMutAct_9fa48("949") ? "" : (stryCov_9fa48("949"), 'Failed to delete'));
          }
        }
      }
    }
    async function patch(id, patch) {
      if (stryMutAct_9fa48("950")) {
        {}
      } else {
        stryCov_9fa48("950");
        try {
          if (stryMutAct_9fa48("951")) {
            {}
          } else {
            stryCov_9fa48("951");
            await Appointments.patch(id, patch);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("952")) {
            {}
          } else {
            stryCov_9fa48("952");
            setError(stryMutAct_9fa48("953") ? "" : (stryCov_9fa48("953"), 'Failed to update'));
          }
        }
      }
    }

    // Only upcoming appointments: date/time >= now
    const now = new Date();
    const toDateTime = a => {
      if (stryMutAct_9fa48("954")) {
        {}
      } else {
        stryCov_9fa48("954");
        const d = stryMutAct_9fa48("957") ? a.date && a.datetime : stryMutAct_9fa48("956") ? false : stryMutAct_9fa48("955") ? true : (stryCov_9fa48("955", "956", "957"), a.date || a.datetime);
        if (stryMutAct_9fa48("960") ? false : stryMutAct_9fa48("959") ? true : stryMutAct_9fa48("958") ? d : (stryCov_9fa48("958", "959", "960"), !d)) return null;
        // combine date + time if provided
        const iso = a.time ? stryMutAct_9fa48("961") ? `` : (stryCov_9fa48("961"), `${d}T${a.time}`) : d;
        const dt = new Date(iso);
        return isNaN(dt.getTime()) ? null : dt;
      }
    };
    const upcoming = stryMutAct_9fa48("962") ? items : (stryCov_9fa48("962"), items.filter(a => {
      if (stryMutAct_9fa48("963")) {
        {}
      } else {
        stryCov_9fa48("963");
        const dt = toDateTime(a);
        return stryMutAct_9fa48("966") ? !dt && dt >= now : stryMutAct_9fa48("965") ? false : stryMutAct_9fa48("964") ? true : (stryCov_9fa48("964", "965", "966"), (stryMutAct_9fa48("967") ? dt : (stryCov_9fa48("967"), !dt)) || (stryMutAct_9fa48("970") ? dt < now : stryMutAct_9fa48("969") ? dt > now : stryMutAct_9fa48("968") ? false : (stryCov_9fa48("968", "969", "970"), dt >= now)));
      }
    }));
    // Past appointments: strictly before now
    const past = stryMutAct_9fa48("971") ? items : (stryCov_9fa48("971"), items.filter(a => {
      if (stryMutAct_9fa48("972")) {
        {}
      } else {
        stryCov_9fa48("972");
        const dt = toDateTime(a);
        return stryMutAct_9fa48("975") ? dt || dt < now : stryMutAct_9fa48("974") ? false : stryMutAct_9fa48("973") ? true : (stryCov_9fa48("973", "974", "975"), dt && (stryMutAct_9fa48("978") ? dt >= now : stryMutAct_9fa48("977") ? dt <= now : stryMutAct_9fa48("976") ? true : (stryCov_9fa48("976", "977", "978"), dt < now)));
      }
    }));
    return <div className="container">
      <header className="header">
        <h1>Appointments {loading ? stryMutAct_9fa48("979") ? "" : (stryCov_9fa48("979"), '…') : stryMutAct_9fa48("980") ? "Stryker was here!" : (stryCov_9fa48("980"), '')}</h1>
      </header>
      {stryMutAct_9fa48("983") ? error || <div className="error" role="alert">{error}</div> : stryMutAct_9fa48("982") ? false : stryMutAct_9fa48("981") ? true : (stryCov_9fa48("981", "982", "983"), error && <div className="error" role="alert">{error}</div>)}

      <div className="main" style={stryMutAct_9fa48("984") ? {} : (stryCov_9fa48("984"), {
        gridTemplateColumns: stryMutAct_9fa48("985") ? "" : (stryCov_9fa48("985"), '1fr 2fr')
      })}>
        <form className="card" onSubmit={create}>
          <h3>Book Appointment</h3>
          <div className="field"><label>Patient</label>
            <select value={form.patientId} onChange={stryMutAct_9fa48("986") ? () => undefined : (stryCov_9fa48("986"), e => setForm(stryMutAct_9fa48("987") ? {} : (stryCov_9fa48("987"), {
              ...form,
              patientId: e.target.value
            })))} required>
              <option value="">Select</option>
              {patients.map(stryMutAct_9fa48("988") ? () => undefined : (stryCov_9fa48("988"), p => <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
          </div>
          <div className="field"><label>Doctor</label>
            <select value={form.doctorId} onChange={stryMutAct_9fa48("989") ? () => undefined : (stryCov_9fa48("989"), e => setForm(stryMutAct_9fa48("990") ? {} : (stryCov_9fa48("990"), {
              ...form,
              doctorId: e.target.value
            })))} required>
              <option value="">Select</option>
              {doctors.map(stryMutAct_9fa48("991") ? () => undefined : (stryCov_9fa48("991"), d => <option key={d.id} value={d.id}>{d.name} ({d.specialty})</option>))}
            </select>
          </div>
          <div className="field"><label>Date</label><input type="date" value={form.date} onChange={stryMutAct_9fa48("992") ? () => undefined : (stryCov_9fa48("992"), e => setForm(stryMutAct_9fa48("993") ? {} : (stryCov_9fa48("993"), {
              ...form,
              date: e.target.value
            })))} required /></div>
          <div className="field"><label>Time</label><input type="time" value={form.time} onChange={stryMutAct_9fa48("994") ? () => undefined : (stryCov_9fa48("994"), e => setForm(stryMutAct_9fa48("995") ? {} : (stryCov_9fa48("995"), {
              ...form,
              time: e.target.value
            })))} required /></div>
          <div className="field"><label>Reason</label><input value={form.reason} onChange={stryMutAct_9fa48("996") ? () => undefined : (stryCov_9fa48("996"), e => setForm(stryMutAct_9fa48("997") ? {} : (stryCov_9fa48("997"), {
              ...form,
              reason: e.target.value
            })))} /></div>
          <div className="actions"><button type="submit">Save</button></div>
        </form>

        <div>
          <h3>Upcoming Appointments</h3>
          <ul className="list">
            {upcoming.map(stryMutAct_9fa48("998") ? () => undefined : (stryCov_9fa48("998"), a => <li key={a.id} className="list-item">
                <div className="title"><span>{a.date} {a.time}</span></div>
                <div className="meta">
                  {stryMutAct_9fa48("1001") ? a.patientId || <span className="badge">Patient #{a.patientId}</span> : stryMutAct_9fa48("1000") ? false : stryMutAct_9fa48("999") ? true : (stryCov_9fa48("999", "1000", "1001"), a.patientId && <span className="badge">Patient #{a.patientId}</span>)}
                  {stryMutAct_9fa48("1004") ? a.doctorId || <span className="badge">Doctor #{a.doctorId}</span> : stryMutAct_9fa48("1003") ? false : stryMutAct_9fa48("1002") ? true : (stryCov_9fa48("1002", "1003", "1004"), a.doctorId && <span className="badge">Doctor #{a.doctorId}</span>)}
                  {stryMutAct_9fa48("1007") ? a.reason || <span className="badge">{a.reason}</span> : stryMutAct_9fa48("1006") ? false : stryMutAct_9fa48("1005") ? true : (stryCov_9fa48("1005", "1006", "1007"), a.reason && <span className="badge">{a.reason}</span>)}
                  <button className="link" onClick={stryMutAct_9fa48("1008") ? () => undefined : (stryCov_9fa48("1008"), () => patch(a.id, stryMutAct_9fa48("1009") ? {} : (stryCov_9fa48("1009"), {
                  reason: stryMutAct_9fa48("1012") ? prompt('Update reason', a.reason || '') && a.reason : stryMutAct_9fa48("1011") ? false : stryMutAct_9fa48("1010") ? true : (stryCov_9fa48("1010", "1011", "1012"), prompt(stryMutAct_9fa48("1013") ? "" : (stryCov_9fa48("1013"), 'Update reason'), stryMutAct_9fa48("1016") ? a.reason && '' : stryMutAct_9fa48("1015") ? false : stryMutAct_9fa48("1014") ? true : (stryCov_9fa48("1014", "1015", "1016"), a.reason || (stryMutAct_9fa48("1017") ? "Stryker was here!" : (stryCov_9fa48("1017"), '')))) || a.reason)
                })))}>Edit</button>
                  <button className="link" onClick={stryMutAct_9fa48("1018") ? () => undefined : (stryCov_9fa48("1018"), () => remove(a.id))}>Delete</button>
                </div>
              </li>))}
            {stryMutAct_9fa48("1021") ? upcoming.length === 0 || <li className="list-item"><div className="title"><span className="muted">No upcoming appointments</span></div></li> : stryMutAct_9fa48("1020") ? false : stryMutAct_9fa48("1019") ? true : (stryCov_9fa48("1019", "1020", "1021"), (stryMutAct_9fa48("1023") ? upcoming.length !== 0 : stryMutAct_9fa48("1022") ? true : (stryCov_9fa48("1022", "1023"), upcoming.length === 0)) && <li className="list-item"><div className="title"><span className="muted">No upcoming appointments</span></div></li>)}
          </ul>

          <h3 style={stryMutAct_9fa48("1024") ? {} : (stryCov_9fa48("1024"), {
            marginTop: 16
          })}>Past Appointments</h3>
          <ul className="list">
            {past.map(stryMutAct_9fa48("1025") ? () => undefined : (stryCov_9fa48("1025"), a => <li key={a.id} className="list-item">
                <div className="title"><span>{a.date} {a.time}</span></div>
                <div className="meta">
                  {stryMutAct_9fa48("1028") ? a.patientId || <span className="badge">Patient #{a.patientId}</span> : stryMutAct_9fa48("1027") ? false : stryMutAct_9fa48("1026") ? true : (stryCov_9fa48("1026", "1027", "1028"), a.patientId && <span className="badge">Patient #{a.patientId}</span>)}
                  {stryMutAct_9fa48("1031") ? a.doctorId || <span className="badge">Doctor #{a.doctorId}</span> : stryMutAct_9fa48("1030") ? false : stryMutAct_9fa48("1029") ? true : (stryCov_9fa48("1029", "1030", "1031"), a.doctorId && <span className="badge">Doctor #{a.doctorId}</span>)}
                  {stryMutAct_9fa48("1034") ? a.reason || <span className="badge">{a.reason}</span> : stryMutAct_9fa48("1033") ? false : stryMutAct_9fa48("1032") ? true : (stryCov_9fa48("1032", "1033", "1034"), a.reason && <span className="badge">{a.reason}</span>)}
                  <button className="link" onClick={stryMutAct_9fa48("1035") ? () => undefined : (stryCov_9fa48("1035"), () => remove(a.id))}>Cancel</button>
                </div>
              </li>))}
            {stryMutAct_9fa48("1038") ? past.length === 0 || <li className="list-item"><div className="title"><span className="muted">No past appointments</span></div></li> : stryMutAct_9fa48("1037") ? false : stryMutAct_9fa48("1036") ? true : (stryCov_9fa48("1036", "1037", "1038"), (stryMutAct_9fa48("1040") ? past.length !== 0 : stryMutAct_9fa48("1039") ? true : (stryCov_9fa48("1039", "1040"), past.length === 0)) && <li className="list-item"><div className="title"><span className="muted">No past appointments</span></div></li>)}
          </ul>
        </div>
      </div>
    </div>;
  }
}