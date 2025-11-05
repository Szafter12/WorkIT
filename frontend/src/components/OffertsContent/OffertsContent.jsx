import styles from './OffertsContent.module.scss';
import {OffertsFilterBar} from "../OffertsFilterBar/OffertsFilterBar.jsx";
import {OffertsContainer} from "../OffertsContainer/OffertsContainer.jsx";

export const OffertsContent = () => {
    return <main className={styles.offertsContent}>
        <OffertsFilterBar/>
        <OffertsContainer/>
    </main>
}