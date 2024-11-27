import { SearchBar__info } from '../SearchBar__info/SearchBar__info'
import styles from './SearchBar.module.scss'
import { MainButton } from '../MainButton/MainButton'
import { SearchBoxSpecializations, SearchBoxTech } from '../../types/SearchBar'
import GLASS from '../../assets/icons/magnifying-glass.png'
// import ARROW from '../../assets/icons/arrow.png'

interface SearchBarProps {
	specializations: SearchBoxSpecializations[]
	tech: SearchBoxTech[]
}

export function SearchBar({ specializations, tech }: SearchBarProps) {
	return (
		<div className={styles.searchBar}>
			<div className={styles.inputContainer}>
				<input type='text' placeholder='Stanowisko, firma, słowo kluczowe' />
				<input type='text' placeholder='Lokalizacja' />
			</div>
			<SearchBar__info tech={tech} specializations={specializations} />
			<div className={styles.btnContainer}>
				<div>
					
				</div>
				<MainButton icon={GLASS} bgc={true}>
					Szukaj
				</MainButton>
			</div>
		</div>
	)
}
