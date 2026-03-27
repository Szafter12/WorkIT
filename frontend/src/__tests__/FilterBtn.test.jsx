import { render } from '@testing-library/react'
import FilterBtn from '../components/FilterBtn/FilterBtn'
describe('FilterBtn', () => {
	it('renders children', () => {
		const { getByText } = render(<FilterBtn>Test</FilterBtn>)
		expect(getByText('Test')).toBeInTheDocument()
	})
})
