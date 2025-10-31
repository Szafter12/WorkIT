import axiosInstance from "./axiosInstance";

export const WorkLoader = async () => {
    try {
        const res = await axiosInstance.get('/api/posts');
        return res.data
    } catch (error) {
        const message = "Wystąpił błąd podczas ładowania ofert pracy.";
        return { success: false, message }
    }
}