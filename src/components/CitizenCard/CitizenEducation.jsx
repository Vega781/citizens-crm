import styles from './CitizenCard.module.scss';

export const CitizenEducation = ({ citizen }) => {
    return (
        <div className={styles.tab__content}>
            <div className={styles.education__grid}>
                <div className={styles.education__item}>
                    <label>Уровень образования</label>
                    <input
                        type="text"
                        value={citizen.education}
                        readOnly
                        className={styles.education__input}
                    />
                </div>
                <div className={styles.education__item}>
                    <label>Специальность</label>
                    <input
                        type="text"
                        value={citizen.profession}
                        readOnly
                        className={styles.education__input}
                    />
                </div>
                <div className={styles.education__full}>
                    <label>Учебное заведение</label>
                    <input
                        type="text"
                        value="Московский государственный университет"
                        readOnly
                        className={styles.education__input}
                    />
                </div>
                <div className={styles.education__item}>
                    <label>Год окончания</label>
                    <input
                        type="text"
                        value="2010"
                        readOnly
                        className={styles.education__input}
                    />
                </div>
                <div className={styles.education__item}>
                    <label>Диплом серия/номер</label>
                    <input
                        type="text"
                        value="ВСГ 1234567"
                        readOnly
                        className={styles.education__input}
                    />
                </div>
            </div>
        </div>
    );
}