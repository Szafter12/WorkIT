import styles from './MainButton.module.scss'

interface MainButtonProps {
	onClick?: (event: React.MouseEvent<HTMLElement>) => void
	padding?: string
	rounded?: boolean
	icon?: string
	children: React.ReactNode
}

export default function MainButton({ onClick, padding, icon, children }: MainButtonProps) {
	const style = {
		padding: padding || '1em 2em',
	}

	return (
		<button onClick={onClick} className={styles.btn} style={style}>
			{children}
			{icon && (
				<span>
					<img src={icon} alt='' />
				</span>
			)}
		</button>
	)
}
