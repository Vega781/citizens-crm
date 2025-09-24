import styles from './CitizenCard.module.scss';

export const CitizenPersonal = ({ citizen }) => {
    return (
        <div className={styles.tab__content}>
            <div className={styles.personal__grid}>
                <div className={styles.personal__item}>
                    <label>Фамилия</label>
                    <input
                        type="text"
                        value={citizen.lastName}
                        readOnly
                        className={styles.personal__input}
                    />
                </div>
                <div className={styles.personal__item}>
                    <label>Имя</label>
                    <input
                        type="text"
                        value={citizen.firstName}
                        readOnly
                        className={styles.personal__input}
                    />
                </div>
                <div className={styles.personal__item}>
                    <label>Отчество</label>
                    <input
                        type="text"
                        value={citizen.middleName}
                        readOnly
                        className={styles.personal__input}
                    />
                </div>
                <div className={styles.personal__item}>
                    <label>Дата рождения</label>
                    <input
                        type="text"
                        value={citizen.birthDate}
                        readOnly
                        className={styles.personal__input}
                    />
                </div>
                <div className={styles.personal__item}>
                    <label>Возраст</label>
                    <input
                        type="text"
                        value={`${citizen.age} лет`}
                        readOnly
                        className={styles.personal__input}
                    />
                </div>
                <div className={styles.personal__item}>
                    <label>Семейное положение</label>
                    <input
                        type="text"
                        value={citizen.maritalStatus}
                        readOnly
                        className={styles.personal__input}
                    />
                </div>
            </div>
        </div>
    );
}