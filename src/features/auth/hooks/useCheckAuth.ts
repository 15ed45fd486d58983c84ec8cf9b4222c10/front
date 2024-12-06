import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { ILoginResponse, IRegisterResponse } from '../types';
import { toast } from 'react-toastify';
import { IAxiosError } from '@/shared/types/error';
import { parseJwt, saveTokenExpiration } from '../lib';
import { useMeMutation } from './useMe';

export const useCheckAuth = () => {
    const navigate = useNavigate();
    const setAuth = useAuth((state) => state.setAuth);
    const { mutate: getMe } = useMeMutation();

    const success = async ({ accessToken }: ILoginResponse | IRegisterResponse) => {
        localStorage.setItem('accessToken', accessToken);
        setAuth(true);
        const token = parseJwt(accessToken);
        getMe(null);
        saveTokenExpiration(token);
        toast.success('Вы успешно вошли');
        setTimeout(() => {
            navigate('/');
        }, 2000);
    };
    const error = async (error: IAxiosError) => {
        // await logout();
        const message = error.response.data.message;
        toast.error(message);
    };
    return { success, error };
};
