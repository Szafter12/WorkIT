import { render } from '@testing-library/react'
import JobPostDetails from '../components/JobPostDetails/JobPostDetails'
describe('JobPostDetails', () => {
	it('renders loading state', () => {
		const { getByText } = render(<JobPostDetails />)
		expect(getByText(/ładowanie/i)).toBeInTheDocument()
	})
})
