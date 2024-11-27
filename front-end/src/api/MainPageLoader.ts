import axiosInstance from './axiosInstance'

export const MainPageLoader = async (): Promise<any> => {
	try {
		const res = await axiosInstance.get('specializations')
		return res.data
	} catch (error) {
		console.log('Błąd podczas pobierania danych z serwera')
		return []
	}
}
