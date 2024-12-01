import { SearchBar__info } from '../SearchBar__info/SearchBar__info'
import styles from './FiltersMobile.module.scss'
import { SearchBoxSpecializations, SearchBoxTech } from '../../types/SearchBar'
import CLOSE from '../../assets/icons/close.png'
import { SmallBox } from '../SmallBox/SmallBox'
import { filters } from '../../constants/filters'
import { FilterBox } from '../FilterBox/FilterBox'

interface filtersMobileProps {
	specializations: SearchBoxSpecializations[]
	tech: SearchBoxTech[]
	setIsFilterMenuShown: (state: boolean) => void
	activeCategories: string[]
	toggleSpecializationsCategory?: (category: string) => void
	toggleTechCategory: (category: string) => void
	toggleLvlCategory: (category: string) => void
	toggleContractCategory: (category: string) => void
	toggleDimensionCategory: (category: string) => void
	toggleModeCategory: (category: string) => void
}

export function FiltersMobile({
	specializations,
	tech,
	setIsFilterMenuShown,
	activeCategories,
	toggleSpecializationsCategory,
	toggleTechCategory,
	toggleLvlCategory,
	toggleContractCategory,
	toggleDimensionCategory,
	toggleModeCategory,
}: filtersMobileProps) {
	let testFun: (category: string) => void

	const setFilterFun = (name: string) => {
		switch (name) {
			case 'Poziom stanowiska':
				testFun = toggleLvlCategory
				break

			case 'Rodzaj umowy':
				testFun = toggleContractCategory
				break
			case 'Wymiar pracy':
				testFun = toggleDimensionCategory
				break
			case 'Tryb pracy':
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
						<h3>{el.name}</h3>
						<div>
							{
								<FilterBox
									filterContent={el.filterContent}
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
