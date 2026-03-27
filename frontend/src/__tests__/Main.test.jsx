import { render } from '@testing-library/react'
import Main from '../components/Main/Main'
describe('Main', () => {
	it('renders children', () => {
		const { getByText } = render(<Main>Test Main</Main>)
		expect(getByText('Test Main')).toBeInTheDocument()
	})
})
