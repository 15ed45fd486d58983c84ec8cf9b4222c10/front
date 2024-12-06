import { RegisterForm } from '@features/auth';
import cls from './RegisterPage.module.scss';

export const RegisterPage = () => {
    return (
        <div className={cls.wrapper}>
            <RegisterForm />
        </div>
    );
};
