import styles from './SearchBar__info.module.scss'
import { SmallBox } from '../SmallBox/SmallBox'
import { useState } from 'react'
import { SearchBoxSpecializations, SearchBoxTech } from '../../types/SearchBar'

interface infoProps {
	specializations: SearchBoxSpecializations[]
	tech: SearchBoxTech[]
}

export function SearchBar__info({ specializations, tech }: infoProps) {
	const [visibleSpecializationCount, setVisibleSpecializationCount] = useState<number>(specializations.length)
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
						<SmallBox arrow={false} key={el.specialization_id}>
							{el.specialization}
						</SmallBox>
					)
				})}
				{visibleSpecializationCount < specializations.length ? (
					<SmallBox arrow_pos='down' onClick={handleShowMoreSpecialization} arrow={true}>
						rozwiń
					</SmallBox>
				) : (
					<SmallBox arrow_pos='up' onClick={handleShowLessSpecialization} arrow={true}>
						zwiń
					</SmallBox>
				)}
			</div>
			<h3>Popularne technologie</h3>
			<div className={styles.filters}>
				{tech.slice(0, visibleTechCount).map(el => {
					return (
						<SmallBox arrow={false} key={el.ability_id}>
							{el.ability_name}
						</SmallBox>
					)
				})}
				{visibleTechCount < tech.length ? (
					<SmallBox arrow_pos='down' onClick={handleShowMoreTech} arrow={true}>
						rozwiń
					</SmallBox>
				) : (
					<SmallBox arrow_pos='up' onClick={handleShowLessTech} arrow={true}>
						zwiń
					</SmallBox>
				)}
			</div>
		</div>
	)
}
