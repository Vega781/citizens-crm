// CitizensTable.jsx
import { useState } from 'react';
import { CustomPagination } from '../../components/Pagination/CustomPagination';
import styles from './CitizensTable.module.scss';
import Span from '@mui/material/Box';
import { ProgressBar } from '../../components/Progress/ProgressBar';
import { CitizensSearch } from '../../components/CitizensTable/CitizensSearch';
import { CitizenTableRow } from '../../components/CitizensTable/CitizenTableRow';
import { filteredCitizens } from '../../hooks/useSearchCitizens';

export const CitizensTable = ({ citizens, onSelectedCitizen }) => {
    const itemsPerPage = 30;
    const [currentPage, setCurrentPage] = useState(1);
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentCitizens = citizens.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(citizens.length / itemsPerPage);

    const [searchTerm, setSearchTerm] = useState('');

    const [filters, setFilters] = useState({
        city: '',
        education: '',
        status: '',
        ageRange: ''
    });

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    if (citizens.length === 0) {
        return <ProgressBar />
    }

    return (
        <div>
            <CitizensSearch
                citizens={citizens}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filters={filters}
                setFilters={setFilters}
            />
            <div className={styles.pagination}>
                <CustomPagination count={totalPages} page={currentPage} onChange={handlePageChange} />
                <Span>{`Страница ${currentPage} из ${totalPages}`}</Span>
            </div>
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
                        {filteredCitizens(currentCitizens, searchTerm, filters).map((citizen) => (
                            <CitizenTableRow
                                key={citizen.id}
                                citizen={citizen}
                                onSelectedCitizen={onSelectedCitizen}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    );
};
