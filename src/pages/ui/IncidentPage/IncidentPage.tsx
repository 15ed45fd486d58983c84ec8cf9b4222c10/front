import { IIncidentCardItemProps, IncidentCardItem, IncidentTypeEnum } from '@/entities/incident';
import cls from './IncidentPage.module.scss';

export const mockIncidents: IIncidentCardItemProps[] = [
    {
        type: IncidentTypeEnum.Accident,
        id: '1',
        title: 'Пробка на Ленинградском шоссе',
        description: 'Пробка длиной 4 км, движение затруднено.',
        adress: 'Ленинградское шоссе, Москва',
        location: {
            latitude: 55.876,
            longitude: 37.444,
        },
        severity: 7,
        timestamp: '2024-12-06T08:30:00Z',
        status: 'active',
        imageUrl:
            'https://plus.unsplash.com/premium_photo-1664547606209-fb31ec979c85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        onClick: (id) => console.log(`Clicked on incident ${id}`),
        onResolve: (id) => console.log(`Resolved incident ${id}`),
    },
    {
        type: IncidentTypeEnum.Accident,
        id: '2',
        title: 'ДТП на Садовом кольце',
        description: 'Столкновение двух автомобилей, движение частично перекрыто.',
        adress: 'Садовое кольцо, Москва',
        location: {
            latitude: 55.751,
            longitude: 37.621,
        },
        severity: 9,
        timestamp: '2024-12-06T09:15:00Z',
        status: 'active',
        imageUrl:
            'https://plus.unsplash.com/premium_photo-1664547606209-fb31ec979c85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        onClick: (id) => console.log(`Clicked on incident ${id}`),
        onResolve: (id) => console.log(`Resolved incident ${id}`),
    },
    {
        type: IncidentTypeEnum.RoadRepair,
        id: '3',
        title: 'Ремонт дороги на Тверской',
        description: 'Идёт ремонт дорожного покрытия, движение ограничено.',
        adress: 'Тверская улица, Москва',
        location: {
            latitude: 55.759,
            longitude: 37.616,
        },
        severity: 5,
        timestamp: '2024-12-06T10:00:00Z',
        status: 'pending',
        imageUrl:
            'https://plus.unsplash.com/premium_photo-1664547606209-fb31ec979c85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        onClick: (id) => console.log(`Clicked on incident ${id}`),
        onResolve: (id) => console.log(`Resolved incident ${id}`),
    },
    {
        type: IncidentTypeEnum.MassEvent,
        id: '4',
        title: 'Массовое мероприятие у стадиона Лужники',
        description: 'Большое количество людей возле стадиона, возможны затруднения в движении.',
        adress: 'Стадион Лужники, Москва',
        location: {
            latitude: 55.715,
            longitude: 37.553,
        },
        severity: 6,
        timestamp: '2024-12-06T11:45:00Z',
        status: 'active',
        onClick: (id) => console.log(`Clicked on incident ${id}`),
        onResolve: (id) => console.log(`Resolved incident ${id}`),
    },
];

export const IncidentPage = () => {
    return (
        <div className={cls.wrapper}>
            <ul className={cls.list}>
                {mockIncidents.map((item) => (
                    <IncidentCardItem key={item.id} {...item} />
                ))}
            </ul>
        </div>
    );
};
