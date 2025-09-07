import styles from './FilterBox.module.scss'

export const FilterBox = ({ filterContent, onChange, activeCategories, isMobile }) => {
	const styledClass = isMobile ? styles.filterBoxMobile : styles.filterBox

	return (
		<div className={styledClass}>
			{filterContent.map(el => {
				return (
					<button onClick={() => onChange(el.filter_name)} key={el.filter_name} className={styles.filterBox__content}>
						<input
							type='checkbox'
							id={el.filter_name}
							value={el.filter_name}
							checked={activeCategories.includes(el.filter_name)}
						/>
						<label htmlFor={el.filter_name}>{el.filter_name}</label>
					</button>
				)
			})}
		</div>
	)
}
