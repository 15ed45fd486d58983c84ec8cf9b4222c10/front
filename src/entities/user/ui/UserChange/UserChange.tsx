import { Avatar, Input, Paragraph, Button, Textarea, Radio } from 'daskis-ui-kit';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import cls from './UserChange.module.scss';
import { IUserChangeProps } from './UserChange.props';
import { useChangeUser } from '../../hooks/useChangeUser';

export const UserChange = ({ about, city, email, img, sex, username, id }: IUserChangeProps) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IUserChangeProps>({
        defaultValues: { about, city, email, img, sex, username, id },
    });
    const { mutate: update } = useChangeUser();

    const onSubmit: SubmitHandler<IUserChangeProps> = async (data) => {
        await update(data);
    };

    return (
        <form className={cls.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <div className={cls.main}>
                <Controller
                    name="img"
                    control={control}
                    render={({ field }) => (
                        <Avatar
                            edit={true}
                            size="large"
                            src={
                                typeof field.value === 'string' && field.value.length
                                    ? `${import.meta.env.VITE_SERVER_MEDIA}user/${field.value}`
                                    : ''
                            }
                            onChange={(newImage) => {
                                field.onChange(newImage);
                            }}
                        />
                    )}
                />
                <div className={cls.mainInfo}>
                    {/* Username Field */}
                    <div className={cls.error}>
                        <Controller
                            name="username"
                            control={control}
                            rules={{ required: 'Логин обязателен' }}
                            render={({ field }) => (
                                <div className={cls.inputWrapper}>
                                    <Paragraph size="h4">Логин</Paragraph>
                                    <Input
                                        color="secondary"
                                        textSize="h5"
                                        size="small"
                                        value={field.value}
                                        onChange={(value) => field.onChange(value)}
                                        className={errors.username ? cls.errorInput : ''}
                                    />
                                </div>
                            )}
                        />
                        {errors.username && (
                            <Paragraph size="h5" color="danger" className={cls.errorText}>
                                {errors.username.message}
                            </Paragraph>
                        )}
                    </div>

                    {/* Email Field */}
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
                                <div className={cls.inputWrapper}>
                                    <Paragraph size="h4">Почта</Paragraph>
                                    <Input
                                        color="secondary"
                                        textSize="h5"
                                        size="small"
                                        value={field.value}
                                        onChange={(value) => field.onChange(value)}
                                        className={errors.email ? cls.errorInput : ''}
                                    />
                                </div>
                            )}
                        />
                        {errors.email && (
                            <Paragraph size="h5" color="danger" className={cls.errorText}>
                                {errors.email.message}
                            </Paragraph>
                        )}
                    </div>
                </div>
            </div>

            {/* Additional Information Fields */}
            <div className={cls.additional}>
                {/* About Field */}
                <div className={cls.error}>
                    <Controller
                        name="about"
                        control={control}
                        render={({ field }) => (
                            <div className={cls.inputWrapper}>
                                <Paragraph size="h4">О себе</Paragraph>
                                <Textarea
                                    color="secondary"
                                    textSize="h4"
                                    size="small"
                                    maxRows={4}
                                    value={field.value}
                                    onChange={(value) => field.onChange(value)}
                                />
                            </div>
                        )}
                    />
                </div>

                {/* City Field */}
                <div className={cls.error}>
                    <Controller
                        name="city"
                        control={control}
                        render={({ field }) => (
                            <div className={cls.inputWrapper}>
                                <Paragraph size="h4">Город</Paragraph>
                                <Input
                                    color="secondary"
                                    textSize="h4"
                                    size="small"
                                    value={field.value}
                                    onChange={(value) => field.onChange(value)}
                                />
                            </div>
                        )}
                    />
                </div>

                {/* Sex Field (Radio Group) */}
                <div className={cls.error}>
                    <Controller
                        name="sex"
                        control={control}
                        render={({ field }) => (
                            <div className={cls.inputWrapper}>
                                <Paragraph size="h4">Пол</Paragraph>
                                <Radio
                                    color="secondary"
                                    label={<Paragraph>Мужской</Paragraph>}
                                    value="male"
                                    isSelected={field.value === 'male'}
                                    onChange={() => field.onChange('male')}
                                />
                                <Radio
                                    color="secondary"
                                    label={<Paragraph>Женский</Paragraph>}
                                    value="female"
                                    isSelected={field.value === 'female'}
                                    onChange={() => field.onChange('female')}
                                />
                            </div>
                        )}
                    />
                </div>
            </div>

            <Button borderRadius={5} color="secondary" borderColor="secondary" size="small" type="submit">
                <Paragraph color="white" size="h4">
                    Сохранить изменения
                </Paragraph>
            </Button>
        </form>
    );
};
