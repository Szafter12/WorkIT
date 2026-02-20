import styles from './OffertsContent.module.scss'
import { OffertsFilterBar } from '../OffertsFilterBar/OffertsFilterBar.jsx'
import { OffertsContainer } from '../OffertsContainer/OffertsContainer.jsx'

export const OffertsContent = ({ posts }) => {
	return (
		<main className={styles.offertsContent}>
			<OffertsFilterBar />
			<OffertsContainer posts={posts} />
		</main>
	)
}
