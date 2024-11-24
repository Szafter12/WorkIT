import MainButton from '../MainButton/MainButton'
import styles from './LoginPrev.module.scss'

export default function LoginPrev() {
	return (
		<div className={styles.loginPrev}>
			<p className={styles.main}>Witaj na Work IT!</p>
			<p className={styles.text}>
				Zaloguj się i uzyskaj dostęp do szybkiego aplikowania, zapisanych ofert, zarządzania plikami CV i wielu innych
				funkcji!
			</p>
			<MainButton href='/login' fontSize='clamp(1.4rem,3vw,1.6rem)'>
				Zaloguj się
			</MainButton>
		</div>
	)
}
