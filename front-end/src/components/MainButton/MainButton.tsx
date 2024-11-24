import { Link } from 'react-router-dom'
import styles from './MainButton.module.scss'

interface MainButtonProps {
	onClick?: (event: React.MouseEvent<HTMLElement>) => void
	padding?: string
	rounded?: boolean
	icon?: string
	href?: string
	fontSize?: string
	children: React.ReactNode
}

export default function MainButton({ onClick, padding, icon, children, href, fontSize }: MainButtonProps) {
	const style = {
		padding: padding || '1em 2em',
		fontSize: fontSize || 'clamp(1.4rem,3vw,1.6rem)',
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
