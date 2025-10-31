import styles from './SearchBarWork.module.scss'

export function SearchBarWork() {
	return <div className={styles.searchBarWork}>
        <input type="text" className={styles.searchInput} placeholder='Stanowisko, firma, słowo kluczowe' />
        <input type="text" className={styles.cityInput} placeholder='Lokalizacja' />
        <select id="distance" className={styles.distanceSelect}>
            <option value="0">+0 km</option>
            <option value="10">+10 km</option>
            <option value="20">+20 km</option>
            <option value="50">+50 km</option>
            <option value="100">+100 km</option>
        </select>
        <button className={styles.searchButton}>Szukaj</button>
    </div>
}
