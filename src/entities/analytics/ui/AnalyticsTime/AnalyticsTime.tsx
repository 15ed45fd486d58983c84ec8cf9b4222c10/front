import { Bar, Line } from '@ant-design/plots';
import cls from './AnalyticsTime.module.scss';
import { Paragraph } from 'daskis-ui-kit';

export const AnalyticsTime = () => {
    const data = [
        { value: 54, time: '1 день' },
        { value: 55, time: '1 месяц' }, // После месяца
        { value: 52, time: '2 месяца' }, // После двух месяцев
        { value: 53, time: '3 месяца' }, // После трех месяцев
        { value: 51, time: '6 месяцев' }, // Полгода
        { value: 50, time: '1 год' }, // Год
    ];

    const config = {
        data,
        height: 300,
        xField: 'time', // Значения по оси X
        yField: 'value', // Значения по оси Y
        legend: false,
    };

    return (
        <div className={cls.wrapper}>
            <Paragraph className={cls.title} size="h3">
                Среднее время устранения заторов
            </Paragraph>
            <Line {...config} />
        </div>
    );
};
