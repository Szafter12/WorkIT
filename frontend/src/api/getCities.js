import axiosInstance from './axiosInstance';
export async function getCities() {
    try {
        const res = await axiosInstance.get('/api/cities');
        return res.data.cities;
    } catch (err) {
        console.log('Błąd podczas pobierania danych z serwera.');
        return [];
    }
}