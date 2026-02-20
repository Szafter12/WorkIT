import styles from './OffertsContainer.module.scss'
import JobCard from '../JobCard/JobCard'

export const OffertsContainer = ({ posts }) => {
	console.log(posts)
	return (
		<div className={styles.offertsContainer}>
			{posts?.map((job, i) => (
				<JobCard key={i} job={job} />
			))}
		</div>
	)
}
