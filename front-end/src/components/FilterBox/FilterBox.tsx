import styles from './FilterBox.module.scss'

type FilterBox = {
	filter_name: string
}

interface FilterBoxProps {
	filterContent: FilterBox[]
}

export const FilterBox = ({ filterContent }: FilterBoxProps) => {
	return (
		<div className={styles.filterBox}>
			{filterContent.map(el => {
				return (
					<div key={el.filter_name} className={styles.filterBox__content}>
						<input type='checkbox' id={el.filter_name} />
						<label htmlFor={el.filter_name}>{el.filter_name}</label>
					</div>
				)
			})}
		</div>
	)
}
