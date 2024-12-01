import { SearchBar__info } from '../SearchBar__info/SearchBar__info'
import styles from './SearchBar.module.scss'
import { MainButton } from '../MainButton/MainButton'
import { SearchBoxSpecializations, SearchBoxTech } from '../../types/SearchBar'
import GLASS from '../../assets/icons/magnifying-glass.png'
import { FilterBtn } from '../FilterBtn/FilterBtn'
import { filters } from '../../constants/filters'
import { FilterBox } from '../FilterBox/FilterBox'
import { useState } from 'react'
import { resize } from '../../hooks/resize'
import ARROW from '../../assets/icons/arrow.png'
import { FiltersMobile } from '../FiltersMobile/FiltersMobile'
import { SmallBox } from '../SmallBox/SmallBox'

interface SearchBarProps {
	specializations: SearchBoxSpecializations[]
	tech: SearchBoxTech[]
}

export function SearchBar({ specializations, tech }: SearchBarProps) {
	const [currentFilterBox, setCurrentFilterBox] = useState('')
	const [categories, setCategories] = useState<string[]>([])
	const [isMobile, setIsMobile] = useState<boolean>(false)
	const [isFilterMenuShown, setIsFilterMenuShown] = useState<boolean>(false)
	const mobileSize = 1000

	resize(mobileSize, setIsMobile)

	function handleFilterBox(name: string) {
		if (currentFilterBox === name) {
			setCurrentFilterBox(prevState => (prevState = ''))
		} else {
			setCurrentFilterBox(prevState => (prevState = name))
		}
	}

	const toggleCategory = (category: string) => {
		setCategories(prevState => {
			return prevState.includes(category) ? prevState.filter(c => c !== category) : [...prevState, category]
		})
	}

	const handleFilterMenu = () => {
		setIsFilterMenuShown(true)
	}

	return (
		<div className={styles.searchBar}>
			<div className={styles.inputContainer}>
				<input type='text' placeholder='Stanowisko, firma, słowo kluczowe' />
				<input type='text' placeholder='Lokalizacja' />
			</div>
			{!isMobile && (
				<SearchBar__info
					categories={categories}
					onClick={toggleCategory}
					tech={tech}
					specializations={specializations}
				/>
			)}
			{categories.length > 0 && (
				<div className={styles.activeFilters}>
					<p>Aktywne filtry: {categories.length}</p>
					<div>
						{categories.map(el => {
							return <SmallBox name={el} arrow={false} toggleCategory={toggleCategory} />
						})}
					</div>
				</div>
			)}
			<div className={styles.btnContainer}>
				{!isMobile && (
					<div className={styles.df}>
						{filters.map(el => {
							return (
								<div className={styles.filterContainer}>
									<FilterBtn
										key={el.name}
										arrow={currentFilterBox === el.name ? false : true}
										onClick={() => handleFilterBox(el.name)}>
										{el.name}
									</FilterBtn>
									{currentFilterBox === el.name && (
										<FilterBox categories={categories} onChange={toggleCategory} filterContent={el.filterContent} />
									)}
								</div>
							)
						})}
					</div>
				)}
				{isMobile && (
					<div className={styles.filterButton}>
						<MainButton onClick={handleFilterMenu} bgc={false} icon={ARROW}>
							Filtry
						</MainButton>
					</div>
				)}
				{isMobile && isFilterMenuShown && (
					<FiltersMobile
						specializations={specializations}
						tech={tech}
						setIsFilterMenuShown={setIsFilterMenuShown}
						categories={categories}
						toggleCategory={toggleCategory}
					/>
				)}
				<MainButton icon={GLASS} bgc={true}>
					Szukaj
				</MainButton>
			</div>
		</div>
	)
}
