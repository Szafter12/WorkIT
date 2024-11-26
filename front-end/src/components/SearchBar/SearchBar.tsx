import { SearchBar__info } from '../SearchBar__info/SearchBar__info'
import styles from './SearchBar.module.scss'
import { SearchBoxSpecializations } from '../../types/SearchBar'
import { MainButton } from '../MainButton/MainButton'

const specializations: SearchBoxSpecializations[] = [
	{
		id: 1,
		name: 'DevOps',
	},
	{
		id: 2,
		name: 'DevOps',
	},
	{
		id: 3,
		name: 'DevOps',
	},
	{
		id: 4,
		name: 'DevOps',
	},
	{
		id: 5,
		name: 'DevOps',
	},
	{
		id: 6,
		name: 'DevOps',
	},
	{
		id: 7,
		name: 'DevOps',
	},
	{
		id: 8,
		name: 'DevOps',
	},
	{
		id: 8,
		name: 'DevOps',
	},
	{
		id: 8,
		name: 'DevOps',
	},
	{
		id: 8,
		name: 'DevOps',
	},
	{
		id: 8,
		name: 'DevOps',
	},
	{
		id: 8,
		name: 'DevOps',
	},
	{
		id: 8,
		name: 'DevOps',
	},
	{
		id: 8,
		name: 'DevOps',
	},
	{
		id: 8,
		name: 'DevOps',
	},
	{
		id: 8,
		name: 'DevOps',
	},
	{
		id: 8,
		name: 'DevOps',
	},
	{
		id: 8,
		name: 'DevOps',
	},
	{
		id: 8,
		name: 'DevOps',
	},
	{
		id: 8,
		name: 'DevOps',
	},
	{
		id: 8,
		name: 'DevOps',
	},
	{
		id: 8,
		name: 'DevOps',
	},
	{
		id: 8,
		name: 'DevOps',
	},
]

export function SearchBar() {
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
