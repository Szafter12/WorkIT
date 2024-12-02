import { MainButton } from '../MainButton/MainButton'
import styles from './LoginPanel.module.scss'
import { Link } from 'react-router-dom'

export function LoginPanel() {
	return (
		<div className={styles.loginPanel}>
			<p>Zaloguj się do swojego konta</p>
			<div className={styles.inputContainer}>
				<input type='email' />
				<input type='password' />
			</div>
			<MainButton>Zaloguj</MainButton>
			<div className={styles.bottom}>
				<p>
					Nie posiadasz konta? <Link to={''}>Zarejestruj się</Link>
				</p>
				<p>
					Jesteś pracodawcą? <Link to={''}>Zobacz ofertę </Link>
				</p>
			</div>
		</div>
	)
}
