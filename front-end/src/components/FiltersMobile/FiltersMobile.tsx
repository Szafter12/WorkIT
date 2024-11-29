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
	categories: string[]
	toggleCategory: (category: string) => void
}

export function FiltersMobile({
	specializations,
	tech,
	setIsFilterMenuShown,
	categories,
	toggleCategory,
}: filtersMobileProps) {
	return (
		<div className={styles.filtersMobile}>
			<button onClick={() => setIsFilterMenuShown(false)}>
				<img className={styles.closeBtn} src={CLOSE} alt='' />
			</button>
			{categories.length > 0 && (
				<div>
					<h3 className={styles.activeFilters}>Aktywne filtry: {categories.length}</h3>
					<div className={styles.activeFiltersContainer}>
						{categories.map(el => {
							return <SmallBox name={el} arrow={false} categories={categories} toggleCategory={toggleCategory} />
						})}
					</div>
				</div>
			)}
			<SearchBar__info specializations={specializations} tech={tech} categories={categories} onClick={toggleCategory} />
			{filters.map(el => {
				return (
					<div>
						<h3>{el.name}</h3>
						<div>
							{
								<FilterBox
									filterContent={el.filterContent}
									categories={categories}
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
