import axios from 'axios';
import { QueryClient } from '@tanstack/react-query';

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL as string,
    headers: {
        Authorization: localStorage.getItem('accessToken'),
    },
    withCredentials: false,
});

const refreshClient = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL as string,
    withCredentials: false,
});

const refreshAccessToken = async () => {
    const response = await refreshClient.get('/auth/refresh-tokens');
    const newAccessToken = response.data.accessToken;
    localStorage.setItem('accessToken', newAccessToken);
    return newAccessToken;
};

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const newAccessToken = await refreshAccessToken();
                originalRequest.headers['Authorization'] = newAccessToken;
                return apiClient(originalRequest);
            } catch (refreshError) {
                localStorage.removeItem('accessToken');
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error); // Reject if status is not 401 or retry is already attempted
    },
);

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});
