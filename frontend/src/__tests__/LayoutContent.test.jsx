import { render } from '@testing-library/react'
import LayoutContent from '../components/LayoutContent/LayoutContent'
describe('LayoutContent', () => {
	it('renders children', () => {
		const { getByText } = render(<LayoutContent>Test Content</LayoutContent>)
		expect(getByText('Test Content')).toBeInTheDocument()
	})
})
