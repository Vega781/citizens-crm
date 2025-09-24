import styles from './CitizenCard.module.scss';

export const CitizenDocuments = ({ citizen }) => {
    return (
        <div className={styles.tab__content}>
            <div className={styles.documents__grid}>
                <div className={styles.documents__item}>
                    <label>Паспорт РФ</label>
                    <input
                        type="text"
                        value={citizen.passport}
                        readOnly
                        className={styles.documents__input}
                    />
                </div>
                <div className={styles.documents__item}>
                    <label>Дата выдачи паспорта</label>
                    <input
                        type="text"
                        value="15.03.2010"
                        readOnly
                        className={styles.documents__input}
                    />
                </div>
                <div className={styles.documents__full}>
                    <label>Кем выдан</label>
                    <input
                        type="text"
                        value="ОУФМС России по г. Москве в Центральном районе"
                        readOnly
                        className={styles.documents__input}
                    />
                </div>
                <div className={styles.documents__item}>
                    <label>ИНН</label>
                    <input
                        type="text"
                        value={citizen.inn}
                        readOnly
                        className={styles.documents__input}
                    />
                </div>
                <div className={styles.documents__item}>
                    <label>СНИЛС</label>
                    <input
                        type="text"
                        value="123-456-789 12"
                        readOnly
                        className={styles.documents__input}
                    />
                </div>
                <div className={styles.documents__item}>
                    <label>Дата регистрации в системе</label>
                    <input
                        type="text"
                        value={citizen.registrationDate}
                        readOnly
                        className={styles.documents__input}
                    />
                </div>
                <div className={styles.documents__item}>
                    <label>Статус в системе</label>
                    <input
                        type="text"
                        value={citizen.status === 'active' ? 'Активный' : 'Неактивный'}
                        readOnly
                        className={styles.documents__input}
                    />
                </div>
            </div>
        </div>
    );
}