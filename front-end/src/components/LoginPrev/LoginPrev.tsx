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
			<MainButton href='/logowanie' fontSize='1.4rem' bgc={true}>
				Zaloguj się
			</MainButton>
			<p>Nie masz jeszcze konta?</p>
			<MainButton href='/rejestracja' fontSize='1.4rem'>
				Zarejestruj się
			</MainButton>
		</div>
	)
}
