import axiosInstance from './axiosInstance'

export const MainPageLoader = async () => {
	try {
		const res = await axiosInstance.get('/api/home')

		return {
			specializations: res.data.specializations,
			tech: res.data.technology
		}
	} catch (error) {
		console.log('Błąd podczas pobierania danych z serwera')
		return []
	}
}
