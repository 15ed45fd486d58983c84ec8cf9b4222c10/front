import { Link, Paragraph } from 'daskis-ui-kit';
import cls from './UserNavigation.module.scss';
import { useLocation } from 'react-router-dom';
import { classNames } from '@/shared/lib';
import { useLogout } from '@/features/auth/hooks/useLogout';

type NavigationItem = {
    label: string;
    value: string;
};

const navigationList: NavigationItem[] = [
    {
        label: 'Основная информация',
        value: 'info',
    },
    {
        label: 'Настройки аккаунта',
        value: 'settings',
    },
    {
        label: 'Изменить пароль',
        value: 'change-password',
    },
];

export const UserNavigation = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const section = queryParams.get('section');
    const { mutate: logout } = useLogout();
    return (
        <div className={cls.wrapper}>
            <ul className={cls.list}>
                {navigationList.map((item) => (
                    <li
                        key={item.value}
                        className={classNames(
                            cls.listItem,
                            {
                                [cls.active]: section === item.value,
                            },
                            [],
                        )}
                    >
                        <Link color="text" size="h4" to={`?section=${item.value}`}>
                            {item.label}
                        </Link>
                    </li>
                ))}
                <li onClick={() => logout()} className={cls.listItem}>
                    <Paragraph size="h4">Выйти</Paragraph>
                </li>
            </ul>
        </div>
    );
};
