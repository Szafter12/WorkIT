import Header from '../Header/Header'
import Logo from '../Logo/Logo'
import MainButton from '../MainButton/MainButton'
import Nav from '../Nav/Nav'
import ARROW from '../../assets/icons/arrow.png'

export function Layout() {
	return (
		<Header>
			<Logo />
			<Nav />
			<MainButton icon={ARROW}>Moje Konto</MainButton>
		</Header>
	)
}
