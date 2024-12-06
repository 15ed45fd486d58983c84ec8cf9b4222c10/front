import { useMutation, useQuery } from '@tanstack/react-query';
import { apiClient } from '@shared/api/axios';
import { IUser, useUser } from '@/entities/user';
import { IAxiosError } from '@/shared/types/error';

export const useMe = () => {
    const query = useQuery<IUser, IAxiosError>({
        queryKey: ['user'],
        queryFn: async () => {
            const response = await apiClient.get('/user');
            return response.data;
        },
    });

    return query;
};

export const useMeMutation = () => {
    const setUser = useUser((state) => state.setUser);
    const mutation = useMutation<IUser, IAxiosError, null>({
        mutationFn: async () => {
            const response = await apiClient.get('/user');
            return response.data;
        },
        onSuccess: (data) => {
            setUser(data);
        },
    });
    return mutation;
};
