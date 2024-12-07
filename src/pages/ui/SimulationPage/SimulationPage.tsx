import { Heading } from 'daskis-ui-kit';
import cls from './SimulationPage.module.scss';
import { SimulationSettings } from '@/entities/simulation/ui';

export const SimulationPage = () => {
    return (
        <div className={cls.wrapper}>
            <Heading className={cls.title}>Симуляция и управление</Heading>
            <SimulationSettings />
        </div>
    );
};
