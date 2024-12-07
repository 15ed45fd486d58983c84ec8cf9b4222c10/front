import React, { useState } from 'react';
import { classNames } from '@/shared/lib';
import cls from './InputRange.module.scss';
import { IInputRangeProps } from './InputRange.props';
import { Paragraph } from 'daskis-ui-kit';

export const InputRange = ({
    size = 'medium',
    color = 'primary',
    maxValue,
    minValue,
    className,
    value,
    onChange,
}: IInputRangeProps) => {
    const [currentValue, setCurrentValue] = useState(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value as unknown as number;
        setCurrentValue(newValue);
        if (onChange) {
            onChange(e); // Вызов внешнего onChange, если он передан
        }
    };

    const formatTime = (time: number) => {
        const hours = Math.floor(time);
        const minutes = Math.round((time - hours) * 60);
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    };

    return (
        <div className={cls.rangeWrapper}>
            <Paragraph className={cls.timeLabel}>{formatTime(currentValue)}</Paragraph>
            <input
                type="range"
                className={classNames(
                    cls.range,
                    {
                        [cls[size]]: size,
                        [cls[color]]: color,
                    },
                    [className],
                )}
                value={currentValue}
                onChange={handleChange}
                min={minValue}
                max={maxValue}
            />
        </div>
    );
};
