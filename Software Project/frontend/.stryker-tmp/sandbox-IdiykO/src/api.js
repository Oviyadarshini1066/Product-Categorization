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
import axios from 'axios';
const API_URL = stryMutAct_9fa48("2") ? import.meta.env.VITE_API_URL && 'http://localhost:4000' : stryMutAct_9fa48("1") ? false : stryMutAct_9fa48("0") ? true : (stryCov_9fa48("0", "1", "2"), import.meta.env.VITE_API_URL || (stryMutAct_9fa48("3") ? "" : (stryCov_9fa48("3"), 'http://localhost:4000')));
export const client = axios.create(stryMutAct_9fa48("4") ? {} : (stryCov_9fa48("4"), {
  baseURL: stryMutAct_9fa48("5") ? `` : (stryCov_9fa48("5"), `${API_URL}/api`),
  headers: stryMutAct_9fa48("6") ? {} : (stryCov_9fa48("6"), {
    'Content-Type': stryMutAct_9fa48("7") ? "" : (stryCov_9fa48("7"), 'application/json')
  })
}));

// Generic CRUD helpers for HMS collections
function collection(name) {
  if (stryMutAct_9fa48("8")) {
    {}
  } else {
    stryCov_9fa48("8");
    return stryMutAct_9fa48("9") ? {} : (stryCov_9fa48("9"), {
      async list(params = {}) {
        if (stryMutAct_9fa48("10")) {
          {}
        } else {
          stryCov_9fa48("10");
          const r = await client.get(stryMutAct_9fa48("11") ? `` : (stryCov_9fa48("11"), `/${name}`), stryMutAct_9fa48("12") ? {} : (stryCov_9fa48("12"), {
            params
          }));
          return r.data;
        }
      },
      async create(data) {
        if (stryMutAct_9fa48("13")) {
          {}
        } else {
          stryCov_9fa48("13");
          const r = await client.post(stryMutAct_9fa48("14") ? `` : (stryCov_9fa48("14"), `/${name}`), data);
          return r.data;
        }
      },
      async patch(id, patch) {
        if (stryMutAct_9fa48("15")) {
          {}
        } else {
          stryCov_9fa48("15");
          const r = await client.patch(stryMutAct_9fa48("16") ? `` : (stryCov_9fa48("16"), `/${name}/${id}`), patch);
          return r.data;
        }
      },
      async remove(id) {
        if (stryMutAct_9fa48("17")) {
          {}
        } else {
          stryCov_9fa48("17");
          await client.delete(stryMutAct_9fa48("18") ? `` : (stryCov_9fa48("18"), `/${name}/${id}`));
        }
      }
    });
  }
}
export const Patients = collection(stryMutAct_9fa48("19") ? "" : (stryCov_9fa48("19"), 'patients'));
export const Doctors = collection(stryMutAct_9fa48("20") ? "" : (stryCov_9fa48("20"), 'doctors'));
export const Appointments = collection(stryMutAct_9fa48("21") ? "" : (stryCov_9fa48("21"), 'appointments'));
export const Bills = collection(stryMutAct_9fa48("22") ? "" : (stryCov_9fa48("22"), 'bills'));
export const Reports = collection(stryMutAct_9fa48("23") ? "" : (stryCov_9fa48("23"), 'reports'));
export const Labs = collection(stryMutAct_9fa48("24") ? "" : (stryCov_9fa48("24"), 'labs'));
export const Inventory = collection(stryMutAct_9fa48("25") ? "" : (stryCov_9fa48("25"), 'inventory'));
export const Staff = collection(stryMutAct_9fa48("26") ? "" : (stryCov_9fa48("26"), 'staff'));
export const Admissions = collection(stryMutAct_9fa48("27") ? "" : (stryCov_9fa48("27"), 'admissions'));
export const Transfers = collection(stryMutAct_9fa48("28") ? "" : (stryCov_9fa48("28"), 'transfers'));
export const Discharges = collection(stryMutAct_9fa48("29") ? "" : (stryCov_9fa48("29"), 'discharges'));
export const Prescriptions = collection(stryMutAct_9fa48("30") ? "" : (stryCov_9fa48("30"), 'prescriptions'));
export const Suppliers = collection(stryMutAct_9fa48("31") ? "" : (stryCov_9fa48("31"), 'suppliers'));
export const Equipment = collection(stryMutAct_9fa48("32") ? "" : (stryCov_9fa48("32"), 'equipment'));
export const Maintenance = collection(stryMutAct_9fa48("33") ? "" : (stryCov_9fa48("33"), 'maintenance'));
export const Claims = collection(stryMutAct_9fa48("34") ? "" : (stryCov_9fa48("34"), 'claims'));
export const Users = collection(stryMutAct_9fa48("35") ? "" : (stryCov_9fa48("35"), 'users'));
export const Audit = collection(stryMutAct_9fa48("36") ? "" : (stryCov_9fa48("36"), 'audit'));
export const Roster = collection(stryMutAct_9fa48("37") ? "" : (stryCov_9fa48("37"), 'roster'));
export const Leaves = collection(stryMutAct_9fa48("38") ? "" : (stryCov_9fa48("38"), 'leaves'));
export const Payroll = collection(stryMutAct_9fa48("39") ? "" : (stryCov_9fa48("39"), 'payroll'));