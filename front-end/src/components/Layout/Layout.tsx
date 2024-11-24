import styles from './Layout.module.scss'
import { Header } from '../Header/Header'
import { Logo } from '../Logo/Logo'
import { MainButton } from '../MainButton/MainButton'
import { Nav } from '../Nav/Nav'
import { LoginPrev } from '../LoginPrev/LoginPrev'
import { Wrapper } from '../Wrapper/Wrapper'
import ARROW from '../../assets/icons/arrow.png'
import ARROW_UP from '../../assets/icons/arrow-up.png'
import { useState } from 'react'

interface LayoutProps {
	children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
	const [isLoginPrevShown, setIsLoginPrevShown] = useState<boolean>(false)

	const handleLoginPrevShown = () => {
		setIsLoginPrevShown(prevState => !prevState)
	}

	return (
		<>
			<Header>
				<Logo />
				<Nav />
				<div className={styles.realtiveBtn}>
					<MainButton icon={isLoginPrevShown ? ARROW_UP : ARROW} onClick={handleLoginPrevShown}>
						Moje Konto
					</MainButton>
					{isLoginPrevShown && <LoginPrev />}
				</div>
			</Header>
			<Wrapper>{children}</Wrapper>
		</>
	)
}
