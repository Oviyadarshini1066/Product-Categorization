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
import { Doctors, Appointments, Patients } from '../api';
export default function DoctorsPage() {
  if (stryMutAct_9fa48("1138")) {
    {}
  } else {
    stryCov_9fa48("1138");
    const [items, setItems] = useState(stryMutAct_9fa48("1139") ? ["Stryker was here"] : (stryCov_9fa48("1139"), []));
    const [appointments, setAppointments] = useState(stryMutAct_9fa48("1140") ? ["Stryker was here"] : (stryCov_9fa48("1140"), []));
    const [patients, setPatients] = useState(stryMutAct_9fa48("1141") ? ["Stryker was here"] : (stryCov_9fa48("1141"), []));
    const [loading, setLoading] = useState(stryMutAct_9fa48("1142") ? true : (stryCov_9fa48("1142"), false));
    const [error, setError] = useState(stryMutAct_9fa48("1143") ? "Stryker was here!" : (stryCov_9fa48("1143"), ''));
    const [form, setForm] = useState(stryMutAct_9fa48("1144") ? {} : (stryCov_9fa48("1144"), {
      name: stryMutAct_9fa48("1145") ? "Stryker was here!" : (stryCov_9fa48("1145"), ''),
      specialty: stryMutAct_9fa48("1146") ? "Stryker was here!" : (stryCov_9fa48("1146"), ''),
      contact: stryMutAct_9fa48("1147") ? "Stryker was here!" : (stryCov_9fa48("1147"), ''),
      licenseNo: stryMutAct_9fa48("1148") ? "Stryker was here!" : (stryCov_9fa48("1148"), '')
    }));
    const [selected, setSelected] = useState(stryMutAct_9fa48("1149") ? "Stryker was here!" : (stryCov_9fa48("1149"), ''));
    async function load() {
      if (stryMutAct_9fa48("1150")) {
        {}
      } else {
        stryCov_9fa48("1150");
        setLoading(stryMutAct_9fa48("1151") ? false : (stryCov_9fa48("1151"), true));
        setError(stryMutAct_9fa48("1152") ? "Stryker was here!" : (stryCov_9fa48("1152"), ''));
        try {
          if (stryMutAct_9fa48("1153")) {
            {}
          } else {
            stryCov_9fa48("1153");
            const [docs, apts, pats] = await Promise.all(stryMutAct_9fa48("1154") ? [] : (stryCov_9fa48("1154"), [Doctors.list(), Appointments.list(), Patients.list()]));
            setItems(docs);
            setAppointments(apts);
            setPatients(pats);
            if (stryMutAct_9fa48("1157") ? !selected || docs.length : stryMutAct_9fa48("1156") ? false : stryMutAct_9fa48("1155") ? true : (stryCov_9fa48("1155", "1156", "1157"), (stryMutAct_9fa48("1158") ? selected : (stryCov_9fa48("1158"), !selected)) && docs.length)) setSelected(String(docs[0].id));
          }
        } catch {
          if (stryMutAct_9fa48("1159")) {
            {}
          } else {
            stryCov_9fa48("1159");
            setError(stryMutAct_9fa48("1160") ? "" : (stryCov_9fa48("1160"), 'Failed to load doctors'));
          }
        }
        setLoading(stryMutAct_9fa48("1161") ? true : (stryCov_9fa48("1161"), false));
      }
    }
    useEffect(() => {
      if (stryMutAct_9fa48("1162")) {
        {}
      } else {
        stryCov_9fa48("1162");
        load();
      }
    }, stryMutAct_9fa48("1163") ? ["Stryker was here"] : (stryCov_9fa48("1163"), []));
    async function create(e) {
      if (stryMutAct_9fa48("1164")) {
        {}
      } else {
        stryCov_9fa48("1164");
        e.preventDefault();
        try {
          if (stryMutAct_9fa48("1165")) {
            {}
          } else {
            stryCov_9fa48("1165");
            await Doctors.create(form);
            setForm(stryMutAct_9fa48("1166") ? {} : (stryCov_9fa48("1166"), {
              name: stryMutAct_9fa48("1167") ? "Stryker was here!" : (stryCov_9fa48("1167"), ''),
              specialty: stryMutAct_9fa48("1168") ? "Stryker was here!" : (stryCov_9fa48("1168"), ''),
              contact: stryMutAct_9fa48("1169") ? "Stryker was here!" : (stryCov_9fa48("1169"), ''),
              licenseNo: stryMutAct_9fa48("1170") ? "Stryker was here!" : (stryCov_9fa48("1170"), '')
            }));
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1171")) {
            {}
          } else {
            stryCov_9fa48("1171");
            setError(stryMutAct_9fa48("1172") ? "" : (stryCov_9fa48("1172"), 'Failed to create'));
          }
        }
      }
    }
    async function remove(id) {
      if (stryMutAct_9fa48("1173")) {
        {}
      } else {
        stryCov_9fa48("1173");
        try {
          if (stryMutAct_9fa48("1174")) {
            {}
          } else {
            stryCov_9fa48("1174");
            await Doctors.remove(id);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1175")) {
            {}
          } else {
            stryCov_9fa48("1175");
            setError(stryMutAct_9fa48("1176") ? "" : (stryCov_9fa48("1176"), 'Failed to delete'));
          }
        }
      }
    }
    async function patch(id, patch) {
      if (stryMutAct_9fa48("1177")) {
        {}
      } else {
        stryCov_9fa48("1177");
        try {
          if (stryMutAct_9fa48("1178")) {
            {}
          } else {
            stryCov_9fa48("1178");
            await Doctors.patch(id, patch);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1179")) {
            {}
          } else {
            stryCov_9fa48("1179");
            setError(stryMutAct_9fa48("1180") ? "" : (stryCov_9fa48("1180"), 'Failed to update'));
          }
        }
      }
    }
    const nameById = (list, id) => {
      if (stryMutAct_9fa48("1181")) {
        {}
      } else {
        stryCov_9fa48("1181");
        const x = list.find(stryMutAct_9fa48("1182") ? () => undefined : (stryCov_9fa48("1182"), i => stryMutAct_9fa48("1185") ? String(i.id) !== String(id) : stryMutAct_9fa48("1184") ? false : stryMutAct_9fa48("1183") ? true : (stryCov_9fa48("1183", "1184", "1185"), String(i.id) === String(id))));
        return x ? stryMutAct_9fa48("1188") ? (x.name || x.fullName || x.title) && `#${id}` : stryMutAct_9fa48("1187") ? false : stryMutAct_9fa48("1186") ? true : (stryCov_9fa48("1186", "1187", "1188"), (stryMutAct_9fa48("1190") ? (x.name || x.fullName) && x.title : stryMutAct_9fa48("1189") ? false : (stryCov_9fa48("1189", "1190"), (stryMutAct_9fa48("1192") ? x.name && x.fullName : stryMutAct_9fa48("1191") ? false : (stryCov_9fa48("1191", "1192"), x.name || x.fullName)) || x.title)) || (stryMutAct_9fa48("1193") ? `` : (stryCov_9fa48("1193"), `#${id}`))) : stryMutAct_9fa48("1194") ? "" : (stryCov_9fa48("1194"), '(Deleted patient)');
      }
    };

    // Only consider appointments whose patient still exists
    const forDoctor = stryMutAct_9fa48("1195") ? appointments : (stryCov_9fa48("1195"), appointments.filter(stryMutAct_9fa48("1196") ? () => undefined : (stryCov_9fa48("1196"), a => stryMutAct_9fa48("1199") ? String(a.doctorId) === String(selected) || patients.some(p => String(p.id) === String(a.patientId)) : stryMutAct_9fa48("1198") ? false : stryMutAct_9fa48("1197") ? true : (stryCov_9fa48("1197", "1198", "1199"), (stryMutAct_9fa48("1201") ? String(a.doctorId) !== String(selected) : stryMutAct_9fa48("1200") ? true : (stryCov_9fa48("1200", "1201"), String(a.doctorId) === String(selected))) && (stryMutAct_9fa48("1202") ? patients.every(p => String(p.id) === String(a.patientId)) : (stryCov_9fa48("1202"), patients.some(stryMutAct_9fa48("1203") ? () => undefined : (stryCov_9fa48("1203"), p => stryMutAct_9fa48("1206") ? String(p.id) !== String(a.patientId) : stryMutAct_9fa48("1205") ? false : stryMutAct_9fa48("1204") ? true : (stryCov_9fa48("1204", "1205", "1206"), String(p.id) === String(a.patientId))))))))));
    const now = new Date();
    const toDate = stryMutAct_9fa48("1207") ? () => undefined : (stryCov_9fa48("1207"), (() => {
      const toDate = raw => raw ? new Date(raw) : null;
      return toDate;
    })());
    const upcoming = stryMutAct_9fa48("1208") ? forDoctor : (stryCov_9fa48("1208"), forDoctor.filter(a => {
      if (stryMutAct_9fa48("1209")) {
        {}
      } else {
        stryCov_9fa48("1209");
        const d = toDate(stryMutAct_9fa48("1212") ? a.date && a.datetime : stryMutAct_9fa48("1211") ? false : stryMutAct_9fa48("1210") ? true : (stryCov_9fa48("1210", "1211", "1212"), a.date || a.datetime));
        return stryMutAct_9fa48("1215") ? !d && d >= now : stryMutAct_9fa48("1214") ? false : stryMutAct_9fa48("1213") ? true : (stryCov_9fa48("1213", "1214", "1215"), (stryMutAct_9fa48("1216") ? d : (stryCov_9fa48("1216"), !d)) || (stryMutAct_9fa48("1219") ? d < now : stryMutAct_9fa48("1218") ? d > now : stryMutAct_9fa48("1217") ? false : (stryCov_9fa48("1217", "1218", "1219"), d >= now)));
      }
    }));
    const completed = stryMutAct_9fa48("1220") ? forDoctor : (stryCov_9fa48("1220"), forDoctor.filter(a => {
      if (stryMutAct_9fa48("1221")) {
        {}
      } else {
        stryCov_9fa48("1221");
        const d = toDate(stryMutAct_9fa48("1224") ? a.date && a.datetime : stryMutAct_9fa48("1223") ? false : stryMutAct_9fa48("1222") ? true : (stryCov_9fa48("1222", "1223", "1224"), a.date || a.datetime));
        return stryMutAct_9fa48("1227") ? !!d || d < now : stryMutAct_9fa48("1226") ? false : stryMutAct_9fa48("1225") ? true : (stryCov_9fa48("1225", "1226", "1227"), (stryMutAct_9fa48("1228") ? !d : (stryCov_9fa48("1228"), !(stryMutAct_9fa48("1229") ? d : (stryCov_9fa48("1229"), !d)))) && (stryMutAct_9fa48("1232") ? d >= now : stryMutAct_9fa48("1231") ? d <= now : stryMutAct_9fa48("1230") ? true : (stryCov_9fa48("1230", "1231", "1232"), d < now)));
      }
    }));
    return <div className="container">
      <header className="header">
        <h1>Doctors {loading ? stryMutAct_9fa48("1233") ? "" : (stryCov_9fa48("1233"), '…') : stryMutAct_9fa48("1234") ? "Stryker was here!" : (stryCov_9fa48("1234"), '')}</h1>
      </header>
      {stryMutAct_9fa48("1237") ? error || <div className="error" role="alert">{error}</div> : stryMutAct_9fa48("1236") ? false : stryMutAct_9fa48("1235") ? true : (stryCov_9fa48("1235", "1236", "1237"), error && <div className="error" role="alert">{error}</div>)}

      <div className="main" style={stryMutAct_9fa48("1238") ? {} : (stryCov_9fa48("1238"), {
        gridTemplateColumns: stryMutAct_9fa48("1239") ? "" : (stryCov_9fa48("1239"), '1fr')
      })}>
        <div>
          <div className="card" style={stryMutAct_9fa48("1240") ? {} : (stryCov_9fa48("1240"), {
            marginBottom: 12
          })}>
            <h3 className="page-title">Doctor Directory</h3>
            <div className="field">
              <label>View schedule for</label>
              <select value={selected} onChange={stryMutAct_9fa48("1241") ? () => undefined : (stryCov_9fa48("1241"), e => setSelected(e.target.value))}>
                {items.map(stryMutAct_9fa48("1242") ? () => undefined : (stryCov_9fa48("1242"), d => <option key={d.id} value={d.id}>{d.name} {d.specialty ? stryMutAct_9fa48("1243") ? `` : (stryCov_9fa48("1243"), `— ${d.specialty}`) : stryMutAct_9fa48("1244") ? "Stryker was here!" : (stryCov_9fa48("1244"), '')}</option>))}
              </select>
            </div>

            {/* Scheduling removed intentionally; use Booking page for creating appointments */}
          </div>

          <div className="main" style={stryMutAct_9fa48("1245") ? {} : (stryCov_9fa48("1245"), {
            gridTemplateColumns: stryMutAct_9fa48("1246") ? "" : (stryCov_9fa48("1246"), '1fr 1fr')
          })}>
            <div className="card">
              <div className="header"><h3 className="page-title">Upcoming</h3></div>
              <ul className="list">
                {stryMutAct_9fa48("1249") ? upcoming.length === 0 || <li className="list-item"><div className="title"><span className="muted">No upcoming</span></div></li> : stryMutAct_9fa48("1248") ? false : stryMutAct_9fa48("1247") ? true : (stryCov_9fa48("1247", "1248", "1249"), (stryMutAct_9fa48("1251") ? upcoming.length !== 0 : stryMutAct_9fa48("1250") ? true : (stryCov_9fa48("1250", "1251"), upcoming.length === 0)) && <li className="list-item"><div className="title"><span className="muted">No upcoming</span></div></li>)}
                {upcoming.map(stryMutAct_9fa48("1252") ? () => undefined : (stryCov_9fa48("1252"), a => <li key={a.id} className="list-item">
                    <div className="title"><span>{nameById(patients, a.patientId)}</span></div>
                    <div className="meta">
                      {stryMutAct_9fa48("1255") ? a.date || <span className="badge">{a.date}</span> : stryMutAct_9fa48("1254") ? false : stryMutAct_9fa48("1253") ? true : (stryCov_9fa48("1253", "1254", "1255"), a.date && <span className="badge">{a.date}</span>)}
                      <span className="badge">Upcoming</span>
                    </div>
                  </li>))}
              </ul>
            </div>
            <div className="card">
              <div className="header"><h3 className="page-title">Completed</h3></div>
              <ul className="list">
                {stryMutAct_9fa48("1258") ? completed.length === 0 || <li className="list-item"><div className="title"><span className="muted">No completed</span></div></li> : stryMutAct_9fa48("1257") ? false : stryMutAct_9fa48("1256") ? true : (stryCov_9fa48("1256", "1257", "1258"), (stryMutAct_9fa48("1260") ? completed.length !== 0 : stryMutAct_9fa48("1259") ? true : (stryCov_9fa48("1259", "1260"), completed.length === 0)) && <li className="list-item"><div className="title"><span className="muted">No completed</span></div></li>)}
                {completed.map(stryMutAct_9fa48("1261") ? () => undefined : (stryCov_9fa48("1261"), a => <li key={a.id} className="list-item">
                    <div className="title"><span>{nameById(patients, a.patientId)}</span></div>
                    <div className="meta">
                      {stryMutAct_9fa48("1264") ? a.date || <span className="badge">{a.date}</span> : stryMutAct_9fa48("1263") ? false : stryMutAct_9fa48("1262") ? true : (stryCov_9fa48("1262", "1263", "1264"), a.date && <span className="badge">{a.date}</span>)}
                      <span className="badge">Completed</span>
                    </div>
                  </li>))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}