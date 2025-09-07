import { useEffect } from 'react'

export const resize = (mobileSize, setter) => {
	useEffect(() => {
		let timeoutId = null

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
