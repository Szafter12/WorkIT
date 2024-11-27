import styles from './FilterBtn.module.scss'
import ARROW from '../../assets/icons/arrow.png'
import ARROW_DOWN from '../../assets/icons/arrow-up.png'

interface FilterbtnProps {
	children: React.ReactNode
	onClick: () => void
	arrow: boolean
}

export const FilterBtn = ({ children, onClick, arrow }: FilterbtnProps) => {
	return (
		<button
			className={styles.filterBtn}
			onClick={() => {
				onClick()
			}}>
			{children}
			<img src={arrow ? ARROW : ARROW_DOWN} alt='' />
		</button>
	)
}
