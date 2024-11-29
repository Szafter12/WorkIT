import styles from './SmallBox.module.scss'
import ARROW from '../../assets/icons/arrow.png'
import ARROW_UP from '../../assets/icons/arrow-up.png'

type ArrowDirection = 'up' | 'down'

interface smallBoxProps {
	name: string
	arrow: boolean
	arrow_pos?: ArrowDirection
	onClick?: () => void
	toggleCategory?: (category: string) => void
	categories?: string[]
}

export function SmallBox({ name, arrow, onClick, arrow_pos, categories, toggleCategory }: smallBoxProps) {
	const styl = {
		boxShadow: '0 0 3px rgba(57, 72, 207, 0.6)',
		borderColor: 'var(--main-color)',
	}

	const isClicked = categories?.find(el => el === name)

	return (
		<button
			style={isClicked ? styl : undefined}
			onClick={toggleCategory ? () => toggleCategory(name) : onClick}
			className={styles.smallBox}>
			{name}
			{arrow && <img src={arrow_pos === 'down' ? ARROW : ARROW_UP} alt='' />}
		</button>
	)
}
