import styles from './StatCard.module.scss'
import { CircularProgress } from '@mui/material';

// eslint-disable-next-line no-unused-vars
export const StatCard = ({ title, value, icon: Icon, color }) => {
    return (
        <div className={styles.statCard} style={{ borderLeft: `3px solid ${color}` }}>
            <div className={styles.statCard__icon} style={{ backgroundColor: `${color}20`, color }}>
                <Icon size={24} />
            </div>
            <div className={styles.statCard__content}>
                <h3 className={styles.statCard__title}>{title}</h3>
                <p className={styles.statCard__value}>{value === 0 ? (<CircularProgress size={24} />) : (value)}</p>
            </div>
        </div>
    )
}