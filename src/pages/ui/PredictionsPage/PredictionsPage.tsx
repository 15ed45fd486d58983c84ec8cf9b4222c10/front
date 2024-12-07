import { PredictionFilters, PredictionMap } from '@/entities/prediction';
import cls from './PredictionsPage.module.scss';

export const PredictionsPage = () => {
    return (
        <div className={cls.wrapper}>
            <PredictionFilters />
            <PredictionMap />
        </div>
    );
};
