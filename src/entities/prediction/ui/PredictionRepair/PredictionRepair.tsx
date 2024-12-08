import { Button, Paragraph } from 'daskis-ui-kit';
import { useState } from 'react';
import cls from './PredictionRepair.module.scss';
import { usePrediction } from '../../store';
import { classNames } from '@/shared/lib';

export const PredictionRepair = () => {
    const { repair, toggleFilter } = usePrediction();
    const repairTypes = [
        'Ямочный ремонт дорог',
        'Полная реконструкция дорожного покрытия',
        'Ремонт мостов',
        'Ремонт тоннелей',
        'Обновление разметки',
        'Установка дорожных знаков',
        'Ремонт тротуаров',
    ];

    return (
        <div className={cls.modal}>
            <Paragraph size="h1" className={cls.title}>
                Выберите типы ремонтных работ
            </Paragraph>
            <ul className={cls.filterList}>
                {repairTypes.map((type) => (
                    <li
                        key={type}
                        className={classNames(
                            cls.filterListItem,
                            {
                                [cls.selected]: repair.includes(type),
                            },
                            [],
                        )}
                        onClick={() => toggleFilter('repair', type)}
                    >
                        <Paragraph color={repair.includes(type) ? 'white' : 'text'} size="h5" className={cls.bold}>
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
