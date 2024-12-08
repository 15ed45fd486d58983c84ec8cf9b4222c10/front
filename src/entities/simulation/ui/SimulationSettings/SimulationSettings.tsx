import React from 'react';
import { Button, Heading, Paragraph } from 'daskis-ui-kit';
import cls from './SimulationSettings.module.scss';
import { Slider, Select, MenuItem, TextField, FormControl } from '@mui/material';
import { useSimulationSettingsStore } from '../../store';
import { IncidentTypeEnum, incidentTypeTranslations } from '@/entities/incident';

export const SimulationSettings = () => {
    const {
        trafficDensity,
        setTrafficDensity,
        timeOfDay,
        setTimeOfDay,
        weather,
        setWeather,
        eventParticipants,
        setEventParticipants,
        repairType,
        setRepairType,
        city,
        setCity,
        district,
        setDistrict,
    } = useSimulationSettingsStore();

    const getTrafficDensityLabel = (value: number) => {
        switch (value) {
            case 0:
                return 'Низкая';
            case 1:
                return 'Средняя';
            case 2:
                return 'Высокая';
            default:
                return '';
        }
    };
    const getTimeOfDayLabel = (value: number) => {
        switch (value) {
            case 0:
                return 'Утро';
            case 1:
                return 'День';
            case 2:
                return 'Вечер';
            case 3:
                return 'Ночь';
            default:
                return '';
        }
    };

    return (
        <div className={cls.wrapper}>
            <Heading size="h6" className={cls.title}>
                Настройка симуляции
            </Heading>

            <div className={cls.settings}>
                <FormControl className={cls.formEl} fullWidth margin="normal">
                    <Paragraph>Инцидент</Paragraph>
                    <Select
                        sx={{
                            borderRadius: 2,
                        }}
                        value={weather}
                        onChange={(e) => setWeather(e.target.value)}
                    >
                        <MenuItem value={IncidentTypeEnum.Accident}>
                            {incidentTypeTranslations.get(IncidentTypeEnum.Accident)}
                        </MenuItem>
                        <MenuItem value={IncidentTypeEnum.RoadRepair}>
                            {incidentTypeTranslations.get(IncidentTypeEnum.RoadRepair)}
                        </MenuItem>
                        <MenuItem value={IncidentTypeEnum.MassEvent}>
                            {incidentTypeTranslations.get(IncidentTypeEnum.MassEvent)}
                        </MenuItem>
                        <MenuItem value={IncidentTypeEnum.VehicleAnomaly}>
                            {incidentTypeTranslations.get(IncidentTypeEnum.VehicleAnomaly)}
                        </MenuItem>
                        <MenuItem value={IncidentTypeEnum.CitizenRequest}>
                            {incidentTypeTranslations.get(IncidentTypeEnum.CitizenRequest)}
                        </MenuItem>
                        <MenuItem value={IncidentTypeEnum.SignalFailure}>
                            {incidentTypeTranslations.get(IncidentTypeEnum.SignalFailure)}
                        </MenuItem>
                        <MenuItem value={IncidentTypeEnum.Other}>
                            {incidentTypeTranslations.get(IncidentTypeEnum.Other)}
                        </MenuItem>
                    </Select>
                </FormControl>
                {/* Плотность трафика */}
                <FormControl className={cls.formEl} fullWidth margin="normal">
                    <Paragraph>Плотность трафика</Paragraph>
                    <Slider
                        value={trafficDensity}
                        min={0}
                        max={2}
                        step={1}
                        sx={{
                            color: 'var(--primary)',
                        }}
                        onChange={(e, newValue) => setTrafficDensity(newValue as number)} // Обновление значения
                        valueLabelDisplay="auto"
                        valueLabelFormat={getTrafficDensityLabel} // Отображение значения в виде метки
                    />
                </FormControl>

                {/* Погода */}
                <FormControl className={cls.formEl} fullWidth margin="normal">
                    <Paragraph>Погода</Paragraph>
                    <Select
                        sx={{
                            borderRadius: 2,
                        }}
                        value={weather}
                        onChange={(e) => setWeather(e.target.value)}
                    >
                        <MenuItem value="солнечно">Солнечно</MenuItem>
                        <MenuItem value="дождливо">Дождливо</MenuItem>
                        <MenuItem value="облачно">Облачно</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={cls.formEl} fullWidth margin="normal">
                    <Paragraph>Время суток</Paragraph>
                    <Slider
                        value={timeOfDay}
                        min={0}
                        max={3}
                        step={1}
                        sx={{
                            color: 'var(--primary)',
                        }}
                        onChange={(e, newValue) => setTimeOfDay(newValue as number)} // Обновление значения
                        valueLabelDisplay="auto"
                        valueLabelFormat={getTimeOfDayLabel} // Отображение значения в виде метки
                    />
                </FormControl>

                <FormControl className={cls.formEl} fullWidth margin="normal">
                    <Paragraph>Количество участников массового мероприятия</Paragraph>
                    <TextField
                        sx={{
                            borderRadius: 2,
                        }}
                        type="number"
                        value={eventParticipants}
                        onChange={(e) => setEventParticipants(Number(e.target.value))}
                    />
                </FormControl>

                <FormControl className={cls.formEl} fullWidth margin="normal">
                    <Paragraph>Тип ремонтных работ</Paragraph>
                    <Select
                        sx={{
                            borderRadius: 2,
                        }}
                        value={repairType}
                        onChange={(e) => setRepairType(e.target.value)}
                    >
                        <MenuItem value="Ямочный ремонт">Ямочный ремонт</MenuItem>
                        <MenuItem value="Асфальтирование">Асфальтирование</MenuItem>
                        <MenuItem value="Дренаж">Дренаж</MenuItem>
                        <MenuItem value="Мосты">Мосты</MenuItem>
                        <MenuItem value="Тротуары">Тротуары</MenuItem>
                        <MenuItem value="Капитальный ремонт">Капитальный ремонт</MenuItem>
                        <MenuItem value="Средний ремонт">Средний ремонт</MenuItem>
                        <MenuItem value="Текущий ремонт">Текущий ремонт</MenuItem>
                        <MenuItem value="Ремонт разметки">Ремонт разметки</MenuItem>
                        <MenuItem value="Ремонт знаков">Ремонт знаков</MenuItem>
                    </Select>
                </FormControl>

                {/* Выбор города */}
                <FormControl className={cls.formEl} fullWidth margin="normal">
                    <Paragraph>Город</Paragraph>
                    <Select
                        sx={{
                            borderRadius: 2,
                        }}
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    >
                        <MenuItem value="Краснодар">Краснодар</MenuItem>
                    </Select>
                </FormControl>

                {/* Выбор города */}
                <FormControl className={cls.formEl} fullWidth margin="normal">
                    <Paragraph>Район</Paragraph>
                    <Select
                        sx={{
                            borderRadius: 2,
                        }}
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                    >
                        <MenuItem value="Центральный">Центральный</MenuItem>
                        <MenuItem value="Прикубанский">Прикубанский</MenuItem>
                        <MenuItem value="Карасунский">Карасунский</MenuItem>
                        <MenuItem value="Ленинский">Ленинский</MenuItem>
                        <MenuItem value="Калининский">Калининский</MenuItem>
                        <MenuItem value="Западный">Западный</MenuItem>
                        <MenuItem value="Северный">Северный</MenuItem>
                        <MenuItem value="Юбилейный">Юбилейный</MenuItem>
                        <MenuItem value="ГМР">ГМР</MenuItem>
                        <MenuItem value="Комсомольский">Комсомольский</MenuItem>
                        <MenuItem value="Пашковский">Пашковский</MenuItem>
                    </Select>
                </FormControl>

                {/* Добавление и удаление светофора */}
                <div className={cls.buttons}>
                    <Button disabled borderColor="primary" color="primary">
                        <Paragraph className={cls.title} color="white">
                            Добавить светофор
                        </Paragraph>
                    </Button>
                    <Button disabled borderColor="warning" color="warning">
                        <Paragraph className={cls.title} color="white">
                            Удалить светофор
                        </Paragraph>
                    </Button>
                </div>

                {/* Применить и сбросить */}
                <div className={cls.buttons}>
                    <Button borderColor="primary" color="primary">
                        <Paragraph className={cls.title} color="white">
                            Применить
                        </Paragraph>
                    </Button>
                    <Button borderColor="danger" color="danger">
                        <Paragraph className={cls.title} color="white">
                            Сбросить
                        </Paragraph>
                    </Button>
                </div>
            </div>
        </div>
    );
};
