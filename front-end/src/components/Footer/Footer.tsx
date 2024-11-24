import styles from './Footer.module.scss'
import { setYear } from '../../utils/setYear'

export function Footer() {
	return (
		<div className={styles.footer}>
			<p>Work IT {setYear()} &copy;</p>
		</div>
	)
}
