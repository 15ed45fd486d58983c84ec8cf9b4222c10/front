import { Avatar, Paragraph } from 'daskis-ui-kit';
import cls from './UserInfo.module.scss';
import { IUserInfoProps } from './UserInfo.props';
import { useEffect } from 'react';

export const UserInfo = ({ about, city, email, img, sex, username }: IUserInfoProps) => {
    useEffect(() => {
        console.log(img);
    }, [img]);
    return (
        <div className={cls.wrapper}>
            <div className={cls.main}>
                <Avatar edit={false} size="large" src={img ? `${import.meta.env.VITE_SERVER_MEDIA}user/${img}` : ''} />
                <div className={cls.mainInfo}>
                    <Paragraph size="h3">Логин: {username}</Paragraph>
                    <Paragraph size="h3">Почта: {email}</Paragraph>
                </div>
            </div>
            <div className={cls.additional}>
                <div className={cls.info}>
                    <Paragraph size="h3">О себе: {about || 'Не задано'}</Paragraph>
                </div>
                <div className={cls.info}>
                    <Paragraph size="h3">Город: {city || 'Не задано'}</Paragraph>
                </div>
                <div className={cls.info}>
                    <Paragraph size="h3">Пол: {sex || 'Не задано'}</Paragraph>
                </div>
            </div>
        </div>
    );
};
