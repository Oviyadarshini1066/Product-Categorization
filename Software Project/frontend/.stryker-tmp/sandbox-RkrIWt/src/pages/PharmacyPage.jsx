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
import { Inventory } from '../api';
export default function PharmacyPage() {
  if (stryMutAct_9fa48("1481")) {
    {}
  } else {
    stryCov_9fa48("1481");
    const [items, setItems] = useState(stryMutAct_9fa48("1482") ? ["Stryker was here"] : (stryCov_9fa48("1482"), []));
    const [loading, setLoading] = useState(stryMutAct_9fa48("1483") ? true : (stryCov_9fa48("1483"), false));
    const [error, setError] = useState(stryMutAct_9fa48("1484") ? "Stryker was here!" : (stryCov_9fa48("1484"), ''));
    const [form, setForm] = useState(stryMutAct_9fa48("1485") ? {} : (stryCov_9fa48("1485"), {
      name: stryMutAct_9fa48("1486") ? "Stryker was here!" : (stryCov_9fa48("1486"), ''),
      sku: stryMutAct_9fa48("1487") ? "Stryker was here!" : (stryCov_9fa48("1487"), ''),
      stock: stryMutAct_9fa48("1488") ? "Stryker was here!" : (stryCov_9fa48("1488"), ''),
      unit: stryMutAct_9fa48("1489") ? "" : (stryCov_9fa48("1489"), 'pcs'),
      reorderLevel: stryMutAct_9fa48("1490") ? "Stryker was here!" : (stryCov_9fa48("1490"), '')
    }));
    async function load() {
      if (stryMutAct_9fa48("1491")) {
        {}
      } else {
        stryCov_9fa48("1491");
        setLoading(stryMutAct_9fa48("1492") ? false : (stryCov_9fa48("1492"), true));
        setError(stryMutAct_9fa48("1493") ? "Stryker was here!" : (stryCov_9fa48("1493"), ''));
        try {
          if (stryMutAct_9fa48("1494")) {
            {}
          } else {
            stryCov_9fa48("1494");
            setItems(await Inventory.list());
          }
        } catch {
          if (stryMutAct_9fa48("1495")) {
            {}
          } else {
            stryCov_9fa48("1495");
            setError(stryMutAct_9fa48("1496") ? "" : (stryCov_9fa48("1496"), 'Failed to load inventory'));
          }
        }
        setLoading(stryMutAct_9fa48("1497") ? true : (stryCov_9fa48("1497"), false));
      }
    }
    useEffect(() => {
      if (stryMutAct_9fa48("1498")) {
        {}
      } else {
        stryCov_9fa48("1498");
        load();
      }
    }, stryMutAct_9fa48("1499") ? ["Stryker was here"] : (stryCov_9fa48("1499"), []));
    async function create(e) {
      if (stryMutAct_9fa48("1500")) {
        {}
      } else {
        stryCov_9fa48("1500");
        e.preventDefault();
        try {
          if (stryMutAct_9fa48("1501")) {
            {}
          } else {
            stryCov_9fa48("1501");
            await Inventory.create(form);
            setForm(stryMutAct_9fa48("1502") ? {} : (stryCov_9fa48("1502"), {
              name: stryMutAct_9fa48("1503") ? "Stryker was here!" : (stryCov_9fa48("1503"), ''),
              sku: stryMutAct_9fa48("1504") ? "Stryker was here!" : (stryCov_9fa48("1504"), ''),
              stock: stryMutAct_9fa48("1505") ? "Stryker was here!" : (stryCov_9fa48("1505"), ''),
              unit: stryMutAct_9fa48("1506") ? "" : (stryCov_9fa48("1506"), 'pcs'),
              reorderLevel: stryMutAct_9fa48("1507") ? "Stryker was here!" : (stryCov_9fa48("1507"), '')
            }));
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1508")) {
            {}
          } else {
            stryCov_9fa48("1508");
            setError(stryMutAct_9fa48("1509") ? "" : (stryCov_9fa48("1509"), 'Failed to create'));
          }
        }
      }
    }
    async function remove(id) {
      if (stryMutAct_9fa48("1510")) {
        {}
      } else {
        stryCov_9fa48("1510");
        try {
          if (stryMutAct_9fa48("1511")) {
            {}
          } else {
            stryCov_9fa48("1511");
            await Inventory.remove(id);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1512")) {
            {}
          } else {
            stryCov_9fa48("1512");
            setError(stryMutAct_9fa48("1513") ? "" : (stryCov_9fa48("1513"), 'Failed to delete'));
          }
        }
      }
    }
    async function patch(id, patch) {
      if (stryMutAct_9fa48("1514")) {
        {}
      } else {
        stryCov_9fa48("1514");
        try {
          if (stryMutAct_9fa48("1515")) {
            {}
          } else {
            stryCov_9fa48("1515");
            await Inventory.patch(id, patch);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1516")) {
            {}
          } else {
            stryCov_9fa48("1516");
            setError(stryMutAct_9fa48("1517") ? "" : (stryCov_9fa48("1517"), 'Failed to update'));
          }
        }
      }
    }
    return <div className="container">
      <header className="header">
        <h1>Pharmacy {loading ? stryMutAct_9fa48("1518") ? "" : (stryCov_9fa48("1518"), '…') : stryMutAct_9fa48("1519") ? "Stryker was here!" : (stryCov_9fa48("1519"), '')}</h1>
      </header>
      {stryMutAct_9fa48("1522") ? error || <div className="error" role="alert">{error}</div> : stryMutAct_9fa48("1521") ? false : stryMutAct_9fa48("1520") ? true : (stryCov_9fa48("1520", "1521", "1522"), error && <div className="error" role="alert">{error}</div>)}

      <div className="main" style={stryMutAct_9fa48("1523") ? {} : (stryCov_9fa48("1523"), {
        gridTemplateColumns: stryMutAct_9fa48("1524") ? "" : (stryCov_9fa48("1524"), '1fr 2fr')
      })}>
        <form className="card" onSubmit={create}>
          <h3>Add Item</h3>
          <div className="field"><label>Name</label><input value={form.name} onChange={stryMutAct_9fa48("1525") ? () => undefined : (stryCov_9fa48("1525"), e => setForm(stryMutAct_9fa48("1526") ? {} : (stryCov_9fa48("1526"), {
              ...form,
              name: e.target.value
            })))} required /></div>
          <div className="field"><label>SKU</label><input value={form.sku} onChange={stryMutAct_9fa48("1527") ? () => undefined : (stryCov_9fa48("1527"), e => setForm(stryMutAct_9fa48("1528") ? {} : (stryCov_9fa48("1528"), {
              ...form,
              sku: e.target.value
            })))} /></div>
          <div className="field"><label>Stock</label><input value={form.stock} onChange={stryMutAct_9fa48("1529") ? () => undefined : (stryCov_9fa48("1529"), e => setForm(stryMutAct_9fa48("1530") ? {} : (stryCov_9fa48("1530"), {
              ...form,
              stock: e.target.value
            })))} /></div>
          <div className="field"><label>Unit</label><input value={form.unit} onChange={stryMutAct_9fa48("1531") ? () => undefined : (stryCov_9fa48("1531"), e => setForm(stryMutAct_9fa48("1532") ? {} : (stryCov_9fa48("1532"), {
              ...form,
              unit: e.target.value
            })))} /></div>
          <div className="field"><label>Reorder Level</label><input value={form.reorderLevel} onChange={stryMutAct_9fa48("1533") ? () => undefined : (stryCov_9fa48("1533"), e => setForm(stryMutAct_9fa48("1534") ? {} : (stryCov_9fa48("1534"), {
              ...form,
              reorderLevel: e.target.value
            })))} /></div>
          <div className="actions"><button type="submit">Save</button></div>
        </form>

        <div>
          <h3>Inventory</h3>
          <ul className="list">
            {items.map(stryMutAct_9fa48("1535") ? () => undefined : (stryCov_9fa48("1535"), it => <li key={it.id} className="list-item">
                <div className="title"><span>{it.name}</span></div>
                <div className="meta">
                  {stryMutAct_9fa48("1538") ? it.sku || <span className="badge">{it.sku}</span> : stryMutAct_9fa48("1537") ? false : stryMutAct_9fa48("1536") ? true : (stryCov_9fa48("1536", "1537", "1538"), it.sku && <span className="badge">{it.sku}</span>)}
                  {stryMutAct_9fa48("1541") ? it.stock || <span className="badge">Stock {it.stock}{it.unit ? ' ' + it.unit : ''}</span> : stryMutAct_9fa48("1540") ? false : stryMutAct_9fa48("1539") ? true : (stryCov_9fa48("1539", "1540", "1541"), it.stock && <span className="badge">Stock {it.stock}{it.unit ? (stryMutAct_9fa48("1542") ? "" : (stryCov_9fa48("1542"), ' ')) + it.unit : stryMutAct_9fa48("1543") ? "Stryker was here!" : (stryCov_9fa48("1543"), '')}</span>)}
                  {stryMutAct_9fa48("1546") ? it.reorderLevel || <span className="badge">Reorder {it.reorderLevel}</span> : stryMutAct_9fa48("1545") ? false : stryMutAct_9fa48("1544") ? true : (stryCov_9fa48("1544", "1545", "1546"), it.reorderLevel && <span className="badge">Reorder {it.reorderLevel}</span>)}
                  <button className="link" onClick={stryMutAct_9fa48("1547") ? () => undefined : (stryCov_9fa48("1547"), () => patch(it.id, stryMutAct_9fa48("1548") ? {} : (stryCov_9fa48("1548"), {
                  stock: stryMutAct_9fa48("1551") ? prompt('Update stock', it.stock || '') && it.stock : stryMutAct_9fa48("1550") ? false : stryMutAct_9fa48("1549") ? true : (stryCov_9fa48("1549", "1550", "1551"), prompt(stryMutAct_9fa48("1552") ? "" : (stryCov_9fa48("1552"), 'Update stock'), stryMutAct_9fa48("1555") ? it.stock && '' : stryMutAct_9fa48("1554") ? false : stryMutAct_9fa48("1553") ? true : (stryCov_9fa48("1553", "1554", "1555"), it.stock || (stryMutAct_9fa48("1556") ? "Stryker was here!" : (stryCov_9fa48("1556"), '')))) || it.stock)
                })))}>Edit</button>
                  <button className="link" onClick={stryMutAct_9fa48("1557") ? () => undefined : (stryCov_9fa48("1557"), () => remove(it.id))}>Delete</button>
                </div>
              </li>))}
          </ul>
        </div>
      </div>
    </div>;
  }
}