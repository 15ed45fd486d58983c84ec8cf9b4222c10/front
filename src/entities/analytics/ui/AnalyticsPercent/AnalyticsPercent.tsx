import { Pie } from '@ant-design/plots';
import cls from './AnalyticsPercent.module.scss';
import { IncidentTypeEnum } from '@/entities/incident';
import { Paragraph } from 'daskis-ui-kit';

// Генерация данных с нормальными значениями для Pie chart
const generateIncidentData = () => {
    const incidentTypeMap = {
        [IncidentTypeEnum.Accident]: 'ДТП',
        [IncidentTypeEnum.RoadRepair]: 'Дорожные работы',
        [IncidentTypeEnum.MassEvent]: 'Массовое мероприятие',
        [IncidentTypeEnum.VehicleAnomaly]: 'Аномалии',
        [IncidentTypeEnum.CitizenRequest]: 'Обращение граждан',
        [IncidentTypeEnum.SignalFailure]: 'Сбой в работе светофора',
        [IncidentTypeEnum.Other]: 'Прочее',
    };

    // Статичные значения для каждого типа инцидента (в процентах)
    const staticData = [
        { category: incidentTypeMap[IncidentTypeEnum.Accident], value: 25 },
        { category: incidentTypeMap[IncidentTypeEnum.RoadRepair], value: 15 },
        { category: incidentTypeMap[IncidentTypeEnum.MassEvent], value: 10 },
        { category: incidentTypeMap[IncidentTypeEnum.VehicleAnomaly], value: 20 },
        { category: incidentTypeMap[IncidentTypeEnum.CitizenRequest], value: 10 },
        { category: incidentTypeMap[IncidentTypeEnum.SignalFailure], value: 10 },
        { category: incidentTypeMap[IncidentTypeEnum.Other], value: 10 },
    ];

    return staticData;
};

export const AnalyticsPercent = () => {
    const data = generateIncidentData(); // Получаем нормальные данные инцидентов

    const config = {
        data,
        angleField: 'value', // Поле для значений
        colorField: 'category', // Поле для категорий
        radius: 0.8, // Уменьшаем радиус для лучшего отображения
        label: {
            type: 'inner', // Позиция подписей внутри круговой диаграммы
            content: '{percentage}%', // Показываем процент
        },
        legend: {
            color: {
                title: false,
                position: 'right',
                rowPadding: 5,
            },
        },
    };

    return (
        <div className={cls.wrapper}>
            <Paragraph className={cls.title} size="h3">
                Влияние различных факторов на общую загруженность
            </Paragraph>
            <Pie {...config} />;
        </div>
    );
};
