import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@shared/api/axios';
import { IAxiosError } from '@/shared/types/error';
import { GetLayersRequestDto, GetLayersResponseDto } from '@features/auth/types/layers.ts';

export const useLayers = ({ layers, project }: GetLayersRequestDto) => {
    return useQuery<GetLayersResponseDto[], IAxiosError>({
        queryKey: ['layers', layers, project],
        queryFn: async ({ signal }) => {
            return apiClient.post<GetLayersResponseDto[]>('/bff/two-gis', {
                layers,
                project,
            }, {
                signal,
            })
                .then((response) => response.data);
        },
    });
};