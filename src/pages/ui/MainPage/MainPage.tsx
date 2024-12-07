import { YMaps, Map, TrafficControl } from '@pbe/react-yandex-maps';
import { useState, useEffect } from 'react';
import cls from './MainPage.module.scss';
import { Paragraph } from 'daskis-ui-kit';
import { mapNavigation } from '@/shared/config';
import Settings from '@assets/icons/settings.svg';
import { IIncidentCardItemProps, IncidentCardItem, IncidentTypeEnum } from '@/entities/incident';

export const mockIncidents: IIncidentCardItemProps[] = [
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

export const MainPage = () => {
    const [mapDimensions, setMapDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            const width =
                window.innerWidth < 1400 ? window.innerWidth - (20 * 2 + 20 + 470) : 1400 - (20 * 2 + 20 + 270);
            const containerWidth = width; // Фиксированная ширина контейнера с отступами
            const containerHeight = window.innerHeight - (80 + 200); // Высота окна минус фиксированный отступ
            setMapDimensions({
                width: containerWidth,
                height: containerHeight,
            });
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    return (
        <div className={cls.wrapper}>
            <div className={cls.map}>
                <YMaps>
                    <Map
                        width={mapDimensions.width}
                        height={mapDimensions.height}
                        defaultState={{ center: [45.03547, 38.975313], zoom: 13 }}
                    >
                        <TrafficControl />
                    </Map>
                </YMaps>
                <div className={cls.navigation}>
                    <Paragraph className={cls.title} size="h1">
                        Слои
                    </Paragraph>
                    <ul className={cls.list}>
                        {mapNavigation.map((item, index) => (
                            <li className={cls.listItem} key={index}>
                                <item.icon />
                                <Paragraph>{item.label}</Paragraph>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={cls.incidents}>
                <div className={cls.heading}>
                    <Paragraph className={cls.title} size="h1">
                        Новые инциденты
                    </Paragraph>
                    <Settings />
                </div>
                <ul className={cls.list}>
                    {mockIncidents.map((item) => (
                        <IncidentCardItem key={item.id} {...item} />
                    ))}
                </ul>
            </div>
        </div>
    );
};
