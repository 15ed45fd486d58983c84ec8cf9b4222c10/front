import { Line } from '@ant-design/plots';
import cls from './AnalyticsCount.module.scss';
import { Paragraph } from 'daskis-ui-kit';

export const AnalyticsCount = () => {
    const data = [
        { category: 'До', month: 'Январь', value: 54 },
        { category: 'После', month: 'Январь', value: 50 },
        { category: 'До', month: 'Февраль', value: 56 },
        { category: 'После', month: 'Февраль', value: 52 },
        { category: 'До', month: 'Март', value: 57 },
        { category: 'После', month: 'Март', value: 54 },
        { category: 'До', month: 'Апрель', value: 59 },
        { category: 'После', month: 'Апрель', value: 56 },
        { category: 'До', month: 'Май', value: 62 },
        { category: 'После', month: 'Май', value: 58 },
        { category: 'До', month: 'Июнь', value: 64 },
        { category: 'После', month: 'Июнь', value: 61 },
        { category: 'До', month: 'Июль', value: 66 },
        { category: 'После', month: 'Июль', value: 63 },
        { category: 'До', month: 'Август', value: 65 },
        { category: 'После', month: 'Август', value: 62 },
        { category: 'До', month: 'Сентябрь', value: 63 },
        { category: 'После', month: 'Сентябрь', value: 59 },
        { category: 'До', month: 'Октябрь', value: 60 },
        { category: 'После', month: 'Октябрь', value: 55 },
        { category: 'До', month: 'Ноябрь', value: 58 },
        { category: 'После', month: 'Ноябрь', value: 53 },
        { category: 'До', month: 'Декабрь', value: 55 },
        { category: 'После', month: 'Декабрь', value: 51 },
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
                Количество инцидентов до и после действий
            </Paragraph>
            <Line {...config} />
        </div>
    );
};
