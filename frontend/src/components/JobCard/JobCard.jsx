import styles from './JobCard.module.scss'

const JobCard = ({ job }) => {
	const formatDate = isoString => {
		if (!isoString) return ''

		const date = new Date(isoString)

		return new Intl.DateTimeFormat('pl-PL', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
		}).format(date)
	}

	return (
		<article className={styles.jobCard}>
			<div className={styles.mainContent}>
				<div className={styles.logoBox}>
					{job.company.company_logo_url ? (
						<img src={job.company.company_logo_url} alt={job.company.company_name} />
					) : (
						job.company.company_name.charAt(0)
					)}
				</div>

				<div className={styles.infoSection}>
					<div className={styles.headerRow}>
						<h3>{job.job_title}</h3>
						<button className={styles.favBtn}>♡</button>
					</div>

					<p className={styles.companyMeta}>
						<strong>{job.company.company_name}</strong> <span>• </span>
					</p>

					<div className={styles.tagsWrapper}>
						{job.abilities.map((tag, index) => (
							<span key={index} className={styles.tag}>
								{tag.ability_name}
							</span>
						))}
					</div>
				</div>
			</div>

			<footer className={styles.footer}>
				<span className={styles.quickApply}>⚡ Aplikuj szybko</span>
				<span className={styles.date}>Dodano: {formatDate(job.created_at)}</span>
			</footer>
		</article>
	)
}

export default JobCard
