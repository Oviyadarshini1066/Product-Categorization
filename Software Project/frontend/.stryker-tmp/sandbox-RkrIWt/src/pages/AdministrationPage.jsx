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
import { Staff, Doctors } from '../api';
export default function AdministrationPage() {
  if (stryMutAct_9fa48("339")) {
    {}
  } else {
    stryCov_9fa48("339");
    const [items, setItems] = useState(stryMutAct_9fa48("340") ? ["Stryker was here"] : (stryCov_9fa48("340"), []));
    const [loading, setLoading] = useState(stryMutAct_9fa48("341") ? true : (stryCov_9fa48("341"), false));
    const [error, setError] = useState(stryMutAct_9fa48("342") ? "Stryker was here!" : (stryCov_9fa48("342"), ''));
    const [form, setForm] = useState(stryMutAct_9fa48("343") ? {} : (stryCov_9fa48("343"), {
      name: stryMutAct_9fa48("344") ? "Stryker was here!" : (stryCov_9fa48("344"), ''),
      role: stryMutAct_9fa48("345") ? "Stryker was here!" : (stryCov_9fa48("345"), ''),
      department: stryMutAct_9fa48("346") ? "Stryker was here!" : (stryCov_9fa48("346"), ''),
      contact: stryMutAct_9fa48("347") ? "Stryker was here!" : (stryCov_9fa48("347"), '')
    }));
    const [doctors, setDoctors] = useState(stryMutAct_9fa48("348") ? ["Stryker was here"] : (stryCov_9fa48("348"), []));
    const [doctorForm, setDoctorForm] = useState(stryMutAct_9fa48("349") ? {} : (stryCov_9fa48("349"), {
      name: stryMutAct_9fa48("350") ? "Stryker was here!" : (stryCov_9fa48("350"), ''),
      specialty: stryMutAct_9fa48("351") ? "Stryker was here!" : (stryCov_9fa48("351"), ''),
      contact: stryMutAct_9fa48("352") ? "Stryker was here!" : (stryCov_9fa48("352"), ''),
      licenseNo: stryMutAct_9fa48("353") ? "Stryker was here!" : (stryCov_9fa48("353"), '')
    }));
    async function load() {
      if (stryMutAct_9fa48("354")) {
        {}
      } else {
        stryCov_9fa48("354");
        setLoading(stryMutAct_9fa48("355") ? false : (stryCov_9fa48("355"), true));
        setError(stryMutAct_9fa48("356") ? "Stryker was here!" : (stryCov_9fa48("356"), ''));
        try {
          if (stryMutAct_9fa48("357")) {
            {}
          } else {
            stryCov_9fa48("357");
            const [staff, docs] = await Promise.all(stryMutAct_9fa48("358") ? [] : (stryCov_9fa48("358"), [Staff.list(), Doctors.list()]));
            setItems(staff);
            setDoctors(docs);
          }
        } catch {
          if (stryMutAct_9fa48("359")) {
            {}
          } else {
            stryCov_9fa48("359");
            setError(stryMutAct_9fa48("360") ? "" : (stryCov_9fa48("360"), 'Failed to load admin data'));
          }
        }
        setLoading(stryMutAct_9fa48("361") ? true : (stryCov_9fa48("361"), false));
      }
    }
    useEffect(() => {
      if (stryMutAct_9fa48("362")) {
        {}
      } else {
        stryCov_9fa48("362");
        load();
      }
    }, stryMutAct_9fa48("363") ? ["Stryker was here"] : (stryCov_9fa48("363"), []));
    async function create(e) {
      if (stryMutAct_9fa48("364")) {
        {}
      } else {
        stryCov_9fa48("364");
        e.preventDefault();
        try {
          if (stryMutAct_9fa48("365")) {
            {}
          } else {
            stryCov_9fa48("365");
            await Staff.create(form);
            setForm(stryMutAct_9fa48("366") ? {} : (stryCov_9fa48("366"), {
              name: stryMutAct_9fa48("367") ? "Stryker was here!" : (stryCov_9fa48("367"), ''),
              role: stryMutAct_9fa48("368") ? "Stryker was here!" : (stryCov_9fa48("368"), ''),
              department: stryMutAct_9fa48("369") ? "Stryker was here!" : (stryCov_9fa48("369"), ''),
              contact: stryMutAct_9fa48("370") ? "Stryker was here!" : (stryCov_9fa48("370"), '')
            }));
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("371")) {
            {}
          } else {
            stryCov_9fa48("371");
            setError(stryMutAct_9fa48("372") ? "" : (stryCov_9fa48("372"), 'Failed to create'));
          }
        }
      }
    }
    async function remove(id) {
      if (stryMutAct_9fa48("373")) {
        {}
      } else {
        stryCov_9fa48("373");
        try {
          if (stryMutAct_9fa48("374")) {
            {}
          } else {
            stryCov_9fa48("374");
            await Staff.remove(id);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("375")) {
            {}
          } else {
            stryCov_9fa48("375");
            setError(stryMutAct_9fa48("376") ? "" : (stryCov_9fa48("376"), 'Failed to delete'));
          }
        }
      }
    }
    async function patch(id, patch) {
      if (stryMutAct_9fa48("377")) {
        {}
      } else {
        stryCov_9fa48("377");
        try {
          if (stryMutAct_9fa48("378")) {
            {}
          } else {
            stryCov_9fa48("378");
            await Staff.patch(id, patch);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("379")) {
            {}
          } else {
            stryCov_9fa48("379");
            setError(stryMutAct_9fa48("380") ? "" : (stryCov_9fa48("380"), 'Failed to update'));
          }
        }
      }
    }

    // Doctor management
    async function createDoctor(e) {
      if (stryMutAct_9fa48("381")) {
        {}
      } else {
        stryCov_9fa48("381");
        e.preventDefault();
        try {
          if (stryMutAct_9fa48("382")) {
            {}
          } else {
            stryCov_9fa48("382");
            await Doctors.create(doctorForm);
            setDoctorForm(stryMutAct_9fa48("383") ? {} : (stryCov_9fa48("383"), {
              name: stryMutAct_9fa48("384") ? "Stryker was here!" : (stryCov_9fa48("384"), ''),
              specialty: stryMutAct_9fa48("385") ? "Stryker was here!" : (stryCov_9fa48("385"), ''),
              contact: stryMutAct_9fa48("386") ? "Stryker was here!" : (stryCov_9fa48("386"), ''),
              licenseNo: stryMutAct_9fa48("387") ? "Stryker was here!" : (stryCov_9fa48("387"), '')
            }));
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("388")) {
            {}
          } else {
            stryCov_9fa48("388");
            setError(stryMutAct_9fa48("389") ? "" : (stryCov_9fa48("389"), 'Failed to add doctor'));
          }
        }
      }
    }
    async function removeDoctor(id) {
      if (stryMutAct_9fa48("390")) {
        {}
      } else {
        stryCov_9fa48("390");
        try {
          if (stryMutAct_9fa48("391")) {
            {}
          } else {
            stryCov_9fa48("391");
            await Doctors.remove(id);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("392")) {
            {}
          } else {
            stryCov_9fa48("392");
            setError(stryMutAct_9fa48("393") ? "" : (stryCov_9fa48("393"), 'Failed to delete doctor'));
          }
        }
      }
    }
    async function patchDoctor(id, patch) {
      if (stryMutAct_9fa48("394")) {
        {}
      } else {
        stryCov_9fa48("394");
        try {
          if (stryMutAct_9fa48("395")) {
            {}
          } else {
            stryCov_9fa48("395");
            await Doctors.patch(id, patch);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("396")) {
            {}
          } else {
            stryCov_9fa48("396");
            setError(stryMutAct_9fa48("397") ? "" : (stryCov_9fa48("397"), 'Failed to update doctor'));
          }
        }
      }
    }
    return <div className="container">
      <header className="header">
        <h1>Administration {loading ? stryMutAct_9fa48("398") ? "" : (stryCov_9fa48("398"), '…') : stryMutAct_9fa48("399") ? "Stryker was here!" : (stryCov_9fa48("399"), '')}</h1>
      </header>
      {stryMutAct_9fa48("402") ? error || <div className="error" role="alert">{error}</div> : stryMutAct_9fa48("401") ? false : stryMutAct_9fa48("400") ? true : (stryCov_9fa48("400", "401", "402"), error && <div className="error" role="alert">{error}</div>)}

      <div className="main" style={stryMutAct_9fa48("403") ? {} : (stryCov_9fa48("403"), {
        gridTemplateColumns: stryMutAct_9fa48("404") ? "" : (stryCov_9fa48("404"), '1fr 2fr')
      })}>
        <form className="card" onSubmit={createDoctor}>
          <h3>Doctor Management</h3>
          <div className="field"><label>Name</label><input value={doctorForm.name} onChange={stryMutAct_9fa48("405") ? () => undefined : (stryCov_9fa48("405"), e => setDoctorForm(stryMutAct_9fa48("406") ? {} : (stryCov_9fa48("406"), {
              ...doctorForm,
              name: e.target.value
            })))} required /></div>
          <div className="field"><label>Specialty</label><input value={doctorForm.specialty} onChange={stryMutAct_9fa48("407") ? () => undefined : (stryCov_9fa48("407"), e => setDoctorForm(stryMutAct_9fa48("408") ? {} : (stryCov_9fa48("408"), {
              ...doctorForm,
              specialty: e.target.value
            })))} /></div>
          <div className="field"><label>Contact</label><input value={doctorForm.contact} onChange={stryMutAct_9fa48("409") ? () => undefined : (stryCov_9fa48("409"), e => setDoctorForm(stryMutAct_9fa48("410") ? {} : (stryCov_9fa48("410"), {
              ...doctorForm,
              contact: e.target.value
            })))} /></div>
          <div className="field"><label>License No</label><input value={doctorForm.licenseNo} onChange={stryMutAct_9fa48("411") ? () => undefined : (stryCov_9fa48("411"), e => setDoctorForm(stryMutAct_9fa48("412") ? {} : (stryCov_9fa48("412"), {
              ...doctorForm,
              licenseNo: e.target.value
            })))} /></div>
          <div className="actions"><button type="submit">Add Doctor</button></div>
        </form>

        <div>
          <h3>Doctors</h3>
          <ul className="list">
            {doctors.map(stryMutAct_9fa48("413") ? () => undefined : (stryCov_9fa48("413"), d => <li key={d.id} className="list-item">
                <div className="title"><span>{d.name}</span></div>
                <div className="meta">
                  {stryMutAct_9fa48("416") ? d.specialty || <span className="badge">{d.specialty}</span> : stryMutAct_9fa48("415") ? false : stryMutAct_9fa48("414") ? true : (stryCov_9fa48("414", "415", "416"), d.specialty && <span className="badge">{d.specialty}</span>)}
                  {stryMutAct_9fa48("419") ? d.contact || <span className="badge">{d.contact}</span> : stryMutAct_9fa48("418") ? false : stryMutAct_9fa48("417") ? true : (stryCov_9fa48("417", "418", "419"), d.contact && <span className="badge">{d.contact}</span>)}
                  <button className="link" onClick={stryMutAct_9fa48("420") ? () => undefined : (stryCov_9fa48("420"), () => patchDoctor(d.id, stryMutAct_9fa48("421") ? {} : (stryCov_9fa48("421"), {
                  specialty: stryMutAct_9fa48("422") ? prompt('Update specialty', d.specialty || '') && d.specialty : (stryCov_9fa48("422"), prompt(stryMutAct_9fa48("423") ? "" : (stryCov_9fa48("423"), 'Update specialty'), stryMutAct_9fa48("426") ? d.specialty && '' : stryMutAct_9fa48("425") ? false : stryMutAct_9fa48("424") ? true : (stryCov_9fa48("424", "425", "426"), d.specialty || (stryMutAct_9fa48("427") ? "Stryker was here!" : (stryCov_9fa48("427"), '')))) ?? d.specialty)
                })))}>Edit</button>
                  <button className="link" onClick={stryMutAct_9fa48("428") ? () => undefined : (stryCov_9fa48("428"), () => removeDoctor(d.id))}>Delete</button>
                </div>
              </li>))}
            {stryMutAct_9fa48("431") ? doctors.length === 0 || <li className="list-item"><div className="title"><span className="muted">No doctors</span></div></li> : stryMutAct_9fa48("430") ? false : stryMutAct_9fa48("429") ? true : (stryCov_9fa48("429", "430", "431"), (stryMutAct_9fa48("433") ? doctors.length !== 0 : stryMutAct_9fa48("432") ? true : (stryCov_9fa48("432", "433"), doctors.length === 0)) && <li className="list-item"><div className="title"><span className="muted">No doctors</span></div></li>)}
          </ul>
        </div>
      </div>

      <div className="main" style={stryMutAct_9fa48("434") ? {} : (stryCov_9fa48("434"), {
        gridTemplateColumns: stryMutAct_9fa48("435") ? "" : (stryCov_9fa48("435"), '1fr 2fr'),
        marginTop: 16
      })}>
        <form className="card" onSubmit={create}>
          <h3>Add Staff</h3>
          <div className="field"><label>Name</label><input value={form.name} onChange={stryMutAct_9fa48("436") ? () => undefined : (stryCov_9fa48("436"), e => setForm(stryMutAct_9fa48("437") ? {} : (stryCov_9fa48("437"), {
              ...form,
              name: e.target.value
            })))} required /></div>
          <div className="field"><label>Role</label><input value={form.role} onChange={stryMutAct_9fa48("438") ? () => undefined : (stryCov_9fa48("438"), e => setForm(stryMutAct_9fa48("439") ? {} : (stryCov_9fa48("439"), {
              ...form,
              role: e.target.value
            })))} /></div>
          <div className="field"><label>Department</label><input value={form.department} onChange={stryMutAct_9fa48("440") ? () => undefined : (stryCov_9fa48("440"), e => setForm(stryMutAct_9fa48("441") ? {} : (stryCov_9fa48("441"), {
              ...form,
              department: e.target.value
            })))} /></div>
          <div className="field"><label>Contact</label><input value={form.contact} onChange={stryMutAct_9fa48("442") ? () => undefined : (stryCov_9fa48("442"), e => setForm(stryMutAct_9fa48("443") ? {} : (stryCov_9fa48("443"), {
              ...form,
              contact: e.target.value
            })))} /></div>
          <div className="actions"><button type="submit">Save</button></div>
        </form>

        <div>
          <h3>Staff List</h3>
          <ul className="list">
            {items.map(stryMutAct_9fa48("444") ? () => undefined : (stryCov_9fa48("444"), s => <li key={s.id} className="list-item">
                <div className="title"><span>{s.name}</span></div>
                <div className="meta">
                  {stryMutAct_9fa48("447") ? s.role || <span className="badge">{s.role}</span> : stryMutAct_9fa48("446") ? false : stryMutAct_9fa48("445") ? true : (stryCov_9fa48("445", "446", "447"), s.role && <span className="badge">{s.role}</span>)}
                  {stryMutAct_9fa48("450") ? s.department || <span className="badge">{s.department}</span> : stryMutAct_9fa48("449") ? false : stryMutAct_9fa48("448") ? true : (stryCov_9fa48("448", "449", "450"), s.department && <span className="badge">{s.department}</span>)}
                  {stryMutAct_9fa48("453") ? s.contact || <span className="badge">{s.contact}</span> : stryMutAct_9fa48("452") ? false : stryMutAct_9fa48("451") ? true : (stryCov_9fa48("451", "452", "453"), s.contact && <span className="badge">{s.contact}</span>)}
                  <button className="link" onClick={stryMutAct_9fa48("454") ? () => undefined : (stryCov_9fa48("454"), () => patch(s.id, stryMutAct_9fa48("455") ? {} : (stryCov_9fa48("455"), {
                  role: stryMutAct_9fa48("458") ? prompt('Update role', s.role || '') && s.role : stryMutAct_9fa48("457") ? false : stryMutAct_9fa48("456") ? true : (stryCov_9fa48("456", "457", "458"), prompt(stryMutAct_9fa48("459") ? "" : (stryCov_9fa48("459"), 'Update role'), stryMutAct_9fa48("462") ? s.role && '' : stryMutAct_9fa48("461") ? false : stryMutAct_9fa48("460") ? true : (stryCov_9fa48("460", "461", "462"), s.role || (stryMutAct_9fa48("463") ? "Stryker was here!" : (stryCov_9fa48("463"), '')))) || s.role)
                })))}>Edit</button>
                  <button className="link" onClick={stryMutAct_9fa48("464") ? () => undefined : (stryCov_9fa48("464"), () => remove(s.id))}>Delete</button>
                </div>
              </li>))}
            {stryMutAct_9fa48("467") ? items.length === 0 || <li className="list-item"><div className="title"><span className="muted">No staff</span></div></li> : stryMutAct_9fa48("466") ? false : stryMutAct_9fa48("465") ? true : (stryCov_9fa48("465", "466", "467"), (stryMutAct_9fa48("469") ? items.length !== 0 : stryMutAct_9fa48("468") ? true : (stryCov_9fa48("468", "469"), items.length === 0)) && <li className="list-item"><div className="title"><span className="muted">No staff</span></div></li>)}
          </ul>
        </div>
      </div>

      {/* Manage Appointments removed. Use Booking page for scheduling and calendar view. */}
    </div>;
  }
}