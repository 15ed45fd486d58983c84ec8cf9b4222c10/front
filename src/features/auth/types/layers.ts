export enum LayerEnum {
    Camera = 'camera',
    Crash = 'crash',
    Roadwork = 'roadwork',
    Restriction = 'restriction',
    Comment = 'comment',
    Other = 'other',
}

export interface GetLayersRequestDto {
    layers: LayerEnum[];
    project: string;
}

export interface GetLayersResponseDto {
    id: string;
    type: LayerEnum;
    road: number;
    rate: number;
    location: {
        type: string;
        coordinates: [number, number];
        height: number;
    }
}