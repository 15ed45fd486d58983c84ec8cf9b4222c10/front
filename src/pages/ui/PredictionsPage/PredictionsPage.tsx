import { PredictionFilters, PredictionMap } from '@/entities/prediction';
import cls from './PredictionsPage.module.scss';
import { Heading } from 'daskis-ui-kit';

export const PredictionsPage = () => {
    return (
        <div className={cls.wrapper}>
            <Heading style={{ fontWeight: 500 }} weight="fontBold">
                Прогнозы
            </Heading>
            <PredictionFilters />
            <PredictionMap />
        </div>
    );
};
