import { IIncidentCardItemProps, IncidentCardItem, IncidentTypeEnum } from '@/entities/incident';
import cls from './IncidentPage.module.scss';
import { Heading, SelectOne } from 'daskis-ui-kit';
import { SelectMany, Option } from 'daskis-ui-kit';
import { useState } from 'react';

// Моковые данные инцидентов
const mockIncidents: IIncidentCardItemProps[] = [
    {
        type: IncidentTypeEnum.Accident,
        id: '1',
        title: 'Пробка на Ленинградском шоссе',
        description: 'Пробка длиной 4 км, движение затруднено.',
        adress: 'Ленинградское шоссе, Москва',
        location: {
            latitude: 55.876,
            longitude: 37.444,
        },
        severity: 7,
        timestamp: '2024-12-06T08:30:00Z',
        status: 'active',
        onClick: (id) => console.log(`Clicked on incident ${id}`),
        onResolve: (id) => console.log(`Resolved incident ${id}`),
    },
    {
        type: IncidentTypeEnum.Accident,
        id: '2',
        title: 'ДТП на Садовом кольце',
        description: 'Столкновение двух автомобилей, движение частично перекрыто.',
        adress: 'Садовое кольцо, Москва',
        location: {
            latitude: 55.751,
            longitude: 37.621,
        },
        severity: 9,
        timestamp: '2024-12-06T09:15:00Z',
        status: 'active',
        onClick: (id) => console.log(`Clicked on incident ${id}`),
        onResolve: (id) => console.log(`Resolved incident ${id}`),
    },
    {
        type: IncidentTypeEnum.RoadRepair,
        id: '3',
        title: 'Ремонт дороги на Тверской',
        description: 'Идёт ремонт дорожного покрытия, движение ограничено.',
        adress: 'Тверская улица, Москва',
        location: {
            latitude: 55.759,
            longitude: 37.616,
        },
        severity: 5,
        timestamp: '2024-12-06T10:00:00Z',
        status: 'pending',
        onClick: (id) => console.log(`Clicked on incident ${id}`),
        onResolve: (id) => console.log(`Resolved incident ${id}`),
    },
    {
        type: IncidentTypeEnum.MassEvent,
        id: '4',
        title: 'Массовое мероприятие у стадиона Лужники',
        description: 'Большое количество людей возле стадиона, возможны затруднения в движении.',
        adress: 'Стадион Лужники, Москва',
        location: {
            latitude: 55.715,
            longitude: 37.553,
        },
        severity: 6,
        timestamp: '2024-12-06T11:45:00Z',
        status: 'active',
        onClick: (id) => console.log(`Clicked on incident ${id}`),
        onResolve: (id) => console.log(`Resolved incident ${id}`),
    },
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

export const IncidentPage = () => {
    const [selectedDate, setSelectedDate] = useState<Option | null>(null);
    const [selectedTypes, setSelectedTypes] = useState<Option[]>([]);
    const [, setIsDateOpen] = useState(false);
    const [, setIsTypeOpen] = useState(false);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | string>('desc'); // Состояние для управления сортировкой

    // Опции для SelectOne (дат)
    const dateOptions: Option[] = [
        {
            label: 'По возрастанию',
            value: 'asc',
        },
        {
            label: 'По убыванию',
            value: 'desc',
        },
    ];

    // Фильтруем инциденты по выбранным типам и дате
    const filteredIncidents = mockIncidents
        .filter((incident) => {
            const isTypeMatch =
                selectedTypes.length === 0 || selectedTypes.some((type) => type.value === incident.type);
            return isTypeMatch;
        })
        .sort((a, b) => {
            const dateA = new Date(a.timestamp);
            const dateB = new Date(b.timestamp);

            // Сортировка по дате
            if (sortOrder === 'asc') {
                return dateA.getTime() - dateB.getTime();
            } else {
                return dateB.getTime() - dateA.getTime();
            }
        });

    // Опции для SelectMany (типы инцидентов)
    const incidentTypeOptions = Object.values(IncidentTypeEnum).map((type) => ({
        label: incidentTypeTranslations.get(type) || type,
        value: type,
    }));

    const handleSelectDateChange = (selected: Option | null) => {
        if (selected) {
            setSelectedDate(selected);
            setSortOrder(selected.value); // Устанавливаем порядок сортировки
            setIsDateOpen(false); // Закрыть SelectOne после выбора
        }
    };

    const handleSelectTypesChange = (selected: Option[]) => {
        setSelectedTypes(selected);
        setIsTypeOpen(false); // Закрыть SelectMany при изменении
    };

    return (
        <div className={cls.wrapper}>
            <Heading style={{ fontWeight: 500 }} weight="fontBold">
                Инциденты
            </Heading>
            <div className={cls.selectWrapper}>
                <SelectOne
                    size="small"
                    selected={selectedDate}
                    options={dateOptions}
                    placeholder="Выберите дату"
                    onChange={handleSelectDateChange}
                    onClose={() => setIsDateOpen(false)}
                />
                <SelectMany
                    size="small"
                    selected={selectedTypes}
                    options={incidentTypeOptions}
                    placeholder="Выберите типы инцидентов"
                    onChange={handleSelectTypesChange}
                    onClose={() => setIsTypeOpen(false)}
                />
            </div>

            <ul className={cls.list}>
                {filteredIncidents.map((item) => (
                    <IncidentCardItem key={item.id} {...item} />
                ))}
            </ul>
        </div>
    );
};
