import cls from './PredictionFilters.module.scss';
import { IncidentTypeEnum } from '@/entities/incident'; // Импортируем типы инцидентов
import FilterIcon from '@assets/icons/filters.svg';
import ArrowDown from '@assets/icons/arrow-down.svg';
import { Button, Heading, Paragraph } from 'daskis-ui-kit';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { Modal } from '@/shared/ui';
import { PredictionEvents } from '../PredictionEvents';
import { PredictionWeather } from '../PredictionWeather';
import { PredictionRepair } from '../PredictionRepair';
import { PredictionBuild } from '../PredictionBuild';

const incidentTypeTranslations = new Map<IncidentTypeEnum, string>([
    [IncidentTypeEnum.Accident, 'ДТП'],
    [IncidentTypeEnum.RoadRepair, 'Ремонт дороги'],
    [IncidentTypeEnum.MassEvent, 'Массовое мероприятие'],
    [IncidentTypeEnum.VehicleAnomaly, 'Аномальное поведение транспорта'],
    [IncidentTypeEnum.CitizenRequest, 'Обращение граждан'],
    [IncidentTypeEnum.SignalFailure, 'Сбой в работе светофора'],
    [IncidentTypeEnum.Other, 'Прочее'],
]);

export const PredictionFilters = () => {
    const [timeRange, setTimeRange] = useState<number>(0); // Стейт для диапазона времени
    const [openModal, setOpenModal] = useState<string | null>(null); // Стейт для текущей открытой модалки

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setTimeRange(newValue as number);
    };

    const openModalHandler = (modalName: string) => {
        setOpenModal(modalName); // Устанавливаем имя модалки для открытия
    };

    const closeModalHandler = () => {
        setOpenModal(null); // Закрываем текущую модалку
    };

    return (
        <div className={cls.wrapper}>
            <ul className={cls.list}>
                <li className={cls.listItem}>
                    <span className={cls.icon}>
                        <FilterIcon />
                    </span>
                </li>
                <li className={cls.listItem} onClick={() => openModalHandler('massEvent')}>
                    <Paragraph size="h4" className={cls.title}>
                        Массовые мероприятия
                        <ArrowDown />
                    </Paragraph>
                </li>
                <li className={cls.listItem} onClick={() => openModalHandler('weatherConditions')}>
                    <Paragraph size="h4" className={cls.title}>
                        Погодные условия
                        <ArrowDown />
                    </Paragraph>
                </li>
                <li className={cls.listItem} onClick={() => openModalHandler('roadRepairs')}>
                    <Paragraph size="h4" className={cls.title}>
                        Ремонтные работы
                        <ArrowDown />
                    </Paragraph>
                </li>
                <li className={cls.listItem} onClick={() => openModalHandler('construction')}>
                    <Paragraph size="h4" className={cls.title}>
                        Строительство новых объектов инфраструктуры
                        <ArrowDown />
                    </Paragraph>
                </li>
            </ul>
            <Slider
                value={timeRange}
                onChange={handleSliderChange}
                min={0}
                max={23}
                valueLabelDisplay="auto"
                valueLabelFormat={(item) => `${item}:00`}
                sx={{
                    color: 'var(--primary)',
                }}
            />
            {/* Модалки */}
            <Modal
                isOpen={openModal === 'massEvent'}
                className={cls.modal}
                setIsOpen={closeModalHandler}
                parentClass=".app"
            >
                <PredictionEvents />
            </Modal>
            <Modal
                className={cls.modal}
                isOpen={openModal === 'weatherConditions'}
                setIsOpen={closeModalHandler}
                parentClass=".app"
            >
                <PredictionWeather />
            </Modal>
            <Modal
                className={cls.modal}
                isOpen={openModal === 'roadRepairs'}
                setIsOpen={closeModalHandler}
                parentClass=".app"
            >
                <PredictionRepair />
            </Modal>
            <Modal
                className={cls.modal}
                isOpen={openModal === 'construction'}
                setIsOpen={closeModalHandler}
                parentClass=".app"
            >
                <PredictionBuild />
            </Modal>
        </div>
    );
};
