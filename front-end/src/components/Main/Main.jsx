import styles from './Main.module.scss'

export function Main({ children, center }) {
	const centered = center ? styles.center : undefined

	return <main className={`${styles.main} ${centered}`}>{children}</main>
}
