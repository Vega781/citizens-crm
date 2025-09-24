import styles from './CitizensTable.module.scss'
import { CitizenTableRow } from './CitizenTableRow';

export const CitizenTableContent = ({ citizens, onSelectedCitizen }) => {
    return (
        <div className={styles.wrapper}>
            <table className={styles.table}>
                <thead className={styles.table__head}>
                    <tr>
                        <td>Гражданин</td>
                        <td>Контакты</td>
                        <td>Обращения</td>
                        <td>Статус</td>
                        <td>Возраст</td>
                        <td>Действия</td>
                    </tr>
                </thead>
                <tbody className={styles.table__body}>
                    {citizens.map((citizen) => (
                        <CitizenTableRow
                            key={citizen.id}
                            citizen={citizen}
                            onSelectedCitizen={onSelectedCitizen}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}