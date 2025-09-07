import axiosInstance from './axiosInstance'

export const MainPageLoader = async () => {
	try {
		const [specializations, tech] = await Promise.all([axiosInstance.get('specializations'), axiosInstance.get('tech')])
		return {
			specializations: specializations.data,
			tech: tech.data
		}
	} catch (error) {
		console.log('Błąd podczas pobierania danych z serwera')
		return []
	}
}
