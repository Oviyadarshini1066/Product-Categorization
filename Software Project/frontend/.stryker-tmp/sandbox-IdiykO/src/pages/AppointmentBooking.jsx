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
import React, { useEffect, useMemo, useState } from 'react';
import { Appointments, Patients, Doctors } from '../api';
export default function AppointmentBooking() {
  if (stryMutAct_9fa48("670")) {
    {}
  } else {
    stryCov_9fa48("670");
    const [loading, setLoading] = useState(stryMutAct_9fa48("671") ? true : (stryCov_9fa48("671"), false));
    const [error, setError] = useState(stryMutAct_9fa48("672") ? "Stryker was here!" : (stryCov_9fa48("672"), ''));
    const [doctors, setDoctors] = useState(stryMutAct_9fa48("673") ? ["Stryker was here"] : (stryCov_9fa48("673"), []));
    const [patients, setPatients] = useState(stryMutAct_9fa48("674") ? ["Stryker was here"] : (stryCov_9fa48("674"), []));
    const [appts, setAppts] = useState(stryMutAct_9fa48("675") ? ["Stryker was here"] : (stryCov_9fa48("675"), []));

    // Booking form
    const [doctorId, setDoctorId] = useState(stryMutAct_9fa48("676") ? "Stryker was here!" : (stryCov_9fa48("676"), ''));
    const [patientId, setPatientId] = useState(stryMutAct_9fa48("677") ? "Stryker was here!" : (stryCov_9fa48("677"), ''));
    const [date, setDate] = useState(stryMutAct_9fa48("678") ? "Stryker was here!" : (stryCov_9fa48("678"), ''));
    const [time, setTime] = useState(stryMutAct_9fa48("679") ? "Stryker was here!" : (stryCov_9fa48("679"), ''));
    const [reason, setReason] = useState(stryMutAct_9fa48("680") ? "Stryker was here!" : (stryCov_9fa48("680"), ''));

    // Availability editor (per selected doctor)
    const [avail, setAvail] = useState(stryMutAct_9fa48("681") ? {} : (stryCov_9fa48("681"), {
      start: stryMutAct_9fa48("682") ? "" : (stryCov_9fa48("682"), '09:00'),
      end: stryMutAct_9fa48("683") ? "" : (stryCov_9fa48("683"), '17:00'),
      slot: 60
    }));
    async function load() {
      if (stryMutAct_9fa48("684")) {
        {}
      } else {
        stryCov_9fa48("684");
        setLoading(stryMutAct_9fa48("685") ? false : (stryCov_9fa48("685"), true));
        setError(stryMutAct_9fa48("686") ? "Stryker was here!" : (stryCov_9fa48("686"), ''));
        try {
          if (stryMutAct_9fa48("687")) {
            {}
          } else {
            stryCov_9fa48("687");
            const [docs, pats, apts] = await Promise.all(stryMutAct_9fa48("688") ? [] : (stryCov_9fa48("688"), [Doctors.list(), Patients.list(), Appointments.list()]));
            setDoctors(docs);
            setPatients(pats);
            setAppts(apts);
            if (stryMutAct_9fa48("691") ? !doctorId || docs.length : stryMutAct_9fa48("690") ? false : stryMutAct_9fa48("689") ? true : (stryCov_9fa48("689", "690", "691"), (stryMutAct_9fa48("692") ? doctorId : (stryCov_9fa48("692"), !doctorId)) && docs.length)) setDoctorId(String(docs[0].id));
          }
        } catch {
          if (stryMutAct_9fa48("693")) {
            {}
          } else {
            stryCov_9fa48("693");
            setError(stryMutAct_9fa48("694") ? "" : (stryCov_9fa48("694"), 'Failed to load booking data'));
          }
        }
        setLoading(stryMutAct_9fa48("695") ? true : (stryCov_9fa48("695"), false));
      }
    }
    useEffect(() => {
      if (stryMutAct_9fa48("696")) {
        {}
      } else {
        stryCov_9fa48("696");
        load();
      }
    }, stryMutAct_9fa48("697") ? ["Stryker was here"] : (stryCov_9fa48("697"), []));

    // derive availability from doctor record or editor defaults
    const doc = stryMutAct_9fa48("700") ? doctors.find(d => String(d.id) === String(doctorId)) && {} : stryMutAct_9fa48("699") ? false : stryMutAct_9fa48("698") ? true : (stryCov_9fa48("698", "699", "700"), doctors.find(stryMutAct_9fa48("701") ? () => undefined : (stryCov_9fa48("701"), d => stryMutAct_9fa48("704") ? String(d.id) !== String(doctorId) : stryMutAct_9fa48("703") ? false : stryMutAct_9fa48("702") ? true : (stryCov_9fa48("702", "703", "704"), String(d.id) === String(doctorId)))) || {});
    const startTime = stryMutAct_9fa48("707") ? doc.startTime && avail.start : stryMutAct_9fa48("706") ? false : stryMutAct_9fa48("705") ? true : (stryCov_9fa48("705", "706", "707"), doc.startTime || avail.start);
    const endTime = stryMutAct_9fa48("710") ? doc.endTime && avail.end : stryMutAct_9fa48("709") ? false : stryMutAct_9fa48("708") ? true : (stryCov_9fa48("708", "709", "710"), doc.endTime || avail.end);
    const slotMin = Number(stryMutAct_9fa48("713") ? doc.slotMinutes && avail.slot : stryMutAct_9fa48("712") ? false : stryMutAct_9fa48("711") ? true : (stryCov_9fa48("711", "712", "713"), doc.slotMinutes || avail.slot));

    // time slot helpers
    const pad = stryMutAct_9fa48("714") ? () => undefined : (stryCov_9fa48("714"), (() => {
      const pad = n => String(n).padStart(2, stryMutAct_9fa48("715") ? "" : (stryCov_9fa48("715"), '0'));
      return pad;
    })());
    const stepTimes = (start, end, stepMin) => {
      if (stryMutAct_9fa48("716")) {
        {}
      } else {
        stryCov_9fa48("716");
        const out = stryMutAct_9fa48("717") ? ["Stryker was here"] : (stryCov_9fa48("717"), []);
        let h = Number(start.split(stryMutAct_9fa48("718") ? "" : (stryCov_9fa48("718"), ':'))[0]);
        let m = Number(start.split(stryMutAct_9fa48("719") ? "" : (stryCov_9fa48("719"), ':'))[1]);
        const [eh, em] = end.split(stryMutAct_9fa48("720") ? "" : (stryCov_9fa48("720"), ':')).map(Number);
        const endMin = stryMutAct_9fa48("721") ? eh * 60 - em : (stryCov_9fa48("721"), (stryMutAct_9fa48("722") ? eh / 60 : (stryCov_9fa48("722"), eh * 60)) + em);
        while (stryMutAct_9fa48("725") ? h * 60 + m > endMin : stryMutAct_9fa48("724") ? h * 60 + m < endMin : stryMutAct_9fa48("723") ? false : (stryCov_9fa48("723", "724", "725"), (stryMutAct_9fa48("726") ? h * 60 - m : (stryCov_9fa48("726"), (stryMutAct_9fa48("727") ? h / 60 : (stryCov_9fa48("727"), h * 60)) + m)) <= endMin)) {
          if (stryMutAct_9fa48("728")) {
            {}
          } else {
            stryCov_9fa48("728");
            out.push(stryMutAct_9fa48("729") ? `` : (stryCov_9fa48("729"), `${pad(h)}:${pad(m)}`));
            stryMutAct_9fa48("730") ? m -= stepMin : (stryCov_9fa48("730"), m += stepMin);
            while (stryMutAct_9fa48("733") ? m < 60 : stryMutAct_9fa48("732") ? m > 60 : stryMutAct_9fa48("731") ? false : (stryCov_9fa48("731", "732", "733"), m >= 60)) {
              if (stryMutAct_9fa48("734")) {
                {}
              } else {
                stryCov_9fa48("734");
                stryMutAct_9fa48("735") ? m += 60 : (stryCov_9fa48("735"), m -= 60);
                stryMutAct_9fa48("736") ? h -= 1 : (stryCov_9fa48("736"), h += 1);
              }
            }
          }
        }
        return out;
      }
    };
    const slots = useMemo(stryMutAct_9fa48("737") ? () => undefined : (stryCov_9fa48("737"), () => stepTimes(startTime, endTime, slotMin)), stryMutAct_9fa48("738") ? [] : (stryCov_9fa48("738"), [startTime, endTime, slotMin]));

    // Ignore orphaned appointments where patient was deleted
    const validAppts = useMemo(stryMutAct_9fa48("739") ? () => undefined : (stryCov_9fa48("739"), () => stryMutAct_9fa48("740") ? appts : (stryCov_9fa48("740"), appts.filter(stryMutAct_9fa48("741") ? () => undefined : (stryCov_9fa48("741"), a => stryMutAct_9fa48("742") ? patients.every(p => String(p.id) === String(a.patientId)) : (stryCov_9fa48("742"), patients.some(stryMutAct_9fa48("743") ? () => undefined : (stryCov_9fa48("743"), p => stryMutAct_9fa48("746") ? String(p.id) !== String(a.patientId) : stryMutAct_9fa48("745") ? false : stryMutAct_9fa48("744") ? true : (stryCov_9fa48("744", "745", "746"), String(p.id) === String(a.patientId))))))))), stryMutAct_9fa48("747") ? [] : (stryCov_9fa48("747"), [appts, patients]));

    // taken slots for selected date/doctor
    const taken = useMemo(stryMutAct_9fa48("748") ? () => undefined : (stryCov_9fa48("748"), () => new Set(stryMutAct_9fa48("749") ? validAppts.map(a => a.time) : (stryCov_9fa48("749"), validAppts.filter(stryMutAct_9fa48("750") ? () => undefined : (stryCov_9fa48("750"), a => stryMutAct_9fa48("753") ? String(a.doctorId) === String(doctorId) || a.date === date : stryMutAct_9fa48("752") ? false : stryMutAct_9fa48("751") ? true : (stryCov_9fa48("751", "752", "753"), (stryMutAct_9fa48("755") ? String(a.doctorId) !== String(doctorId) : stryMutAct_9fa48("754") ? true : (stryCov_9fa48("754", "755"), String(a.doctorId) === String(doctorId))) && (stryMutAct_9fa48("757") ? a.date !== date : stryMutAct_9fa48("756") ? true : (stryCov_9fa48("756", "757"), a.date === date))))).map(stryMutAct_9fa48("758") ? () => undefined : (stryCov_9fa48("758"), a => a.time))))), stryMutAct_9fa48("759") ? [] : (stryCov_9fa48("759"), [validAppts, doctorId, date]));
    function isConflict(dId, d, t, ignoreId) {
      if (stryMutAct_9fa48("760")) {
        {}
      } else {
        stryCov_9fa48("760");
        return stryMutAct_9fa48("761") ? validAppts.every(a => String(a.doctorId) === String(dId) && a.date === d && a.time === t && a.id !== ignoreId) : (stryCov_9fa48("761"), validAppts.some(stryMutAct_9fa48("762") ? () => undefined : (stryCov_9fa48("762"), a => stryMutAct_9fa48("765") ? String(a.doctorId) === String(dId) && a.date === d && a.time === t || a.id !== ignoreId : stryMutAct_9fa48("764") ? false : stryMutAct_9fa48("763") ? true : (stryCov_9fa48("763", "764", "765"), (stryMutAct_9fa48("767") ? String(a.doctorId) === String(dId) && a.date === d || a.time === t : stryMutAct_9fa48("766") ? true : (stryCov_9fa48("766", "767"), (stryMutAct_9fa48("769") ? String(a.doctorId) === String(dId) || a.date === d : stryMutAct_9fa48("768") ? true : (stryCov_9fa48("768", "769"), (stryMutAct_9fa48("771") ? String(a.doctorId) !== String(dId) : stryMutAct_9fa48("770") ? true : (stryCov_9fa48("770", "771"), String(a.doctorId) === String(dId))) && (stryMutAct_9fa48("773") ? a.date !== d : stryMutAct_9fa48("772") ? true : (stryCov_9fa48("772", "773"), a.date === d)))) && (stryMutAct_9fa48("775") ? a.time !== t : stryMutAct_9fa48("774") ? true : (stryCov_9fa48("774", "775"), a.time === t)))) && (stryMutAct_9fa48("777") ? a.id === ignoreId : stryMutAct_9fa48("776") ? true : (stryCov_9fa48("776", "777"), a.id !== ignoreId))))));
      }
    }
    async function book() {
      if (stryMutAct_9fa48("778")) {
        {}
      } else {
        stryCov_9fa48("778");
        if (stryMutAct_9fa48("781") ? (!doctorId || !patientId || !date) && !time : stryMutAct_9fa48("780") ? false : stryMutAct_9fa48("779") ? true : (stryCov_9fa48("779", "780", "781"), (stryMutAct_9fa48("783") ? (!doctorId || !patientId) && !date : stryMutAct_9fa48("782") ? false : (stryCov_9fa48("782", "783"), (stryMutAct_9fa48("785") ? !doctorId && !patientId : stryMutAct_9fa48("784") ? false : (stryCov_9fa48("784", "785"), (stryMutAct_9fa48("786") ? doctorId : (stryCov_9fa48("786"), !doctorId)) || (stryMutAct_9fa48("787") ? patientId : (stryCov_9fa48("787"), !patientId)))) || (stryMutAct_9fa48("788") ? date : (stryCov_9fa48("788"), !date)))) || (stryMutAct_9fa48("789") ? time : (stryCov_9fa48("789"), !time)))) {
          if (stryMutAct_9fa48("790")) {
            {}
          } else {
            stryCov_9fa48("790");
            setError(stryMutAct_9fa48("791") ? "" : (stryCov_9fa48("791"), 'Select doctor, patient, date and time'));
            return;
          }
        }
        if (stryMutAct_9fa48("793") ? false : stryMutAct_9fa48("792") ? true : (stryCov_9fa48("792", "793"), isConflict(doctorId, date, time))) {
          if (stryMutAct_9fa48("794")) {
            {}
          } else {
            stryCov_9fa48("794");
            setError(stryMutAct_9fa48("795") ? "" : (stryCov_9fa48("795"), 'Selected slot already booked'));
            return;
          }
        }
        try {
          if (stryMutAct_9fa48("796")) {
            {}
          } else {
            stryCov_9fa48("796");
            await Appointments.create(stryMutAct_9fa48("797") ? {} : (stryCov_9fa48("797"), {
              doctorId,
              patientId,
              date,
              time,
              reason,
              status: stryMutAct_9fa48("798") ? "" : (stryCov_9fa48("798"), 'untreated')
            }));
            setReason(stryMutAct_9fa48("799") ? "Stryker was here!" : (stryCov_9fa48("799"), ''));
            setTime(stryMutAct_9fa48("800") ? "Stryker was here!" : (stryCov_9fa48("800"), ''));
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("801")) {
            {}
          } else {
            stryCov_9fa48("801");
            setError(stryMutAct_9fa48("802") ? "" : (stryCov_9fa48("802"), 'Failed to book appointment'));
          }
        }
      }
    }
    async function cancel(id, apptDate, apptTime) {
      if (stryMutAct_9fa48("803")) {
        {}
      } else {
        stryCov_9fa48("803");
        // Only allow cancel before scheduled time
        const now = new Date();
        const when = new Date(stryMutAct_9fa48("804") ? `` : (stryCov_9fa48("804"), `${apptDate}T${apptTime}`));
        if (stryMutAct_9fa48("808") ? when > now : stryMutAct_9fa48("807") ? when < now : stryMutAct_9fa48("806") ? false : stryMutAct_9fa48("805") ? true : (stryCov_9fa48("805", "806", "807", "808"), when <= now)) {
          if (stryMutAct_9fa48("809")) {
            {}
          } else {
            stryCov_9fa48("809");
            setError(stryMutAct_9fa48("810") ? "" : (stryCov_9fa48("810"), 'Cannot cancel past appointments'));
            return;
          }
        }
        try {
          if (stryMutAct_9fa48("811")) {
            {}
          } else {
            stryCov_9fa48("811");
            await Appointments.remove(id);
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("812")) {
            {}
          } else {
            stryCov_9fa48("812");
            setError(stryMutAct_9fa48("813") ? "" : (stryCov_9fa48("813"), 'Failed to cancel'));
          }
        }
      }
    }
    async function saveAvailability() {
      if (stryMutAct_9fa48("814")) {
        {}
      } else {
        stryCov_9fa48("814");
        if (stryMutAct_9fa48("817") ? false : stryMutAct_9fa48("816") ? true : stryMutAct_9fa48("815") ? doctorId : (stryCov_9fa48("815", "816", "817"), !doctorId)) return;
        try {
          if (stryMutAct_9fa48("818")) {
            {}
          } else {
            stryCov_9fa48("818");
            await Doctors.patch(doctorId, stryMutAct_9fa48("819") ? {} : (stryCov_9fa48("819"), {
              startTime: avail.start,
              endTime: avail.end,
              slotMinutes: avail.slot
            }));
            await load();
          }
        } catch {
          if (stryMutAct_9fa48("820")) {
            {}
          } else {
            stryCov_9fa48("820");
            setError(stryMutAct_9fa48("821") ? "" : (stryCov_9fa48("821"), 'Failed to save availability'));
          }
        }
      }
    }
    const toDate = stryMutAct_9fa48("822") ? () => undefined : (stryCov_9fa48("822"), (() => {
      const toDate = raw => raw ? new Date(raw) : null;
      return toDate;
    })());
    const now = new Date();
    const mine = stryMutAct_9fa48("823") ? validAppts : (stryCov_9fa48("823"), validAppts.filter(stryMutAct_9fa48("824") ? () => undefined : (stryCov_9fa48("824"), a => stryMutAct_9fa48("827") ? String(a.doctorId) !== String(doctorId) : stryMutAct_9fa48("826") ? false : stryMutAct_9fa48("825") ? true : (stryCov_9fa48("825", "826", "827"), String(a.doctorId) === String(doctorId)))));
    const upcoming = stryMutAct_9fa48("829") ? mine.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time)) : stryMutAct_9fa48("828") ? mine.filter(a => {
      const d = toDate(a.date);
      if (!d) return true;
      return d >= new Date(now.getFullYear(), now.getMonth(), now.getDate());
    }) : (stryCov_9fa48("828", "829"), mine.filter(a => {
      if (stryMutAct_9fa48("830")) {
        {}
      } else {
        stryCov_9fa48("830");
        const d = toDate(a.date);
        if (stryMutAct_9fa48("833") ? false : stryMutAct_9fa48("832") ? true : stryMutAct_9fa48("831") ? d : (stryCov_9fa48("831", "832", "833"), !d)) return stryMutAct_9fa48("834") ? false : (stryCov_9fa48("834"), true);
        return stryMutAct_9fa48("838") ? d < new Date(now.getFullYear(), now.getMonth(), now.getDate()) : stryMutAct_9fa48("837") ? d > new Date(now.getFullYear(), now.getMonth(), now.getDate()) : stryMutAct_9fa48("836") ? false : stryMutAct_9fa48("835") ? true : (stryCov_9fa48("835", "836", "837", "838"), d >= new Date(now.getFullYear(), now.getMonth(), now.getDate()));
      }
    }).sort(stryMutAct_9fa48("839") ? () => undefined : (stryCov_9fa48("839"), (a, b) => (stryMutAct_9fa48("840") ? a.date - a.time : (stryCov_9fa48("840"), a.date + a.time)).localeCompare(stryMutAct_9fa48("841") ? b.date - b.time : (stryCov_9fa48("841"), b.date + b.time)))));
    const past = stryMutAct_9fa48("844") ? mine.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time)).reverse() : stryMutAct_9fa48("843") ? mine.filter(a => {
      const d = toDate(a.date);
      if (!d) return false;
      return d < new Date(now.getFullYear(), now.getMonth(), now.getDate());
    }).reverse() : stryMutAct_9fa48("842") ? mine.filter(a => {
      const d = toDate(a.date);
      if (!d) return false;
      return d < new Date(now.getFullYear(), now.getMonth(), now.getDate());
    }).sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time)) : (stryCov_9fa48("842", "843", "844"), mine.filter(a => {
      if (stryMutAct_9fa48("845")) {
        {}
      } else {
        stryCov_9fa48("845");
        const d = toDate(a.date);
        if (stryMutAct_9fa48("848") ? false : stryMutAct_9fa48("847") ? true : stryMutAct_9fa48("846") ? d : (stryCov_9fa48("846", "847", "848"), !d)) return stryMutAct_9fa48("849") ? true : (stryCov_9fa48("849"), false);
        return stryMutAct_9fa48("853") ? d >= new Date(now.getFullYear(), now.getMonth(), now.getDate()) : stryMutAct_9fa48("852") ? d <= new Date(now.getFullYear(), now.getMonth(), now.getDate()) : stryMutAct_9fa48("851") ? false : stryMutAct_9fa48("850") ? true : (stryCov_9fa48("850", "851", "852", "853"), d < new Date(now.getFullYear(), now.getMonth(), now.getDate()));
      }
    }).sort(stryMutAct_9fa48("854") ? () => undefined : (stryCov_9fa48("854"), (a, b) => (stryMutAct_9fa48("855") ? a.date - a.time : (stryCov_9fa48("855"), a.date + a.time)).localeCompare(stryMutAct_9fa48("856") ? b.date - b.time : (stryCov_9fa48("856"), b.date + b.time)))).reverse());
    const nameById = (list, id) => {
      if (stryMutAct_9fa48("857")) {
        {}
      } else {
        stryCov_9fa48("857");
        const x = list.find(stryMutAct_9fa48("858") ? () => undefined : (stryCov_9fa48("858"), i => stryMutAct_9fa48("861") ? String(i.id) !== String(id) : stryMutAct_9fa48("860") ? false : stryMutAct_9fa48("859") ? true : (stryCov_9fa48("859", "860", "861"), String(i.id) === String(id))));
        return x ? stryMutAct_9fa48("864") ? (x.name || x.fullName) && `#${id}` : stryMutAct_9fa48("863") ? false : stryMutAct_9fa48("862") ? true : (stryCov_9fa48("862", "863", "864"), (stryMutAct_9fa48("866") ? x.name && x.fullName : stryMutAct_9fa48("865") ? false : (stryCov_9fa48("865", "866"), x.name || x.fullName)) || (stryMutAct_9fa48("867") ? `` : (stryCov_9fa48("867"), `#${id}`))) : stryMutAct_9fa48("868") ? "" : (stryCov_9fa48("868"), '(Deleted patient)');
      }
    };
    return <div className="container">
      <header className="header">
        <h1>Appointment Booking {loading ? stryMutAct_9fa48("869") ? "" : (stryCov_9fa48("869"), '…') : stryMutAct_9fa48("870") ? "Stryker was here!" : (stryCov_9fa48("870"), '')}</h1>
      </header>
      {stryMutAct_9fa48("873") ? error || <div className="error" role="alert">{error}</div> : stryMutAct_9fa48("872") ? false : stryMutAct_9fa48("871") ? true : (stryCov_9fa48("871", "872", "873"), error && <div className="error" role="alert">{error}</div>)}

      <div className="main" style={stryMutAct_9fa48("874") ? {} : (stryCov_9fa48("874"), {
        gridTemplateColumns: stryMutAct_9fa48("875") ? "" : (stryCov_9fa48("875"), '1fr 2fr')
      })}>
        <div className="card">
          <h3>Book Appointment</h3>
          <div className="field"><label>Doctor</label>
            <select value={doctorId} onChange={stryMutAct_9fa48("876") ? () => undefined : (stryCov_9fa48("876"), e => setDoctorId(e.target.value))}>
              {doctors.map(stryMutAct_9fa48("877") ? () => undefined : (stryCov_9fa48("877"), d => <option key={d.id} value={d.id}>{d.name} {d.specialty ? stryMutAct_9fa48("878") ? `` : (stryCov_9fa48("878"), `— ${d.specialty}`) : stryMutAct_9fa48("879") ? "Stryker was here!" : (stryCov_9fa48("879"), '')}</option>))}
            </select>
          </div>
          <div className="field"><label>Patient</label>
            <select value={patientId} onChange={stryMutAct_9fa48("880") ? () => undefined : (stryCov_9fa48("880"), e => setPatientId(e.target.value))}>
              <option value="">Select</option>
              {patients.map(stryMutAct_9fa48("881") ? () => undefined : (stryCov_9fa48("881"), p => <option key={p.id} value={p.id}>{p.name}</option>))}
            </select>
          </div>
          <div className="field"><label>Date</label><input type="date" value={date} onChange={e => {
              if (stryMutAct_9fa48("882")) {
                {}
              } else {
                stryCov_9fa48("882");
                setDate(e.target.value);
                setTime(stryMutAct_9fa48("883") ? "Stryker was here!" : (stryCov_9fa48("883"), ''));
              }
            }} /></div>
          <div className="field"><label>Time</label>
            <select value={time} onChange={stryMutAct_9fa48("884") ? () => undefined : (stryCov_9fa48("884"), e => setTime(e.target.value))} disabled={stryMutAct_9fa48("885") ? date : (stryCov_9fa48("885"), !date)}>
              <option value="">Select</option>
              {slots.map(stryMutAct_9fa48("886") ? () => undefined : (stryCov_9fa48("886"), t => <option key={t} value={t} disabled={taken.has(t)}>{t} {taken.has(t) ? stryMutAct_9fa48("887") ? "" : (stryCov_9fa48("887"), '(Booked)') : stryMutAct_9fa48("888") ? "Stryker was here!" : (stryCov_9fa48("888"), '')}</option>))}
            </select>
          </div>
          <div className="field"><label>Reason</label><input value={reason} onChange={stryMutAct_9fa48("889") ? () => undefined : (stryCov_9fa48("889"), e => setReason(e.target.value))} placeholder="Optional" /></div>
          <div className="actions"><button type="button" onClick={book}>Book</button></div>
        </div>

        <div>
          <div className="card" style={stryMutAct_9fa48("890") ? {} : (stryCov_9fa48("890"), {
            marginBottom: 12
          })}>
            <h3>Doctor Schedule Management</h3>
            <div className="form-grid">
              <div className="field"><label>Start</label><input type="time" value={avail.start} onChange={stryMutAct_9fa48("891") ? () => undefined : (stryCov_9fa48("891"), e => setAvail(stryMutAct_9fa48("892") ? {} : (stryCov_9fa48("892"), {
                  ...avail,
                  start: e.target.value
                })))} /></div>
              <div className="field"><label>End</label><input type="time" value={avail.end} onChange={stryMutAct_9fa48("893") ? () => undefined : (stryCov_9fa48("893"), e => setAvail(stryMutAct_9fa48("894") ? {} : (stryCov_9fa48("894"), {
                  ...avail,
                  end: e.target.value
                })))} /></div>
              <div className="field"><label>Slot (min)</label><input type="number" min="10" step="5" value={avail.slot} onChange={stryMutAct_9fa48("895") ? () => undefined : (stryCov_9fa48("895"), e => setAvail(stryMutAct_9fa48("896") ? {} : (stryCov_9fa48("896"), {
                  ...avail,
                  slot: stryMutAct_9fa48("899") ? Number(e.target.value) && 30 : stryMutAct_9fa48("898") ? false : stryMutAct_9fa48("897") ? true : (stryCov_9fa48("897", "898", "899"), Number(e.target.value) || 30)
                })))} /></div>
            </div>
            <div className="actions"><button type="button" onClick={saveAvailability}>Save Availability</button></div>
          </div>

          <div className="main" style={stryMutAct_9fa48("900") ? {} : (stryCov_9fa48("900"), {
            gridTemplateColumns: stryMutAct_9fa48("901") ? "" : (stryCov_9fa48("901"), '1fr 1fr')
          })}>
            <div className="card">
              <div className="header"><h3 className="page-title">Upcoming Appointments</h3></div>
              <ul className="list">
                {stryMutAct_9fa48("904") ? upcoming.length === 0 || <li className="list-item"><div className="title"><span className="muted">No upcoming</span></div></li> : stryMutAct_9fa48("903") ? false : stryMutAct_9fa48("902") ? true : (stryCov_9fa48("902", "903", "904"), (stryMutAct_9fa48("906") ? upcoming.length !== 0 : stryMutAct_9fa48("905") ? true : (stryCov_9fa48("905", "906"), upcoming.length === 0)) && <li className="list-item"><div className="title"><span className="muted">No upcoming</span></div></li>)}
                {upcoming.map(stryMutAct_9fa48("907") ? () => undefined : (stryCov_9fa48("907"), a => <li key={a.id} className="list-item">
                    <div className="title"><span>{a.date} {a.time}</span></div>
                    <div className="meta">
                      <span className="badge">{nameById(patients, a.patientId)}</span>
                      <button className="btn-danger" onClick={stryMutAct_9fa48("908") ? () => undefined : (stryCov_9fa48("908"), () => cancel(a.id, a.date, a.time))}>Cancel</button>
                    </div>
                  </li>))}
              </ul>
            </div>
            <div className="card">
              <div className="header"><h3 className="page-title">Past Appointments</h3></div>
              <ul className="list">
                {stryMutAct_9fa48("911") ? past.length === 0 || <li className="list-item"><div className="title"><span className="muted">No past items</span></div></li> : stryMutAct_9fa48("910") ? false : stryMutAct_9fa48("909") ? true : (stryCov_9fa48("909", "910", "911"), (stryMutAct_9fa48("913") ? past.length !== 0 : stryMutAct_9fa48("912") ? true : (stryCov_9fa48("912", "913"), past.length === 0)) && <li className="list-item"><div className="title"><span className="muted">No past items</span></div></li>)}
                {past.map(stryMutAct_9fa48("914") ? () => undefined : (stryCov_9fa48("914"), a => <li key={a.id} className="list-item">
                    <div className="title"><span>{a.date} {a.time}</span></div>
                    <div className="meta">
                      <span className="badge">{nameById(patients, a.patientId)}</span>
                    </div>
                  </li>))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}