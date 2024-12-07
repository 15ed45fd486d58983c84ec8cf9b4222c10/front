import { Column } from '@ant-design/plots';
import cls from './AnalyticsTraffic.module.scss';
import { Paragraph } from 'daskis-ui-kit';

export const AnalyticsTraffic = () => {
    const data = [
        { type: 'Узел: 1', value: 12 },
        { type: 'Узел: 2', value: 35 },
        { type: 'Узел: 3', value: 27 },
        { type: 'Узел: 4', value: 44 },
        { type: 'Узел: 5', value: 19 },
        { type: 'Узел: 6', value: 8 },
        { type: 'Узел: 7', value: 37 },
        { type: 'Узел: 8', value: 23 },
        { type: 'Узел: 9', value: 41 },
        { type: 'Узел: 10', value: 16 },
    ];

    const config = {
        data,
        height: 300,
        xField: 'type', // Значения по оси X
        yField: 'value', // Значения по оси Y
        legend: false,
        label: {
            text: (d: { value: number }) => d.value,
            textBaseline: 'bottom',
        },
        style: {
            radiusTopLeft: 10,
            radiusTopRight: 10,
        },
    };

    return (
        <div className={cls.wrapper}>
            <Paragraph className={cls.title} size="h3">
                Эффективность переключения сигналов светофора
            </Paragraph>
            <Column {...config} />
        </div>
    );
};
