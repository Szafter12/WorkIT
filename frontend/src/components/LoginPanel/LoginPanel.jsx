import { useEffect, useState } from 'react'
import { MainButton } from '../MainButton/MainButton'
import styles from './LoginPanel.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { getCities } from '../../api/getCities.js'
import { loginUser, registerUser } from '../../api/auth.js'
import { useAuth } from '../../context/AuthContext.jsx'

export function LoginPanel({ register }) {
	const navigate = useNavigate()
	const [cities, setCities] = useState([])

	const [formData, setFormData] = useState({
		name: '',
		surname: '',
		email: '',
		password: '',
		phone: '',
		city_id: '',
		address_line: '',
		date_of_birth: '2000-01-01',
	})

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	useEffect(() => {
		getCities().then(list => setCities(list))
	}, [])

	const { setUser } = useAuth()

	const handleAuth = async () => {
		try {
			let res
			if (register) {
				res = await registerUser({ ...formData, password_confirmation: formData.password })
			} else {
				res = await loginUser({ email: formData.email, password: formData.password })
			}
			setUser(res.user)
			navigate('/profile')
		} catch (err) {
			alert('Błąd logowania')
		}
	}

	return (
		<div className={styles.loginPanel}>
			<p>{register ? 'Zarejestruj się' : 'Zaloguj się do swojego konta'}</p>

			<div className={styles.inputContainer}>
				{register && (
					<>
						<div className={styles.col6}>
							<input name='name' type='text' placeholder='Imię' onChange={handleChange} />
							<input name='surname' type='text' placeholder='Nazwisko' onChange={handleChange} />
						</div>
						<div className={styles.col6}>
							<input name='address_line' type='text' placeholder='Adres' onChange={handleChange} />
							<select name='city_id' onChange={handleChange}>
								<option value=''>Wybierz miasto</option>
								{cities.map(city => (
									<option key={city.id} value={city.id}>
										{city.city}
									</option>
								))}
							</select>
						</div>
						<input name='phone' type='text' placeholder='Telefon (9 cyfr)' onChange={handleChange} />
					</>
				)}

				<input name='email' type='email' placeholder='E-mail' onChange={handleChange} />
				<input name='password' type='password' placeholder='Hasło' onChange={handleChange} />
			</div>

			<MainButton onClick={handleAuth}>{register ? 'Zarejestruj się' : 'Zaloguj'}</MainButton>

			<div className={styles.bottom}>
				<p>
					{register ? 'Posiadasz konto?' : 'Nie posiadasz konta?'}
					<Link to={register ? '/logowanie' : '/rejestracja'}>{register ? ' Zaloguj się' : ' Zarejestruj się'}</Link>
				</p>
			</div>
		</div>
	)
}
