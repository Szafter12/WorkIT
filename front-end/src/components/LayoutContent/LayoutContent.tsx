import styles from './LayoutContent.module.scss'

interface MainContentprops {
	children: React.ReactNode
}

export function LayoutContent({ children }: MainContentprops) {
	return <main className={styles.layoutContent}>{children}</main>
}
