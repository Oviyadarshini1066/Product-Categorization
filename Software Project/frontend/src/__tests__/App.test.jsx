import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from '../App.jsx'

// Make sure this path matches exactly the import in App.jsx
vi.mock('../api', () => {
  const mk = () => ({
    list: vi.fn().mockResolvedValue([]),
    create: vi.fn(),
    patch: vi.fn(),
    remove: vi.fn(),
  })
  return {
    Patients: mk(),
    Doctors: mk(),
    Appointments: mk(),
    Bills: mk(),
    Reports: mk(),
    Labs: mk(),
    Inventory: mk(),
    Staff: mk(),
    Admissions: mk(),
    Transfers: mk(),
    Discharges: mk(),
    Prescriptions: mk(),
    Suppliers: mk(),
  }
})

describe('App (HMS)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders dashboard and tiles', () => {
    render(<App />)

    expect(screen.getByText(/CityCare Hospital — Dashboard/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Patients/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Doctors/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Appointment Booking/i })).toBeInTheDocument()
  })

  it('navigates to Patients page', async () => {
    window.location.hash = '#/patients'
    render(<App />)
    // More stable assertion for this page
    await screen.findByText(/Patient Registration/i)
  })

  it('navigates to Doctors page', async () => {
    window.location.hash = '#/doctors'
    render(<App />)
    await screen.findByRole('heading', { name: /Doctors/i })
  })

  it('navigates to Appointments page and shows form', async () => {
    window.location.hash = '#/appointment-booking'
    render(<App />)
    await screen.findByRole('heading', { name: /Appointment Booking/i })
    expect(screen.getByText(/Book Appointment/i)).toBeInTheDocument()
  })
})
