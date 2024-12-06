import { useMutation } from '@tanstack/react-query';
import { apiClient } from '@shared/api/axios';
import { ILoginRequest, IRegisterRequest, IRegisterResponse } from '../types';
import { IAxiosError } from '@shared/types/error';
import { useCheckAuth } from './useCheckAuth';

export const useRegister = () => {
    const { error, success } = useCheckAuth();

    const mutation = useMutation<IRegisterResponse, IAxiosError, IRegisterRequest>({
        mutationFn: async (data: ILoginRequest) => {
            const response = await apiClient.post('/auth/register', data);
            return response.data;
        },
        onSuccess: (data) => {
            success(data);
        },
        onError: (err) => {
            error(err);
        },
    });

    return mutation;
};
