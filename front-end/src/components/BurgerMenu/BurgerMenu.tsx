import BURGER_MENU from '../../assets/icons/burgerMenu.png'

interface BurgerProps {
	onClick: () => void
}

export function BurgerMenu({ onClick }: BurgerProps) {
	return (
		<button onClick={onClick}>
			<img width='30px' src={BURGER_MENU} alt='' />
		</button>
	)
}
