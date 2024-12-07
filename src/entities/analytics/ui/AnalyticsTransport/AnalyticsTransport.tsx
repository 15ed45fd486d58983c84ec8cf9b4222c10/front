import { Pie } from '@ant-design/plots';
import cls from './AnalyticsTransport.module.scss';
import { Paragraph } from 'daskis-ui-kit';

export const AnalyticsTransport = () => {
    const data = [
        { category: 'Не опоздал', value: Math.floor(Math.random() * 500) + 500 }, // случайные данные от 500 до 1000
        { category: 'Опоздал', value: Math.floor(Math.random() * 200) + 100 }, // случайные данные от 100 до 300
    ];

    const config = {
        data,
        angleField: 'value', // Поле для значений
        colorField: 'category', // Поле для категорий
        radius: 0.8, // Уменьшаем радиус для лучшего отображения
        label: {
            type: 'inner', // Позиция подписей внутри круговой диаграммы
            content: '{percentage}%', // Показываем процент
        },
        legend: {
            color: {
                title: false,
                position: 'right',
                rowPadding: 5,
            },
        },
    };

    return (
        <div className={cls.wrapper}>
            <Paragraph className={cls.title} size="h3">
                Количество общественного транспорта, не опоздавшего к расписанию за ноябрь
            </Paragraph>
            <Pie {...config} />
        </div>
    );
};
