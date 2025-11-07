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
import { Patients } from '../api';
export default function PatientsPage() {
  if (stryMutAct_9fa48("1396")) {
    {}
  } else {
    stryCov_9fa48("1396");
    const [items, setItems] = useState(stryMutAct_9fa48("1397") ? ["Stryker was here"] : (stryCov_9fa48("1397"), []));
    const [loading, setLoading] = useState(stryMutAct_9fa48("1398") ? true : (stryCov_9fa48("1398"), false));
    const [error, setError] = useState(stryMutAct_9fa48("1399") ? "Stryker was here!" : (stryCov_9fa48("1399"), ''));
    const [form, setForm] = useState(stryMutAct_9fa48("1400") ? {} : (stryCov_9fa48("1400"), {
      name: stryMutAct_9fa48("1401") ? "Stryker was here!" : (stryCov_9fa48("1401"), ''),
      dob: stryMutAct_9fa48("1402") ? "Stryker was here!" : (stryCov_9fa48("1402"), ''),
      gender: stryMutAct_9fa48("1403") ? "Stryker was here!" : (stryCov_9fa48("1403"), ''),
      contact: stryMutAct_9fa48("1404") ? "Stryker was here!" : (stryCov_9fa48("1404"), ''),
      address: stryMutAct_9fa48("1405") ? "Stryker was here!" : (stryCov_9fa48("1405"), ''),
      history: stryMutAct_9fa48("1406") ? "Stryker was here!" : (stryCov_9fa48("1406"), '')
    }));
    async function load() {
      if (stryMutAct_9fa48("1407")) {
        {}
      } else {
        stryCov_9fa48("1407");
        setLoading(stryMutAct_9fa48("1408") ? false : (stryCov_9fa48("1408"), true));
        setError(stryMutAct_9fa48("1409") ? "Stryker was here!" : (stryCov_9fa48("1409"), ''));
        try {
          if (stryMutAct_9fa48("1410")) {
            {}
          } else {
            stryCov_9fa48("1410");
            const pats = await Patients.list();
            setItems(pats);
          }
        } catch {
          if (stryMutAct_9fa48("1411")) {
            {}
          } else {
            stryCov_9fa48("1411");
            setError(stryMutAct_9fa48("1412") ? "" : (stryCov_9fa48("1412"), 'Failed to load patients'));
          }
        }
        setLoading(stryMutAct_9fa48("1413") ? true : (stryCov_9fa48("1413"), false));
      }
    }
    useEffect(() => {
      if (stryMutAct_9fa48("1414")) {
        {}
      } else {
        stryCov_9fa48("1414");
        load();
      }
    }, stryMutAct_9fa48("1415") ? ["Stryker was here"] : (stryCov_9fa48("1415"), []));
    async function create(e) {
      if (stryMutAct_9fa48("1416")) {
        {}
      } else {
        stryCov_9fa48("1416");
        e.preventDefault();
        try {
          if (stryMutAct_9fa48("1417")) {
            {}
          } else {
            stryCov_9fa48("1417");
            await Patients.create(form);
            setForm(stryMutAct_9fa48("1418") ? {} : (stryCov_9fa48("1418"), {
              name: stryMutAct_9fa48("1419") ? "Stryker was here!" : (stryCov_9fa48("1419"), ''),
              dob: stryMutAct_9fa48("1420") ? "Stryker was here!" : (stryCov_9fa48("1420"), ''),
              gender: stryMutAct_9fa48("1421") ? "Stryker was here!" : (stryCov_9fa48("1421"), ''),
              contact: stryMutAct_9fa48("1422") ? "Stryker was here!" : (stryCov_9fa48("1422"), ''),
              address: stryMutAct_9fa48("1423") ? "Stryker was here!" : (stryCov_9fa48("1423"), ''),
              history: stryMutAct_9fa48("1424") ? "Stryker was here!" : (stryCov_9fa48("1424"), '')
            }));
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1425")) {
            {}
          } else {
            stryCov_9fa48("1425");
            setError(stryMutAct_9fa48("1426") ? "" : (stryCov_9fa48("1426"), 'Failed to create'));
          }
        }
      }
    }
    async function remove(id) {
      if (stryMutAct_9fa48("1427")) {
        {}
      } else {
        stryCov_9fa48("1427");
        try {
          if (stryMutAct_9fa48("1428")) {
            {}
          } else {
            stryCov_9fa48("1428");
            await Patients.remove(id);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1429")) {
            {}
          } else {
            stryCov_9fa48("1429");
            setError(stryMutAct_9fa48("1430") ? "" : (stryCov_9fa48("1430"), 'Failed to delete'));
          }
        }
      }
    }
    async function patch(id, patch) {
      if (stryMutAct_9fa48("1431")) {
        {}
      } else {
        stryCov_9fa48("1431");
        try {
          if (stryMutAct_9fa48("1432")) {
            {}
          } else {
            stryCov_9fa48("1432");
            await Patients.patch(id, patch);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1433")) {
            {}
          } else {
            stryCov_9fa48("1433");
            setError(stryMutAct_9fa48("1434") ? "" : (stryCov_9fa48("1434"), 'Failed to update'));
          }
        }
      }
    }

    // Simplified view: show all registered patients

    return <div className="container">
      <header className="header">
        <h1>Patients {loading ? stryMutAct_9fa48("1435") ? "" : (stryCov_9fa48("1435"), '…') : stryMutAct_9fa48("1436") ? "Stryker was here!" : (stryCov_9fa48("1436"), '')}</h1>
      </header>
      {stryMutAct_9fa48("1439") ? error || <div className="error" role="alert">{error}</div> : stryMutAct_9fa48("1438") ? false : stryMutAct_9fa48("1437") ? true : (stryCov_9fa48("1437", "1438", "1439"), error && <div className="error" role="alert">{error}</div>)}

      <div className="main" style={stryMutAct_9fa48("1440") ? {} : (stryCov_9fa48("1440"), {
        gridTemplateColumns: stryMutAct_9fa48("1441") ? "" : (stryCov_9fa48("1441"), '1fr 2fr')
      })}>
        <form className="card" onSubmit={create}>
          <h3>Patient Registration</h3>
          <div className="field"><label>Name</label><input value={form.name} onChange={stryMutAct_9fa48("1442") ? () => undefined : (stryCov_9fa48("1442"), e => setForm(stryMutAct_9fa48("1443") ? {} : (stryCov_9fa48("1443"), {
              ...form,
              name: e.target.value
            })))} required /></div>
          <div className="field"><label>DOB</label><input type="date" value={form.dob} onChange={stryMutAct_9fa48("1444") ? () => undefined : (stryCov_9fa48("1444"), e => setForm(stryMutAct_9fa48("1445") ? {} : (stryCov_9fa48("1445"), {
              ...form,
              dob: e.target.value
            })))} /></div>
          <div className="field"><label>Gender</label><input value={form.gender} onChange={stryMutAct_9fa48("1446") ? () => undefined : (stryCov_9fa48("1446"), e => setForm(stryMutAct_9fa48("1447") ? {} : (stryCov_9fa48("1447"), {
              ...form,
              gender: e.target.value
            })))} /></div>
          <div className="field"><label>Contact</label><input value={form.contact} onChange={stryMutAct_9fa48("1448") ? () => undefined : (stryCov_9fa48("1448"), e => setForm(stryMutAct_9fa48("1449") ? {} : (stryCov_9fa48("1449"), {
              ...form,
              contact: e.target.value
            })))} /></div>
          <div className="field"><label>Address</label><input value={form.address} onChange={stryMutAct_9fa48("1450") ? () => undefined : (stryCov_9fa48("1450"), e => setForm(stryMutAct_9fa48("1451") ? {} : (stryCov_9fa48("1451"), {
              ...form,
              address: e.target.value
            })))} /></div>
          <div className="field"><label>History</label><input value={form.history} onChange={stryMutAct_9fa48("1452") ? () => undefined : (stryCov_9fa48("1452"), e => setForm(stryMutAct_9fa48("1453") ? {} : (stryCov_9fa48("1453"), {
              ...form,
              history: e.target.value
            })))} /></div>
          <div className="actions"><button type="submit">Save</button></div>
        </form>

        <div>
          <div className="card" style={stryMutAct_9fa48("1454") ? {} : (stryCov_9fa48("1454"), {
            marginBottom: 12
          })}>
            <h3 className="page-title">Patients</h3>
          </div>

          <ul className="list">
            {items.map(stryMutAct_9fa48("1455") ? () => undefined : (stryCov_9fa48("1455"), p => <li key={p.id} className="list-item">
                <div className="title"><span>{p.name}</span></div>
                <div className="meta">
                  {stryMutAct_9fa48("1458") ? p.dob || <span className="badge">DOB {p.dob}</span> : stryMutAct_9fa48("1457") ? false : stryMutAct_9fa48("1456") ? true : (stryCov_9fa48("1456", "1457", "1458"), p.dob && <span className="badge">DOB {p.dob}</span>)}
                  {stryMutAct_9fa48("1461") ? p.gender || <span className="badge">{p.gender}</span> : stryMutAct_9fa48("1460") ? false : stryMutAct_9fa48("1459") ? true : (stryCov_9fa48("1459", "1460", "1461"), p.gender && <span className="badge">{p.gender}</span>)}
                  {stryMutAct_9fa48("1464") ? p.history || <span className="badge">{p.history}</span> : stryMutAct_9fa48("1463") ? false : stryMutAct_9fa48("1462") ? true : (stryCov_9fa48("1462", "1463", "1464"), p.history && <span className="badge">{p.history}</span>)}
                  <button className="link" onClick={stryMutAct_9fa48("1465") ? () => undefined : (stryCov_9fa48("1465"), () => patch(p.id, stryMutAct_9fa48("1466") ? {} : (stryCov_9fa48("1466"), {
                  history: stryMutAct_9fa48("1469") ? prompt('Update history', p.history || '') && p.history : stryMutAct_9fa48("1468") ? false : stryMutAct_9fa48("1467") ? true : (stryCov_9fa48("1467", "1468", "1469"), prompt(stryMutAct_9fa48("1470") ? "" : (stryCov_9fa48("1470"), 'Update history'), stryMutAct_9fa48("1473") ? p.history && '' : stryMutAct_9fa48("1472") ? false : stryMutAct_9fa48("1471") ? true : (stryCov_9fa48("1471", "1472", "1473"), p.history || (stryMutAct_9fa48("1474") ? "Stryker was here!" : (stryCov_9fa48("1474"), '')))) || p.history)
                })))}>Edit</button>
                  <button className="link" onClick={stryMutAct_9fa48("1475") ? () => undefined : (stryCov_9fa48("1475"), () => remove(p.id))}>Delete</button>
                </div>
              </li>))}
            {stryMutAct_9fa48("1478") ? items.length === 0 || <li className="list-item"><div className="title"><span className="muted">No records</span></div></li> : stryMutAct_9fa48("1477") ? false : stryMutAct_9fa48("1476") ? true : (stryCov_9fa48("1476", "1477", "1478"), (stryMutAct_9fa48("1480") ? items.length !== 0 : stryMutAct_9fa48("1479") ? true : (stryCov_9fa48("1479", "1480"), items.length === 0)) && <li className="list-item"><div className="title"><span className="muted">No records</span></div></li>)}
          </ul>
        </div>
      </div>
    </div>;
  }
}