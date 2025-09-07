import { SearchBar__info } from '../SearchBar__info/SearchBar__info'
import styles from './SearchBar.module.scss'
import { MainButton } from '../MainButton/MainButton'
import { SearchBoxSpecializations, SearchBoxTech } from '../../types/SearchBar'
import GLASS from '../../assets/icons/magnifying-glass.png'
import DARK_GLASS from '../../assets/icons/magnifying-glass-dark.png'
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


export function SearchBar({ specializations, tech }) {
	const [currentFilterBox, setCurrentFilterBox] = useState('')

	const [activeCategories, setactiveCategories] = useState([])
	const [techCategories, setTechCategories] = useState([])
	const [specializationsCategories, setSpecializationsCategories] = useState([])
	const [lvlCategories, setLvlCategories] = useState([])
	const [contractCategories, setContractCategories] = useState([])
	const [dimensionCategories, setDimensionCategories] = useState([])
	const [modeCategories, setModeCategories] = useState([])

	const [isMobile, setIsMobile] = useState(false)
	const [isFilterMenuShown, setIsFilterMenuShown] = useState(false)

	const [posts, setPosts] = useState([])
	const [keywords, setKeywords] = useState('')
	const [isSearchContentShown, setisSearchContentShown] = useState(false)
	const [inputKeywordsValue, setInputKeywordsValue] = useState('')

	const [cities, setCities] = useState([])
	const [Citieskeywords, setCitiesKeywords] = useState('')
	const [citiesInputValue, setCitiesInputValue] = useState('')
	const [isCitiesContentShown, setisCitiesContentShown] = useState(false)

	const mobileSize = 1000
	let testFun = null
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
			Citieskeywords,
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
		Citieskeywords,
	])

	const getCities = async () => {
		const city = {
			Citieskeywords,
		}
		if (Citieskeywords.length > 0) {
			try {
				const res = await axiosInstance.post('cities', city)
				setCities(state => (state = res.data))
			} catch (err) {
				console.log(err)
			}
		} else {
			setCities([])
		}
	}

	useEffect(() => {
		getCities()
	}, [Citieskeywords])

	function handleFilterBox(name) {
		if (currentFilterBox === name) {
			setCurrentFilterBox(prevState => (prevState = ''))
		} else {
			setCurrentFilterBox(prevState => (prevState = name))
		}
	}

	const toggleActiveCategory = (category) => {
		setactiveCategories(prevState => {
			return prevState.includes(category) ? prevState.filter(c => c !== category) : [...prevState, category]
		})
	}

	const toggleTechCategory = (category) => {
		setTechCategories(prevState => {
			return prevState.includes(category) ? prevState.filter(c => c !== category) : [...prevState, category]
		})
		toggleActiveCategory(category)
	}

	const toggleSpecializationsCategory = (category) => {
		setSpecializationsCategories(prevState => {
			return prevState.includes(category) ? prevState.filter(c => c !== category) : [...prevState, category]
		})
		toggleActiveCategory(category)
	}

	const toggleLvlCategory = (category) => {
		setLvlCategories(prevState => {
			return prevState.includes(category) ? prevState.filter(c => c !== category) : [...prevState, category]
		})
		toggleActiveCategory(category)
	}

	const toggleContractCategory = (category) => {
		setContractCategories(prevState => {
			return prevState.includes(category) ? prevState.filter(c => c !== category) : [...prevState, category]
		})
		toggleActiveCategory(category)
	}

	const toggleDimensionCategory = (category) => {
		setDimensionCategories(prevState => {
			return prevState.includes(category) ? prevState.filter(c => c !== category) : [...prevState, category]
		})
		toggleActiveCategory(category)
	}

	const toggleModeCategory = (category) => {
		setModeCategories(prevState => {
			return prevState.includes(category) ? prevState.filter(c => c !== category) : [...prevState, category]
		})
		toggleActiveCategory(category)
	}

	const handleFilterMenu = () => {
		setIsFilterMenuShown(true)
	}

	const setFilterFun = (name) => {
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

	const debouncedKeywordSearch = debounce((value) => {
		setKeywords(value)
	}, 300)

	const debounceCitiesSearch = debounce((value) => {
		setCitiesKeywords(value)
	}, 300)

	const HandleKeywordsInput = (e) => {
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

	const setInputValue = (el) => {
		setInputKeywordsValue(prevState => (prevState = el))
	}

	const handleCitiesInput = (e) => {
		setCitiesInputValue(e.target.value)
		debounceCitiesSearch(e.target.value)
	}

	const handleShowCitiesContent = () => {
		setisCitiesContentShown(true)
	}

	const handleHideCitiesContent = () => {
		setTimeout(() => {
			setisCitiesContentShown(false)
		}, 100)
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
								<div className={styles.flex}>
									<img src={DARK_GLASS} alt='' />
									<h3>Sugerowane wyszukiwania:</h3>
								</div>
								{posts.map(el => {
									return (
										<li key={el}>
											<button onClick={() => setInputValue(el)}>{el}</button>
										</li>
									)
								})}
							</ul>
						</div>
					)}
				</div>
				<div className={`${styles.inputs} ${styles.inputs__right}`}>
					<input
						type='text'
						placeholder='Lokalizacja'
						onChange={handleCitiesInput}
						onFocus={handleShowCitiesContent}
						onBlur={handleHideCitiesContent}
						value={citiesInputValue}
					/>
					{isCitiesContentShown && cities.length > 0 && (
						<div className={styles.inputs__content}>
							<ul>
								<div className={styles.flex}>
									<img src={DARK_GLASS} alt='' />
									<h3>Miasta: </h3>
								</div>
								{cities.map(el => {
									return (
										<li key={el}>
											<button onClick={() => setCitiesInputValue(el)}>{el}</button>
										</li>
									)
								})}
							</ul>
						</div>
					)}
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
							return <SmallBox key={el} name={el} arrow={false} />
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
								<div key={el.name} className={styles.filterContainer}>
									<FilterBtn
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
