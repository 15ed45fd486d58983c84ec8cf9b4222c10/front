import { Heading } from 'daskis-ui-kit';
import cls from './SimulationSettings.module.scss';

export const SimulationSettings = () => {
    return (
        <div className={cls.wrapper}>
            <Heading size="h6" className={cls.title}>
                Настройка симуляции
            </Heading>
        </div>
    );
};
