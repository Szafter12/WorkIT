import styles from './Main.module.scss'

interface MainProps {
	children: React.ReactNode
	center?: boolean
}

export function Main({ children, center }: MainProps) {
	const centered = center ? styles.center : undefined

	return <main className={`${styles.main} ${centered}`}>{children}</main>
}
