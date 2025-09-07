import styles from './LayoutContent.module.scss'

export function LayoutContent({ children }) {
	return <main className={styles.layoutContent}>{children}</main>
}
