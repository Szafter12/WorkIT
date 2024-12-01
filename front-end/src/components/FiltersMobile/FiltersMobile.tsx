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
	toggleCategory: (category: string) => void
}

export function FiltersMobile({
	specializations,
	tech,
	setIsFilterMenuShown,
	activeCategories,
	toggleCategory,
}: filtersMobileProps) {
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
							return <SmallBox name={el} arrow={false} activeCategories={activeCategories} toggleCategory={toggleCategory} />
						})}
					</div>
				</div>
			)}
			<SearchBar__info specializations={specializations} tech={tech} activeCategories={activeCategories} onClick={toggleCategory} />
			{filters.map(el => {
				return (
					<div>
						<h3>{el.name}</h3>
						<div>
							{
								<FilterBox
									filterContent={el.filterContent}
									activeCategories={activeCategories}
									onChange={toggleCategory}
									isMobile={true}
								/>
							}
						</div>
					</div>
				)
			})}
		</div>
	)
}
