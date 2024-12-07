import { toolbarNavigation } from '@/shared/config';
import cls from './Toolbar.module.scss';
import { Link } from 'daskis-ui-kit';
import { classNames } from '@/shared/lib';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Toolbar = () => {
    const { pathname } = useLocation();
    const [paddingLeft, setPaddingLeft] = useState(0);

    useEffect(() => {
        const updatePadding = () => {
            const containerSize = 1400; // Ширина контейнера
            const windowWidth = window.innerWidth;
            const sidePadding = Math.max((windowWidth - containerSize) / 2); // Минимальный отступ - 20px
            setPaddingLeft(sidePadding);
        };

        updatePadding();
        window.addEventListener('resize', updatePadding);

        return () => {
            window.removeEventListener('resize', updatePadding);
        };
    }, []);

    return (
        <div className={cls.wrapper} style={{ minWidth: 270, paddingLeft: `${paddingLeft}px` }}>
            <ul style={{ minWidth: 270 }} className={cls.list}>
                {toolbarNavigation.map((item) => (
                    <li
                        className={classNames(
                            cls.listItem,
                            {
                                [cls.active]: pathname.includes(item.path),
                            },
                            [],
                        )}
                        key={item.path}
                    >
                        <Link
                            className={cls.bold}
                            color={pathname.includes(item.path) ? 'white' : 'text'}
                            to={item.path}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Toolbar;
