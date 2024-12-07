import { Line } from '@ant-design/plots';
import cls from './IncidentWeather.module.scss';
import { Paragraph } from 'daskis-ui-kit';

export const IncidentWeather = () => {
    const data = [
        { category: 'Солнечно', section: 'Участок 1', value: 8 },
        { category: 'Дождь', section: 'Участок 1', value: 6 },
        { category: 'Солнечно (ремонт)', section: 'Участок 1', value: 5 },
        { category: 'Дождь (ремонт)', section: 'Участок 1', value: 7 },

        { category: 'Солнечно', section: 'Участок 2', value: 9 },
        { category: 'Дождь', section: 'Участок 2', value: 8 },
        { category: 'Солнечно (ремонт)', section: 'Участок 2', value: 6 },
        { category: 'Дождь (ремонт)', section: 'Участок 2', value: 7 },

        { category: 'Солнечно', section: 'Участок 3', value: 10 },
        { category: 'Дождь', section: 'Участок 3', value: 9 },
        { category: 'Солнечно (ремонт)', section: 'Участок 3', value: 7 },
        { category: 'Дождь (ремонт)', section: 'Участок 3', value: 6 },

        { category: 'Солнечно', section: 'Участок 4', value: 7 },
        { category: 'Дождь', section: 'Участок 4', value: 5 },
        { category: 'Солнечно (ремонт)', section: 'Участок 4', value: 4 },
        { category: 'Дождь (ремонт)', section: 'Участок 4', value: 3 },

        { category: 'Солнечно', section: 'Участок 5', value: 6 },
        { category: 'Дождь', section: 'Участок 5', value: 4 },
        { category: 'Солнечно (ремонт)', section: 'Участок 5', value: 3 },
        { category: 'Дождь (ремонт)', section: 'Участок 5', value: 5 },

        { category: 'Солнечно', section: 'Участок 6', value: 8 },
        { category: 'Дождь', section: 'Участок 6', value: 7 },
        { category: 'Солнечно (ремонт)', section: 'Участок 6', value: 6 },
        { category: 'Дождь (ремонт)', section: 'Участок 6', value: 5 },
    ];

    const config = {
        data,
        xField: 'section',
        height: 300,
        yField: 'value',
        seriesField: 'category',
        colorField: 'category',
        legend: false,
    };

    return (
        <div className={cls.wrapper}>
            <Paragraph className={cls.title} size="h3">
                Влияние погоды и текущих ремонтов на заторы
            </Paragraph>
            <Line {...config} />
        </div>
    );
};
