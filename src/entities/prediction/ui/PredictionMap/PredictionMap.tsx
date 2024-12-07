import { useEffect, useState } from 'react';
import cls from './PredictionMap.module.scss';
import { YMaps, Map, TrafficControl } from '@pbe/react-yandex-maps';

export const PredictionMap = () => {
    const [mapDimensions, setMapDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            const width =
                window.innerWidth < 1400 ? window.innerWidth - (20 * 2 + 20 + 270) : 1400 - (20 * 2 + 20 + 270);
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
        <YMaps>
            <Map
                width={mapDimensions.width}
                height={mapDimensions.height}
                defaultState={{ center: [45.03547, 38.975313], zoom: 13 }}
            >
                <TrafficControl />
            </Map>
        </YMaps>
    );
};
