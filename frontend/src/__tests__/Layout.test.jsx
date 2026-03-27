import { render } from '@testing-library/react'
import Layout from '../components/Layout/Layout'
describe('Layout', () => {
	it('renders children', () => {
		const { getByText } = render(
			<Layout>
				<div>Test Child</div>
			</Layout>,
		)
		expect(getByText('Test Child')).toBeInTheDocument()
	})
})
