import { useEffect } from 'react'

export const resize = (mobileSize: number, setter: React.Dispatch<React.SetStateAction<boolean>>) => {
	useEffect(() => {
		let timeoutId: any = null

		const handleResize = () => {
			clearTimeout(timeoutId)
			timeoutId = setTimeout(() => {
				setter(window.innerWidth < mobileSize)
			}, 150)
		}

		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			clearTimeout(timeoutId)
			window.removeEventListener('resize', handleResize)
		}
	}, [])
}
