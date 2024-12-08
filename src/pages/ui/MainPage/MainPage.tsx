import { YMaps, Map, TrafficControl, Placemark } from '@pbe/react-yandex-maps';
import { useState, useEffect, useCallback } from 'react';
import cls from './MainPage.module.scss';
import { Heading, Paragraph } from 'daskis-ui-kit';
import { mapNavigation } from '@/shared/config';
import Settings from '@assets/icons/settings.svg';
import { IncidentTypeEnum } from '@/entities/incident';
import { IIncidentCardItemProps } from '@/entities/incident/ui';
import { IncidentCardItem } from '@/entities/incident/ui/IncidentCardItem/IncidentCardItem';
import { useLayers } from '@features/auth/hooks/useLayers.ts';
import { LayerEnum } from '@features/auth';

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

const dots = {
    [LayerEnum.Camera]: [
        [45.0355, 38.9753],
        [45.0449, 39.0025],
        [45.033, 38.9876],
        [45.04, 38.975],
        [45.0467, 39.0043],
        [45.0415, 38.9783],
        [45.0372, 38.9825],
        [45.0328, 38.9901],
        [45.0364, 39.0072],
        [45.0395, 38.9779],
    ],
    [LayerEnum.Crash]: [
        [45.0295, 38.9769],
        [45.0367, 39.0145],
        [45.0382, 38.9802],
        [45.0418, 39.0033],
        [45.0333, 38.9865],
        [45.0435, 38.9799],
        [45.0358, 38.989],
        [45.037, 38.9967],
        [45.0456, 38.9722],
        [45.0398, 38.9845],
    ],
    [LayerEnum.Roadwork]: [
        [45.0489, 38.9934],
        [45.033, 38.9887],
        [45.0461, 39.001],
        [45.035, 38.9777],
        [45.0423, 38.9809],
        [45.0375, 38.9854],
        [45.0315, 38.9752],
        [45.0388, 38.9912],
        [45.0444, 39.0021],
        [45.041, 38.9733],
    ],
    [LayerEnum.Restriction]: [
        [45.0222, 38.9705],
        [45.039, 39.0],
        [45.0318, 38.979],
        [45.0433, 38.9883],
        [45.0371, 39.0101],
        [45.0325, 38.9933],
        [45.0369, 38.9805],
        [45.0442, 38.9962],
        [45.0386, 38.977],
        [45.0419, 38.9928],
    ],
    [LayerEnum.Comment]: [
        [45.0401, 38.9807],
        [45.0432, 38.9722],
        [45.0335, 38.9777],
        [45.0467, 38.999],
        [45.0378, 38.9894],
        [45.031, 38.9708],
        [45.0429, 39.0048],
        [45.036, 38.986],
        [45.0397, 38.983],
        [45.0354, 38.9763],
    ],
    [LayerEnum.Other]: [
        [45.0378, 38.9833],
        [45.0404, 38.9745],
        [45.0339, 38.9787],
        [45.044, 39.0012],
        [45.0384, 38.9876],
        [45.0322, 38.9953],
        [45.0366, 38.9729],
        [45.0458, 39.0081],
        [45.0413, 38.9857],
        [45.0392, 38.9815],
    ],
};

export const MainPage = () => {
    const [mapDimensions, setMapDimensions] = useState({ width: 0, height: 0 });
    const [layers, setLayers] = useState<LayerEnum[]>([LayerEnum.Camera]);
    const layersData = useLayers({
        layers,
        project: 'krasnodar',
    });

    const includeLayer = useCallback(
        (layer: LayerEnum) => {
            return layers.includes(layer);
        },
        [layers],
    );

    const toggleLayer = useCallback(
        (layer: LayerEnum) => {
            if (includeLayer(layer)) {
                setLayers(layers.filter((layerItem) => layerItem !== layer));
            } else {
                setLayers([...layers, layer]);
            }
        },
        [layers, includeLayer],
    );

    useEffect(() => {
        const updateDimensions = () => {
            const width =
                window.innerWidth < 1400 ? window.innerWidth - (20 * 2 + 20 + 470) : 1400 - (20 * 2 + 20 + 270);
            const containerWidth = width; // Фиксированная ширина контейнера с отступами
            const containerHeight = 600; // Высота окна минус фиксированный отступ
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
            <Heading style={{ fontWeight: 500 }} weight="fontBold">
                Главная
            </Heading>
            <div className={cls.map}>
                <YMaps>
                    <Map
                        width={mapDimensions.width}
                        height={mapDimensions.height}
                        defaultState={{ center: [45.03547, 38.975313], zoom: 13 }}
                    >
                        <TrafficControl />
                        {/* Отображаем маркеры в зависимости от выбранных слоёв */}
                        {layers.map((layer) =>
                            dots[layer]?.map((coordinates, index) => (
                                <Placemark
                                    key={layer + index}
                                    geometry={coordinates}
                                    options={{ preset: 'islands#redDotIcon' }}
                                />
                            )),
                        )}
                    </Map>
                </YMaps>
                <div className={cls.navigation}>
                    <Paragraph className={cls.title} size="h1">
                        Слои
                    </Paragraph>
                    <ul className={cls.list}>
                        {mapNavigation.map((item, index) => (
                            <li
                                className={cls.listItem}
                                key={index}
                                onClick={() => toggleLayer(item.sysName)}
                                data-active={includeLayer(item.sysName)}
                            >
                                {item.icon}
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
