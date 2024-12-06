import { useMutation } from '@tanstack/react-query';
import { apiClient } from '@shared/api/axios';
import { ILoginRequest, ILoginResponse } from '../types';
import { IAxiosError } from '@shared/types/error';
import { useCheckAuth } from './useCheckAuth';

export const useLogin = () => {
    const { error, success } = useCheckAuth();
    const mutation = useMutation<ILoginResponse, IAxiosError, ILoginRequest>({
        mutationKey: ['user'],
        mutationFn: async (data: ILoginRequest) => {
            const response = await apiClient.post('/auth/login', data);
            return response.data;
        },
        onSuccess: async (data) => {
            await success(data);
        },
        onError: (err) => {
            error(err);
        },
    });

    return mutation;
};
