import { Link, Paragraph } from 'daskis-ui-kit';
import cls from './IncidentCardItem.module.scss';
import { IIncidentCardItemProps } from './IncidentCardItem.props';
import { useNavigate } from 'react-router-dom';
export const IncidentCardItem = ({
    adress,
    imageUrl,
    id,
    severity,
    status,
    timestamp,
    title,
    type,
    location,
    onClick,
    onResolve,
    description,
}: IIncidentCardItemProps) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        if (location) {
            navigate(`/map?lat=${location.latitude}&lon=${location.longitude}`);
        }
    };
    return (
        <li className={cls.wrapper}>
            {imageUrl ? <img className={cls.img} src={imageUrl} alt="" /> : null}
            <div className={cls.mainInfo}>
                <Paragraph size="h1">{title}</Paragraph>
                <Paragraph size="h3">{description}</Paragraph>
                <Link color="text" to={`/map?lat=${location?.latitude}&lon=${location?.longitude}`} size="h3">
                    {adress ? adress : 'Адрес'}
                </Link>
            </div>
            <div></div>
        </li>
    );
};
