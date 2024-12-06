import { Controller, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import cls from './RegisterForm.module.scss';
import { IRegisterRequest } from '../../types';
import { Button, Heading, Input, Paragraph, useTheme } from 'daskis-ui-kit';
import { classNames } from '@shared/lib';
import { Link } from 'daskis-ui-kit';
import { ToastContainer } from 'react-toastify';
import { useRegister } from '../../hooks/useRegister';

export const RegisterForm = () => {
    const {
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm<IRegisterRequest>();
    const { theme } = useTheme();
    const { mutate: register } = useRegister();
    const submit: SubmitHandler<IRegisterRequest> = async (data) => {
        await register(data);
    };

    const errorSubmit: SubmitErrorHandler<IRegisterRequest> = (data) => {
        console.log(data);
    };

    const password = watch('password');

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
            <Heading>Регистрация</Heading>
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
                        name="username"
                        control={control}
                        rules={{
                            required: 'Имя пользователя обязательно',
                            minLength: {
                                value: 3,
                                message: 'Имя пользователя должно содержать как минимум 3 символа',
                            },
                        }}
                        render={({ field }) => (
                            <Input
                                className={classNames(
                                    '',
                                    {
                                        [cls.errorInput]: errors.username !== undefined,
                                    },
                                    [],
                                )}
                                color="secondary"
                                size="small"
                                type="text"
                                placeholder="Имя пользователя"
                                value={field.value}
                                onChange={(value) => field.onChange(value)}
                            />
                        )}
                    />
                    {errors.username && (
                        <Paragraph color="danger" className={cls.errorText} size="h5">
                            {errors.username.message}
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

                <div className={cls.error}>
                    <Controller
                        name="passwordRepeat"
                        control={control}
                        rules={{
                            required: 'Повторите пароль',
                            validate: (value) => value === password || 'Пароли должны совпадать',
                        }}
                        render={({ field }) => (
                            <Input
                                className={classNames(
                                    '',
                                    {
                                        [cls.errorInput]: errors.passwordRepeat !== undefined,
                                    },
                                    [],
                                )}
                                color="secondary"
                                size="small"
                                type="password"
                                placeholder="Повторите пароль"
                                value={field.value}
                                onChange={(value) => field.onChange(value)}
                            />
                        )}
                    />
                    {errors.passwordRepeat && (
                        <Paragraph color="danger" className={cls.errorText} size="h5">
                            {errors.passwordRepeat.message}
                        </Paragraph>
                    )}
                </div>

                <Button borderColor="secondary" color="secondary" type="submit">
                    <Paragraph color="white">Создать аккаунт</Paragraph>
                </Button>
            </form>
            <Paragraph>
                Уже есть аккаунт? <Link to="/auth/login">Войти</Link>
            </Paragraph>
        </div>
    );
};
