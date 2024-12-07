import { toolbarNavigation } from '@/shared/config';
import cls from './Toolbar.module.scss';
import { Link } from 'daskis-ui-kit';
import { classNames } from '@/shared/lib';
import { useLocation } from 'react-router-dom';
const Toolbar = () => {
    const { pathname } = useLocation();
    return (
        <div className={cls.wrapper}>
            <ul className={cls.list}>
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
                        <Link color={pathname.includes(item.path) ? 'white' : 'text'} to={item.path}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Toolbar;
