import styles from './Nav.module.scss'
import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../../constants/navigation'

export function Nav() {
	return (
		<nav className={styles.nav}>
			<ul>
				{NAV_ITEMS.map(item => {
					return (
						<li key={item.name}>
							<NavLink to={item.path}>{item.name}</NavLink>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
