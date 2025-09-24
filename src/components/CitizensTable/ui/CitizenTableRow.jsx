import { memo } from 'react';
import styles from './CitizensTable.module.scss';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import { useAgeDeclension } from '../../../hooks/useAgeDeclension';
import { getRoutes } from '../../../providers/Routes.config';

export const CitizenTableRow = memo(({ citizen, onSelectedCitizen }) => {
    const navigate = useNavigate();

    const handleSelectCitizen = (citizen) => {
        onSelectedCitizen(citizen);
        navigate(getRoutes.citizen(citizen.id));
    }
    return (
        <tr key={citizen.id} className={styles.table_row}>
            <td className={styles.citizen__name}>
                <div className={styles.citizen__avatar}>
                    <User />
                </div>
                <div className={styles.citizen__fullName}>
                    {citizen.fullName}
                    <span className={styles.citizen__city}>
                        {citizen.city}
                    </span>
                </div>
            </td>
            <td className={styles.citizen__contacts}>
                <div className={styles.citizen__contacts__phone}>
                    <a className={styles.citizen__contacts__phone} href={`tel:${citizen.phone}`}>{citizen.phone}</a>
                </div>
                <div className={styles.citizen__contacts__email}>
                    <a className={styles.citizen__contacts__phone} href={`mailto:${citizen.email}`}>{citizen.email}</a>
                </div>
            </td>
            <td className={styles.citizen__appeals}>
                <div className={styles.citizen__appeals__total}>
                    Всего: {citizen.totalAppeals} | Выполнено: {citizen.completedAppeals}
                </div>
                <div className={styles.citizen__appeals__active}>
                    Активных: {citizen.activeAppeals} | Просроченных: {citizen.overdueAppeals}
                </div>
            </td>
            <td>
                <span className={`${styles.citizen__status} ${citizen.status === 'active' ? styles.citizen__status__active : styles.citizen__status__inactive}`}>
                    {citizen.status === 'active' ? 'Активен' : 'Неактивен'}
                </span>
            </td>
            <td className={styles.citizen__age}>{useAgeDeclension(citizen.age)}</td>
            <td>
                <button onClick={() => handleSelectCitizen(citizen)} className={styles.citizen__details}>Подробнее</button>
            </td>
        </tr>
    )
});