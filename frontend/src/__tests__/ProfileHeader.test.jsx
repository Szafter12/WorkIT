import { render } from '@testing-library/react'
import ProfileHeader from '../components/ProfileHeader/ProfileHeader'
describe('ProfileHeader', () => {
	it('renders without crashing', () => {
		render(<ProfileHeader user={{}} />)
	})
})
