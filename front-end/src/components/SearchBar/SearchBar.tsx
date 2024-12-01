import { SearchBar__info } from '../SearchBar__info/SearchBar__info'
import styles from './SearchBar.module.scss'
import { MainButton } from '../MainButton/MainButton'
import { SearchBoxSpecializations, SearchBoxTech } from '../../types/SearchBar'
import GLASS from '../../assets/icons/magnifying-glass.png'
import { FilterBtn } from '../FilterBtn/FilterBtn'
import { filters } from '../../constants/filters'
import { FilterBox } from '../FilterBox/FilterBox'
import { useState, useEffect } from 'react'
import { resize } from '../../hooks/resize'
import ARROW from '../../assets/icons/arrow.png'
import { FiltersMobile } from '../FiltersMobile/FiltersMobile'
import { SmallBox } from '../SmallBox/SmallBox'
import axiosInstance from '../../api/axiosInstance'
import debounce from 'lodash/debounce'

interface SearchBarProps {
	specializations: SearchBoxSpecializations[]
	tech: SearchBoxTech[]
}

export function SearchBar({ specializations, tech }: SearchBarProps) {
	const [currentFilterBox, setCurrentFilterBox] = useState('')
	const [activeCategories, setactiveCategories] = useState<string[]>([])
	const [techCategories, setTechCategories] = useState<string[]>([])
	const [specializationsCategories, setSpecializationsCategories] = useState<string[]>([])
	const [lvlCategories, setLvlCategories] = useState<string[]>([])
	const [contractCategories, setContractCategories] = useState<string[]>([])
	const [dimensionCategories, setDimensionCategories] = useState<string[]>([])
	const [modeCategories, setModeCategories] = useState<string[]>([])
	const [isMobile, setIsMobile] = useState<boolean>(false)
	const [isFilterMenuShown, setIsFilterMenuShown] = useState<boolean>(false)
	const [posts, setPosts] = useState<string[]>([])
	const [keywords, setKeywords] = useState<string>('')
	const [isSearchContentShown, setisSearchContentShown] = useState<boolean>(false)
	const [inputKeywordsValue, setInputKeywordsValue] = useState<string>('')
	const mobileSize = 1000
	let testFun: (category: string) => void
	resize(mobileSize, setIsMobile)

	const sendFiltersToBackend = async () => {
		const filters = {
			techCategories,
			specializationsCategories,
			lvlCategories,
			contractCategories,
			dimensionCategories,
			modeCategories,
			keywords,
		}

		// Filtruj puste tablice
		const nonEmptyFilters = Object.entries(filters).reduce(
			(acc, [key, value]) => (value.length ? { ...acc, [key]: value } : acc),
			{}
		)

		if (Object.keys(nonEmptyFilters).length > 0) {
			try {
				const res = await axiosInstance.post('filters', filters)
				setPosts(prevState => (prevState = res.data))
			} catch (error) {
				console.log('Błąd podczas pobierania danych z serwera')
			}
		} else {
			setPosts([])
		}
	}

	useEffect(() => {
		const debouncedFetch = debounce(() => sendFiltersToBackend(), 300) // Opóźnienie 300ms
		debouncedFetch()

		return () => {
			debouncedFetch.cancel()
		}
	}, [
		techCategories,
		specializationsCategories,
		lvlCategories,
		contractCategories,
		dimensionCategories,
		modeCategories,
		keywords,
	])

	function handleFilterBox(name: string) {
		if (currentFilterBox === name) {
			setCurrentFilterBox(prevState => (prevState = ''))
		} else {
			setCurrentFilterBox(prevState => (prevState = name))
		}
	}

	const toggleActiveCategory = (category: string) => {
		setactiveCategories(prevState => {
			return prevState.includes(category) ? prevState.filter(c => c !== category) : [...prevState, category]
		})
	}

	const toggleTechCategory = (category: string) => {
		setTechCategories(prevState => {
			return prevState.includes(category) ? prevState.filter(c => c !== category) : [...prevState, category]
		})
		toggleActiveCategory(category)
	}

	const toggleSpecializationsCategory = (category: string) => {
		setSpecializationsCategories(prevState => {
			return prevState.includes(category) ? prevState.filter(c => c !== category) : [...prevState, category]
		})
		toggleActiveCategory(category)
	}

	const toggleLvlCategory = (category: string) => {
		setLvlCategories(prevState => {
			return prevState.includes(category) ? prevState.filter(c => c !== category) : [...prevState, category]
		})
		toggleActiveCategory(category)
	}

	const toggleContractCategory = (category: string) => {
		setContractCategories(prevState => {
			return prevState.includes(category) ? prevState.filter(c => c !== category) : [...prevState, category]
		})
		toggleActiveCategory(category)
	}

	const toggleDimensionCategory = (category: string) => {
		setDimensionCategories(prevState => {
			return prevState.includes(category) ? prevState.filter(c => c !== category) : [...prevState, category]
		})
		toggleActiveCategory(category)
	}

	const toggleModeCategory = (category: string) => {
		setModeCategories(prevState => {
			return prevState.includes(category) ? prevState.filter(c => c !== category) : [...prevState, category]
		})
		toggleActiveCategory(category)
	}

	const handleFilterMenu = () => {
		setIsFilterMenuShown(true)
	}

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

	const debouncedKeywordSearch = debounce((value: string) => {
		setKeywords(value)
	}, 300)

	const HandleKeywordsInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputKeywordsValue(e.target.value)
		debouncedKeywordSearch(e.target.value)
	}

	const handleShowInputContent = () => {
		setisSearchContentShown(true)
	}

	const handleHideInputContent = () => {
		setTimeout(() => {
			setisSearchContentShown(false)
		}, 100)
	}

	const setInputValue = (el: string) => {
		setInputKeywordsValue(prevState => (prevState = el))
	}

	return (
		<div className={styles.searchBar}>
			<div className={styles.inputContainer}>
				<div className={`${styles.inputs} ${styles.inputs__left}`}>
					<input
						type='text'
						placeholder='Stanowisko, firma, słowo kluczowe'
						onChange={HandleKeywordsInput}
						onFocus={handleShowInputContent}
						onBlur={handleHideInputContent}
						value={inputKeywordsValue}
					/>
					{isSearchContentShown && posts.length > 0 && (
						<div className={styles.inputs__content}>
							<ul>
								<h3>Sugerowane wyszukiwania:</h3>
								{posts.map(el => {
									return (
										<li>
											<button onClick={() => setInputValue(el)}>{el}</button>
										</li>
									)
								})}
							</ul>
						</div>
					)}
				</div>
				<div className={`${styles.inputs} ${styles.inputs__right}`}>
					<input type='text' placeholder='Lokalizacja' />
				</div>
			</div>
			{!isMobile && (
				<SearchBar__info
					activeCategories={activeCategories}
					tech={tech}
					specializations={specializations}
					toggleTechCategory={toggleTechCategory}
					toggleSpecializationsCategory={toggleSpecializationsCategory}
				/>
			)}
			{activeCategories.length > 0 && (
				<div className={styles.activeFilters}>
					<p>Aktywne filtry: {activeCategories.length}</p>
					<div>
						{activeCategories.map(el => {
							return <SmallBox name={el} arrow={false} />
						})}
					</div>
				</div>
			)}
			<div className={styles.btnContainer}>
				{!isMobile && (
					<div className={styles.df}>
						{filters.map(el => {
							setFilterFun(el.name)
							return (
								<div className={styles.filterContainer}>
									<FilterBtn
										key={el.name}
										arrow={currentFilterBox === el.name ? false : true}
										onClick={() => handleFilterBox(el.name)}>
										{el.name}
									</FilterBtn>
									{currentFilterBox === el.name && (
										<FilterBox
											activeCategories={activeCategories}
											onChange={testFun}
											filterContent={el.filterContent}
										/>
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
						activeCategories={activeCategories}
						toggleLvlCategory={toggleLvlCategory}
						toggleContractCategory={toggleContractCategory}
						toggleDimensionCategory={toggleDimensionCategory}
						toggleModeCategory={toggleModeCategory}
						toggleSpecializationsCategory={toggleSpecializationsCategory}
						toggleTechCategory={toggleTechCategory}
					/>
				)}
				<MainButton icon={GLASS} bgc={true}>
					{posts.length > 0 && <span className={styles.counter}>{posts.length}</span>}
					Szukaj
				</MainButton>
			</div>
		</div>
	)
}
