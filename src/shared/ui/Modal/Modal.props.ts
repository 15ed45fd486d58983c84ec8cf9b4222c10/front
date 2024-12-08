import { ReactNode } from 'react';

export interface IModalProps {
    children: ReactNode;
    parentClass: string;
    className?: string;
    isOpen: boolean;
    setIsOpen: (newValue: boolean) => void;
}
