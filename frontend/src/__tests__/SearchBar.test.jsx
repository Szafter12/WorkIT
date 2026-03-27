import { render, screen, fireEvent } from '@testing-library/react'
import SearchBar from '../components/SearchBar/SearchBar'

describe('SearchBar', () => {
	it('renders input for search', () => {
		render(<SearchBar />)
		expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument()
	})

	it('calls onChange when typing', () => {
		const handleChange = vi.fn()
		render(<SearchBar onChange={handleChange} />)
		const input = screen.getByPlaceholderText(/search/i)
		fireEvent.change(input, { target: { value: 'test' } })
		expect(handleChange).toHaveBeenCalled()
	})
})
