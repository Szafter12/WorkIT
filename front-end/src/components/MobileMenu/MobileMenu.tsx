import styles from './MobileMenu.module.scss'
import { Nav } from '../Nav/Nav'
import { MainButton } from '../MainButton/MainButton'

interface MobileMenuProps {
	isMobileShown: boolean
}

export function MobileMenu({ isMobileShown }: MobileMenuProps) {
	return (
		<div className={`${styles.mobileMenu} ${isMobileShown ? styles.active : ''}`}>
			<div className={styles.mobileMenu__content}>
				<Nav isMobile={true} />
				<div className={styles.loginPrev}>
					<p className={styles.loginPrev__title}>Moje konto</p>
					<MainButton href='/logowanie' fontSize='1.4rem' bgc={true}>
						Zaloguj się
					</MainButton>
					<p>Nie masz jeszcze konta?</p>
					<MainButton href='/rejestracja' fontSize='1.4rem'>
						Zarejestruj się
					</MainButton>
				</div>
			</div>
		</div>
	)
}
