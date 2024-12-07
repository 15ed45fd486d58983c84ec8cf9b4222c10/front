import { Line } from '@ant-design/plots';
import cls from './AnalyticsEffect.module.scss';
import { Paragraph } from 'daskis-ui-kit';

export const AnalyticsEffect = () => {
    const data = [
        { category: 'До', month: 'Январь', value: 190 },
        { category: 'После', month: 'Январь', value: 180 },
        { category: 'До', month: 'Февраль', value: 185 },
        { category: 'После', month: 'Февраль', value: 175 },
        { category: 'До', month: 'Март', value: 195 },
        { category: 'После', month: 'Март', value: 185 },
        { category: 'До', month: 'Апрель', value: 200 },
        { category: 'После', month: 'Апрель', value: 190 },
        { category: 'До', month: 'Май', value: 180 },
        { category: 'После', month: 'Май', value: 170 },
        { category: 'До', month: 'Июнь', value: 195 },
        { category: 'После', month: 'Июнь', value: 185 },
        { category: 'До', month: 'Июль', value: 185 },
        { category: 'После', month: 'Июль', value: 175 },
        { category: 'До', month: 'Август', value: 180 },
        { category: 'После', month: 'Август', value: 170 },
        { category: 'До', month: 'Сентябрь', value: 170 },
        { category: 'После', month: 'Сентябрь', value: 160 },
        { category: 'До', month: 'Октябрь', value: 160 },
        { category: 'После', month: 'Октябрь', value: 150 },
        { category: 'До', month: 'Ноябрь', value: 155 },
        { category: 'После', month: 'Ноябрь', value: 145 },
        { category: 'До', month: 'Декабрь', value: 150 },
        { category: 'После', month: 'Декабрь', value: 140 },
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
                Эффективность переключения светофоров
            </Paragraph>
            <Line {...config} />
        </div>
    );
};
