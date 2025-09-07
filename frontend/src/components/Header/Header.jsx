import styles from './Header.module.scss'

export function Header({ children, subHeading, img }) {
	return (
		<>
			<div className={styles.header}>
				<h1>{children}</h1>
				<p>{subHeading}</p>
				{img && <img src={img} alt={subHeading} />}
			</div>
		</>
	)
}
