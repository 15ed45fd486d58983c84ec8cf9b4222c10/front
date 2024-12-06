import { LoginForm } from '@/features/auth';
import cls from './LoginPage.module.scss';
export const LoginPage = () => {
    return (
        <div className={cls.wrapper}>
            <LoginForm />
        </div>
    );
};
