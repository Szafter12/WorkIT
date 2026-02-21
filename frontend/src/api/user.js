import axiosInstance from './axiosInstance';

export async function getUserProfile() {
    try {
        const res = await axiosInstance.get('/api/me');
        return res.data;
    } catch (err) {
        throw err;
    }
}