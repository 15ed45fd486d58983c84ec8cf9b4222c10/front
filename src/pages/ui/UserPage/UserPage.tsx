import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserChange, UserInfo, UserNavigation, useUser } from '@/entities/user';
import cls from './UserPage.module.scss';

export const UserPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const section = queryParams.get('section');
    const user = useUser((state) => state);

    useEffect(() => {
        if (!section) {
            navigate('?section=info', { replace: true });
        }
    }, [section, navigate]);

    return (
        <div className={cls.wrapper}>
            <UserNavigation />
            {section === 'info' && <UserInfo {...user} />}
            {section === 'settings' && <UserChange {...user} />}
            {section === 'change-password' && <div>Изменить пароль</div>}
        </div>
    );
};
