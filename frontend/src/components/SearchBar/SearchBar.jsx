import { SearchBar__info } from '../SearchBar__info/SearchBar__info'
import styles from './SearchBar.module.scss'
import { MainButton } from '../MainButton/MainButton'
import GLASS from '../../assets/icons/magnifying-glass.png'
import { FilterBtn } from '../FilterBtn/FilterBtn'
import { FilterBox } from '../FilterBox/FilterBox'
import { useState, useEffect } from 'react'
import { resize } from '../../hooks/resize'
import ARROW from '../../assets/icons/arrow.png'
import { FiltersMobile } from '../FiltersMobile/FiltersMobile'
import { SmallBox } from '../SmallBox/SmallBox'
import { useFetchPosts } from '../../hooks/useFetchPosts';
import {LABELS} from '../../constants/labels.js'
import {useNavigate} from "react-router-dom";

export function SearchBar({ specializations, tech, filters }) {
    const navigate = useNavigate()
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

    const { posts, setPosts } = useFetchPosts(techCategories, specializationsCategories, lvlCategories, contractCategories, dimensionCategories, modeCategories);

	const mobileSize = 1000
	let testFun = null
	resize(mobileSize, setIsMobile)

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

	const toggleTechCategory = (id, category) => {
		setTechCategories(prevState => {
			return prevState.includes(id) ? prevState.filter(c => c !== id) : [...prevState, id]
		})
		toggleActiveCategory(category)
	}

	const toggleSpecializationsCategory = (id, category) => {
		setSpecializationsCategories(prevState => {
			return prevState.includes(id) ? prevState.filter(c => c !== id) : [...prevState, id]
		})
		toggleActiveCategory(category)
	}

	const toggleLvlCategory = (id, category) => {
		setLvlCategories(prevState => {
			return prevState.includes(id) ? prevState.filter(c => c !== id) : [...prevState, id]
		})
		toggleActiveCategory(category)
	}

	const toggleContractCategory = (id, category) => {
		setContractCategories(prevState => {
			return prevState.includes(id) ? prevState.filter(c => c !== id) : [...prevState, id]
		})
		toggleActiveCategory(category)
	}

	const toggleDimensionCategory = (id, category) => {
		setDimensionCategories(prevState => {
			return prevState.includes(id) ? prevState.filter(c => c !== id) : [...prevState, id]
		})
		toggleActiveCategory(category)
	}

	const toggleModeCategory = (id, category) => {
		setModeCategories(prevState => {
			return prevState.includes(id) ? prevState.filter(c => c !== id) : [...prevState, id]
		})
		toggleActiveCategory(category)
	}

	const handleFilterMenu = () => {
		setIsFilterMenuShown(true)
	}

	const setFilterFun = (name) => {
		switch (name) {
			case 'level':
				testFun = toggleLvlCategory
				break
			case 'contractType':
				testFun = toggleContractCategory
				break
			case 'workDimension':
				testFun = toggleDimensionCategory
				break
			case 'workMode':
				testFun = toggleModeCategory
				break
		}
	}
    const handleSearch = () => {
        navigate('/praca', {
            state: {
                filters: {
                    tech: techCategories,
                    specializations: specializationsCategories,
                    level: lvlCategories,
                    contract: contractCategories,
                    dimension: dimensionCategories,
                    mode: modeCategories,
                }
            }
        })
    }
	return (
		<div className={styles.searchBar}>
			<div className={styles.inputContainer}>
				<div className={`${styles.inputs} ${styles.inputs__left}`}>
					<input
						type='text'
						placeholder='Stanowisko, firma, słowo kluczowe'
					/>
				</div>
				<div className={`${styles.inputs} ${styles.inputs__right}`}>
					<input
						type='text'
						placeholder='Lokalizacja'
					/>
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
										arrow={currentFilterBox !== el.name}
										onClick={() => handleFilterBox(el.name)}>
										{LABELS[el.name]}
									</FilterBtn>
									{currentFilterBox === el.name && (
										<FilterBox
											activeCategories={activeCategories}
											onChange={testFun}
											filterContent={el.data}
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
                        filters={filters}
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
				<MainButton onClick={handleSearch} icon={GLASS} bgc={true}>
					{posts?.data?.length > 0 && <span className={styles.counter}>{posts.data.length}</span>}
					Szukaj
				</MainButton>
			</div>
		</div>
	)
}
