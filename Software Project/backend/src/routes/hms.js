import { Router } from 'express'
import { buildCollectionStore } from '../store/collectionStore.js'

// Collections: patients, doctors, appointments, bills, reports
const patients = buildCollectionStore('patients')
const doctors = buildCollectionStore('doctors')
const appointments = buildCollectionStore('appointments')
const bills = buildCollectionStore('bills')
const reports = buildCollectionStore('reports')
const labs = buildCollectionStore('labs')
const inventory = buildCollectionStore('inventory')
const staff = buildCollectionStore('staff')
// New collections to cover full HMS surface
const admissions = buildCollectionStore('admissions')
const transfers = buildCollectionStore('transfers')
const discharges = buildCollectionStore('discharges')
const prescriptions = buildCollectionStore('prescriptions')
const suppliers = buildCollectionStore('suppliers')
const equipment = buildCollectionStore('equipment')
const maintenance = buildCollectionStore('maintenance')
const claims = buildCollectionStore('claims')
const users = buildCollectionStore('users')
const audit = buildCollectionStore('audit')
const roster = buildCollectionStore('roster')
const leaves = buildCollectionStore('leaves')
const payroll = buildCollectionStore('payroll')

const router = Router()

function crudFor(base, store) {
  router.get(`/${base}`, async (req, res) => {
    const items = await store.list(req.query)
    res.json(items)
  })
  router.post(`/${base}`, async (req, res) => {
    try {
      const created = await store.create(req.body)
      res.status(201).json(created)
    } catch (e) {
      res.status(400).json({ error: e.message })
    }
  })
  router.patch(`/${base}/:id`, async (req, res) => {
    const updated = await store.update(req.params.id, req.body)
    if (!updated) return res.status(404).json({ error: 'Not found' })
    res.json(updated)
  })
  router.delete(`/${base}/:id`, async (req, res) => {
    const ok = await store.remove(req.params.id)
    if (!ok) return res.status(404).json({ error: 'Not found' })
    res.status(204).send()
  })
}

crudFor('patients', patients)
crudFor('doctors', doctors)
crudFor('appointments', appointments)
crudFor('bills', bills)
crudFor('reports', reports)
crudFor('labs', labs)
crudFor('inventory', inventory)
crudFor('staff', staff)
crudFor('admissions', admissions)
crudFor('transfers', transfers)
crudFor('discharges', discharges)
crudFor('prescriptions', prescriptions)
crudFor('suppliers', suppliers)
crudFor('equipment', equipment)
crudFor('maintenance', maintenance)
crudFor('claims', claims)
crudFor('users', users)
crudFor('audit', audit)
crudFor('roster', roster)
crudFor('leaves', leaves)
crudFor('payroll', payroll)

export default router
