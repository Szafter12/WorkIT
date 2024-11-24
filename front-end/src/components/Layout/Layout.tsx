import Header from '../Header/Header'
import Logo from '../Logo/Logo'
import MainButton from '../MainButton/MainButton'
import Nav from '../Nav/Nav'
import ARROW from '../../assets/icons/arrow.png'
import LoginPrev from '../LoginPrev/LoginPrev'
import styles from './Layout.module.scss'

export function Layout() {
	return (
		<Header>
			<Logo />
			<Nav />
			<div className={styles.realtiveBtn}>
				<MainButton icon={ARROW}>Moje Konto</MainButton>
				<LoginPrev />
			</div>
		</Header>
	)
}
