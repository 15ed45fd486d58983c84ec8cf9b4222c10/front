import { apiClient } from '@/shared/api/axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

export const useLogout = () => {
    const navigate = useNavigate();
    const setAuth = useAuth((state) => state.setAuth);
    const mutation = useMutation({
        mutationFn: async () => {
            const response = await apiClient.get('/auth/logout');
            return response.data;
        },
        onSuccess: () => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('tokenExpiration');
            setAuth(false);
            navigate('/');
            window.location.reload();
        },
    });
    return mutation;
};
