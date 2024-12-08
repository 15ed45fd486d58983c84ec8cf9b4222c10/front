import { Button, Paragraph } from 'daskis-ui-kit';
import { usePrediction } from '../../store'; // Замените на правильный путь
import { classNames } from '@/shared/lib'; // Импорт для удобного объединения классов
import cls from './PredictionEvents.module.scss';

export const PredictionEvents = () => {
    // Используем состояние из хранилища
    const { events, toggleFilter } = usePrediction();

    // Список типов массовых мероприятий
    const eventTypes = [
        'Спортивные мероприятия',
        'Религиозные мероприятия',
        'Концерты',
        'Фестивали и ярмарки',
        'Праздники',
        'Релиз фильмов и игр',
        'Школьные и вузовские мероприятия',
    ];

    return (
        <div className={cls.modal}>
            <Paragraph size="h1" className={cls.title}>
                Выберите типы массовых мероприятий
            </Paragraph>
            <ul className={cls.filterList}>
                {eventTypes.map((type) => (
                    <li
                        key={type}
                        className={classNames(
                            cls.filterListItem,
                            {
                                [cls.selected]: events.includes(type), // Стилизация выбранных элементов
                            },
                            [],
                        )}
                        onClick={() => toggleFilter('events', type)} // Обработчик клика для изменения состояния
                    >
                        <Paragraph color={events.includes(type) ? 'white' : 'text'} size="h5" className={cls.bold}>
                            {type}
                        </Paragraph>
                    </li>
                ))}
            </ul>

            <Paragraph className={cls.opacity}>*Вы можете выбрать несколько типов мероприятий</Paragraph>
            <Button size="small">
                <Paragraph className={cls.buttonText} color="white">
                    Применить
                </Paragraph>
            </Button>
        </div>
    );
};
