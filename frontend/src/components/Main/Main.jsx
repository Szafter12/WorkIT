import styles from './Main.module.scss'

export function Main({ children, center, absolute }) {
	const centered = center ? styles.center : undefined
	const abs = absolute ? styles.absolute : undefined

	return <main className={`${styles.main} ${centered} ${abs}`}>{children}</main>
}
