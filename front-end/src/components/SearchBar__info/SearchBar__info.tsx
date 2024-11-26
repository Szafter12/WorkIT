import styles from './SearchBar__info.module.scss'
import { SmallBox } from '../SmallBox/SmallBox'
import { useState } from 'react'
import { SearchBoxSpecializations } from '../../types/SearchBar'

interface infoProps {
	specializations: SearchBoxSpecializations[]
}

export function SearchBar__info({ specializations }: infoProps) {
	const [visibleSpecializationCount, setVisibleSpecializationCount] = useState<number>(specializations.length)
	const [visibleTechCount, setVisibleTechCount] = useState<number>(10)

	function handleShowMoreSpecialization(): void {
		setVisibleSpecializationCount(prev => (prev = specializations.length))
	}

	function handleShowLessSpecialization(): void {
		setVisibleSpecializationCount(prev => (prev = 10))
	}

	function handleShowMoreTech(): void {
		setVisibleTechCount(prev => (prev = specializations.length))
	}

	function handleShowLessTech(): void {
		setVisibleTechCount(prev => (prev = 10))
	}

	return (
		<div className={styles.searchBar__info}>
			<h3>Specjalizacje</h3>
			<div className={styles.filters}>
				{specializations.slice(0, visibleSpecializationCount).map(el => {
					return (
						<SmallBox arrow={false} key={el.id}>
							{el.name}
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
				{specializations.slice(0, visibleTechCount).map(el => {
					return (
						<SmallBox arrow={false} key={el.id}>
							{el.name}
						</SmallBox>
					)
				})}
				{visibleTechCount < specializations.length ? (
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
