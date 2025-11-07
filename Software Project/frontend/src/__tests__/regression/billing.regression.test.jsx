import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../../App.jsx'

vi.mock('../../api', () => {
  const mk = () => ({ list: vi.fn().mockResolvedValue([]), create: vi.fn(), patch: vi.fn(), remove: vi.fn() })
  const Patients = mk()
  const Bills = mk()
  // Provide one patient so the Patient select has an option
  Patients.list.mockResolvedValue([{ id: 'p1', name: 'John Doe' }])
  return { Patients, Bills, Doctors: mk(), Appointments: mk(), Reports: mk(), Labs: mk(), Inventory: mk(), Staff: mk(), Admissions: mk(), Transfers: mk(), Discharges: mk(), Prescriptions: mk(), Suppliers: mk() }
})

const api = await import('../../api')

describe('Regression: Billing create uses patient name and payload is correct', () => {
  beforeEach(() => { vi.clearAllMocks() })

  it('navigates to Billing and creates an invoice', async () => {
    // Go directly to Billing route
    window.location.hash = '#/billing'
    render(<App />)

    // Wait for page heading
    await screen.findByRole('heading', { name: /Billing/i })

    // Select patient (first combobox is Patient)
    const combos = screen.getAllByRole('combobox')
    const patientSelect = combos[0]
    fireEvent.change(patientSelect, { target: { value: 'p1' } })

    // Enter items and total (first two textboxes in the form)
    const textboxes = screen.getAllByRole('textbox')
    const itemsInput = textboxes[0]
    fireEvent.change(itemsInput, { target: { value: 'Consultation, X-Ray' } })

    const totalInput = textboxes[1]
    fireEvent.change(totalInput, { target: { value: '1500' } })

    // Save
    fireEvent.click(screen.getByRole('button', { name: /Save/i }))

    // Assert payload sent to API
    expect(api.Bills.create).toHaveBeenCalled()
    const payload = api.Bills.create.mock.calls[0][0]
    expect(payload.patientId).toBe('p1')
    expect(Array.isArray(payload.items)).toBe(true)
    expect(payload.items.map(i => i.desc)).toEqual(['Consultation', 'X-Ray'])
    expect(payload.total).toBe('1500')
  })
})
