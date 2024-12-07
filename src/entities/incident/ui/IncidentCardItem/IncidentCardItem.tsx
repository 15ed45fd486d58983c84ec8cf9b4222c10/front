import { Button, Link, Paragraph } from 'daskis-ui-kit';
import cls from './IncidentCardItem.module.scss';
import { IIncidentCardItemProps } from './IncidentCardItem.props';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import localizedFormat from 'dayjs/plugin/localizedFormat';

// Подключаем плагины для работы с часовыми поясами и локализацией
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);

// Подключаем локализацию для России
import 'dayjs/locale/ru';
import { classNames } from '@/shared/lib';
import { IncidentTypeEnum } from '../../types';
dayjs.locale('ru');

const statusTranslations = new Map([
    ['active', 'Активный'],
    ['resolved', 'Решённый'],
    ['pending', 'В ожидании'],
]);

const incidentTypeTranslations = new Map<IncidentTypeEnum, string>([
    [IncidentTypeEnum.Accident, 'ДТП'],
    [IncidentTypeEnum.RoadRepair, 'Дорожные работы'],
    [IncidentTypeEnum.MassEvent, 'Массовое мероприятие'],
    [IncidentTypeEnum.VehicleAnomaly, 'Аномальное поведение транспорта'],
    [IncidentTypeEnum.CitizenRequest, 'Обращение граждан'],
    [IncidentTypeEnum.SignalFailure, 'Сбой в работе светофора'],
    [IncidentTypeEnum.Other, 'Прочее'],
]);

export const IncidentCardItem = ({
    adress,
    id,
    severity,
    status,
    timestamp,
    title,
    type,
    location,
    onClick,
    onResolve,
    description,
}: IIncidentCardItemProps) => {
    // Форматируем дату с учётом часового пояса UTC+3
    const formattedTime = dayjs(timestamp).tz('Europe/Moscow').format('HH:mm'); // Время (чч:мм)
    const formattedDate = dayjs(timestamp).tz('Europe/Moscow').format('LL'); // Дата

    return (
        <li className={cls.wrapper}>
            <div className={cls.mainInfo}>
                <Paragraph size="h1">{title}</Paragraph>
                <Paragraph size="h3">{description}</Paragraph>
                <Link color="link" to={`/map?lat=${location?.latitude}&lon=${location?.longitude}`} size="h3">
                    {adress ? adress : 'Адрес'}
                </Link>
                <ul className={cls.someList}>
                    <li className={cls.someListItem}>
                        <Paragraph
                            className={classNames(
                                cls.status,
                                {
                                    [cls.green]: status === 'resolved',
                                    [cls.orange]: status === 'pending',
                                    [cls.blue]: status === 'active',
                                },
                                [],
                            )}
                            size="h5"
                        >
                            {statusTranslations.get(status)}
                        </Paragraph>
                    </li>
                    <li className={cls.someListItem}>
                        <Paragraph
                            className={classNames(
                                cls.severity,
                                {
                                    [cls.green]: severity < 3, // Низкая критичность
                                    [cls.orange]: severity >= 3 && severity < 6, // Средняя критичность
                                    [cls.red]: severity >= 6,
                                },
                                [],
                            )}
                            size="h5"
                        >
                            {severity < 3
                                ? 'Низкая критичность'
                                : severity < 6
                                  ? 'Средняя критичность'
                                  : 'Высокая критичность'}
                        </Paragraph>
                    </li>
                    <li className={cls.someListItem}>
                        <Paragraph className={cls.type} size="h5">
                            {incidentTypeTranslations.get(type)}
                        </Paragraph>
                    </li>
                </ul>
            </div>
            <div className={cls.someInfo}>
                <Paragraph size="h2">{formattedTime}</Paragraph> {/* Время */}
                <Paragraph size="h4">{formattedDate}</Paragraph> {/* Дата */}
                <Link to={`/incident/${id}`}>
                    <Button size="medium" color="primary" borderColor="primary">
                        <Paragraph size="h4" color="white">
                            Перейти
                        </Paragraph>
                    </Button>
                </Link>
            </div>
        </li>
    );
};
