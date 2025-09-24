import styles from './ChartCard.module.scss'

export const ChartCard = ({ title, children, className }) => {
    return (
        <div className={`${styles.chart} ${className}`}>
            <h3 className={styles.chart__title}>{title}</h3>
            <div className={styles.chart__content}>
                {children}
            </div>
        </div>
    )
}