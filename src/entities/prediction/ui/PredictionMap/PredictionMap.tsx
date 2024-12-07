import cls from './PredictionMap.module.scss';
import { useEffect, useState } from 'react';
import { YMaps, Map, TrafficControl, Polyline, Placemark } from '@pbe/react-yandex-maps';
import { Paragraph } from 'daskis-ui-kit';

interface RoadPoint {
    lat: number;
    lon: number;
    color: string;
}

// Обновленный массив координат с цветами
const readRoadArr: RoadPoint[] = [
    { lat: 45.040158, lon: 38.976363, color: '#f00' }, // Красный
    { lat: 45.042184, lon: 38.977177, color: '#0f0' }, // Зеленый
    { lat: 45.045696, lon: 38.978362, color: '#f00' }, // Синий
    { lat: 45.046316, lon: 38.978586, color: '#f00' }, // Желтый
    { lat: 45.049473, lon: 38.979702, color: '#f00' }, // Пурпурный
    { lat: 45.053807, lon: 38.981773, color: '#0f0' }, // Голубой
    { lat: 45.058981, lon: 38.984014, color: '#0f0' }, // Черный
    { lat: 45.058831, lon: 38.983113, color: '#0f0' }, // Темно-красный
    { lat: 45.058969, lon: 38.982001, color: '#0f0' }, // Темно-зеленый
    { lat: 45.05882, lon: 38.981826, color: '#0f0' }, // Темно-синий
    { lat: 45.054273, lon: 38.980412, color: '#0f0' }, // Серый
    { lat: 45.053852, lon: 38.980273, color: '#0f0' }, // Оранжевый
    { lat: 45.045799, lon: 38.977699, color: '#0f0' }, // Розовый
    { lat: 45.042309, lon: 38.97647, color: '#0f0' }, // Светло-зеленый
    { lat: 45.040234, lon: 38.975723, color: '#0f0' }, // Светло-синий
];
const publicPlacesArr = [
    {
        lat: 45.03547,
        lon: 38.975313,
        severity: 1,
    },
    {
        lat: 45.039018,
        lon: 38.987221,
        severity: 2,
    },
    {
        lat: 45.029732,
        lon: 38.971374,
        severity: 3,
    },
    {
        lat: 45.052035,
        lon: 38.987668,
        severity: 4,
    },
    {
        lat: 45.048765,
        lon: 38.972065,
        severity: 5,
    },
    {
        lat: 45.033195,
        lon: 38.920602,
        severity: 10,
    },
];

// Создаем массив сегментов с типизацией
interface RoadSegment {
    points: [number[], number[]]; // Пара точек: [lat, lon]
    color: string;
}

const roadSegments: RoadSegment[] = readRoadArr.reduce((segments: RoadSegment[], current, index, array) => {
    if (index < array.length - 1) {
        segments.push({
            points: [
                [current.lat, current.lon], // Текущая точка
                [array[index + 1].lat, array[index + 1].lon], // Следующая точка
            ],
            color: current.color, // Цвет текущей точки
        });
    }
    return segments;
}, []);

export const PredictionMap = () => {
    const [mapDimensions, setMapDimensions] = useState({ width: 0, height: 0 });
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<{ lat: number; lon: number } | null>();
    useEffect(() => {
        const updateDimensions = () => {
            const width =
                window.innerWidth < 1400 ? window.innerWidth - (20 * 2 + 20 + 270) : 1400 - (20 * 2 + 20 + 270);
            const containerWidth = width;
            const containerHeight = window.innerHeight - (80 + 200);
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
            <YMaps>
                <Map
                    width={mapDimensions.width}
                    height={mapDimensions.height}
                    defaultState={{ center: [45.03547, 38.975313], zoom: 13 }}
                >
                    {isOpen && (
                        <div className={cls.info}>
                            <Paragraph>
                                <span>Инцидент</span>: строительство на участке
                            </Paragraph>
                            <Paragraph>
                                <span>Статус инцидента</span>: в процессе устранения{' '}
                            </Paragraph>
                        </div>
                    )}
                    <TrafficControl />

                    {roadSegments.map((segment, index) => (
                        <Polyline
                            key={index}
                            geometry={segment.points} // Пара точек [lat, lon]
                            options={{
                                balloonCloseButton: false,
                                strokeColor: segment.color, // Цвет линии
                                strokeWidth: 4,
                                strokeOpacity: 0.5,
                            }}
                        />
                    ))}
                    {publicPlacesArr.map((item, index) => (
                        <Placemark
                            onClick={() => {
                                setIsOpen((prev) => !prev);
                                setSelected({
                                    lat: item.lat,
                                    lon: item.lon,
                                });
                            }}
                            key={index}
                            geometry={[item.lat, item.lon]}
                            properties={{
                                iconContent: item.severity,
                            }}
                            options={{
                                preset:
                                    isOpen && selected && item.lat === selected.lat
                                        ? 'islands#blueCircleIcon'
                                        : 'islands#blackCircleIcon',
                            }}
                        />
                    ))}
                </Map>
            </YMaps>
        </div>
    );
};
