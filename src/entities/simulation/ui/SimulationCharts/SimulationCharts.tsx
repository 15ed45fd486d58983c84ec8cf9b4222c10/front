import { Heading, Modal } from 'daskis-ui-kit';
import cls from './SimulationCharts.module.scss';
import { useState } from 'react';
export const SimulationCharts = () => {
    const [simulationOpen, setSimulationOpen] = useState<boolean>(false);
    const [optimalOpen, setOptimalOpen] = useState<boolean>(false);
    return (
        <div className={cls.wrapper}>
            <div className={cls.chart}>
                <Heading size="h6" className={cls.title}>
                    Карта симуляции заторов
                </Heading>
                <img onClick={() => setSimulationOpen(true)} src="/img.png" alt="" />
            </div>
            <div className={cls.chart}>
                <Heading size="h6" className={cls.title}>
                    Оптимальный вариант решения
                </Heading>
                <img onClick={() => setOptimalOpen(true)} src="/img.png" alt="" />
            </div>
            <Modal className="modal" isOpen={simulationOpen} setOpen={setSimulationOpen}>
                <img src="/img.png" alt="" />
            </Modal>
            <Modal className="modal" isOpen={optimalOpen} setOpen={setOptimalOpen}>
                <img src="/img.png" alt="" />
            </Modal>
        </div>
    );
};
