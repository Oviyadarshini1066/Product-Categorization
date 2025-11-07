import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import * as api from '../api'
import App from '../App.jsx'

vi.mock('../api')

describe('App', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('loads and displays tasks', async () => {
    api.getTasks.mockResolvedValue([
      { id: '1', title: 'Write report', course: 'CS101', priority: 'High', completed: false }
    ])

    render(<App />)

    expect(screen.getByText('Tasks')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Write report')).toBeInTheDocument()
      expect(screen.getByText('CS101')).toBeInTheDocument()
    })
  })

  it('creates a task via form', async () => {
    api.getTasks
      .mockResolvedValueOnce([]) // initial load
      .mockResolvedValueOnce([]) // after submit before reload
      .mockResolvedValueOnce([{ id: '2', title: 'New Task', course: '', priority: 'Medium', completed: false }]) // after reload
    api.createTask.mockResolvedValue({ id: '2' })

    render(<App />)

    const title = await screen.findByLabelText('Title')
    fireEvent.change(title, { target: { value: 'New Task' } })
    fireEvent.click(screen.getByRole('button', { name: 'Add Task' }))

    await waitFor(() => {
      expect(api.createTask).toHaveBeenCalled()
      expect(screen.getByText('New Task')).toBeInTheDocument()
    })
  })
})
