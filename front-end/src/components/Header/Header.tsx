import styles from './Header.module.scss'

interface HeaderProps {
	children: React.ReactNode
	subHeading: string
	img?: string
}

export function Header({ children, subHeading, img }: HeaderProps) {
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
