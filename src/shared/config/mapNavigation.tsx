import { ReactNode } from 'react';
import { CamerasIcon } from '@assets/icons/cameras.icon.tsx';
import { TrafficJamIcon } from '@assets/icons/trafficJam.icon.tsx';
import { RepairIcon } from '@assets/icons/repair.icon.tsx';
import { AccidentIcon } from '@assets/icons/accident.icon.tsx';
import { MassEventsIcon } from '@assets/icons/massEvents.icon.tsx';
import { LayerEnum } from '@features/auth';

export const mapNavigation: { label: string; icon: ReactNode; sysName: LayerEnum }[] = [
    {
        label: 'Камеры',
        icon: CamerasIcon,
        sysName: 'camera',
    },
    {
        label: 'Заторы',
        icon: TrafficJamIcon,
        sysName: 'restriction',
    },
    {
        label: 'Ремонты',
        icon: RepairIcon,
        sysName: 'roadwork',
    },
    {
        label: 'Аварии',
        icon: AccidentIcon,
        sysName: 'crash',
    },
    {
        label: 'Массовые мероприятия',
        icon: MassEventsIcon,
        sysName: 'other',
    },
];
