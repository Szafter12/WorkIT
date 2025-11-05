import {SearchBarWork} from '../SearchBarWork/SearchBarWork'
import styles from './WorkView.module.scss'
import {OffertsContent} from "../OffertsContent/OffertsContent.jsx";

export default function WorkView({posts}) {
    return <div className={styles.workView}>
        <header>
            <h2>Znajdź pracę w IT</h2>
        </header>
        <SearchBarWork/>
        <OffertsContent/>
    </div>
}
