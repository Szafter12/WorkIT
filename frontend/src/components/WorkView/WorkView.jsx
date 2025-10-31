import { SearchBarWork } from '../SearchBarWork/SearchBarWork'
import styles from './WorkView.module.scss'

export default function WorkView() {
	return <div className={styles.workView}>
		<header>
			<h2>Znajdź pracę w IT</h2>
		</header>
		<SearchBarWork />
	</div>
}
