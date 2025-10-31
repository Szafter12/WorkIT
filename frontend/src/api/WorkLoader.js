import axiosInstance from "./axiosInstance";

export const WorkLoader = async () => {
    try {
        const res = await axiosInstance.get('/api/posts');
        return res.data
    } catch (error) {
        console.log('Błąd podczas pobierania postów z serwera');
        return [];
    }
}