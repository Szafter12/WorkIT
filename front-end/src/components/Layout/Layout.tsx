import styles from './Layout.module.scss'
import { TopBar } from '../TopBar/TopBar'
import { Logo } from '../Logo/Logo'
import { MainButton } from '../MainButton/MainButton'
import { Nav } from '../Nav/Nav'
import { LoginPrev } from '../LoginPrev/LoginPrev'
import ARROW from '../../assets/icons/arrow.png'
import ARROW_UP from '../../assets/icons/arrow-up.png'
import { useState, useEffect } from 'react'
import { Footer } from '../Footer/Footer'
import { LayoutContent } from '../LayoutContent/LayoutContent'
import { Main } from '../Main/Main'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import { MobileMenu } from '../MobileMenu/MobileMenu'

interface LayoutProps {
	children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
	const [isLoginPrevShown, setIsLoginPrevShown] = useState<boolean>(false)
	const [isMobile, setIsMobile] = useState<boolean>(false)
	const [isMobileShown, setIsMobileShown] = useState<boolean>(false)
	const mobileSize = 850

	useEffect(() => {
		let timeoutId: any = null

		const handleResize = () => {
			clearTimeout(timeoutId)
			timeoutId = setTimeout(() => {
				setIsMobile(window.innerWidth < mobileSize)
			}, 150)
		}

		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			clearTimeout(timeoutId)
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	useEffect(() => {
		const preventDefault = (e: any) => e.preventDefault()

		if (isMobileShown && isMobile) {
			document.body.style.overflowY = 'hidden'
			document.documentElement.style.overflowY = 'hidden'
			document.addEventListener('touchmove', preventDefault, { passive: false })
		} else {
			document.body.style.overflowY = 'auto'
			document.documentElement.style.overflowY = 'auto'
			document.removeEventListener('touchmove', preventDefault)
		}

		return () => {
			document.body.style.overflowY = 'auto'
			document.documentElement.style.overflowY = 'auto'
			document.removeEventListener('touchmove', preventDefault)
		}
	}, [])

	const handleLoginPrevShown = () => {
		setIsLoginPrevShown(prevState => !prevState)
	}

	const handleMobileMenu = () => {
		setIsMobileShown(prevState => !prevState)
	}

	return (
		<>
			<LayoutContent>
				<TopBar>
					<Logo />
					{!isMobile && <Nav />}
					{!isMobile && (
						<div className={styles.realtiveBtn}>
							<MainButton icon={isLoginPrevShown ? ARROW_UP : ARROW} onClick={handleLoginPrevShown}>
								Moje Konto
							</MainButton>
							{isLoginPrevShown && <LoginPrev />}
						</div>
					)}
					{isMobile && <BurgerMenu onClick={handleMobileMenu} />}
				</TopBar>
				<Main>{children}</Main>
				<Footer />
				{isMobile && <MobileMenu isMobileShown={isMobileShown} />}
			</LayoutContent>
		</>
	)
}
