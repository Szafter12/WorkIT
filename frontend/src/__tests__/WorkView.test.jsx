import { render } from '@testing-library/react'
import WorkView from '../components/WorkView/WorkView'
describe('WorkView', () => {
	it('renders without crashing', () => {
		render(<WorkView posts={[]} />)
	})
})
