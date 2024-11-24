import { Link } from 'react-router-dom'
import styles from './MainButton.module.scss'

interface MainButtonProps {
	onClick?: (event: React.MouseEvent<HTMLElement>) => void
	padding?: string
	icon?: string
	href?: string
	fontSize?: string
	bgc?: boolean
	children: React.ReactNode
}

export function MainButton({ onClick, padding, icon, children, href, fontSize, bgc }: MainButtonProps) {
	const style = {
		padding: padding || '1em 2em',
		fontSize: fontSize || 'clamp(1.4rem,3vw,1.6rem)',
		backgroundColor: bgc ? 'var(--main-color)' : 'none',
		color: bgc ? 'var(--white-color)' : 'var(--text-color)',
	}

	if (href) {
		return (
			<Link className={styles.btn} style={style} to={href}>
				{children}
			</Link>
		)
	} else {
		return (
			<button onClick={onClick} className={styles.btn} style={style}>
				{children}
				{icon && (
					<span>
						<img width='15px' height='15px' src={icon} alt='' />
					</span>
				)}
			</button>
		)
	}
}
