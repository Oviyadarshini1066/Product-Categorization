import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export const client = axios.create({
  baseURL: `${API_URL}/api`,
  headers: { 'Content-Type': 'application/json' }
})

// Generic CRUD helpers for HMS collections
function collection(name) {
  return {
    async list(params = {}) { const r = await client.get(`/${name}`, { params }); return r.data },
    async create(data) { const r = await client.post(`/${name}`, data); return r.data },
    async patch(id, patch) { const r = await client.patch(`/${name}/${id}`, patch); return r.data },
    async remove(id) { await client.delete(`/${name}/${id}`) }
  }
}

export const Patients = collection('patients')
export const Doctors = collection('doctors')
export const Appointments = collection('appointments')
export const Bills = collection('bills')
export const Reports = collection('reports')
export const Labs = collection('labs')
export const Inventory = collection('inventory')
export const Staff = collection('staff')
export const Admissions = collection('admissions')
export const Transfers = collection('transfers')
export const Discharges = collection('discharges')
export const Prescriptions = collection('prescriptions')
export const Suppliers = collection('suppliers')
export const Equipment = collection('equipment')
export const Maintenance = collection('maintenance')
export const Claims = collection('claims')
export const Users = collection('users')
export const Audit = collection('audit')
export const Roster = collection('roster')
export const Leaves = collection('leaves')
export const Payroll = collection('payroll')
