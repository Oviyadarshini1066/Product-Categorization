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
import { Bills, Patients } from '../api';
export default function BillsPage() {
  if (stryMutAct_9fa48("1041")) {
    {}
  } else {
    stryCov_9fa48("1041");
    const [items, setItems] = useState(stryMutAct_9fa48("1042") ? ["Stryker was here"] : (stryCov_9fa48("1042"), []));
    const [patients, setPatients] = useState(stryMutAct_9fa48("1043") ? ["Stryker was here"] : (stryCov_9fa48("1043"), []));
    const [loading, setLoading] = useState(stryMutAct_9fa48("1044") ? true : (stryCov_9fa48("1044"), false));
    const [error, setError] = useState(stryMutAct_9fa48("1045") ? "Stryker was here!" : (stryCov_9fa48("1045"), ''));
    const [form, setForm] = useState(stryMutAct_9fa48("1046") ? {} : (stryCov_9fa48("1046"), {
      patientId: stryMutAct_9fa48("1047") ? "Stryker was here!" : (stryCov_9fa48("1047"), ''),
      items: stryMutAct_9fa48("1048") ? "Stryker was here!" : (stryCov_9fa48("1048"), ''),
      total: stryMutAct_9fa48("1049") ? "Stryker was here!" : (stryCov_9fa48("1049"), ''),
      status: stryMutAct_9fa48("1050") ? "" : (stryCov_9fa48("1050"), 'unpaid')
    }));
    async function load() {
      if (stryMutAct_9fa48("1051")) {
        {}
      } else {
        stryCov_9fa48("1051");
        setLoading(stryMutAct_9fa48("1052") ? false : (stryCov_9fa48("1052"), true));
        setError(stryMutAct_9fa48("1053") ? "Stryker was here!" : (stryCov_9fa48("1053"), ''));
        try {
          if (stryMutAct_9fa48("1054")) {
            {}
          } else {
            stryCov_9fa48("1054");
            setItems(await Bills.list());
            setPatients(await Patients.list());
          }
        } catch {
          if (stryMutAct_9fa48("1055")) {
            {}
          } else {
            stryCov_9fa48("1055");
            setError(stryMutAct_9fa48("1056") ? "" : (stryCov_9fa48("1056"), 'Failed to load bills'));
          }
        }
        setLoading(stryMutAct_9fa48("1057") ? true : (stryCov_9fa48("1057"), false));
      }
    }
    useEffect(() => {
      if (stryMutAct_9fa48("1058")) {
        {}
      } else {
        stryCov_9fa48("1058");
        load();
      }
    }, stryMutAct_9fa48("1059") ? ["Stryker was here"] : (stryCov_9fa48("1059"), []));
    async function create(e) {
      if (stryMutAct_9fa48("1060")) {
        {}
      } else {
        stryCov_9fa48("1060");
        e.preventDefault();
        const payload = stryMutAct_9fa48("1061") ? {} : (stryCov_9fa48("1061"), {
          ...form,
          items: form.items ? form.items.split(stryMutAct_9fa48("1062") ? "" : (stryCov_9fa48("1062"), ',')).map(stryMutAct_9fa48("1063") ? () => undefined : (stryCov_9fa48("1063"), s => stryMutAct_9fa48("1064") ? {} : (stryCov_9fa48("1064"), {
            desc: stryMutAct_9fa48("1065") ? s : (stryCov_9fa48("1065"), s.trim())
          }))) : stryMutAct_9fa48("1066") ? ["Stryker was here"] : (stryCov_9fa48("1066"), [])
        });
        try {
          if (stryMutAct_9fa48("1067")) {
            {}
          } else {
            stryCov_9fa48("1067");
            await Bills.create(payload);
            setForm(stryMutAct_9fa48("1068") ? {} : (stryCov_9fa48("1068"), {
              patientId: stryMutAct_9fa48("1069") ? "Stryker was here!" : (stryCov_9fa48("1069"), ''),
              items: stryMutAct_9fa48("1070") ? "Stryker was here!" : (stryCov_9fa48("1070"), ''),
              total: stryMutAct_9fa48("1071") ? "Stryker was here!" : (stryCov_9fa48("1071"), ''),
              status: stryMutAct_9fa48("1072") ? "" : (stryCov_9fa48("1072"), 'unpaid')
            }));
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1073")) {
            {}
          } else {
            stryCov_9fa48("1073");
            setError(stryMutAct_9fa48("1074") ? "" : (stryCov_9fa48("1074"), 'Failed to create'));
          }
        }
      }
    }
    async function remove(id) {
      if (stryMutAct_9fa48("1075")) {
        {}
      } else {
        stryCov_9fa48("1075");
        try {
          if (stryMutAct_9fa48("1076")) {
            {}
          } else {
            stryCov_9fa48("1076");
            await Bills.remove(id);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1077")) {
            {}
          } else {
            stryCov_9fa48("1077");
            setError(stryMutAct_9fa48("1078") ? "" : (stryCov_9fa48("1078"), 'Failed to delete'));
          }
        }
      }
    }
    async function patch(id, patch) {
      if (stryMutAct_9fa48("1079")) {
        {}
      } else {
        stryCov_9fa48("1079");
        try {
          if (stryMutAct_9fa48("1080")) {
            {}
          } else {
            stryCov_9fa48("1080");
            await Bills.patch(id, patch);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("1081")) {
            {}
          } else {
            stryCov_9fa48("1081");
            setError(stryMutAct_9fa48("1082") ? "" : (stryCov_9fa48("1082"), 'Failed to update'));
          }
        }
      }
    }
    const nameById = (list, id) => {
      if (stryMutAct_9fa48("1083")) {
        {}
      } else {
        stryCov_9fa48("1083");
        const x = list.find(stryMutAct_9fa48("1084") ? () => undefined : (stryCov_9fa48("1084"), i => stryMutAct_9fa48("1087") ? String(i.id) !== String(id) : stryMutAct_9fa48("1086") ? false : stryMutAct_9fa48("1085") ? true : (stryCov_9fa48("1085", "1086", "1087"), String(i.id) === String(id))));
        return x ? stryMutAct_9fa48("1090") ? (x.name || x.fullName || x.title) && `#${id}` : stryMutAct_9fa48("1089") ? false : stryMutAct_9fa48("1088") ? true : (stryCov_9fa48("1088", "1089", "1090"), (stryMutAct_9fa48("1092") ? (x.name || x.fullName) && x.title : stryMutAct_9fa48("1091") ? false : (stryCov_9fa48("1091", "1092"), (stryMutAct_9fa48("1094") ? x.name && x.fullName : stryMutAct_9fa48("1093") ? false : (stryCov_9fa48("1093", "1094"), x.name || x.fullName)) || x.title)) || (stryMutAct_9fa48("1095") ? `` : (stryCov_9fa48("1095"), `#${id}`))) : stryMutAct_9fa48("1096") ? "" : (stryCov_9fa48("1096"), '(Deleted patient)');
      }
    };
    const visibleBills = stryMutAct_9fa48("1097") ? items : (stryCov_9fa48("1097"), items.filter(stryMutAct_9fa48("1098") ? () => undefined : (stryCov_9fa48("1098"), b => stryMutAct_9fa48("1099") ? patients.every(p => String(p.id) === String(b.patientId)) : (stryCov_9fa48("1099"), patients.some(stryMutAct_9fa48("1100") ? () => undefined : (stryCov_9fa48("1100"), p => stryMutAct_9fa48("1103") ? String(p.id) !== String(b.patientId) : stryMutAct_9fa48("1102") ? false : stryMutAct_9fa48("1101") ? true : (stryCov_9fa48("1101", "1102", "1103"), String(p.id) === String(b.patientId))))))));
    return <div className="container">
      <header className="header">
        <h1>Billing {loading ? stryMutAct_9fa48("1104") ? "" : (stryCov_9fa48("1104"), '…') : stryMutAct_9fa48("1105") ? "Stryker was here!" : (stryCov_9fa48("1105"), '')}</h1>
      </header>
      {stryMutAct_9fa48("1108") ? error || <div className="error" role="alert">{error}</div> : stryMutAct_9fa48("1107") ? false : stryMutAct_9fa48("1106") ? true : (stryCov_9fa48("1106", "1107", "1108"), error && <div className="error" role="alert">{error}</div>)}

      <div className="main" style={stryMutAct_9fa48("1109") ? {} : (stryCov_9fa48("1109"), {
        gridTemplateColumns: stryMutAct_9fa48("1110") ? "" : (stryCov_9fa48("1110"), '1fr 2fr')
      })}>
        <form className="card" onSubmit={create}>
          <h3>Create Bill</h3>
          <div className="field"><label>Patient</label>
            <select value={form.patientId} onChange={stryMutAct_9fa48("1111") ? () => undefined : (stryCov_9fa48("1111"), e => setForm(stryMutAct_9fa48("1112") ? {} : (stryCov_9fa48("1112"), {
              ...form,
              patientId: e.target.value
            })))} required>
              <option value="">Select</option>
              {patients.map(stryMutAct_9fa48("1113") ? () => undefined : (stryCov_9fa48("1113"), p => <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
          </div>
          <div className="field"><label>Items (comma separated)</label><input value={form.items} onChange={stryMutAct_9fa48("1114") ? () => undefined : (stryCov_9fa48("1114"), e => setForm(stryMutAct_9fa48("1115") ? {} : (stryCov_9fa48("1115"), {
              ...form,
              items: e.target.value
            })))} /></div>
          <div className="field"><label>Total</label><input value={form.total} onChange={stryMutAct_9fa48("1116") ? () => undefined : (stryCov_9fa48("1116"), e => setForm(stryMutAct_9fa48("1117") ? {} : (stryCov_9fa48("1117"), {
              ...form,
              total: e.target.value
            })))} /></div>
          <div className="field"><label>Status</label>
            <select value={form.status} onChange={stryMutAct_9fa48("1118") ? () => undefined : (stryCov_9fa48("1118"), e => setForm(stryMutAct_9fa48("1119") ? {} : (stryCov_9fa48("1119"), {
              ...form,
              status: e.target.value
            })))}>
              <option value="unpaid">Unpaid</option>
              <option value="paid">Paid</option>
            </select>
          </div>
          <div className="actions"><button type="submit">Save</button></div>
        </form>

        <div>
          <h3>Invoices</h3>
          <ul className="list">
            {visibleBills.map(stryMutAct_9fa48("1120") ? () => undefined : (stryCov_9fa48("1120"), b => <li key={b.id} className="list-item">
                <div className="title"><span>Bill #{stryMutAct_9fa48("1121") ? b.id : (stryCov_9fa48("1121"), b.id.slice(stryMutAct_9fa48("1122") ? +6 : (stryCov_9fa48("1122"), -6)))}</span></div>
                <div className="meta">
                  {stryMutAct_9fa48("1125") ? b.patientId || <span className="badge">{nameById(patients, b.patientId)}</span> : stryMutAct_9fa48("1124") ? false : stryMutAct_9fa48("1123") ? true : (stryCov_9fa48("1123", "1124", "1125"), b.patientId && <span className="badge">{nameById(patients, b.patientId)}</span>)}
                  {stryMutAct_9fa48("1128") ? b.total || <span className="badge">Total {b.total}</span> : stryMutAct_9fa48("1127") ? false : stryMutAct_9fa48("1126") ? true : (stryCov_9fa48("1126", "1127", "1128"), b.total && <span className="badge">Total {b.total}</span>)}
                  <span className="badge">{b.status}</span>
                  <button className="link" onClick={stryMutAct_9fa48("1129") ? () => undefined : (stryCov_9fa48("1129"), () => patch(b.id, stryMutAct_9fa48("1130") ? {} : (stryCov_9fa48("1130"), {
                  status: (stryMutAct_9fa48("1133") ? b.status !== 'paid' : stryMutAct_9fa48("1132") ? false : stryMutAct_9fa48("1131") ? true : (stryCov_9fa48("1131", "1132", "1133"), b.status === (stryMutAct_9fa48("1134") ? "" : (stryCov_9fa48("1134"), 'paid')))) ? stryMutAct_9fa48("1135") ? "" : (stryCov_9fa48("1135"), 'unpaid') : stryMutAct_9fa48("1136") ? "" : (stryCov_9fa48("1136"), 'paid')
                })))}>Toggle Paid</button>
                  <button className="link" onClick={stryMutAct_9fa48("1137") ? () => undefined : (stryCov_9fa48("1137"), () => remove(b.id))}>Delete</button>
                </div>
              </li>))}
          </ul>
        </div>
      </div>
    </div>;
  }
}