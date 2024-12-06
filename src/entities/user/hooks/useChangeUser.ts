import { IAxiosError } from '@/shared/types/error';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IUser } from '../types';
import { apiClient } from '@/shared/api/axios';
import { toast } from 'react-toastify';

export const useChangeUser = () => {
    const queryClient = useQueryClient();
    const mutation = useMutation<null, IAxiosError, IUser>({
        mutationKey: ['user'],
        mutationFn: async (data) => {
            const formData = new FormData();
            for (const [key, value] of Object.entries(data)) {
                if (key !== 'id') {
                    formData.append(key, value);
                }
            }
            const response = await apiClient.patch(`/user/change/${data.id}`, formData);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user'] });
            toast.success('Данные изменены');
        },
    });
    return mutation;
};
