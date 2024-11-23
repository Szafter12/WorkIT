import Header from '../Header/Header'
import Logo from '../Logo/Logo'
import MainButton from '../MainButton/MainButton'
import Nav from '../Nav/Nav'
import ARROW_WHITE from '../../assets/icons/arrow-white.png'

export function Layout() {
	return (
		<Header>
			<Logo />
			<Nav />
			<MainButton icon={ARROW_WHITE}>Moje Konto</MainButton>
		</Header>
	)
}
