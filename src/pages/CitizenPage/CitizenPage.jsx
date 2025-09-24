import { Users, ArrowBigLeft } from 'lucide-react';
import styles from './CitizenPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { CitizenCard } from '../../components/CitizenCard/ui/CitizenCard';

export const CitizenPage = ({ citizen }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.header__content}>
                    <div className={styles.header__left}>
                        <button
                            onClick={() => navigate('/citizens')}
                            className={styles.backButton}
                        >
                            <ArrowBigLeft />
                        </button>
                        <div className={styles.title}>
                            <Users className={styles.icon} />
                            <h1>{citizen.fullName}</h1>
                        </div>
                    </div>
                    <div className={styles.header__right}>
                        <span className={`${styles.status} ${citizen.status === 'active' ? styles.status_active : styles.status_inactive}`}>
                            {citizen.status === 'active' ? 'Активен' : 'Неактивен'}
                        </span>
                    </div>
                </div>
            </div>
            <CitizenCard citizen={citizen} />
        </div>
    );
};