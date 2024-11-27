import { SearchBar__info } from '../SearchBar__info/SearchBar__info'
import styles from './SearchBar.module.scss'
import { MainButton } from '../MainButton/MainButton'
import { SearchBoxSpecializations } from '../../types/SearchBar'

interface SearchBarProps {
	specializations: SearchBoxSpecializations[]
}

export function SearchBar({ specializations }: SearchBarProps) {
	return (
		<div className={styles.searchBar}>
			<div className={styles.inputContainer}>
				<input type='text' placeholder='Stanowisko, firma, słowo kluczowe' />
				<input type='text' placeholder='Lokalizacja' />
			</div>
			<SearchBar__info specializations={specializations} />
			<div className={styles.btnContainer}>
				<MainButton bgc={true}>Szukaj</MainButton>
			</div>
		</div>
	)
}
