import styles from './CitizenCard.module.scss';

export const CitizenContacts = ({ citizen }) => {
    return (
        <div className={styles.tab__content}>
            <div className={styles.contacts__grid}>
                <div className={styles.contacts__item}>
                    <label>Телефон</label>
                    <input
                        type="text"
                        value={citizen.phone}
                        readOnly
                        className={styles.contacts__input}
                    />
                </div>
                <div className={styles.contacts__item}>
                    <label>Email</label>
                    <input
                        type="email"
                        value={citizen.email}
                        readOnly
                        className={styles.contacts__input}
                    />
                </div>
                <div className={styles.contacts__full}>
                    <label>Адрес</label>
                    <input
                        type="text"
                        value={`${citizen.address}, ${citizen.city}`}
                        readOnly
                        className={styles.contacts__input}
                    />
                </div>
                <div className={styles.contacts__item}>
                    <label>Район</label>
                    <input
                        type="text"
                        value={citizen.district}
                        readOnly
                        className={styles.contacts__input}
                    />
                </div>
                <div className={styles.contacts__item}>
                    <label>Город</label>
                    <input
                        type="text"
                        value={citizen.city}
                        readOnly
                        className={styles.contacts__input}
                    />
                </div>
            </div>
        </div>
    );
}