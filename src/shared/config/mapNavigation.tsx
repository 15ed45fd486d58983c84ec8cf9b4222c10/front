import { ReactNode } from 'react';
import { CamerasIcon } from '@assets/icons/cameras.icon.tsx';
import { TrafficJamIcon } from '@assets/icons/trafficJam.icon.tsx';
import { RepairIcon } from '@assets/icons/repair.icon.tsx';
import { AccidentIcon } from '@assets/icons/accident.icon.tsx';
import { MassEventsIcon } from '@assets/icons/massEvents.icon.tsx';

export const mapNavigation: { label: string; icon: ReactNode }[] = [
    {
        label: 'Камеры',
        icon: CamerasIcon,
    },
    {
        label: 'Заторы',
        icon: TrafficJamIcon,
    },
    {
        label: 'Ремонты',
        icon: RepairIcon,
    },
    {
        label: 'Аварии',
        icon: AccidentIcon,
    },
    {
        label: 'Массовые мероприятия',
        icon: MassEventsIcon,
    },
];
