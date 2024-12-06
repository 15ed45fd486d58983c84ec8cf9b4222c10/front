import { Controller, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import cls from './LoginForm.module.scss';
import { ILoginRequest } from '../../types';
import { Button, Heading, Input, Paragraph, useTheme } from 'daskis-ui-kit';
import { classNames } from '@/shared/lib';
import { Link } from 'daskis-ui-kit';
import { ToastContainer } from 'react-toastify';
import { useLogin } from '../../hooks/useLogin';
import Yandex from '@assets/icons/yandex.svg';
import Google from '@assets/icons/google.svg';
import Vk from '@assets/icons/vk.svg';

export const LoginForm = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<ILoginRequest>();
    const { theme } = useTheme();
    const { mutate: login } = useLogin();
    const submit: SubmitHandler<ILoginRequest> = async (data) => {
        await login(data);
    };

    const errorSubmit: SubmitErrorHandler<ILoginRequest> = (data) => {
        console.log(data);
    };

    return (
        <div className={cls.wrapper}>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={theme}
            />
            <Heading>Авторизация</Heading>
            <form className={cls.form} onSubmit={handleSubmit(submit, errorSubmit)}>
                <div className={cls.error}>
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: 'Почта обязательна',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Введите корректный адрес электронной почты',
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                className={classNames(
                                    '',
                                    {
                                        [cls.errorInput]: errors.email !== undefined,
                                    },
                                    [],
                                )}
                                color="secondary"
                                size="small"
                                type="text"
                                placeholder="Почта"
                                value={field.value}
                                onChange={(value) => field.onChange(value)}
                            />
                        )}
                    />
                    {errors.email && (
                        <Paragraph color="danger" className={cls.errorText} size="h5">
                            {errors.email.message}
                        </Paragraph>
                    )}
                </div>

                <div className={cls.error}>
                    <Controller
                        name="password"
                        control={control}
                        rules={{
                            required: 'Пароль обязателен',
                            minLength: {
                                value: 6,
                                message: 'Пароль должен содержать как минимум 6 символов',
                            },
                            maxLength: {
                                value: 20,
                                message: 'Пароль должен содержать не более 20 символов',
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                className={classNames(
                                    '',
                                    {
                                        [cls.errorInput]: errors.password !== undefined,
                                    },
                                    [],
                                )}
                                color="secondary"
                                size="small"
                                type="password"
                                placeholder="Пароль"
                                value={field.value}
                                onChange={(value) => field.onChange(value)}
                            />
                        )}
                    />
                    {errors.password && (
                        <Paragraph color="danger" className={cls.errorText} size="h5">
                            {errors.password.message}
                        </Paragraph>
                    )}
                </div>

                <Button borderColor="secondary" color="secondary" type="submit">
                    <Paragraph color="white">Войти</Paragraph>
                </Button>
            </form>
            <Paragraph>
                Нет аккаунта?{' '}
                <Link color="link" to="/auth/register">
                    Создать
                </Link>
            </Paragraph>
        </div>
    );
};
