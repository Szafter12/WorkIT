import styles from './Logo.module.scss'
import { Link } from 'react-router-dom'

export function Logo() {
	return (
		<Link to={'/'} className={styles.logo}>
			Work IT
		</Link>
	)
}
