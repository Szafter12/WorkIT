import React from 'react'
import styles from './TopBar.module.scss'

interface HeaderProps {
	children: React.ReactNode
}

export function TopBar({ children }: HeaderProps) {
	return (
		<header className={styles.header}>
			<div className={styles.header__content}>{children}</div>
		</header>
	)
}
