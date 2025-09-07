import BURGER_MENU from '../../assets/icons/burgerMenu.png'

export function BurgerMenu({ onClick }) {
	return (
		<button onClick={onClick}>
			<img width='30px' src={BURGER_MENU} alt='' />
		</button>
	)
}
