import { render, screen } from '@testing-library/react'
import FiltersMobile from '../components/FiltersMobile/FiltersMobile'

describe('FiltersMobile', () => {
	it('renders filter options', () => {
		render(<FiltersMobile />)
		expect(screen.getByText(/filters/i)).toBeInTheDocument()
	})
})
