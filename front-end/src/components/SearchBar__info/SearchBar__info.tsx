import styles from './SearchBar__info.module.scss'
import { SmallBox } from '../SmallBox/SmallBox'
import { useState } from 'react'
import { SearchBoxSpecializations, SearchBoxTech } from '../../types/SearchBar'

interface infoProps {
	specializations: SearchBoxSpecializations[]
	tech: SearchBoxTech[]
	toggleSpecializationsCategory?: (category: string) => void
	toggleTechCategory?: (category: string) => void
	activeCategories?: string[]
}

export function SearchBar__info({
	specializations,
	tech,
	toggleSpecializationsCategory,
	toggleTechCategory,
	activeCategories,
}: infoProps) {
	const [visibleSpecializationCount, setVisibleSpecializationCount] = useState<number>(10)
	const [visibleTechCount, setVisibleTechCount] = useState<number>(5)

	function handleShowMoreSpecialization(): void {
		setVisibleSpecializationCount(prev => (prev = specializations.length))
	}

	function handleShowLessSpecialization(): void {
		setVisibleSpecializationCount(prev => (prev = 10))
	}

	function handleShowMoreTech(): void {
		setVisibleTechCount(prev => (prev = tech.length))
	}

	function handleShowLessTech(): void {
		setVisibleTechCount(prev => (prev = 5))
	}

	return (
		<div className={styles.searchBar__info}>
			<h3>Specjalizacje</h3>
			<div className={styles.filters}>
				{specializations.slice(0, visibleSpecializationCount).map(el => {
					return (
						<SmallBox
							activeCategories={activeCategories}
							toggleCategory={toggleSpecializationsCategory}
							arrow={false}
							key={el.specialization_id}
							name={el.specialization}
						/>
					)
				})}
				{visibleSpecializationCount < specializations.length ? (
					<SmallBox name='rozwiń' arrow_pos='down' onClick={handleShowMoreSpecialization} arrow={true} />
				) : (
					<SmallBox name='zwiń' arrow_pos='up' onClick={handleShowLessSpecialization} arrow={true} />
				)}
			</div>
			<h3>Popularne technologie</h3>
			<div className={styles.filters}>
				{tech.slice(0, visibleTechCount).map(el => {
					return (
						<SmallBox
							name={el.ability_name}
							activeCategories={activeCategories}
							toggleCategory={toggleTechCategory}
							arrow={false}
							key={el.ability_id}
						/>
					)
				})}
				{visibleTechCount < tech.length ? (
					<SmallBox name='rozwiń' arrow_pos='down' onClick={handleShowMoreTech} arrow={true} />
				) : (
					<SmallBox name='zwiń' arrow_pos='up' onClick={handleShowLessTech} arrow={true} />
				)}
			</div>
		</div>
	)
}
