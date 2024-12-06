import { Container } from '@/shared/ui/Container/Container';
import cls from './Navbar.module.scss';
import { Avatar, Button, Link, Paragraph, ThemeSwitcher } from 'daskis-ui-kit';
import { useAuth } from '@/features/auth/store/auth';
import { useUser } from '@/entities/user';

const navigationList = [
    {
        label: 'Карта',
        value: '/map',
    },
];

export const Navbar = () => {
    const isAuth = useAuth((state) => state.isAuth);
    const img = useUser((state) => state.img);
    return (
        <nav className={cls.navbar}>
            <Container className={cls.container}>
                <Paragraph>logo</Paragraph>
                <div className={cls.additional}>
                    <ThemeSwitcher size="small" />
                    {isAuth ? (
                        <Link to="/user">
                            <Avatar src={img ? `${import.meta.env.VITE_SERVER_MEDIA}user/${img}` : ''} size="small" />
                        </Link>
                    ) : (
                        <Link size="h4" to="/auth/login">
                            <Button borderColor="secondary" color="secondary" borderRadius={5} size="small">
                                <Paragraph size="h5" color="white">
                                    Авторизация
                                </Paragraph>
                            </Button>
                        </Link>
                    )}
                </div>
            </Container>
        </nav>
    );
};