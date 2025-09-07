import styles from './TopBar.module.scss'

export function TopBar({ children }) {
	return (
		<header className={styles.header}>
			<div className={styles.header__content}>{children}</div>
		</header>
	)
}
