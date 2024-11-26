import styles from './SmallBox.module.scss'
import ARROW from '../../assets/icons/arrow.png'
import ARROW_UP from '../../assets/icons/arrow-up.png'

type ArrowDirection = 'up' | 'down'

interface smallBoxProps {
	children: React.ReactNode
	arrow: boolean
	arrow_pos?: ArrowDirection
	onClick?: () => void
}

export function SmallBox({ children, arrow, onClick, arrow_pos }: smallBoxProps) {
	return (
		<button onClick={onClick} className={styles.smallBox}>
			{children}
			{arrow && <img src={arrow_pos === 'down' ? ARROW : ARROW_UP} alt='' />}
		</button>
	)
}
