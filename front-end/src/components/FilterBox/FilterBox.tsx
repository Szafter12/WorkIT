import styles from './FilterBox.module.scss'

type FilterBox = {
	filter_name: string
}

interface FilterBoxProps {
	filterContent: FilterBox[]
	onChange: (category: string) => void
	categories: string[]
}

export const FilterBox = ({ filterContent, onChange, categories }: FilterBoxProps) => {
	return (
		<div className={styles.filterBox}>
			{filterContent.map(el => {
				return (
					<button onClick={() => onChange(el.filter_name)} key={el.filter_name} className={styles.filterBox__content}>
						<input
							type='checkbox'
							id={el.filter_name}
							value={el.filter_name}
							checked={categories.includes(el.filter_name)}
						/>
						<label htmlFor={el.filter_name}>{el.filter_name}</label>
					</button>
				)
			})}
		</div>
	)
}
