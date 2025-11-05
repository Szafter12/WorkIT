import styles from './SearchBarWork.module.scss'
import {MainButton} from "../MainButton/MainButton.jsx";


export function SearchBarWork() {
    return <div className={styles.searchBarWork}>
        <input type="text" className={styles.searchInput} placeholder='Stanowisko, firma, słowo kluczowe'/>
        <input type="text" className={styles.cityInput} placeholder='Lokalizacja'/>
        <MainButton bgc={true}>Szukaj</MainButton>
    </div>
}
