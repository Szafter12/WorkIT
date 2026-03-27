import { render } from '@testing-library/react'
import SmallBox from '../components/SmallBox/SmallBox'
describe('SmallBox', () => {
	it('renders name', () => {
		const { getByText } = render(<SmallBox name='TestName' />)
		expect(getByText('TestName')).toBeInTheDocument()
	})
})
