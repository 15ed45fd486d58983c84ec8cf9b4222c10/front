import { Button, Paragraph } from 'daskis-ui-kit';
import cls from './PredictionWeather.module.scss';
import { usePrediction } from '../../store';
import { classNames } from '@/shared/lib';

export const PredictionWeather = () => {
    const { weather, toggleFilter } = usePrediction();
    const weatherTypes = ['Солнечно', 'Дождливо', 'Облачно', 'Снегопад', 'Туман', 'Гроза', 'Сильный ветер'];

    return (
        <div className={cls.modal}>
            <Paragraph size="h1" className={cls.title}>
                Выберите погодные условия
            </Paragraph>
            <ul className={cls.filterList}>
                {weatherTypes.map((type) => (
                    <li
                        key={type}
                        className={classNames(
                            cls.filterListItem,
                            {
                                [cls.selected]: weather.includes(type),
                            },
                            [],
                        )}
                        onClick={() => toggleFilter('weather', type)}
                    >
                        <Paragraph color={weather.includes(type) ? 'white' : 'text'} size="h5" className={cls.bold}>
                            {type}
                        </Paragraph>
                    </li>
                ))}
            </ul>

            <Paragraph className={cls.opacity}>*Вы можете выбрать несколько погодных условий</Paragraph>
            <Button size="small">
                <Paragraph className={cls.buttonText} color="white">
                    Применить
                </Paragraph>
            </Button>
        </div>
    );
};
