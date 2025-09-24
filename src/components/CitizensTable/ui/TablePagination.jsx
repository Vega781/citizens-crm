import styles from './CitizensTable.module.scss'
import { CustomPagination } from '../../Pagination/CustomPagination';
import Span from '@mui/material/Box';

export const TablePagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className={styles.pagination}>
            <CustomPagination
                count={totalPages}
                page={currentPage}
                onChange={onPageChange}
            />
            <Span>{`Страница ${currentPage} из ${totalPages}`}</Span>
        </div>
    )
}