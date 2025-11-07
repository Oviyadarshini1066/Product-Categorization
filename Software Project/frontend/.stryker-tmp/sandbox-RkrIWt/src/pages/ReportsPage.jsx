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
import { Reports, Patients } from '../api';
export default function ReportsPage() {
  if (stryMutAct_9fa48("1720")) {
    {}
  } else {
    stryCov_9fa48("1720");
    const [items, setItems] = useState(stryMutAct_9fa48("1721") ? ["Stryker was here"] : (stryCov_9fa48("1721"), []));
    const [patients, setPatients] = useState(stryMutAct_9fa48("1722") ? ["Stryker was here"] : (stryCov_9fa48("1722"), []));
    const [loading, setLoading] = useState(stryMutAct_9fa48("1723") ? true : (stryCov_9fa48("1723"), false));
    const [error, setError] = useState(stryMutAct_9fa48("1724") ? "Stryker was here!" : (stryCov_9fa48("1724"), ''));
    const [form, setForm] = useState(stryMutAct_9fa48("1725") ? {} : (stryCov_9fa48("1725"), {
      patientId: stryMutAct_9fa48("1726") ? "Stryker was here!" : (stryCov_9fa48("1726"), ''),
      type: stryMutAct_9fa48("1727") ? "" : (stryCov_9fa48("1727"), 'discharge'),
      summary: stryMutAct_9fa48("1728") ? "Stryker was here!" : (stryCov_9fa48("1728"), ''),
      date: stryMutAct_9fa48("1729") ? "Stryker was here!" : (stryCov_9fa48("1729"), '')
    }));
    async function load() {
      if (stryMutAct_9fa48("1730")) {
        {}
      } else {
        stryCov_9fa48("1730");
        setLoading(stryMutAct_9fa48("1731") ? false : (stryCov_9fa48("1731"), true));
        setError(stryMutAct_9fa48("1732") ? "Stryker was here!" : (stryCov_9fa48("1732"), ''));
        try {
          if (stryMutAct_9fa48("1733")) {
            {}
          } else {
            stryCov_9fa48("1733");
            setItems(await Reports.list());
            setPatients(await Patients.list());
          }
        } catch {
          if (stryMutAct_9fa48("1734")) {
            {}
          } else {
            stryCov_9fa48("1734");
            setError(stryMutAct_9fa48("1735") ? "" : (stryCov_9fa48("1735"), 'Failed to load reports'));
          }
        }
        setLoading(stryMutAct_9fa48("1736") ? true : (stryCov_9fa48("1736"), false));
      }
    }
    useEffect(() => {
      if (stryMutAct_9fa48("1737")) {
        {}
      } else {
        stryCov_9fa48("1737");
        load();
      }
    }, stryMutAct_9fa48("1738") ? ["Stryker was here"] : (stryCov_9fa48("1738"), []));
    async function create(e) {
      if (stryMutAct_9fa48("1739")) {
        {}
      } else {
        stryCov_9fa48("1739");
        e.preventDefault();
        try {
          if (stryMutAct_9fa48("1740")) {
            {}
          } else {
            stryCov_9fa48("1740");
            await Reports.create(form);
            setForm(stryMutAct_9fa48("1741") ? {} : (stryCov_9fa48("1741"), {
              patientId: stryMutAct_9fa48("1742") ? "Stryker was here!" : (stryCov_9fa48("1742"), ''),
              type: stryMutAct_9fa48("1743") ? "" : (stryCov_9fa48("1743"), 'discharge'),
              summary: stryMutAct_9fa48("1744") ? "Stryker was here!" : (stryCov_9fa48("1744"), ''),
              date: stryMutAct_9fa48("1745") ? "Stryker was here!" : (stryCov_9fa48("1745"), '')
            }));
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1746")) {
            {}
          } else {
            stryCov_9fa48("1746");
            setError(stryMutAct_9fa48("1747") ? "" : (stryCov_9fa48("1747"), 'Failed to create'));
          }
        }
      }
    }
    async function remove(id) {
      if (stryMutAct_9fa48("1748")) {
        {}
      } else {
        stryCov_9fa48("1748");
        try {
          if (stryMutAct_9fa48("1749")) {
            {}
          } else {
            stryCov_9fa48("1749");
            await Reports.remove(id);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1750")) {
            {}
          } else {
            stryCov_9fa48("1750");
            setError(stryMutAct_9fa48("1751") ? "" : (stryCov_9fa48("1751"), 'Failed to delete'));
          }
        }
      }
    }
    async function patch(id, patch) {
      if (stryMutAct_9fa48("1752")) {
        {}
      } else {
        stryCov_9fa48("1752");
        try {
          if (stryMutAct_9fa48("1753")) {
            {}
          } else {
            stryCov_9fa48("1753");
            await Reports.patch(id, patch);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1754")) {
            {}
          } else {
            stryCov_9fa48("1754");
            setError(stryMutAct_9fa48("1755") ? "" : (stryCov_9fa48("1755"), 'Failed to update'));
          }
        }
      }
    }
    const nameById = (list, id) => {
      if (stryMutAct_9fa48("1756")) {
        {}
      } else {
        stryCov_9fa48("1756");
        const x = list.find(stryMutAct_9fa48("1757") ? () => undefined : (stryCov_9fa48("1757"), i => stryMutAct_9fa48("1760") ? String(i.id) !== String(id) : stryMutAct_9fa48("1759") ? false : stryMutAct_9fa48("1758") ? true : (stryCov_9fa48("1758", "1759", "1760"), String(i.id) === String(id))));
        return x ? stryMutAct_9fa48("1763") ? (x.name || x.fullName || x.title) && `#${id}` : stryMutAct_9fa48("1762") ? false : stryMutAct_9fa48("1761") ? true : (stryCov_9fa48("1761", "1762", "1763"), (stryMutAct_9fa48("1765") ? (x.name || x.fullName) && x.title : stryMutAct_9fa48("1764") ? false : (stryCov_9fa48("1764", "1765"), (stryMutAct_9fa48("1767") ? x.name && x.fullName : stryMutAct_9fa48("1766") ? false : (stryCov_9fa48("1766", "1767"), x.name || x.fullName)) || x.title)) || (stryMutAct_9fa48("1768") ? `` : (stryCov_9fa48("1768"), `#${id}`))) : stryMutAct_9fa48("1769") ? "" : (stryCov_9fa48("1769"), '(Deleted patient)');
      }
    };
    const visibleReports = stryMutAct_9fa48("1770") ? items : (stryCov_9fa48("1770"), items.filter(stryMutAct_9fa48("1771") ? () => undefined : (stryCov_9fa48("1771"), r => stryMutAct_9fa48("1772") ? patients.every(p => String(p.id) === String(r.patientId)) : (stryCov_9fa48("1772"), patients.some(stryMutAct_9fa48("1773") ? () => undefined : (stryCov_9fa48("1773"), p => stryMutAct_9fa48("1776") ? String(p.id) !== String(r.patientId) : stryMutAct_9fa48("1775") ? false : stryMutAct_9fa48("1774") ? true : (stryCov_9fa48("1774", "1775", "1776"), String(p.id) === String(r.patientId))))))));
    return <div className="container">
      <header className="header">
        <h1>Reports {loading ? stryMutAct_9fa48("1777") ? "" : (stryCov_9fa48("1777"), '…') : stryMutAct_9fa48("1778") ? "Stryker was here!" : (stryCov_9fa48("1778"), '')}</h1>
      </header>
      {stryMutAct_9fa48("1781") ? error || <div className="error" role="alert">{error}</div> : stryMutAct_9fa48("1780") ? false : stryMutAct_9fa48("1779") ? true : (stryCov_9fa48("1779", "1780", "1781"), error && <div className="error" role="alert">{error}</div>)}

      <div className="main" style={stryMutAct_9fa48("1782") ? {} : (stryCov_9fa48("1782"), {
        gridTemplateColumns: stryMutAct_9fa48("1783") ? "" : (stryCov_9fa48("1783"), '1fr 2fr')
      })}>
        <form className="card" onSubmit={create}>
          <h3>Add Report</h3>
          <div className="field"><label>Patient</label>
            <select value={form.patientId} onChange={stryMutAct_9fa48("1784") ? () => undefined : (stryCov_9fa48("1784"), e => setForm(stryMutAct_9fa48("1785") ? {} : (stryCov_9fa48("1785"), {
              ...form,
              patientId: e.target.value
            })))} required>
              <option value="">Select</option>
              {patients.map(stryMutAct_9fa48("1786") ? () => undefined : (stryCov_9fa48("1786"), p => <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
          </div>
          <div className="field"><label>Type</label>
            <select value={form.type} onChange={stryMutAct_9fa48("1787") ? () => undefined : (stryCov_9fa48("1787"), e => setForm(stryMutAct_9fa48("1788") ? {} : (stryCov_9fa48("1788"), {
              ...form,
              type: e.target.value
            })))}>
              <option value="discharge">Discharge</option>
              <option value="lab">Lab</option>
              <option value="radiology">Radiology</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="field"><label>Date</label><input type="date" value={form.date} onChange={stryMutAct_9fa48("1789") ? () => undefined : (stryCov_9fa48("1789"), e => setForm(stryMutAct_9fa48("1790") ? {} : (stryCov_9fa48("1790"), {
              ...form,
              date: e.target.value
            })))} /></div>
          <div className="field"><label>Summary</label><input value={form.summary} onChange={stryMutAct_9fa48("1791") ? () => undefined : (stryCov_9fa48("1791"), e => setForm(stryMutAct_9fa48("1792") ? {} : (stryCov_9fa48("1792"), {
              ...form,
              summary: e.target.value
            })))} /></div>
          <div className="actions"><button type="submit">Save</button></div>
        </form>

        <div>
          <h3>Report List</h3>
          <ul className="list">
            {visibleReports.map(stryMutAct_9fa48("1793") ? () => undefined : (stryCov_9fa48("1793"), r => <li key={r.id} className="list-item">
                <div className="title"><span>{r.type}</span></div>
                <div className="meta">
                  {stryMutAct_9fa48("1796") ? r.patientId || <span className="badge">{nameById(patients, r.patientId)}</span> : stryMutAct_9fa48("1795") ? false : stryMutAct_9fa48("1794") ? true : (stryCov_9fa48("1794", "1795", "1796"), r.patientId && <span className="badge">{nameById(patients, r.patientId)}</span>)}
                  {stryMutAct_9fa48("1799") ? r.date || <span className="badge">{r.date}</span> : stryMutAct_9fa48("1798") ? false : stryMutAct_9fa48("1797") ? true : (stryCov_9fa48("1797", "1798", "1799"), r.date && <span className="badge">{r.date}</span>)}
                  {stryMutAct_9fa48("1802") ? r.summary || <span className="badge">{r.summary}</span> : stryMutAct_9fa48("1801") ? false : stryMutAct_9fa48("1800") ? true : (stryCov_9fa48("1800", "1801", "1802"), r.summary && <span className="badge">{r.summary}</span>)}
                  <button className="link" onClick={stryMutAct_9fa48("1803") ? () => undefined : (stryCov_9fa48("1803"), () => patch(r.id, stryMutAct_9fa48("1804") ? {} : (stryCov_9fa48("1804"), {
                  summary: stryMutAct_9fa48("1807") ? prompt('Update summary', r.summary || '') && r.summary : stryMutAct_9fa48("1806") ? false : stryMutAct_9fa48("1805") ? true : (stryCov_9fa48("1805", "1806", "1807"), prompt(stryMutAct_9fa48("1808") ? "" : (stryCov_9fa48("1808"), 'Update summary'), stryMutAct_9fa48("1811") ? r.summary && '' : stryMutAct_9fa48("1810") ? false : stryMutAct_9fa48("1809") ? true : (stryCov_9fa48("1809", "1810", "1811"), r.summary || (stryMutAct_9fa48("1812") ? "Stryker was here!" : (stryCov_9fa48("1812"), '')))) || r.summary)
                })))}>Edit</button>
                  <button className="link" onClick={stryMutAct_9fa48("1813") ? () => undefined : (stryCov_9fa48("1813"), () => remove(r.id))}>Delete</button>
                </div>
              </li>))}
          </ul>
        </div>
      </div>
    </div>;
  }
}