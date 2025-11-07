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
import { Prescriptions, Patients, Doctors } from '../api';
export default function PrescriptionsPage() {
  if (stryMutAct_9fa48("1558")) {
    {}
  } else {
    stryCov_9fa48("1558");
    const [items, setItems] = useState(stryMutAct_9fa48("1559") ? ["Stryker was here"] : (stryCov_9fa48("1559"), []));
    const [patients, setPatients] = useState(stryMutAct_9fa48("1560") ? ["Stryker was here"] : (stryCov_9fa48("1560"), []));
    const [doctors, setDoctors] = useState(stryMutAct_9fa48("1561") ? ["Stryker was here"] : (stryCov_9fa48("1561"), []));
    const [loading, setLoading] = useState(stryMutAct_9fa48("1562") ? true : (stryCov_9fa48("1562"), false));
    const [error, setError] = useState(stryMutAct_9fa48("1563") ? "Stryker was here!" : (stryCov_9fa48("1563"), ''));
    const [form, setForm] = useState(stryMutAct_9fa48("1564") ? {} : (stryCov_9fa48("1564"), {
      patientId: stryMutAct_9fa48("1565") ? "Stryker was here!" : (stryCov_9fa48("1565"), ''),
      doctorId: stryMutAct_9fa48("1566") ? "Stryker was here!" : (stryCov_9fa48("1566"), ''),
      medicines: stryMutAct_9fa48("1567") ? ["Stryker was here"] : (stryCov_9fa48("1567"), []),
      notes: stryMutAct_9fa48("1568") ? "Stryker was here!" : (stryCov_9fa48("1568"), ''),
      status: stryMutAct_9fa48("1569") ? "" : (stryCov_9fa48("1569"), 'open')
    }));
    const [med, setMed] = useState(stryMutAct_9fa48("1570") ? {} : (stryCov_9fa48("1570"), {
      name: stryMutAct_9fa48("1571") ? "Stryker was here!" : (stryCov_9fa48("1571"), ''),
      morning: 0,
      afternoon: 0,
      evening: 0,
      night: 0
    }));
    async function load() {
      if (stryMutAct_9fa48("1572")) {
        {}
      } else {
        stryCov_9fa48("1572");
        setLoading(stryMutAct_9fa48("1573") ? false : (stryCov_9fa48("1573"), true));
        setError(stryMutAct_9fa48("1574") ? "Stryker was here!" : (stryCov_9fa48("1574"), ''));
        try {
          if (stryMutAct_9fa48("1575")) {
            {}
          } else {
            stryCov_9fa48("1575");
            const [list, pats, docs] = await Promise.all(stryMutAct_9fa48("1576") ? [] : (stryCov_9fa48("1576"), [Prescriptions.list(), Patients.list(), Doctors.list()]));
            setItems(list);
            setPatients(pats);
            setDoctors(docs);
          }
        } catch {
          if (stryMutAct_9fa48("1577")) {
            {}
          } else {
            stryCov_9fa48("1577");
            setError(stryMutAct_9fa48("1578") ? "" : (stryCov_9fa48("1578"), 'Failed to load prescriptions'));
          }
        }
        setLoading(stryMutAct_9fa48("1579") ? true : (stryCov_9fa48("1579"), false));
      }
    }
    useEffect(() => {
      if (stryMutAct_9fa48("1580")) {
        {}
      } else {
        stryCov_9fa48("1580");
        load();
      }
    }, stryMutAct_9fa48("1581") ? ["Stryker was here"] : (stryCov_9fa48("1581"), []));
    async function create(e) {
      if (stryMutAct_9fa48("1582")) {
        {}
      } else {
        stryCov_9fa48("1582");
        e.preventDefault();
        const payload = stryMutAct_9fa48("1583") ? {} : (stryCov_9fa48("1583"), {
          ...form
        });
        try {
          if (stryMutAct_9fa48("1584")) {
            {}
          } else {
            stryCov_9fa48("1584");
            await Prescriptions.create(payload);
            setForm(stryMutAct_9fa48("1585") ? {} : (stryCov_9fa48("1585"), {
              patientId: stryMutAct_9fa48("1586") ? "Stryker was here!" : (stryCov_9fa48("1586"), ''),
              doctorId: stryMutAct_9fa48("1587") ? "Stryker was here!" : (stryCov_9fa48("1587"), ''),
              medicines: stryMutAct_9fa48("1588") ? ["Stryker was here"] : (stryCov_9fa48("1588"), []),
              notes: stryMutAct_9fa48("1589") ? "Stryker was here!" : (stryCov_9fa48("1589"), ''),
              status: stryMutAct_9fa48("1590") ? "" : (stryCov_9fa48("1590"), 'open')
            }));
            setMed(stryMutAct_9fa48("1591") ? {} : (stryCov_9fa48("1591"), {
              name: stryMutAct_9fa48("1592") ? "Stryker was here!" : (stryCov_9fa48("1592"), ''),
              morning: 0,
              afternoon: 0,
              evening: 0,
              night: 0
            }));
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1593")) {
            {}
          } else {
            stryCov_9fa48("1593");
            setError(stryMutAct_9fa48("1594") ? "" : (stryCov_9fa48("1594"), 'Failed to create'));
          }
        }
      }
    }
    async function remove(id) {
      if (stryMutAct_9fa48("1595")) {
        {}
      } else {
        stryCov_9fa48("1595");
        try {
          if (stryMutAct_9fa48("1596")) {
            {}
          } else {
            stryCov_9fa48("1596");
            await Prescriptions.remove(id);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1597")) {
            {}
          } else {
            stryCov_9fa48("1597");
            setError(stryMutAct_9fa48("1598") ? "" : (stryCov_9fa48("1598"), 'Failed to delete'));
          }
        }
      }
    }
    async function patch(id, patch) {
      if (stryMutAct_9fa48("1599")) {
        {}
      } else {
        stryCov_9fa48("1599");
        try {
          if (stryMutAct_9fa48("1600")) {
            {}
          } else {
            stryCov_9fa48("1600");
            await Prescriptions.patch(id, patch);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1601")) {
            {}
          } else {
            stryCov_9fa48("1601");
            setError(stryMutAct_9fa48("1602") ? "" : (stryCov_9fa48("1602"), 'Failed to update'));
          }
        }
      }
    }
    function addMedicine(e) {
      if (stryMutAct_9fa48("1603")) {
        {}
      } else {
        stryCov_9fa48("1603");
        e.preventDefault();
        if (stryMutAct_9fa48("1606") ? false : stryMutAct_9fa48("1605") ? true : stryMutAct_9fa48("1604") ? med.name : (stryCov_9fa48("1604", "1605", "1606"), !med.name)) return;
        const entry = stryMutAct_9fa48("1607") ? {} : (stryCov_9fa48("1607"), {
          name: med.name,
          morning: stryMutAct_9fa48("1610") ? Number(med.morning) && 0 : stryMutAct_9fa48("1609") ? false : stryMutAct_9fa48("1608") ? true : (stryCov_9fa48("1608", "1609", "1610"), Number(med.morning) || 0),
          afternoon: stryMutAct_9fa48("1613") ? Number(med.afternoon) && 0 : stryMutAct_9fa48("1612") ? false : stryMutAct_9fa48("1611") ? true : (stryCov_9fa48("1611", "1612", "1613"), Number(med.afternoon) || 0),
          evening: stryMutAct_9fa48("1616") ? Number(med.evening) && 0 : stryMutAct_9fa48("1615") ? false : stryMutAct_9fa48("1614") ? true : (stryCov_9fa48("1614", "1615", "1616"), Number(med.evening) || 0),
          night: stryMutAct_9fa48("1619") ? Number(med.night) && 0 : stryMutAct_9fa48("1618") ? false : stryMutAct_9fa48("1617") ? true : (stryCov_9fa48("1617", "1618", "1619"), Number(med.night) || 0)
        });
        setForm(stryMutAct_9fa48("1620") ? () => undefined : (stryCov_9fa48("1620"), prev => stryMutAct_9fa48("1621") ? {} : (stryCov_9fa48("1621"), {
          ...prev,
          medicines: stryMutAct_9fa48("1622") ? [] : (stryCov_9fa48("1622"), [...prev.medicines, entry])
        })));
        setMed(stryMutAct_9fa48("1623") ? {} : (stryCov_9fa48("1623"), {
          name: stryMutAct_9fa48("1624") ? "Stryker was here!" : (stryCov_9fa48("1624"), ''),
          morning: 0,
          afternoon: 0,
          evening: 0,
          night: 0
        }));
      }
    }
    const patientName = id => {
      if (stryMutAct_9fa48("1625")) {
        {}
      } else {
        stryCov_9fa48("1625");
        const p = patients.find(stryMutAct_9fa48("1626") ? () => undefined : (stryCov_9fa48("1626"), x => stryMutAct_9fa48("1629") ? String(x.id) !== String(id) : stryMutAct_9fa48("1628") ? false : stryMutAct_9fa48("1627") ? true : (stryCov_9fa48("1627", "1628", "1629"), String(x.id) === String(id))));
        return p ? stryMutAct_9fa48("1632") ? (p.name || p.fullName) && `#${id}` : stryMutAct_9fa48("1631") ? false : stryMutAct_9fa48("1630") ? true : (stryCov_9fa48("1630", "1631", "1632"), (stryMutAct_9fa48("1634") ? p.name && p.fullName : stryMutAct_9fa48("1633") ? false : (stryCov_9fa48("1633", "1634"), p.name || p.fullName)) || (stryMutAct_9fa48("1635") ? `` : (stryCov_9fa48("1635"), `#${id}`))) : stryMutAct_9fa48("1636") ? "" : (stryCov_9fa48("1636"), '(Deleted patient)');
      }
    };
    const visibleItems = stryMutAct_9fa48("1637") ? items : (stryCov_9fa48("1637"), items.filter(stryMutAct_9fa48("1638") ? () => undefined : (stryCov_9fa48("1638"), r => stryMutAct_9fa48("1639") ? patients.every(p => String(p.id) === String(r.patientId)) : (stryCov_9fa48("1639"), patients.some(stryMutAct_9fa48("1640") ? () => undefined : (stryCov_9fa48("1640"), p => stryMutAct_9fa48("1643") ? String(p.id) !== String(r.patientId) : stryMutAct_9fa48("1642") ? false : stryMutAct_9fa48("1641") ? true : (stryCov_9fa48("1641", "1642", "1643"), String(p.id) === String(r.patientId))))))));
    return <div className="container">
      <header className="header">
        <h1>Prescriptions {loading ? stryMutAct_9fa48("1644") ? "" : (stryCov_9fa48("1644"), '…') : stryMutAct_9fa48("1645") ? "Stryker was here!" : (stryCov_9fa48("1645"), '')}</h1>
      </header>
      {stryMutAct_9fa48("1648") ? error || <div className="error" role="alert">{error}</div> : stryMutAct_9fa48("1647") ? false : stryMutAct_9fa48("1646") ? true : (stryCov_9fa48("1646", "1647", "1648"), error && <div className="error" role="alert">{error}</div>)}

      <div className="main" style={stryMutAct_9fa48("1649") ? {} : (stryCov_9fa48("1649"), {
        gridTemplateColumns: stryMutAct_9fa48("1650") ? "" : (stryCov_9fa48("1650"), '1fr 2fr')
      })}>
        <form className="card" onSubmit={create}>
          <h3>New Prescription</h3>
          <div className="field"><label>Patient</label>
            <select value={form.patientId} onChange={stryMutAct_9fa48("1651") ? () => undefined : (stryCov_9fa48("1651"), e => setForm(stryMutAct_9fa48("1652") ? {} : (stryCov_9fa48("1652"), {
              ...form,
              patientId: e.target.value
            })))} required>
              <option value="">Select</option>
              {patients.map(stryMutAct_9fa48("1653") ? () => undefined : (stryCov_9fa48("1653"), p => <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
          </div>
          <div className="field"><label>Doctor</label>
            <select value={form.doctorId} onChange={stryMutAct_9fa48("1654") ? () => undefined : (stryCov_9fa48("1654"), e => setForm(stryMutAct_9fa48("1655") ? {} : (stryCov_9fa48("1655"), {
              ...form,
              doctorId: e.target.value
            })))} required>
              <option value="">Select</option>
              {doctors.map(stryMutAct_9fa48("1656") ? () => undefined : (stryCov_9fa48("1656"), d => <option key={d.id} value={d.id}>{d.name}</option>))}
            </select>
          </div>
          <div className="section">
            <h4>Medicines & dosage</h4>
            <div className="form-grid">
              <div className="field"><label>Name</label><input value={med.name} onChange={stryMutAct_9fa48("1657") ? () => undefined : (stryCov_9fa48("1657"), e => setMed(stryMutAct_9fa48("1658") ? {} : (stryCov_9fa48("1658"), {
                  ...med,
                  name: e.target.value
                })))} /></div>
              <div className="field"><label>Morning</label><input type="number" min="0" value={med.morning} onChange={stryMutAct_9fa48("1659") ? () => undefined : (stryCov_9fa48("1659"), e => setMed(stryMutAct_9fa48("1660") ? {} : (stryCov_9fa48("1660"), {
                  ...med,
                  morning: e.target.value
                })))} /></div>
              <div className="field"><label>Afternoon</label><input type="number" min="0" value={med.afternoon} onChange={stryMutAct_9fa48("1661") ? () => undefined : (stryCov_9fa48("1661"), e => setMed(stryMutAct_9fa48("1662") ? {} : (stryCov_9fa48("1662"), {
                  ...med,
                  afternoon: e.target.value
                })))} /></div>
              <div className="field"><label>Evening</label><input type="number" min="0" value={med.evening} onChange={stryMutAct_9fa48("1663") ? () => undefined : (stryCov_9fa48("1663"), e => setMed(stryMutAct_9fa48("1664") ? {} : (stryCov_9fa48("1664"), {
                  ...med,
                  evening: e.target.value
                })))} /></div>
              <div className="field"><label>Night</label><input type="number" min="0" value={med.night} onChange={stryMutAct_9fa48("1665") ? () => undefined : (stryCov_9fa48("1665"), e => setMed(stryMutAct_9fa48("1666") ? {} : (stryCov_9fa48("1666"), {
                  ...med,
                  night: e.target.value
                })))} /></div>
            </div>
            <div className="actions"><button type="button" className="btn-secondary" onClick={addMedicine}>Add Medicine</button></div>
            {stryMutAct_9fa48("1669") ? form.medicines.length > 0 || <ul className="list" style={{
              marginTop: 8
            }}>
                {form.medicines.map((m, i) => <li key={i} className="list-item">
                    <div className="title"><span>{m.name}</span></div>
                    <div className="meta">
                      <span className="badge">M:{m.morning || 0}</span>
                      <span className="badge">A:{m.afternoon || 0}</span>
                      <span className="badge">E:{m.evening || 0}</span>
                      <span className="badge">N:{m.night || 0}</span>
                    </div>
                  </li>)}
              </ul> : stryMutAct_9fa48("1668") ? false : stryMutAct_9fa48("1667") ? true : (stryCov_9fa48("1667", "1668", "1669"), (stryMutAct_9fa48("1672") ? form.medicines.length <= 0 : stryMutAct_9fa48("1671") ? form.medicines.length >= 0 : stryMutAct_9fa48("1670") ? true : (stryCov_9fa48("1670", "1671", "1672"), form.medicines.length > 0)) && <ul className="list" style={stryMutAct_9fa48("1673") ? {} : (stryCov_9fa48("1673"), {
              marginTop: 8
            })}>
                {form.medicines.map(stryMutAct_9fa48("1674") ? () => undefined : (stryCov_9fa48("1674"), (m, i) => <li key={i} className="list-item">
                    <div className="title"><span>{m.name}</span></div>
                    <div className="meta">
                      <span className="badge">M:{stryMutAct_9fa48("1677") ? m.morning && 0 : stryMutAct_9fa48("1676") ? false : stryMutAct_9fa48("1675") ? true : (stryCov_9fa48("1675", "1676", "1677"), m.morning || 0)}</span>
                      <span className="badge">A:{stryMutAct_9fa48("1680") ? m.afternoon && 0 : stryMutAct_9fa48("1679") ? false : stryMutAct_9fa48("1678") ? true : (stryCov_9fa48("1678", "1679", "1680"), m.afternoon || 0)}</span>
                      <span className="badge">E:{stryMutAct_9fa48("1683") ? m.evening && 0 : stryMutAct_9fa48("1682") ? false : stryMutAct_9fa48("1681") ? true : (stryCov_9fa48("1681", "1682", "1683"), m.evening || 0)}</span>
                      <span className="badge">N:{stryMutAct_9fa48("1686") ? m.night && 0 : stryMutAct_9fa48("1685") ? false : stryMutAct_9fa48("1684") ? true : (stryCov_9fa48("1684", "1685", "1686"), m.night || 0)}</span>
                    </div>
                  </li>))}
              </ul>)}
          </div>
          <div className="field"><label>Notes</label><input value={form.notes} onChange={stryMutAct_9fa48("1687") ? () => undefined : (stryCov_9fa48("1687"), e => setForm(stryMutAct_9fa48("1688") ? {} : (stryCov_9fa48("1688"), {
              ...form,
              notes: e.target.value
            })))} /></div>
          <div className="field"><label>Status</label>
            <select value={form.status} onChange={stryMutAct_9fa48("1689") ? () => undefined : (stryCov_9fa48("1689"), e => setForm(stryMutAct_9fa48("1690") ? {} : (stryCov_9fa48("1690"), {
              ...form,
              status: e.target.value
            })))}>
              <option value="open">Open</option>
              <option value="dispensed">Dispensed</option>
            </select>
          </div>
          <div className="actions"><button type="submit">Save</button></div>
        </form>

        <div>
          <h3>Prescription List</h3>
          <ul className="list">
            {visibleItems.map(stryMutAct_9fa48("1691") ? () => undefined : (stryCov_9fa48("1691"), r => <li key={r.id} className="list-item">
                <div className="title"><span>{patientName(r.patientId)}</span></div>
                <div className="meta" style={stryMutAct_9fa48("1692") ? {} : (stryCov_9fa48("1692"), {
                flexWrap: stryMutAct_9fa48("1693") ? "" : (stryCov_9fa48("1693"), 'wrap'),
                gap: 6
              })}>
                  {(Array.isArray(r.medicines) ? r.medicines : stryMutAct_9fa48("1694") ? ["Stryker was here"] : (stryCov_9fa48("1694"), [])).map((m, idx) => {
                  if (stryMutAct_9fa48("1695")) {
                    {}
                  } else {
                    stryCov_9fa48("1695");
                    if (stryMutAct_9fa48("1698") ? typeof m !== 'string' : stryMutAct_9fa48("1697") ? false : stryMutAct_9fa48("1696") ? true : (stryCov_9fa48("1696", "1697", "1698"), typeof m === (stryMutAct_9fa48("1699") ? "" : (stryCov_9fa48("1699"), 'string')))) {
                      if (stryMutAct_9fa48("1700")) {
                        {}
                      } else {
                        stryCov_9fa48("1700");
                        return <span key={idx} className="badge">{m}</span>;
                      }
                    }
                    const ms = stryMutAct_9fa48("1701") ? [] : (stryCov_9fa48("1701"), [stryMutAct_9fa48("1704") ? m.morning && 0 : stryMutAct_9fa48("1703") ? false : stryMutAct_9fa48("1702") ? true : (stryCov_9fa48("1702", "1703", "1704"), m.morning || 0), stryMutAct_9fa48("1707") ? m.afternoon && 0 : stryMutAct_9fa48("1706") ? false : stryMutAct_9fa48("1705") ? true : (stryCov_9fa48("1705", "1706", "1707"), m.afternoon || 0), stryMutAct_9fa48("1710") ? m.evening && 0 : stryMutAct_9fa48("1709") ? false : stryMutAct_9fa48("1708") ? true : (stryCov_9fa48("1708", "1709", "1710"), m.evening || 0), stryMutAct_9fa48("1713") ? m.night && 0 : stryMutAct_9fa48("1712") ? false : stryMutAct_9fa48("1711") ? true : (stryCov_9fa48("1711", "1712", "1713"), m.night || 0)]);
                    return <span key={idx} className="badge">{m.name} — M:{ms[0]} A:{ms[1]} E:{ms[2]} N:{ms[3]}</span>;
                  }
                })}
                  <button className="link" onClick={stryMutAct_9fa48("1714") ? () => undefined : (stryCov_9fa48("1714"), () => remove(r.id))}>Delete</button>
                </div>
              </li>))}
            {stryMutAct_9fa48("1717") ? visibleItems.length === 0 || <li className="list-item"><div className="title"><span className="muted">No prescriptions</span></div></li> : stryMutAct_9fa48("1716") ? false : stryMutAct_9fa48("1715") ? true : (stryCov_9fa48("1715", "1716", "1717"), (stryMutAct_9fa48("1719") ? visibleItems.length !== 0 : stryMutAct_9fa48("1718") ? true : (stryCov_9fa48("1718", "1719"), visibleItems.length === 0)) && <li className="list-item"><div className="title"><span className="muted">No prescriptions</span></div></li>)}
          </ul>
        </div>
      </div>
    </div>;
  }
}