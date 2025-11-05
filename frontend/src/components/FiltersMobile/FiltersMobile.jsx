import { SearchBar__info } from '../SearchBar__info/SearchBar__info'
import styles from './FiltersMobile.module.scss'
import CLOSE from '../../assets/icons/close.png'
import { SmallBox } from '../SmallBox/SmallBox'
import { FilterBox } from '../FilterBox/FilterBox'
import { LABELS} from "../../constants/labels.js";

export function FiltersMobile({
	specializations,
	tech,
    filters,
	setIsFilterMenuShown,
	activeCategories,
	toggleSpecializationsCategory,
	toggleTechCategory,
	toggleLvlCategory,
	toggleContractCategory,
	toggleDimensionCategory,
	toggleModeCategory,
}) {
	let testFun = null

	const setFilterFun = name => {
		switch (name) {
			case 'level':
				testFun = toggleLvlCategory
				break

			case 'ContractType':
				testFun = toggleContractCategory
				break
			case 'workDimension':
				testFun = toggleDimensionCategory
				break
			case 'WorkMode':
				testFun = toggleModeCategory
				break
		}
	}

	return (
		<div className={styles.filtersMobile}>
			<button onClick={() => setIsFilterMenuShown(false)}>
				<img className={styles.closeBtn} src={CLOSE} alt='' />
			</button>
			{activeCategories.length > 0 && (
				<div>
					<h3 className={styles.activeFilters}>Aktywne filtry: {activeCategories.length}</h3>
					<div className={styles.activeFiltersContainer}>
						{activeCategories.map(el => {
							return <SmallBox name={el} arrow={false} activeCategories={activeCategories} />
						})}
					</div>
				</div>
			)}
			<SearchBar__info
				specializations={specializations}
				tech={tech}
				activeCategories={activeCategories}
				toggleSpecializationsCategory={toggleSpecializationsCategory}
				toggleTechCategory={toggleTechCategory}
			/>
			{filters.map(el => {
				setFilterFun(el.name)
				return (
					<div>
						<h3>{LABELS[el.name]}</h3>
						<div>
							{
								<FilterBox
									filterContent={el.data}
									activeCategories={activeCategories}
									isMobile={true}
									onChange={testFun}
								/>
							}
						</div>
					</div>
				)
			})}
		</div>
	)
}
