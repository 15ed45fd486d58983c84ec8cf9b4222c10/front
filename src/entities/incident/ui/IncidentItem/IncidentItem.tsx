import cls from './IncidentItem.module.scss';
import { IIncidentItemProps } from './IncidentItem.props';
import { Button, Link, Paragraph } from 'daskis-ui-kit';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import ArrowDown from '@assets/icons/arrow-down.svg';
// Подключаем плагины для работы с часовыми поясами и локализацией
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);

// Подключаем локализацию для России
import 'dayjs/locale/ru';
import { classNames } from '@/shared/lib';
import { IncidentTypeEnum } from '../../types';
import { useState } from 'react';
import { useIncident } from '../../store';
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
export const IncidentItem = ({
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
}: IIncidentItemProps) => {
    // Форматируем дату с учётом часового пояса UTC+3
    const formattedTime = dayjs(timestamp).tz('Europe/Moscow').format('HH:mm'); // Время (чч:мм)
    const formattedDate = dayjs(timestamp).tz('Europe/Moscow').format('LL'); // Дата
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { toggleIsActive, setId, id: itemId, isActive } = useIncident();
    return (
        <li
            className={classNames(
                cls.wrapper,
                {
                    [cls.active]: isActive && id === itemId,
                },
                [],
            )}
        >
            <div className={cls.heading}>
                <div className={cls.mainInfo}>
                    <Paragraph className={cls.title} size="h2">
                        {title}
                    </Paragraph>
                    {/* <Paragraph size="h3">{description}</Paragraph> */}
                    {/* <Link color="link" to={`/map?lat=${location?.latitude}&lon=${location?.longitude}`} size="h3"> */}
                    {/* {adress ? adress : 'Адрес'} */}
                    {/* </Link> */}
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
                    <span
                        onClick={() => {
                            setIsOpen((prev) => !prev);
                            toggleIsActive();
                            setId(id);
                        }}
                        className={cls.icon}
                    >
                        <ArrowDown />
                    </span>
                </div>
            </div>
            {isOpen && (
                <div className={cls.info}>
                    <div className={cls.infoBody}>
                        <Paragraph size="h2" className={cls.title}>
                            Информация о заторе
                        </Paragraph>
                        <ul className={cls.list}>
                            <li className={cls.listItem}>
                                <Paragraph>
                                    <span>Местоположение</span> перекресток улицы Ленина и Пушкина.
                                </Paragraph>
                            </li>
                            <li className={cls.listItem}>
                                <Paragraph>
                                    <span>Причина затора</span> дрожное строительство на участке, сокращение полосы
                                    движения.
                                </Paragraph>
                            </li>
                            <li className={cls.listItem}>
                                <Paragraph>
                                    <span>Продолжительность затора</span> 30 минут.
                                </Paragraph>
                            </li>
                            <li className={cls.listItem}>
                                <Paragraph>
                                    <span>Уровень загруженности</span> средний.
                                </Paragraph>
                            </li>
                            <li className={cls.listItem}>
                                <Paragraph>
                                    <span>Предполагаемое время устранения</span> через 1 час.
                                </Paragraph>
                            </li>
                        </ul>
                    </div>
                    <div className={cls.infoSome}>
                        <Paragraph size="h2" className={cls.title}>
                            Рекомендации
                        </Paragraph>
                        <ul className={cls.list}>
                            <li className={cls.listItem}>
                                <Paragraph>
                                    1. Информирование водителей: Рекомендуется использовать альтернативные маршруты для
                                    избежания заторов.
                                </Paragraph>
                            </li>
                            <li className={cls.listItem}>
                                <Paragraph>
                                    2. Организация дополнительного контроля: Назначить дополнительных сотрудников для
                                    регулирования движения на участке и ускорения проезда.
                                </Paragraph>
                            </li>
                            <li className={cls.listItem}>
                                <Paragraph>
                                    3. Мониторинг ситуации: Провести регулярный мониторинг ситуации и обновлять
                                    информацию о заторе для водителей.
                                </Paragraph>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </li>
    );
};
