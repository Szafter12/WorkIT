import axiosInstance from './axiosInstance';

export async function loginUser(credentials) {
    const res = await axiosInstance.post('/api/login', credentials);
    if (res.data.access_token) {
        localStorage.setItem('token', res.data.access_token);
    }
    return res.data;
}

export async function registerUser(userData) {
    const res = await axiosInstance.post('/api/register', userData);
    if (res.data.access_token) {
        localStorage.setItem('token', res.data.access_token);
    }
    return res.data;
}