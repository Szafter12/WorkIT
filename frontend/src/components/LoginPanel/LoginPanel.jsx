import { useEffect, useState } from 'react'
import { MainButton } from '../MainButton/MainButton'
import styles from './LoginPanel.module.scss'
import { Link } from 'react-router-dom'
import axiosInstance from '../../api/axiosInstance'

export function LoginPanel({ register }) {
	const [cities, setCities] = useState([])

	const getCities = async () => {
		const res = await axiosInstance.get('cities')
		setCities(prevCities => (prevCities = res.data))
	}

	useEffect(() => {
		getCities()
	}, [])

	console.log(cities)

	if (!register) {
		return (
			<div className={styles.loginPanel}>
				<p>Zaloguj się do swojego konta</p>
				<div className={styles.inputContainer}>
					<input type='email' placeholder='E-mail' />
					<input type='password' placeholder='Hasło' />
				</div>
				<MainButton>Zaloguj</MainButton>
				<div className={styles.bottom}>
					<p>
						Nie posiadasz konta? <Link to={'/rejestracja'}>Zarejestruj się</Link>
					</p>
					<p>
						Jesteś pracodawcą? <Link to={''}>Zobacz ofertę </Link>
					</p>
				</div>
			</div>
		)
	} else {
		return (
			<div className={styles.loginPanel}>
				<p>Zarejestruj się</p>
				<div className={styles.inputContainer}>
					<div className={styles.col6}>
						<input type='text' placeholder='Imię' />
						<input type='text' placeholder='Nazwisko' />
					</div>
					<div className={styles.col6}>
						<input type='text' placeholder='Adres numer domu/mieszkania' />
						<select name='cities' id='cities'>
							<option value='' defaultChecked >
								Wybierz miasto
							</option>
							{cities.map(city => {
								return <option value={city}>{city}</option>
							})}
						</select>
					</div>
					<input type='email' placeholder='E-mail' />
					<input type='password' placeholder='Hasło' />
				</div>
				<MainButton>Zarejestruj się</MainButton>
				<div className={styles.bottom}>
					<p>
						Posiadasz konto? <Link to={'/logowanie'}>Zaloguj się</Link>
					</p>
					<p>
						Jesteś pracodawcą? <Link to={''}>Zobacz ofertę </Link>
					</p>
				</div>
			</div>
		)
	}
}
