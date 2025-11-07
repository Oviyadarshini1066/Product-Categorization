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
import { Labs, Patients, Doctors } from '../api';
export default function LabOrdersPage() {
  if (stryMutAct_9fa48("1265")) {
    {}
  } else {
    stryCov_9fa48("1265");
    const [items, setItems] = useState(stryMutAct_9fa48("1266") ? ["Stryker was here"] : (stryCov_9fa48("1266"), []));
    const [patients, setPatients] = useState(stryMutAct_9fa48("1267") ? ["Stryker was here"] : (stryCov_9fa48("1267"), []));
    const [doctors, setDoctors] = useState(stryMutAct_9fa48("1268") ? ["Stryker was here"] : (stryCov_9fa48("1268"), []));
    const [loading, setLoading] = useState(stryMutAct_9fa48("1269") ? true : (stryCov_9fa48("1269"), false));
    const [error, setError] = useState(stryMutAct_9fa48("1270") ? "Stryker was here!" : (stryCov_9fa48("1270"), ''));
    const [form, setForm] = useState(stryMutAct_9fa48("1271") ? {} : (stryCov_9fa48("1271"), {
      patientId: stryMutAct_9fa48("1272") ? "Stryker was here!" : (stryCov_9fa48("1272"), ''),
      doctorId: stryMutAct_9fa48("1273") ? "Stryker was here!" : (stryCov_9fa48("1273"), ''),
      test: stryMutAct_9fa48("1274") ? "Stryker was here!" : (stryCov_9fa48("1274"), ''),
      sampleId: stryMutAct_9fa48("1275") ? "Stryker was here!" : (stryCov_9fa48("1275"), ''),
      status: stryMutAct_9fa48("1276") ? "" : (stryCov_9fa48("1276"), 'ordered'),
      result: stryMutAct_9fa48("1277") ? "Stryker was here!" : (stryCov_9fa48("1277"), '')
    }));
    async function load() {
      if (stryMutAct_9fa48("1278")) {
        {}
      } else {
        stryCov_9fa48("1278");
        setLoading(stryMutAct_9fa48("1279") ? false : (stryCov_9fa48("1279"), true));
        setError(stryMutAct_9fa48("1280") ? "Stryker was here!" : (stryCov_9fa48("1280"), ''));
        try {
          if (stryMutAct_9fa48("1281")) {
            {}
          } else {
            stryCov_9fa48("1281");
            const [list, pats, docs] = await Promise.all(stryMutAct_9fa48("1282") ? [] : (stryCov_9fa48("1282"), [Labs.list(), Patients.list(), Doctors.list()]));
            setItems(list);
            setPatients(pats);
            setDoctors(docs);
          }
        } catch {
          if (stryMutAct_9fa48("1283")) {
            {}
          } else {
            stryCov_9fa48("1283");
            setError(stryMutAct_9fa48("1284") ? "" : (stryCov_9fa48("1284"), 'Failed to load lab orders'));
          }
        }
        setLoading(stryMutAct_9fa48("1285") ? true : (stryCov_9fa48("1285"), false));
      }
    }
    useEffect(() => {
      if (stryMutAct_9fa48("1286")) {
        {}
      } else {
        stryCov_9fa48("1286");
        load();
      }
    }, stryMutAct_9fa48("1287") ? ["Stryker was here"] : (stryCov_9fa48("1287"), []));
    async function create(e) {
      if (stryMutAct_9fa48("1288")) {
        {}
      } else {
        stryCov_9fa48("1288");
        e.preventDefault();
        try {
          if (stryMutAct_9fa48("1289")) {
            {}
          } else {
            stryCov_9fa48("1289");
            await Labs.create(form);
            setForm(stryMutAct_9fa48("1290") ? {} : (stryCov_9fa48("1290"), {
              patientId: stryMutAct_9fa48("1291") ? "Stryker was here!" : (stryCov_9fa48("1291"), ''),
              doctorId: stryMutAct_9fa48("1292") ? "Stryker was here!" : (stryCov_9fa48("1292"), ''),
              test: stryMutAct_9fa48("1293") ? "Stryker was here!" : (stryCov_9fa48("1293"), ''),
              sampleId: stryMutAct_9fa48("1294") ? "Stryker was here!" : (stryCov_9fa48("1294"), ''),
              status: stryMutAct_9fa48("1295") ? "" : (stryCov_9fa48("1295"), 'ordered'),
              result: stryMutAct_9fa48("1296") ? "Stryker was here!" : (stryCov_9fa48("1296"), '')
            }));
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1297")) {
            {}
          } else {
            stryCov_9fa48("1297");
            setError(stryMutAct_9fa48("1298") ? "" : (stryCov_9fa48("1298"), 'Failed to create'));
          }
        }
      }
    }
    async function remove(id) {
      if (stryMutAct_9fa48("1299")) {
        {}
      } else {
        stryCov_9fa48("1299");
        try {
          if (stryMutAct_9fa48("1300")) {
            {}
          } else {
            stryCov_9fa48("1300");
            await Labs.remove(id);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1301")) {
            {}
          } else {
            stryCov_9fa48("1301");
            setError(stryMutAct_9fa48("1302") ? "" : (stryCov_9fa48("1302"), 'Failed to delete'));
          }
        }
      }
    }
    async function patch(id, patch) {
      if (stryMutAct_9fa48("1303")) {
        {}
      } else {
        stryCov_9fa48("1303");
        try {
          if (stryMutAct_9fa48("1304")) {
            {}
          } else {
            stryCov_9fa48("1304");
            await Labs.patch(id, patch);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1305")) {
            {}
          } else {
            stryCov_9fa48("1305");
            setError(stryMutAct_9fa48("1306") ? "" : (stryCov_9fa48("1306"), 'Failed to update'));
          }
        }
      }
    }
    const patientName = id => {
      if (stryMutAct_9fa48("1307")) {
        {}
      } else {
        stryCov_9fa48("1307");
        const p = patients.find(stryMutAct_9fa48("1308") ? () => undefined : (stryCov_9fa48("1308"), x => stryMutAct_9fa48("1311") ? String(x.id) !== String(id) : stryMutAct_9fa48("1310") ? false : stryMutAct_9fa48("1309") ? true : (stryCov_9fa48("1309", "1310", "1311"), String(x.id) === String(id))));
        return p ? stryMutAct_9fa48("1314") ? (p.name || p.fullName) && `#${id}` : stryMutAct_9fa48("1313") ? false : stryMutAct_9fa48("1312") ? true : (stryCov_9fa48("1312", "1313", "1314"), (stryMutAct_9fa48("1316") ? p.name && p.fullName : stryMutAct_9fa48("1315") ? false : (stryCov_9fa48("1315", "1316"), p.name || p.fullName)) || (stryMutAct_9fa48("1317") ? `` : (stryCov_9fa48("1317"), `#${id}`))) : stryMutAct_9fa48("1318") ? "" : (stryCov_9fa48("1318"), '(Deleted patient)');
      }
    };
    const doctorName = id => {
      if (stryMutAct_9fa48("1319")) {
        {}
      } else {
        stryCov_9fa48("1319");
        const d = doctors.find(stryMutAct_9fa48("1320") ? () => undefined : (stryCov_9fa48("1320"), x => stryMutAct_9fa48("1323") ? String(x.id) !== String(id) : stryMutAct_9fa48("1322") ? false : stryMutAct_9fa48("1321") ? true : (stryCov_9fa48("1321", "1322", "1323"), String(x.id) === String(id))));
        return d ? stryMutAct_9fa48("1326") ? (d.name || d.fullName) && `#${id}` : stryMutAct_9fa48("1325") ? false : stryMutAct_9fa48("1324") ? true : (stryCov_9fa48("1324", "1325", "1326"), (stryMutAct_9fa48("1328") ? d.name && d.fullName : stryMutAct_9fa48("1327") ? false : (stryCov_9fa48("1327", "1328"), d.name || d.fullName)) || (stryMutAct_9fa48("1329") ? `` : (stryCov_9fa48("1329"), `#${id}`))) : stryMutAct_9fa48("1330") ? "" : (stryCov_9fa48("1330"), '(Deleted doctor)');
      }
    };
    const visibleItems = stryMutAct_9fa48("1331") ? items : (stryCov_9fa48("1331"), items.filter(stryMutAct_9fa48("1332") ? () => undefined : (stryCov_9fa48("1332"), o => stryMutAct_9fa48("1335") ? patients.some(p => String(p.id) === String(o.patientId)) || doctors.some(d => String(d.id) === String(o.doctorId)) : stryMutAct_9fa48("1334") ? false : stryMutAct_9fa48("1333") ? true : (stryCov_9fa48("1333", "1334", "1335"), (stryMutAct_9fa48("1336") ? patients.every(p => String(p.id) === String(o.patientId)) : (stryCov_9fa48("1336"), patients.some(stryMutAct_9fa48("1337") ? () => undefined : (stryCov_9fa48("1337"), p => stryMutAct_9fa48("1340") ? String(p.id) !== String(o.patientId) : stryMutAct_9fa48("1339") ? false : stryMutAct_9fa48("1338") ? true : (stryCov_9fa48("1338", "1339", "1340"), String(p.id) === String(o.patientId)))))) && (stryMutAct_9fa48("1341") ? doctors.every(d => String(d.id) === String(o.doctorId)) : (stryCov_9fa48("1341"), doctors.some(stryMutAct_9fa48("1342") ? () => undefined : (stryCov_9fa48("1342"), d => stryMutAct_9fa48("1345") ? String(d.id) !== String(o.doctorId) : stryMutAct_9fa48("1344") ? false : stryMutAct_9fa48("1343") ? true : (stryCov_9fa48("1343", "1344", "1345"), String(d.id) === String(o.doctorId))))))))));
    return <div className="container">
      <header className="header">
        <h1>Lab Orders {loading ? stryMutAct_9fa48("1346") ? "" : (stryCov_9fa48("1346"), '…') : stryMutAct_9fa48("1347") ? "Stryker was here!" : (stryCov_9fa48("1347"), '')}</h1>
      </header>
      {stryMutAct_9fa48("1350") ? error || <div className="error" role="alert">{error}</div> : stryMutAct_9fa48("1349") ? false : stryMutAct_9fa48("1348") ? true : (stryCov_9fa48("1348", "1349", "1350"), error && <div className="error" role="alert">{error}</div>)}

      <div className="main" style={stryMutAct_9fa48("1351") ? {} : (stryCov_9fa48("1351"), {
        gridTemplateColumns: stryMutAct_9fa48("1352") ? "" : (stryCov_9fa48("1352"), '1fr 2fr')
      })}>
        <form className="card" onSubmit={create}>
          <h3>New Lab Order</h3>
          <div className="field"><label>Patient</label>
            <select value={form.patientId} onChange={stryMutAct_9fa48("1353") ? () => undefined : (stryCov_9fa48("1353"), e => setForm(stryMutAct_9fa48("1354") ? {} : (stryCov_9fa48("1354"), {
              ...form,
              patientId: e.target.value
            })))} required>
              <option value="">Select</option>
              {patients.map(stryMutAct_9fa48("1355") ? () => undefined : (stryCov_9fa48("1355"), p => <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
          </div>
          <div className="field"><label>Doctor</label>
            <select value={form.doctorId} onChange={stryMutAct_9fa48("1356") ? () => undefined : (stryCov_9fa48("1356"), e => setForm(stryMutAct_9fa48("1357") ? {} : (stryCov_9fa48("1357"), {
              ...form,
              doctorId: e.target.value
            })))} required>
              <option value="">Select</option>
              {doctors.map(stryMutAct_9fa48("1358") ? () => undefined : (stryCov_9fa48("1358"), d => <option key={d.id} value={d.id}>{d.name}</option>))}
            </select>
          </div>
          <div className="field"><label>Test</label><input value={form.test} onChange={stryMutAct_9fa48("1359") ? () => undefined : (stryCov_9fa48("1359"), e => setForm(stryMutAct_9fa48("1360") ? {} : (stryCov_9fa48("1360"), {
              ...form,
              test: e.target.value
            })))} required /></div>
          <div className="field"><label>Sample ID</label><input value={form.sampleId} onChange={stryMutAct_9fa48("1361") ? () => undefined : (stryCov_9fa48("1361"), e => setForm(stryMutAct_9fa48("1362") ? {} : (stryCov_9fa48("1362"), {
              ...form,
              sampleId: e.target.value
            })))} /></div>
          <div className="field"><label>Status</label>
            <select value={form.status} onChange={stryMutAct_9fa48("1363") ? () => undefined : (stryCov_9fa48("1363"), e => setForm(stryMutAct_9fa48("1364") ? {} : (stryCov_9fa48("1364"), {
              ...form,
              status: e.target.value
            })))}>
              <option value="ordered">Ordered</option>
              <option value="collected">Collected</option>
              <option value="reported">Reported</option>
            </select>
          </div>
          <div className="field"><label>Result</label><input value={form.result} onChange={stryMutAct_9fa48("1365") ? () => undefined : (stryCov_9fa48("1365"), e => setForm(stryMutAct_9fa48("1366") ? {} : (stryCov_9fa48("1366"), {
              ...form,
              result: e.target.value
            })))} placeholder="Attach summary or link" /></div>
          <div className="actions"><button type="submit">Save</button></div>
        </form>

        <div>
          <h3>Orders</h3>
          <ul className="list">
            {visibleItems.map(stryMutAct_9fa48("1367") ? () => undefined : (stryCov_9fa48("1367"), o => <li key={o.id} className="list-item">
                <div className="title"><span>{o.test}</span></div>
                <div className="meta">
                  {stryMutAct_9fa48("1370") ? o.patientId || <span className="badge">{patientName(o.patientId)}</span> : stryMutAct_9fa48("1369") ? false : stryMutAct_9fa48("1368") ? true : (stryCov_9fa48("1368", "1369", "1370"), o.patientId && <span className="badge">{patientName(o.patientId)}</span>)}
                  {stryMutAct_9fa48("1373") ? o.doctorId || <span className="badge">{doctorName(o.doctorId)}</span> : stryMutAct_9fa48("1372") ? false : stryMutAct_9fa48("1371") ? true : (stryCov_9fa48("1371", "1372", "1373"), o.doctorId && <span className="badge">{doctorName(o.doctorId)}</span>)}
                  {stryMutAct_9fa48("1376") ? o.sampleId || <span className="badge">Sample {o.sampleId}</span> : stryMutAct_9fa48("1375") ? false : stryMutAct_9fa48("1374") ? true : (stryCov_9fa48("1374", "1375", "1376"), o.sampleId && <span className="badge">Sample {o.sampleId}</span>)}
                  <span className="badge">{o.status}</span>
                  <button className="link" onClick={stryMutAct_9fa48("1377") ? () => undefined : (stryCov_9fa48("1377"), () => patch(o.id, stryMutAct_9fa48("1378") ? {} : (stryCov_9fa48("1378"), {
                  status: (stryMutAct_9fa48("1381") ? o.status !== 'ordered' : stryMutAct_9fa48("1380") ? false : stryMutAct_9fa48("1379") ? true : (stryCov_9fa48("1379", "1380", "1381"), o.status === (stryMutAct_9fa48("1382") ? "" : (stryCov_9fa48("1382"), 'ordered')))) ? stryMutAct_9fa48("1383") ? "" : (stryCov_9fa48("1383"), 'collected') : (stryMutAct_9fa48("1386") ? o.status !== 'collected' : stryMutAct_9fa48("1385") ? false : stryMutAct_9fa48("1384") ? true : (stryCov_9fa48("1384", "1385", "1386"), o.status === (stryMutAct_9fa48("1387") ? "" : (stryCov_9fa48("1387"), 'collected')))) ? stryMutAct_9fa48("1388") ? "" : (stryCov_9fa48("1388"), 'reported') : stryMutAct_9fa48("1389") ? "" : (stryCov_9fa48("1389"), 'ordered')
                })))}>Next Status</button>
                  <button className="link" onClick={stryMutAct_9fa48("1390") ? () => undefined : (stryCov_9fa48("1390"), () => remove(o.id))}>Delete</button>
                </div>
              </li>))}
            {stryMutAct_9fa48("1393") ? visibleItems.length === 0 || <li className="list-item"><div className="title"><span className="muted">No orders</span></div></li> : stryMutAct_9fa48("1392") ? false : stryMutAct_9fa48("1391") ? true : (stryCov_9fa48("1391", "1392", "1393"), (stryMutAct_9fa48("1395") ? visibleItems.length !== 0 : stryMutAct_9fa48("1394") ? true : (stryCov_9fa48("1394", "1395"), visibleItems.length === 0)) && <li className="list-item"><div className="title"><span className="muted">No orders</span></div></li>)}
          </ul>
        </div>
      </div>
    </div>;
  }
}