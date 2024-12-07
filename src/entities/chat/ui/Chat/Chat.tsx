import { useEffect, useRef } from 'react';
import { Paragraph } from 'daskis-ui-kit';
import cls from './Chat.module.scss';
import ChatIcon from '@assets/icons/robot.svg';
import { useChat } from '../../store';
import { classNames } from '@/shared/lib';

const messages = [
    {
        message: 'abiba1',
        income: false,
    },
    {
        message: 'abiba2',
        income: true,
    },
    {
        message: 'abiba3',
        income: false,
    },
    {
        message: 'abiba4',
        income: false,
    },
];

export const Chat = () => {
    const { isActive, toggleIsActive } = useChat();

    // Создаем ref для отслеживания кликов вне компонента
    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Функция для обработки кликов по документу
        const handleClickOutside = (event: MouseEvent) => {
            // Проверяем, был ли клик сделан вне компонента чата
            if (chatRef.current && !chatRef.current.contains(event.target as Node) && isActive) {
                toggleIsActive(); // Закрыть чат
            }
        };

        // Добавляем обработчик событий
        document.addEventListener('click', handleClickOutside);

        // Убираем обработчик при размонтировании компонента
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [toggleIsActive]);

    return (
        <div
            ref={chatRef} // Привязываем ref к компоненту
            className={classNames(
                cls.wrapper,
                {
                    [cls.hidden]: !isActive,
                },
                [],
            )}
        >
            <div className={cls.heading}>
                <span className={cls.circle} onClick={toggleIsActive}>
                    <ChatIcon />
                </span>
                <Paragraph color="white">ИИ помощник</Paragraph>
            </div>
            <div className={cls.body}>
                <ul className={cls.list}>
                    {messages.map((item, index) => (
                        <li key={`${item.message} ${index}`} className={cls.listItem}>
                            <Paragraph
                                className={classNames(
                                    cls.message,
                                    {
                                        [cls.income]: item.income,
                                    },
                                    [],
                                )}
                            >
                                {item.message}
                            </Paragraph>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
