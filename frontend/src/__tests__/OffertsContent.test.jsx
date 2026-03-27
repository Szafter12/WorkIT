import { render } from '@testing-library/react'
import OffertsContent from '../components/OffertsContent/OffertsContent'
describe('OffertsContent', () => {
	it('renders without crashing', () => {
		render(<OffertsContent posts={[]} />)
	})
})
