import React from 'react'
import styles from './Header.module.scss'

interface HeaderProps {
	children: React.ReactNode
}

export function Header({ children }: HeaderProps) {
	return (
		<header className={styles.header}>
			<div className={styles.content}>{children}</div>
		</header>
	)
}
