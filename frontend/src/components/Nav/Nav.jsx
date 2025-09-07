import styles from './Nav.module.scss'
import { NavLink } from 'react-router-dom'
import { NAV_ITEMS } from '../../constants/navigation'

export function Nav({ isMobile }) {
	const styl = {
		flexDirection: isMobile ? 'column' : 'row',
		fontSize: isMobile ? 'clamp(1.6rem,3vw,1.8rem)' : 'clamp(1.4rem, 3vw, 1.6rem)',
	}

	return (
		<nav className={styles.nav}>
			<ul style={styl}>
				{NAV_ITEMS.map(item => {
					return (
						<li key={item.name}>
							<NavLink to={`/${item.path}`}>{item.name}</NavLink>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
