import styles from './MainContent.module.scss'

interface MainContentprops {
	children: React.ReactNode
}

export function MainContent({ children }: MainContentprops) {
	return <main className={styles.mainContent}>{children}</main>
}
