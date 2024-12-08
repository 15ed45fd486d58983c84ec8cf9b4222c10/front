import cls from './PredictionMap.module.scss';
import { useEffect, useMemo, useState } from 'react';
import { YMaps, Map, TrafficControl, Polyline, Placemark, Polygon } from '@pbe/react-yandex-maps';
import { Paragraph } from 'daskis-ui-kit';
import { usePrediction } from '../../store';

interface RoadPoint {
    lat: number;
    lon: number;
    color: string;
}

interface PolygonData {
    coordinates: number[][];
    color: string;
}

// Пример границ Краснодара для генерации случайных координат
const KRASNODAR_BOUNDS = {
    latMin: 45.0,
    latMax: 45.2,
    lonMin: 38.9,
    lonMax: 39.1,
};

const generateRandomPolygon = (): PolygonData => {
    const getRandomCoord = () => [
        Math.random() * (KRASNODAR_BOUNDS.latMax - KRASNODAR_BOUNDS.latMin) + KRASNODAR_BOUNDS.latMin,
        Math.random() * (KRASNODAR_BOUNDS.lonMax - KRASNODAR_BOUNDS.lonMin) + KRASNODAR_BOUNDS.lonMin,
    ];

    const coordinates = [getRandomCoord(), getRandomCoord(), getRandomCoord(), getRandomCoord(), getRandomCoord()];

    return {
        coordinates,
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Случайный цвет
    };
};

export const PredictionMap = () => {
    const [mapDimensions, setMapDimensions] = useState({ width: 0, height: 0 });
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<{ lat: number; lon: number } | null>();
    const [polygons, setPolygons] = useState<PolygonData[]>([]);

    const { build, events, repair, weather } = usePrediction();

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

    useMemo(() => {
        // Генерация полигонов при изменении фильтров
        const newPolygons = [];
        if (build.length > 0) newPolygons.push(generateRandomPolygon());
        if (events.length > 0) newPolygons.push(generateRandomPolygon());
        if (repair.length > 0) newPolygons.push(generateRandomPolygon());
        if (weather.length > 0) newPolygons.push(generateRandomPolygon());
        setPolygons(newPolygons);
    }, [build, events, repair, weather]);

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

                    {/* Отображение полигонов */}
                    {polygons.map((polygon, index) => (
                        <Polygon
                            key={index}
                            geometry={[polygon.coordinates]}
                            options={{
                                fillColor: polygon.color,
                                strokeColor: '#0000FF',
                                opacity: 0.5,
                                strokeWidth: 2,
                                strokeStyle: 'shortdash',
                            }}
                        />
                    ))}
                </Map>
            </YMaps>
        </div>
    );
};
