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
import { Admissions, Transfers, Discharges, Patients, Doctors } from '../api';
export default function AdmissionsPage() {
  if (stryMutAct_9fa48("470")) {
    {}
  } else {
    stryCov_9fa48("470");
    const [patients, setPatients] = useState(stryMutAct_9fa48("471") ? ["Stryker was here"] : (stryCov_9fa48("471"), []));
    const [doctors, setDoctors] = useState(stryMutAct_9fa48("472") ? ["Stryker was here"] : (stryCov_9fa48("472"), []));
    const [admissions, setAdmissions] = useState(stryMutAct_9fa48("473") ? ["Stryker was here"] : (stryCov_9fa48("473"), []));
    const [transfers, setTransfers] = useState(stryMutAct_9fa48("474") ? ["Stryker was here"] : (stryCov_9fa48("474"), []));
    const [discharges, setDischarges] = useState(stryMutAct_9fa48("475") ? ["Stryker was here"] : (stryCov_9fa48("475"), []));
    const [loading, setLoading] = useState(stryMutAct_9fa48("476") ? true : (stryCov_9fa48("476"), false));
    const [error, setError] = useState(stryMutAct_9fa48("477") ? "Stryker was here!" : (stryCov_9fa48("477"), ''));
    const [tab, setTab] = useState(stryMutAct_9fa48("478") ? "" : (stryCov_9fa48("478"), 'admit'));
    const [admit, setAdmit] = useState(stryMutAct_9fa48("479") ? {} : (stryCov_9fa48("479"), {
      patientId: stryMutAct_9fa48("480") ? "Stryker was here!" : (stryCov_9fa48("480"), ''),
      doctorId: stryMutAct_9fa48("481") ? "Stryker was here!" : (stryCov_9fa48("481"), ''),
      ward: stryMutAct_9fa48("482") ? "Stryker was here!" : (stryCov_9fa48("482"), ''),
      reason: stryMutAct_9fa48("483") ? "Stryker was here!" : (stryCov_9fa48("483"), '')
    }));
    const [transfer, setTransfer] = useState(stryMutAct_9fa48("484") ? {} : (stryCov_9fa48("484"), {
      patientId: stryMutAct_9fa48("485") ? "Stryker was here!" : (stryCov_9fa48("485"), ''),
      fromWard: stryMutAct_9fa48("486") ? "Stryker was here!" : (stryCov_9fa48("486"), ''),
      toWard: stryMutAct_9fa48("487") ? "Stryker was here!" : (stryCov_9fa48("487"), ''),
      note: stryMutAct_9fa48("488") ? "Stryker was here!" : (stryCov_9fa48("488"), '')
    }));
    const [discharge, setDischarge] = useState(stryMutAct_9fa48("489") ? {} : (stryCov_9fa48("489"), {
      patientId: stryMutAct_9fa48("490") ? "Stryker was here!" : (stryCov_9fa48("490"), ''),
      summary: stryMutAct_9fa48("491") ? "Stryker was here!" : (stryCov_9fa48("491"), '')
    }));
    async function load() {
      if (stryMutAct_9fa48("492")) {
        {}
      } else {
        stryCov_9fa48("492");
        setLoading(stryMutAct_9fa48("493") ? false : (stryCov_9fa48("493"), true));
        setError(stryMutAct_9fa48("494") ? "Stryker was here!" : (stryCov_9fa48("494"), ''));
        try {
          if (stryMutAct_9fa48("495")) {
            {}
          } else {
            stryCov_9fa48("495");
            const [pats, docs, adms, trs, dchs] = await Promise.all(stryMutAct_9fa48("496") ? [] : (stryCov_9fa48("496"), [Patients.list(), Doctors.list(), Admissions.list(), Transfers.list(), Discharges.list()]));
            setPatients(pats);
            setDoctors(docs);
            setAdmissions(adms);
            setTransfers(trs);
            setDischarges(dchs);
          }
        } catch {
          if (stryMutAct_9fa48("497")) {
            {}
          } else {
            stryCov_9fa48("497");
            setError(stryMutAct_9fa48("498") ? "" : (stryCov_9fa48("498"), 'Failed to load ADT data'));
          }
        }
        setLoading(stryMutAct_9fa48("499") ? true : (stryCov_9fa48("499"), false));
      }
    }
    useEffect(() => {
      if (stryMutAct_9fa48("500")) {
        {}
      } else {
        stryCov_9fa48("500");
        load();
      }
    }, stryMutAct_9fa48("501") ? ["Stryker was here"] : (stryCov_9fa48("501"), []));
    async function createAdmission(e) {
      if (stryMutAct_9fa48("502")) {
        {}
      } else {
        stryCov_9fa48("502");
        e.preventDefault();
        try {
          if (stryMutAct_9fa48("503")) {
            {}
          } else {
            stryCov_9fa48("503");
            await Admissions.create(admit);
            setAdmit(stryMutAct_9fa48("504") ? {} : (stryCov_9fa48("504"), {
              patientId: stryMutAct_9fa48("505") ? "Stryker was here!" : (stryCov_9fa48("505"), ''),
              doctorId: stryMutAct_9fa48("506") ? "Stryker was here!" : (stryCov_9fa48("506"), ''),
              ward: stryMutAct_9fa48("507") ? "Stryker was here!" : (stryCov_9fa48("507"), ''),
              reason: stryMutAct_9fa48("508") ? "Stryker was here!" : (stryCov_9fa48("508"), '')
            }));
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("509")) {
            {}
          } else {
            stryCov_9fa48("509");
            setError(stryMutAct_9fa48("510") ? "" : (stryCov_9fa48("510"), 'Failed to admit'));
          }
        }
      }
    }
    async function createTransfer(e) {
      if (stryMutAct_9fa48("511")) {
        {}
      } else {
        stryCov_9fa48("511");
        e.preventDefault();
        try {
          if (stryMutAct_9fa48("512")) {
            {}
          } else {
            stryCov_9fa48("512");
            await Transfers.create(transfer);
            setTransfer(stryMutAct_9fa48("513") ? {} : (stryCov_9fa48("513"), {
              patientId: stryMutAct_9fa48("514") ? "Stryker was here!" : (stryCov_9fa48("514"), ''),
              fromWard: stryMutAct_9fa48("515") ? "Stryker was here!" : (stryCov_9fa48("515"), ''),
              toWard: stryMutAct_9fa48("516") ? "Stryker was here!" : (stryCov_9fa48("516"), ''),
              note: stryMutAct_9fa48("517") ? "Stryker was here!" : (stryCov_9fa48("517"), '')
            }));
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("518")) {
            {}
          } else {
            stryCov_9fa48("518");
            setError(stryMutAct_9fa48("519") ? "" : (stryCov_9fa48("519"), 'Failed to transfer'));
          }
        }
      }
    }
    async function createDischarge(e) {
      if (stryMutAct_9fa48("520")) {
        {}
      } else {
        stryCov_9fa48("520");
        e.preventDefault();
        try {
          if (stryMutAct_9fa48("521")) {
            {}
          } else {
            stryCov_9fa48("521");
            await Discharges.create(discharge);
            setDischarge(stryMutAct_9fa48("522") ? {} : (stryCov_9fa48("522"), {
              patientId: stryMutAct_9fa48("523") ? "Stryker was here!" : (stryCov_9fa48("523"), ''),
              summary: stryMutAct_9fa48("524") ? "Stryker was here!" : (stryCov_9fa48("524"), '')
            }));
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("525")) {
            {}
          } else {
            stryCov_9fa48("525");
            setError(stryMutAct_9fa48("526") ? "" : (stryCov_9fa48("526"), 'Failed to discharge'));
          }
        }
      }
    }
    async function removeOne(kind, id) {
      if (stryMutAct_9fa48("527")) {
        {}
      } else {
        stryCov_9fa48("527");
        const map = stryMutAct_9fa48("528") ? {} : (stryCov_9fa48("528"), {
          admissions: Admissions,
          transfers: Transfers,
          discharges: Discharges
        });
        try {
          if (stryMutAct_9fa48("529")) {
            {}
          } else {
            stryCov_9fa48("529");
            await map[kind].remove(id);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("530")) {
            {}
          } else {
            stryCov_9fa48("530");
            setError(stryMutAct_9fa48("531") ? "" : (stryCov_9fa48("531"), 'Failed to delete'));
          }
        }
      }
    }
    const nameById = (list, id) => {
      if (stryMutAct_9fa48("532")) {
        {}
      } else {
        stryCov_9fa48("532");
        const x = list.find(stryMutAct_9fa48("533") ? () => undefined : (stryCov_9fa48("533"), i => stryMutAct_9fa48("536") ? String(i.id) !== String(id) : stryMutAct_9fa48("535") ? false : stryMutAct_9fa48("534") ? true : (stryCov_9fa48("534", "535", "536"), String(i.id) === String(id))));
        return x ? stryMutAct_9fa48("539") ? (x.name || x.fullName || x.title) && `#${id}` : stryMutAct_9fa48("538") ? false : stryMutAct_9fa48("537") ? true : (stryCov_9fa48("537", "538", "539"), (stryMutAct_9fa48("541") ? (x.name || x.fullName) && x.title : stryMutAct_9fa48("540") ? false : (stryCov_9fa48("540", "541"), (stryMutAct_9fa48("543") ? x.name && x.fullName : stryMutAct_9fa48("542") ? false : (stryCov_9fa48("542", "543"), x.name || x.fullName)) || x.title)) || (stryMutAct_9fa48("544") ? `` : (stryCov_9fa48("544"), `#${id}`))) : stryMutAct_9fa48("545") ? "" : (stryCov_9fa48("545"), '(Deleted patient)');
      }
    };
    const visibleAdmissions = stryMutAct_9fa48("546") ? admissions : (stryCov_9fa48("546"), admissions.filter(stryMutAct_9fa48("547") ? () => undefined : (stryCov_9fa48("547"), a => stryMutAct_9fa48("548") ? patients.every(p => String(p.id) === String(a.patientId)) : (stryCov_9fa48("548"), patients.some(stryMutAct_9fa48("549") ? () => undefined : (stryCov_9fa48("549"), p => stryMutAct_9fa48("552") ? String(p.id) !== String(a.patientId) : stryMutAct_9fa48("551") ? false : stryMutAct_9fa48("550") ? true : (stryCov_9fa48("550", "551", "552"), String(p.id) === String(a.patientId))))))));
    const visibleTransfers = stryMutAct_9fa48("553") ? transfers : (stryCov_9fa48("553"), transfers.filter(stryMutAct_9fa48("554") ? () => undefined : (stryCov_9fa48("554"), t => stryMutAct_9fa48("555") ? patients.every(p => String(p.id) === String(t.patientId)) : (stryCov_9fa48("555"), patients.some(stryMutAct_9fa48("556") ? () => undefined : (stryCov_9fa48("556"), p => stryMutAct_9fa48("559") ? String(p.id) !== String(t.patientId) : stryMutAct_9fa48("558") ? false : stryMutAct_9fa48("557") ? true : (stryCov_9fa48("557", "558", "559"), String(p.id) === String(t.patientId))))))));
    const visibleDischarges = stryMutAct_9fa48("560") ? discharges : (stryCov_9fa48("560"), discharges.filter(stryMutAct_9fa48("561") ? () => undefined : (stryCov_9fa48("561"), d => stryMutAct_9fa48("562") ? patients.every(p => String(p.id) === String(d.patientId)) : (stryCov_9fa48("562"), patients.some(stryMutAct_9fa48("563") ? () => undefined : (stryCov_9fa48("563"), p => stryMutAct_9fa48("566") ? String(p.id) !== String(d.patientId) : stryMutAct_9fa48("565") ? false : stryMutAct_9fa48("564") ? true : (stryCov_9fa48("564", "565", "566"), String(p.id) === String(d.patientId))))))));
    return <div className="container">
      <header className="header">
        <h1>Admissions / Transfers / Discharges {loading ? stryMutAct_9fa48("567") ? "" : (stryCov_9fa48("567"), '…') : stryMutAct_9fa48("568") ? "Stryker was here!" : (stryCov_9fa48("568"), '')}</h1>
      </header>
      {stryMutAct_9fa48("571") ? error || <div className="error" role="alert">{error}</div> : stryMutAct_9fa48("570") ? false : stryMutAct_9fa48("569") ? true : (stryCov_9fa48("569", "570", "571"), error && <div className="error" role="alert">{error}</div>)}

      <div className="main" style={stryMutAct_9fa48("572") ? {} : (stryCov_9fa48("572"), {
        gridTemplateColumns: stryMutAct_9fa48("573") ? "" : (stryCov_9fa48("573"), '1fr 2fr')
      })}>
        <div className="card">
          <div className="controls">
            <button type="button" className={(stryMutAct_9fa48("576") ? tab !== 'admit' : stryMutAct_9fa48("575") ? false : stryMutAct_9fa48("574") ? true : (stryCov_9fa48("574", "575", "576"), tab === (stryMutAct_9fa48("577") ? "" : (stryCov_9fa48("577"), 'admit')))) ? stryMutAct_9fa48("578") ? "" : (stryCov_9fa48("578"), "btn-secondary") : stryMutAct_9fa48("579") ? "" : (stryCov_9fa48("579"), "btn-ghost")} onClick={stryMutAct_9fa48("580") ? () => undefined : (stryCov_9fa48("580"), () => setTab(stryMutAct_9fa48("581") ? "" : (stryCov_9fa48("581"), 'admit')))}>Admit</button>
            <button type="button" className={(stryMutAct_9fa48("584") ? tab !== 'transfer' : stryMutAct_9fa48("583") ? false : stryMutAct_9fa48("582") ? true : (stryCov_9fa48("582", "583", "584"), tab === (stryMutAct_9fa48("585") ? "" : (stryCov_9fa48("585"), 'transfer')))) ? stryMutAct_9fa48("586") ? "" : (stryCov_9fa48("586"), "btn-secondary") : stryMutAct_9fa48("587") ? "" : (stryCov_9fa48("587"), "btn-ghost")} onClick={stryMutAct_9fa48("588") ? () => undefined : (stryCov_9fa48("588"), () => setTab(stryMutAct_9fa48("589") ? "" : (stryCov_9fa48("589"), 'transfer')))}>Transfer</button>
            <button type="button" className={(stryMutAct_9fa48("592") ? tab !== 'discharge' : stryMutAct_9fa48("591") ? false : stryMutAct_9fa48("590") ? true : (stryCov_9fa48("590", "591", "592"), tab === (stryMutAct_9fa48("593") ? "" : (stryCov_9fa48("593"), 'discharge')))) ? stryMutAct_9fa48("594") ? "" : (stryCov_9fa48("594"), "btn-secondary") : stryMutAct_9fa48("595") ? "" : (stryCov_9fa48("595"), "btn-ghost")} onClick={stryMutAct_9fa48("596") ? () => undefined : (stryCov_9fa48("596"), () => setTab(stryMutAct_9fa48("597") ? "" : (stryCov_9fa48("597"), 'discharge')))}>Discharge</button>
          </div>

          {stryMutAct_9fa48("600") ? tab === 'admit' || <form onSubmit={createAdmission}>
              <h3>Admit Patient</h3>
              <div className="field"><label>Patient</label>
                <select value={admit.patientId} onChange={e => setAdmit({
                ...admit,
                patientId: e.target.value
              })} required>
                  <option value="">Select</option>
                  {patients.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </div>
              <div className="field"><label>Doctor</label>
                <select value={admit.doctorId} onChange={e => setAdmit({
                ...admit,
                doctorId: e.target.value
              })} required>
                  <option value="">Select</option>
                  {doctors.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
                </select>
              </div>
              <div className="field"><label>Ward/Room</label><input value={admit.ward} onChange={e => setAdmit({
                ...admit,
                ward: e.target.value
              })} /></div>
              <div className="field"><label>Reason</label><input value={admit.reason} onChange={e => setAdmit({
                ...admit,
                reason: e.target.value
              })} /></div>
              <div className="actions"><button type="submit">Save</button></div>
            </form> : stryMutAct_9fa48("599") ? false : stryMutAct_9fa48("598") ? true : (stryCov_9fa48("598", "599", "600"), (stryMutAct_9fa48("602") ? tab !== 'admit' : stryMutAct_9fa48("601") ? true : (stryCov_9fa48("601", "602"), tab === (stryMutAct_9fa48("603") ? "" : (stryCov_9fa48("603"), 'admit')))) && <form onSubmit={createAdmission}>
              <h3>Admit Patient</h3>
              <div className="field"><label>Patient</label>
                <select value={admit.patientId} onChange={stryMutAct_9fa48("604") ? () => undefined : (stryCov_9fa48("604"), e => setAdmit(stryMutAct_9fa48("605") ? {} : (stryCov_9fa48("605"), {
                ...admit,
                patientId: e.target.value
              })))} required>
                  <option value="">Select</option>
                  {patients.map(stryMutAct_9fa48("606") ? () => undefined : (stryCov_9fa48("606"), p => <option key={p.id} value={p.id}>{p.name}</option>))}
                </select>
              </div>
              <div className="field"><label>Doctor</label>
                <select value={admit.doctorId} onChange={stryMutAct_9fa48("607") ? () => undefined : (stryCov_9fa48("607"), e => setAdmit(stryMutAct_9fa48("608") ? {} : (stryCov_9fa48("608"), {
                ...admit,
                doctorId: e.target.value
              })))} required>
                  <option value="">Select</option>
                  {doctors.map(stryMutAct_9fa48("609") ? () => undefined : (stryCov_9fa48("609"), d => <option key={d.id} value={d.id}>{d.name}</option>))}
                </select>
              </div>
              <div className="field"><label>Ward/Room</label><input value={admit.ward} onChange={stryMutAct_9fa48("610") ? () => undefined : (stryCov_9fa48("610"), e => setAdmit(stryMutAct_9fa48("611") ? {} : (stryCov_9fa48("611"), {
                ...admit,
                ward: e.target.value
              })))} /></div>
              <div className="field"><label>Reason</label><input value={admit.reason} onChange={stryMutAct_9fa48("612") ? () => undefined : (stryCov_9fa48("612"), e => setAdmit(stryMutAct_9fa48("613") ? {} : (stryCov_9fa48("613"), {
                ...admit,
                reason: e.target.value
              })))} /></div>
              <div className="actions"><button type="submit">Save</button></div>
            </form>)}

          {stryMutAct_9fa48("616") ? tab === 'transfer' || <form onSubmit={createTransfer}>
              <h3>Transfer Patient</h3>
              <div className="field"><label>Patient</label>
                <select value={transfer.patientId} onChange={e => setTransfer({
                ...transfer,
                patientId: e.target.value
              })} required>
                  <option value="">Select</option>
                  {patients.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </div>
              <div className="field"><label>From Ward</label><input value={transfer.fromWard} onChange={e => setTransfer({
                ...transfer,
                fromWard: e.target.value
              })} /></div>
              <div className="field"><label>To Ward</label><input value={transfer.toWard} onChange={e => setTransfer({
                ...transfer,
                toWard: e.target.value
              })} /></div>
              <div className="field"><label>Note</label><input value={transfer.note} onChange={e => setTransfer({
                ...transfer,
                note: e.target.value
              })} /></div>
              <div className="actions"><button type="submit">Save</button></div>
            </form> : stryMutAct_9fa48("615") ? false : stryMutAct_9fa48("614") ? true : (stryCov_9fa48("614", "615", "616"), (stryMutAct_9fa48("618") ? tab !== 'transfer' : stryMutAct_9fa48("617") ? true : (stryCov_9fa48("617", "618"), tab === (stryMutAct_9fa48("619") ? "" : (stryCov_9fa48("619"), 'transfer')))) && <form onSubmit={createTransfer}>
              <h3>Transfer Patient</h3>
              <div className="field"><label>Patient</label>
                <select value={transfer.patientId} onChange={stryMutAct_9fa48("620") ? () => undefined : (stryCov_9fa48("620"), e => setTransfer(stryMutAct_9fa48("621") ? {} : (stryCov_9fa48("621"), {
                ...transfer,
                patientId: e.target.value
              })))} required>
                  <option value="">Select</option>
                  {patients.map(stryMutAct_9fa48("622") ? () => undefined : (stryCov_9fa48("622"), p => <option key={p.id} value={p.id}>{p.name}</option>))}
                </select>
              </div>
              <div className="field"><label>From Ward</label><input value={transfer.fromWard} onChange={stryMutAct_9fa48("623") ? () => undefined : (stryCov_9fa48("623"), e => setTransfer(stryMutAct_9fa48("624") ? {} : (stryCov_9fa48("624"), {
                ...transfer,
                fromWard: e.target.value
              })))} /></div>
              <div className="field"><label>To Ward</label><input value={transfer.toWard} onChange={stryMutAct_9fa48("625") ? () => undefined : (stryCov_9fa48("625"), e => setTransfer(stryMutAct_9fa48("626") ? {} : (stryCov_9fa48("626"), {
                ...transfer,
                toWard: e.target.value
              })))} /></div>
              <div className="field"><label>Note</label><input value={transfer.note} onChange={stryMutAct_9fa48("627") ? () => undefined : (stryCov_9fa48("627"), e => setTransfer(stryMutAct_9fa48("628") ? {} : (stryCov_9fa48("628"), {
                ...transfer,
                note: e.target.value
              })))} /></div>
              <div className="actions"><button type="submit">Save</button></div>
            </form>)}

          {stryMutAct_9fa48("631") ? tab === 'discharge' || <form onSubmit={createDischarge}>
              <h3>Discharge Patient</h3>
              <div className="field"><label>Patient</label>
                <select value={discharge.patientId} onChange={e => setDischarge({
                ...discharge,
                patientId: e.target.value
              })} required>
                  <option value="">Select</option>
                  {patients.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </div>
              <div className="field"><label>Summary</label><input value={discharge.summary} onChange={e => setDischarge({
                ...discharge,
                summary: e.target.value
              })} /></div>
              <div className="actions"><button type="submit">Save</button></div>
            </form> : stryMutAct_9fa48("630") ? false : stryMutAct_9fa48("629") ? true : (stryCov_9fa48("629", "630", "631"), (stryMutAct_9fa48("633") ? tab !== 'discharge' : stryMutAct_9fa48("632") ? true : (stryCov_9fa48("632", "633"), tab === (stryMutAct_9fa48("634") ? "" : (stryCov_9fa48("634"), 'discharge')))) && <form onSubmit={createDischarge}>
              <h3>Discharge Patient</h3>
              <div className="field"><label>Patient</label>
                <select value={discharge.patientId} onChange={stryMutAct_9fa48("635") ? () => undefined : (stryCov_9fa48("635"), e => setDischarge(stryMutAct_9fa48("636") ? {} : (stryCov_9fa48("636"), {
                ...discharge,
                patientId: e.target.value
              })))} required>
                  <option value="">Select</option>
                  {patients.map(stryMutAct_9fa48("637") ? () => undefined : (stryCov_9fa48("637"), p => <option key={p.id} value={p.id}>{p.name}</option>))}
                </select>
              </div>
              <div className="field"><label>Summary</label><input value={discharge.summary} onChange={stryMutAct_9fa48("638") ? () => undefined : (stryCov_9fa48("638"), e => setDischarge(stryMutAct_9fa48("639") ? {} : (stryCov_9fa48("639"), {
                ...discharge,
                summary: e.target.value
              })))} /></div>
              <div className="actions"><button type="submit">Save</button></div>
            </form>)}
        </div>

        <div>
          <div className="card" style={stryMutAct_9fa48("640") ? {} : (stryCov_9fa48("640"), {
            marginBottom: 12
          })}>
            <h3 className="page-title">Recent Admissions</h3>
            <ul className="list">
              {visibleAdmissions.map(stryMutAct_9fa48("641") ? () => undefined : (stryCov_9fa48("641"), a => <li key={a.id} className="list-item">
                  <div className="title"><span>{nameById(patients, a.patientId)}</span></div>
                  <div className="meta"><span className="badge">Ward {a.ward}</span><button className="link" onClick={stryMutAct_9fa48("642") ? () => undefined : (stryCov_9fa48("642"), () => removeOne(stryMutAct_9fa48("643") ? "" : (stryCov_9fa48("643"), 'admissions'), a.id))}>Delete</button></div>
                </li>))}
              {stryMutAct_9fa48("646") ? visibleAdmissions.length === 0 || <li className="list-item"><div className="title"><span className="muted">No admissions</span></div></li> : stryMutAct_9fa48("645") ? false : stryMutAct_9fa48("644") ? true : (stryCov_9fa48("644", "645", "646"), (stryMutAct_9fa48("648") ? visibleAdmissions.length !== 0 : stryMutAct_9fa48("647") ? true : (stryCov_9fa48("647", "648"), visibleAdmissions.length === 0)) && <li className="list-item"><div className="title"><span className="muted">No admissions</span></div></li>)}
            </ul>
          </div>

          <div className="card" style={stryMutAct_9fa48("649") ? {} : (stryCov_9fa48("649"), {
            marginBottom: 12
          })}>
            <h3 className="page-title">Transfers</h3>
            <ul className="list">
              {visibleTransfers.map(stryMutAct_9fa48("650") ? () => undefined : (stryCov_9fa48("650"), t => <li key={t.id} className="list-item">
                  <div className="title"><span>{nameById(patients, t.patientId)}</span></div>
                  <div className="meta"><span className="badge">{t.fromWard} → {t.toWard}</span><button className="link" onClick={stryMutAct_9fa48("651") ? () => undefined : (stryCov_9fa48("651"), () => removeOne(stryMutAct_9fa48("652") ? "" : (stryCov_9fa48("652"), 'transfers'), t.id))}>Delete</button></div>
                </li>))}
              {stryMutAct_9fa48("655") ? visibleTransfers.length === 0 || <li className="list-item"><div className="title"><span className="muted">No transfers</span></div></li> : stryMutAct_9fa48("654") ? false : stryMutAct_9fa48("653") ? true : (stryCov_9fa48("653", "654", "655"), (stryMutAct_9fa48("657") ? visibleTransfers.length !== 0 : stryMutAct_9fa48("656") ? true : (stryCov_9fa48("656", "657"), visibleTransfers.length === 0)) && <li className="list-item"><div className="title"><span className="muted">No transfers</span></div></li>)}
            </ul>
          </div>

          <div className="card">
            <h3 className="page-title">Discharges</h3>
            <ul className="list">
              {visibleDischarges.map(stryMutAct_9fa48("658") ? () => undefined : (stryCov_9fa48("658"), d => <li key={d.id} className="list-item">
                  <div className="title"><span>{nameById(patients, d.patientId)}</span></div>
                  <div className="meta"><span className="badge">{stryMutAct_9fa48("661") ? d.summary && 'Summary' : stryMutAct_9fa48("660") ? false : stryMutAct_9fa48("659") ? true : (stryCov_9fa48("659", "660", "661"), d.summary || (stryMutAct_9fa48("662") ? "" : (stryCov_9fa48("662"), 'Summary')))}</span><button className="link" onClick={stryMutAct_9fa48("663") ? () => undefined : (stryCov_9fa48("663"), () => removeOne(stryMutAct_9fa48("664") ? "" : (stryCov_9fa48("664"), 'discharges'), d.id))}>Delete</button></div>
                </li>))}
              {stryMutAct_9fa48("667") ? visibleDischarges.length === 0 || <li className="list-item"><div className="title"><span className="muted">No discharges</span></div></li> : stryMutAct_9fa48("666") ? false : stryMutAct_9fa48("665") ? true : (stryCov_9fa48("665", "666", "667"), (stryMutAct_9fa48("669") ? visibleDischarges.length !== 0 : stryMutAct_9fa48("668") ? true : (stryCov_9fa48("668", "669"), visibleDischarges.length === 0)) && <li className="list-item"><div className="title"><span className="muted">No discharges</span></div></li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>;
  }
}