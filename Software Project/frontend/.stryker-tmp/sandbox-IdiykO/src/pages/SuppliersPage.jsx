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
import { Suppliers } from '../api';
export default function SuppliersPage() {
  if (stryMutAct_9fa48("1814")) {
    {}
  } else {
    stryCov_9fa48("1814");
    const [items, setItems] = useState(stryMutAct_9fa48("1815") ? ["Stryker was here"] : (stryCov_9fa48("1815"), []));
    const [loading, setLoading] = useState(stryMutAct_9fa48("1816") ? true : (stryCov_9fa48("1816"), false));
    const [error, setError] = useState(stryMutAct_9fa48("1817") ? "Stryker was here!" : (stryCov_9fa48("1817"), ''));
    const [form, setForm] = useState(stryMutAct_9fa48("1818") ? {} : (stryCov_9fa48("1818"), {
      name: stryMutAct_9fa48("1819") ? "Stryker was here!" : (stryCov_9fa48("1819"), ''),
      contact: stryMutAct_9fa48("1820") ? "Stryker was here!" : (stryCov_9fa48("1820"), ''),
      email: stryMutAct_9fa48("1821") ? "Stryker was here!" : (stryCov_9fa48("1821"), ''),
      address: stryMutAct_9fa48("1822") ? "Stryker was here!" : (stryCov_9fa48("1822"), '')
    }));
    async function load() {
      if (stryMutAct_9fa48("1823")) {
        {}
      } else {
        stryCov_9fa48("1823");
        setLoading(stryMutAct_9fa48("1824") ? false : (stryCov_9fa48("1824"), true));
        setError(stryMutAct_9fa48("1825") ? "Stryker was here!" : (stryCov_9fa48("1825"), ''));
        try {
          if (stryMutAct_9fa48("1826")) {
            {}
          } else {
            stryCov_9fa48("1826");
            setItems(await Suppliers.list());
          }
        } catch {
          if (stryMutAct_9fa48("1827")) {
            {}
          } else {
            stryCov_9fa48("1827");
            setError(stryMutAct_9fa48("1828") ? "" : (stryCov_9fa48("1828"), 'Failed to load suppliers'));
          }
        }
        setLoading(stryMutAct_9fa48("1829") ? true : (stryCov_9fa48("1829"), false));
      }
    }
    useEffect(() => {
      if (stryMutAct_9fa48("1830")) {
        {}
      } else {
        stryCov_9fa48("1830");
        load();
      }
    }, stryMutAct_9fa48("1831") ? ["Stryker was here"] : (stryCov_9fa48("1831"), []));
    async function create(e) {
      if (stryMutAct_9fa48("1832")) {
        {}
      } else {
        stryCov_9fa48("1832");
        e.preventDefault();
        try {
          if (stryMutAct_9fa48("1833")) {
            {}
          } else {
            stryCov_9fa48("1833");
            await Suppliers.create(form);
            setForm(stryMutAct_9fa48("1834") ? {} : (stryCov_9fa48("1834"), {
              name: stryMutAct_9fa48("1835") ? "Stryker was here!" : (stryCov_9fa48("1835"), ''),
              contact: stryMutAct_9fa48("1836") ? "Stryker was here!" : (stryCov_9fa48("1836"), ''),
              email: stryMutAct_9fa48("1837") ? "Stryker was here!" : (stryCov_9fa48("1837"), ''),
              address: stryMutAct_9fa48("1838") ? "Stryker was here!" : (stryCov_9fa48("1838"), '')
            }));
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1839")) {
            {}
          } else {
            stryCov_9fa48("1839");
            setError(stryMutAct_9fa48("1840") ? "" : (stryCov_9fa48("1840"), 'Failed to create'));
          }
        }
      }
    }
    async function remove(id) {
      if (stryMutAct_9fa48("1841")) {
        {}
      } else {
        stryCov_9fa48("1841");
        try {
          if (stryMutAct_9fa48("1842")) {
            {}
          } else {
            stryCov_9fa48("1842");
            await Suppliers.remove(id);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1843")) {
            {}
          } else {
            stryCov_9fa48("1843");
            setError(stryMutAct_9fa48("1844") ? "" : (stryCov_9fa48("1844"), 'Failed to delete'));
          }
        }
      }
    }
    async function patch(id, patch) {
      if (stryMutAct_9fa48("1845")) {
        {}
      } else {
        stryCov_9fa48("1845");
        try {
          if (stryMutAct_9fa48("1846")) {
            {}
          } else {
            stryCov_9fa48("1846");
            await Suppliers.patch(id, patch);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1847")) {
            {}
          } else {
            stryCov_9fa48("1847");
            setError(stryMutAct_9fa48("1848") ? "" : (stryCov_9fa48("1848"), 'Failed to update'));
          }
        }
      }
    }
    return <div className="container">
      <header className="header">
        <h1>Suppliers {loading ? stryMutAct_9fa48("1849") ? "" : (stryCov_9fa48("1849"), '…') : stryMutAct_9fa48("1850") ? "Stryker was here!" : (stryCov_9fa48("1850"), '')}</h1>
      </header>
      {stryMutAct_9fa48("1853") ? error || <div className="error" role="alert">{error}</div> : stryMutAct_9fa48("1852") ? false : stryMutAct_9fa48("1851") ? true : (stryCov_9fa48("1851", "1852", "1853"), error && <div className="error" role="alert">{error}</div>)}

      <div className="main" style={stryMutAct_9fa48("1854") ? {} : (stryCov_9fa48("1854"), {
        gridTemplateColumns: stryMutAct_9fa48("1855") ? "" : (stryCov_9fa48("1855"), '1fr 2fr')
      })}>
        <form className="card" onSubmit={create}>
          <h3>Add Supplier</h3>
          <div className="field"><label>Name</label><input value={form.name} onChange={stryMutAct_9fa48("1856") ? () => undefined : (stryCov_9fa48("1856"), e => setForm(stryMutAct_9fa48("1857") ? {} : (stryCov_9fa48("1857"), {
              ...form,
              name: e.target.value
            })))} required /></div>
          <div className="field"><label>Contact</label><input value={form.contact} onChange={stryMutAct_9fa48("1858") ? () => undefined : (stryCov_9fa48("1858"), e => setForm(stryMutAct_9fa48("1859") ? {} : (stryCov_9fa48("1859"), {
              ...form,
              contact: e.target.value
            })))} /></div>
          <div className="field"><label>Email</label><input type="email" value={form.email} onChange={stryMutAct_9fa48("1860") ? () => undefined : (stryCov_9fa48("1860"), e => setForm(stryMutAct_9fa48("1861") ? {} : (stryCov_9fa48("1861"), {
              ...form,
              email: e.target.value
            })))} /></div>
          <div className="field"><label>Address</label><input value={form.address} onChange={stryMutAct_9fa48("1862") ? () => undefined : (stryCov_9fa48("1862"), e => setForm(stryMutAct_9fa48("1863") ? {} : (stryCov_9fa48("1863"), {
              ...form,
              address: e.target.value
            })))} /></div>
          <div className="actions"><button type="submit">Save</button></div>
        </form>

        <div>
          <h3>Supplier Directory</h3>
          <ul className="list">
            {items.map(stryMutAct_9fa48("1864") ? () => undefined : (stryCov_9fa48("1864"), s => <li key={s.id} className="list-item">
                <div className="title"><span>{s.name}</span></div>
                <div className="meta">
                  {stryMutAct_9fa48("1867") ? s.contact || <span className="badge">{s.contact}</span> : stryMutAct_9fa48("1866") ? false : stryMutAct_9fa48("1865") ? true : (stryCov_9fa48("1865", "1866", "1867"), s.contact && <span className="badge">{s.contact}</span>)}
                  {stryMutAct_9fa48("1870") ? s.email || <span className="badge">{s.email}</span> : stryMutAct_9fa48("1869") ? false : stryMutAct_9fa48("1868") ? true : (stryCov_9fa48("1868", "1869", "1870"), s.email && <span className="badge">{s.email}</span>)}
                  <button className="link" onClick={stryMutAct_9fa48("1871") ? () => undefined : (stryCov_9fa48("1871"), () => patch(s.id, stryMutAct_9fa48("1872") ? {} : (stryCov_9fa48("1872"), {
                  contact: stryMutAct_9fa48("1875") ? prompt('Update contact', s.contact || '') && s.contact : stryMutAct_9fa48("1874") ? false : stryMutAct_9fa48("1873") ? true : (stryCov_9fa48("1873", "1874", "1875"), prompt(stryMutAct_9fa48("1876") ? "" : (stryCov_9fa48("1876"), 'Update contact'), stryMutAct_9fa48("1879") ? s.contact && '' : stryMutAct_9fa48("1878") ? false : stryMutAct_9fa48("1877") ? true : (stryCov_9fa48("1877", "1878", "1879"), s.contact || (stryMutAct_9fa48("1880") ? "Stryker was here!" : (stryCov_9fa48("1880"), '')))) || s.contact)
                })))}>Edit</button>
                  <button className="link" onClick={stryMutAct_9fa48("1881") ? () => undefined : (stryCov_9fa48("1881"), () => remove(s.id))}>Delete</button>
                </div>
              </li>))}
            {stryMutAct_9fa48("1884") ? items.length === 0 || <li className="list-item"><div className="title"><span className="muted">No suppliers</span></div></li> : stryMutAct_9fa48("1883") ? false : stryMutAct_9fa48("1882") ? true : (stryCov_9fa48("1882", "1883", "1884"), (stryMutAct_9fa48("1886") ? items.length !== 0 : stryMutAct_9fa48("1885") ? true : (stryCov_9fa48("1885", "1886"), items.length === 0)) && <li className="list-item"><div className="title"><span className="muted">No suppliers</span></div></li>)}
          </ul>
        </div>
      </div>
    </div>;
  }
}