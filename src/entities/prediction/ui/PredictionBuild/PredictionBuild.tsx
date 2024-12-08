import { Button, Paragraph } from 'daskis-ui-kit';
import { useState } from 'react';
import cls from './PredictionBuild.module.scss';
import { usePrediction } from '../../store';
import { classNames } from '@/shared/lib';

export const PredictionBuild = () => {
    // Состояние для выбранных типов строительства
    const { toggleFilter, build } = usePrediction();
    // Типы строительных работ
    const buildTypes = [
        'Строительство жилых комплексов',
        'Прокладка дорог',
        'Реконструкция зданий',
        'Возведение мостов',
        'Развитие транспортной инфраструктуры',
        'Благоустройство парков и зон отдыха',
        'Строительство промышленных объектов',
    ];

    // Обработчик клика по пункту

    return (
        <div className={cls.modal}>
            <Paragraph size="h1" className={cls.title}>
                Выберите типы строительных работ
            </Paragraph>
            <ul className={cls.filterList}>
                {buildTypes.map((type) => (
                    <li
                        key={type}
                        className={classNames(
                            cls.filterListItem,
                            {
                                [cls.selected]: build.includes(type),
                            },
                            [],
                        )}
                        onClick={() => toggleFilter('build', type)}
                    >
                        <Paragraph color={build.includes(type) ? 'white' : 'text'} size="h5" className={cls.bold}>
                            {type}
                        </Paragraph>
                    </li>
                ))}
            </ul>

            <Paragraph className={cls.opacity}>*Вы можете выбрать несколько типов работ</Paragraph>
            <Button size="small">
                <Paragraph className={cls.buttonText} color="white">
                    Применить
                </Paragraph>
            </Button>
        </div>
    );
};
