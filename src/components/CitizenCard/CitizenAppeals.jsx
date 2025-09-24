import styles from './CitizenCard.module.scss';

export const CitizenAppeals = ({ citizen }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case 'Выполнено':
                return styles.appeals__status_completed;
            case 'Просрочено':
                return styles.appeals__status_overdue;
            case 'В работе':
                return styles.appeals__status_active;
            default:
                return styles.appeals__status_default;
        }
    };

    return (
        <div className={styles.tab__content}>
            <div className={styles.appeals__stats}>
                <div className={styles.appeals__stat + ' ' + styles.appeals__stat_blue}>
                    <p className={styles['appeals__stat-label']}>Всего обращений</p>
                    <p className={styles['appeals__stat-value'] + ' ' + styles['appeals__stat-value_blue']}>
                        {citizen.totalAppeals}
                    </p>
                </div>
                <div className={styles.appeals__stat + ' ' + styles.appeals__stat_green}>
                    <p className={styles['appeals__stat-label']}>Выполнено</p>
                    <p className={styles['appeals__stat-value'] + ' ' + styles['appeals__stat-value_green']}>
                        {citizen.completedAppeals}
                    </p>
                </div>
                <div className={styles.appeals__stat + ' ' + styles.appeals__stat_yellow}>
                    <p className={styles['appeals__stat-label']}>Активных</p>
                    <p className={styles['appeals__stat-value'] + ' ' + styles['appeals__stat-value_yellow']}>
                        {citizen.activeAppeals}
                    </p>
                </div>
                <div className={styles.appeals__stat + ' ' + styles.appeals__stat_red}>
                    <p className={styles['appeals__stat-label']}>Просроченных</p>
                    <p className={styles['appeals__stat-value'] + ' ' + styles['appeals__stat-value_red']}>
                        {citizen.overdueAppeals}
                    </p>
                </div>
            </div>

            <div className={styles.appeals__history}>
                <h4 className={styles.appeals__title}>История обращений</h4>
                {citizen.appeals.map((appeal) => (
                    <div key={appeal.id} className={styles.appeals__item}>
                        <div className={styles.appeals__header}>
                            <div>
                                <h5 className={styles.appeals__number}>{appeal.appealNumber}</h5>
                                <p className={styles.appeals__type}>{appeal.type}</p>
                            </div>
                            <span className={`${styles.appeals__status} ${getStatusClass(appeal.status)}`}>
                                {appeal.status}
                            </span>
                        </div>
                        <p className={styles.appeals__description}>{appeal.description}</p>
                        <div className={styles.appeals__details}>
                            <div>
                                <span className={styles['appeals__detail-label']}>Создано:</span> {appeal.createdDate}
                            </div>
                            <div>
                                <span className={styles['appeals__detail-label']}>Срок:</span> {appeal.deadline}
                            </div>
                            <div>
                                <span className={styles['appeals__detail-label']}>Приоритет:</span> {appeal.priority}
                            </div>
                            <div>
                                <span className={styles['appeals__detail-label']}>Департамент:</span> {appeal.department}
                            </div>
                        </div>
                        {appeal.response && (
                            <div className={styles.appeals__response}>
                                <strong>Ответ:</strong> {appeal.response}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};