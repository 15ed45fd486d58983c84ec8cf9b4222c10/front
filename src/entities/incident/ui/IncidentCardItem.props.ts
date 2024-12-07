import { IncidentTypeEnum } from '../types';

export interface IIncidentCardItemProps {
    type: IncidentTypeEnum; // Тип инцидента
    id: string; // Уникальный идентификатор инцидента
    title: string; // Заголовок инцидента
    description: string; // Краткое описание инцидента
    adress: string;
    location?: {
        latitude: number; // Широта места инцидента
        longitude: number; // Долгота места инцидента
    };
    severity: number; // Уровень критичности инцидента (например, от 1 до 10)
    timestamp: string; // Время и дата инцидента в формате ISO
    status: 'active' | 'resolved' | 'pending'; // Статус инцидента
    onClick?: (id: string) => void; // Обработчик нажатия на карточку
    onResolve?: (id: string) => void; // Обработчик для закрытия инцидента
}
