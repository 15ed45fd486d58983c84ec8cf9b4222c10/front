import { Bar } from '@ant-design/plots';
import cls from './AnalyticsAmount.module.scss';
import { Paragraph } from 'daskis-ui-kit';

export const AnalyticsAmount = () => {
    const data = [
        // 1 января
        { type: 'Участок: 1', date: '2025-01-01', value: 54 },
        { type: 'Участок: 1', date: '2025-01-01', value: 50 },
        { type: 'Участок: 2', date: '2025-01-01', value: 56 },
        { type: 'Участок: 2', date: '2025-01-01', value: 52 },
        { type: 'Участок: 3', date: '2025-01-01', value: 57 },
        { type: 'Участок: 3', date: '2025-01-01', value: 54 },

        // 2 января
        { type: 'Участок: 1', date: '2025-01-02', value: 59 },
        { type: 'Участок: 1', date: '2025-01-02', value: 56 },
        { type: 'Участок: 2', date: '2025-01-02', value: 62 },
        { type: 'Участок: 2', date: '2025-01-02', value: 58 },
        { type: 'Участок: 3', date: '2025-01-02', value: 64 },
        { type: 'Участок: 3', date: '2025-01-02', value: 61 },

        // 3 января
        { type: 'Участок: 1', date: '2025-01-03', value: 66 },
        { type: 'Участок: 1', date: '2025-01-03', value: 63 },
        { type: 'Участок: 2', date: '2025-01-03', value: 65 },
        { type: 'Участок: 2', date: '2025-01-03', value: 62 },
        { type: 'Участок: 3', date: '2025-01-03', value: 63 },
        { type: 'Участок: 3', date: '2025-01-03', value: 59 },

        // 4 января
        { type: 'Участок: 1', date: '2025-01-04', value: 60 },
        { type: 'Участок: 1', date: '2025-01-04', value: 55 },
        { type: 'Участок: 2', date: '2025-01-04', value: 58 },
        { type: 'Участок: 2', date: '2025-01-04', value: 53 },
        { type: 'Участок: 3', date: '2025-01-04', value: 55 },
        { type: 'Участок: 3', date: '2025-01-04', value: 51 },

        // 5 января
        { type: 'Участок: 1', date: '2025-01-05', value: 58 },
        { type: 'Участок: 1', date: '2025-01-05', value: 53 },
        { type: 'Участок: 2', date: '2025-01-05', value: 52 },
        { type: 'Участок: 2', date: '2025-01-05', value: 49 },
        { type: 'Участок: 3', date: '2025-01-05', value: 57 },
        { type: 'Участок: 3', date: '2025-01-05', value: 55 },
    ];

    const config = {
        data,
        height: 300,
        xField: 'date', // Значения по оси X
        yField: 'value', // Значения по оси Y
        seriesField: 'type', // Разделение по участкам
        colorField: 'type',
        legend: false,
    };

    return (
        <div className={cls.wrapper}>
            <Paragraph className={cls.title} size="h3">
                Количество инцидентов за день
            </Paragraph>
            <Bar {...config} />
        </div>
    );
};
