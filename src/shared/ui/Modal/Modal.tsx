import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import cls from './Modal.module.scss';
import { IModalProps } from './Modal.props';
import { classNames } from '@/shared/lib';

export const Modal = ({ children, isOpen, parentClass = 'body', className, setIsOpen }: IModalProps) => {
    // Получаем ссылку на родительский элемент для рендера модального окна
    const modalRoot = document.querySelector(parentClass) as HTMLElement;
    const modalContainer = document.createElement('div');

    useEffect(() => {
        if (!modalRoot) {
            console.error(`Parent element "${parentClass}" not found in the DOM.`);
            return;
        }

        if (isOpen) {
            modalRoot.appendChild(modalContainer);
        }

        // Убираем модальное окно из DOM при размонтировании или закрытии
        return () => {
            if (modalRoot.contains(modalContainer)) {
                modalRoot.removeChild(modalContainer);
            }
        };
    }, [isOpen, modalRoot, modalContainer]);

    if (!isOpen || !modalRoot) return null;

    // Обработка клика по overlay для закрытия модального окна
    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).dataset.modalOverlay) {
            setIsOpen(false);
        }
    };

    return createPortal(
        <div className={cls.overlay} data-modal-overlay onClick={handleOutsideClick}>
            <div className={classNames(cls.container, {}, [className])}>{children}</div>
        </div>,
        modalContainer,
    );
};
