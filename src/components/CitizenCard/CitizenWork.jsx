import styles from './CitizenCard.module.scss';

export const CitizenWork = ({ citizen }) => {
    return (
        <div className={styles.tab__content}>
            <div className={styles.work__grid}>
                <div className={styles.work__item}>
                    <label>Профессия</label>
                    <input
                        type="text"
                        value={citizen.profession}
                        readOnly
                        className={styles.work__input}
                    />
                </div>
                <div className={styles.work__item}>
                    <label>Социальный статус</label>
                    <input
                        type="text"
                        value={citizen.socialStatus}
                        readOnly
                        className={styles.work__input}
                    />
                </div>
                <div className={styles.work__full}>
                    <label>Место работы</label>
                    <input
                        type="text"
                        value="ООО 'Техносфера'"
                        readOnly
                        className={styles.work__input}
                    />
                </div>
                <div className={styles.work__item}>
                    <label>Должность</label>
                    <input
                        type="text"
                        value={citizen.profession}
                        readOnly
                        className={styles.work__input}
                    />
                </div>
                <div className={styles.work__item}>
                    <label>Доходы (руб/мес)</label>
                    <input
                        type="text"
                        value={citizen.income.toLocaleString()}
                        readOnly
                        className={styles.work__input}
                    />
                </div>
                <div className={styles.work__item}>
                    <label>Стаж работы</label>
                    <input
                        type="text"
                        value={`${Math.floor(Math.random() * 20) + 5} лет`}
                        readOnly
                        className={styles.work__input}
                    />
                </div>
                <div className={styles.work__item}>
                    <label>Рабочий телефон</label>
                    <input
                        type="text"
                        value="+7 495 123-45-67"
                        readOnly
                        className={styles.work__input}
                    />
                </div>
            </div>
        </div>
    );
}