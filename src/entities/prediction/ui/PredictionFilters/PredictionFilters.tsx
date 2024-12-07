import { SelectOne, SelectMany, Option } from 'daskis-ui-kit';
import cls from './PredictionFilters.module.scss';
import { IncidentTypeEnum } from '@/entities/incident'; // Импортируем типы инцидентов
import { useFilterStore } from '../../store';
import { InputRange } from '@/shared/ui';

const severityOptions: Option[] = [
    { label: '1 - Очень низкий', value: '1' },
    { label: '2 - Низкий', value: '2' },
    { label: '3 - Средний', value: '3' },
    { label: '4 - Высокий', value: '4' },
    { label: '5 - Очень высокий', value: '5' },
];

const statusOptions: Option[] = [
    { label: 'Активен', value: 'active' },
    { label: 'Решён', value: 'resolved' },
    { label: 'В ожидании', value: 'pending' },
];

// Мапа для перевода типа инцидента
const incidentTypeTranslations = new Map<IncidentTypeEnum, string>([
    [IncidentTypeEnum.Accident, 'ДТП'],
    [IncidentTypeEnum.RoadRepair, 'Ремонт дороги'],
    [IncidentTypeEnum.MassEvent, 'Массовое мероприятие'],
    [IncidentTypeEnum.VehicleAnomaly, 'Аномальное поведение транспорта'],
    [IncidentTypeEnum.CitizenRequest, 'Обращение граждан'],
    [IncidentTypeEnum.SignalFailure, 'Сбой в работе светофора'],
    [IncidentTypeEnum.Other, 'Прочее'],
]);

export const PredictionFilters = () => {
    const { severity, time, status, types, setSeverity, setStatus, setTime, setTypes } = useFilterStore();

    const incidentTypeOptions = Object.values(IncidentTypeEnum).map((type) => ({
        label: incidentTypeTranslations.get(type) || type,
        value: type,
    }));

    const handleSeverityChange = (selected: Option | null) => {
        setSeverity(selected ? selected.value : null);
    };

    const handleTimeChange = (time: string) => {
        // Преобразуем строку в число
        setTime(Number(time));
    };

    const handleStatusChange = (selected: Option | null) => {
        setStatus(selected ? selected.value : null);
    };

    const handleTypesChange = (selected: Option[]) => {
        setTypes(selected.map((option) => option.value as IncidentTypeEnum));
    };

    return (
        <div className={cls.wrapper}>
            <div className={cls.selectWrapper}>
                <SelectOne
                    size="small"
                    selected={severity ? { label: `${severity} - уровень критичности`, value: severity } : null}
                    options={severityOptions}
                    placeholder="Выберите уровень критичности"
                    onChange={handleSeverityChange}
                />

                <SelectOne
                    size="small"
                    selected={status ? { label: status, value: status } : null}
                    options={statusOptions}
                    placeholder="Выберите статус инцидента"
                    onChange={handleStatusChange}
                />

                <SelectMany
                    size="small"
                    selected={types.map((type) => ({ label: incidentTypeTranslations.get(type) || type, value: type }))}
                    options={incidentTypeOptions}
                    placeholder="Выберите типы инцидентов"
                    onChange={handleTypesChange}
                />
            </div>
            <InputRange
                value={time ? time : 0}
                onChange={(e) => handleTimeChange(e.target.value)}
                maxValue={23}
                minValue={0}
            />
        </div>
    );
};
