import styles from './Wrapper.module.scss'

interface wrapperProps {
	children: React.ReactNode
}

export function Wrapper({ children }: wrapperProps) {
	return <main className={styles.wrapper}>{children}</main>
}
