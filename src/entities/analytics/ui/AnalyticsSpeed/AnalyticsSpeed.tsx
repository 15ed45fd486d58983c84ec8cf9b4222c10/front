import { Line } from '@ant-design/plots';
import cls from './AnalyticsSpeed.module.scss';
import { Paragraph } from 'daskis-ui-kit';

export const AnalyticsSpeed = () => {
    const data = [
        { category: 'До', month: 'Январь', value: 55 },
        { category: 'После', month: 'Январь', value: 50 },
        { category: 'До', month: 'Февраль', value: 60 },
        { category: 'После', month: 'Февраль', value: 55 },
        { category: 'До', month: 'Март', value: 58 },
        { category: 'После', month: 'Март', value: 52 },
        { category: 'До', month: 'Апрель', value: 62 },
        { category: 'После', month: 'Апрель', value: 58 },
        { category: 'До', month: 'Май', value: 65 },
        { category: 'После', month: 'Май', value: 60 },
        { category: 'До', month: 'Июнь', value: 67 },
        { category: 'После', month: 'Июнь', value: 62 },
        { category: 'До', month: 'Июль', value: 70 },
        { category: 'После', month: 'Июль', value: 65 },
        { category: 'До', month: 'Август', value: 72 },
        { category: 'После', month: 'Август', value: 67 },
        { category: 'До', month: 'Сентябрь', value: 68 },
        { category: 'После', month: 'Сентябрь', value: 60 },
        { category: 'До', month: 'Октябрь', value: 60 },
        { category: 'После', month: 'Октябрь', value: 55 },
        { category: 'До', month: 'Ноябрь', value: 55 },
        { category: 'После', month: 'Ноябрь', value: 50 },
        { category: 'До', month: 'Декабрь', value: 50 },
        { category: 'После', month: 'Декабрь', value: 45 },
    ];

    const config = {
        data,
        xField: 'month',
        height: 300,
        yField: 'value',
        seriesField: 'category',
    };

    return (
        <div className={cls.wrapper}>
            <Paragraph className={cls.title} size="h3">
                Средняя скорость движения на дорогах до и после вмешательства
            </Paragraph>
            <Line {...config} />
        </div>
    );
};
