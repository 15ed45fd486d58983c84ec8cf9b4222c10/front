import { classNames } from '@/shared/lib';
import cls from './Container.module.scss';
import { IContainerProps } from './Container.props';

export const Container = ({ className, children }: IContainerProps) => {
    return <div className={classNames(cls.container, {}, [className])}>{children}</div>;
};
