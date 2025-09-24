import styles from './CitizenCard.module.scss';

export const CitizenFamily = ({ citizen }) => {
    return (
        <div className={styles.tab__content}>
            <div className={styles.family__grid}>
                <div className={styles.family__item}>
                    <label>Семейное положение</label>
                    <input
                        type="text"
                        value={citizen.maritalStatus}
                        readOnly
                        className={styles.family__input}
                    />
                </div>
                <div className={styles.family__item}>
                    <label>Количество детей</label>
                    <input
                        type="text"
                        value={citizen.childrenCount}
                        readOnly
                        className={styles.family__input}
                    />
                </div>
            </div>

            {citizen.hasChildren && (
                <div className={styles.family__children}>
                    <h4 className={styles.family__title}>Дети</h4>
                    <div>
                        {Array.from({ length: citizen.childrenCount }, (_, i) => (
                            <div key={i} className={styles.family__child}>
                                <div className={styles['family__child-grid']}>
                                    <div className={styles.family__item}>
                                        <label>ФИО ребенка</label>
                                        <input
                                            type="text"
                                            value={`${citizen.lastName} ${['Анна', 'Петр', 'Мария', 'Андрей'][i % 4]} ${citizen.middleName.replace('ич', 'овна').replace('вич', 'вна')}`}
                                            readOnly
                                            className={`${styles.family__input} ${styles.family__input_white}`}
                                        />
                                    </div>
                                    <div className={styles.family__item}>
                                        <label>Дата рождения</label>
                                        <input
                                            type="text"
                                            value={`${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}.${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}.${2005 + Math.floor(Math.random() * 15)}`}
                                            readOnly
                                            className={`${styles.family__input} ${styles.family__input_white}`}
                                        />
                                    </div>
                                    <div className={styles.family__item}>
                                        <label>Возраст</label>
                                        <input
                                            type="text"
                                            value={`${Math.floor(Math.random() * 18) + 2} лет`}
                                            readOnly
                                            className={`${styles.family__input} ${styles.family__input_white}`}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}