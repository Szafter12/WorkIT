import { SearchBar__info } from '../SearchBar__info/SearchBar__info'
import styles from './SearchBar.module.scss'
import { MainButton } from '../MainButton/MainButton'
import { SearchBoxSpecializations, SearchBoxTech } from '../../types/SearchBar'
import GLASS from '../../assets/icons/magnifying-glass.png'
import { FilterBtn } from '../FilterBtn/FilterBtn'
import { filters } from '../../constants/filters'
import { FilterBox } from '../FilterBox/FilterBox'
import { useState } from 'react'

interface SearchBarProps {
	specializations: SearchBoxSpecializations[]
	tech: SearchBoxTech[]
}

export function SearchBar({ specializations, tech }: SearchBarProps) {
	const [currentFilterBox, setCurrentFilterBox] = useState('')

	function handleFilterBox(name: string) {
		if (currentFilterBox === name) {
			setCurrentFilterBox(prevState => (prevState = ''))
		} else {
			setCurrentFilterBox(prevState => (prevState = name))
		}
	}

	return (
		<div className={styles.searchBar}>
			<div className={styles.inputContainer}>
				<input type='text' placeholder='Stanowisko, firma, słowo kluczowe' />
				<input type='text' placeholder='Lokalizacja' />
			</div>
			<SearchBar__info tech={tech} specializations={specializations} />
			<div className={styles.btnContainer}>
				<div className={styles.df}>
					{filters.map(el => {
						return (
							<div className={styles.filterContainer}>
								<FilterBtn
									arrow={currentFilterBox === el.name ? false : true}
									key={el.name}
									onClick={() => handleFilterBox(el.name)}>
									{el.name}
								</FilterBtn>
								{currentFilterBox === el.name && <FilterBox filterContent={el.filterContent} />}
							</div>
						)
					})}
				</div>
				<MainButton icon={GLASS} bgc={true}>
					Szukaj
				</MainButton>
			</div>
		</div>
	)
}
