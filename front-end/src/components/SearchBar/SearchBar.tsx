import styles from './SearchBar.module.scss'

export function SearchBar() {
	return <div className={styles.searchBar}>
        <div>
            <input type="text" />
            <input type="text" />
        </div>
        <p>Specjalizacje</p>
        <div></div>
        <p>Popularne technologie</p>
    </div>
}
