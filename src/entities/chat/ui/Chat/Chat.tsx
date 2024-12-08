import { useEffect, useRef, useState } from 'react';
import { Input, Paragraph } from 'daskis-ui-kit';
import cls from './Chat.module.scss';
import ChatIcon from '@assets/icons/robot.svg';
import { useChat } from '../../store';
import { classNames } from '@/shared/lib';
import ArrowIcon from '@assets/icons/arrow-up.svg';

export const Chat = () => {
    const { isActive, toggleIsActive } = useChat();
    const [messages, setMessages] = useState([
        {
            message:
                'Добро пожаловать в чатбот! Я создан для помощи в управлении дорожным движением и минимизации пробок. Моя миссия - обеспечить безопасность на дорогах, анализируя данные и предсказывая возможные инциденты. ',
            income: false,
        },
        {
            message: 'Какова текущая вероятность ДТП на участке А и каковы прогнозируемые времена устранения затора?',
            income: true,
        },
    ]);
    const [value, setValue] = useState<string>('');
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
                        <li
                            key={`${item.message} ${index}`}
                            className={classNames(
                                cls.listItem,
                                {
                                    [cls.income]: item.income,
                                },
                                [],
                            )}
                        >
                            <Paragraph color={item.income ? 'white' : 'text'} size="h5">
                                {item.message}
                            </Paragraph>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={cls.inputWrapper}>
                <Input
                    value={value}
                    onChange={(value) => setValue(value)}
                    size="small"
                    placeholder="Напишите сообщение"
                    className={cls.input}
                />
                <span
                    onClick={() => {
                        setValue('');
                        setMessages((prev) => [
                            ...prev,
                            {
                                message: value,
                                income: true,
                            },
                        ]);
                    }}
                    className={cls.send}
                >
                    <ArrowIcon />
                </span>
            </div>
        </div>
    );
};
