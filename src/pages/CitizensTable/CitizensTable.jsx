// CitizensTable.jsx
import { useState } from 'react';
import { ProgressBar } from '../../components/Progress/ProgressBar';
import { CitizensSearch } from '../../components/CitizensTable/ui/CitizensSearch';
import { CitizenTableContent } from '../../components/CitizensTable/ui/CitizenTableContent';
import { searchCitizens } from '../../components/CitizensTable/lib/searchCitizens';
import { usePagination } from '../../components/CitizensTable/lib/usePagination';
import { TablePagination } from '../../components/CitizensTable/ui/TablePagination';

export const CitizensTable = ({ citizens, onSelectedCitizen }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const {
        currentPage,
        setCurrentPage,
        currentCitizens,
        totalPages
    } = usePagination(citizens, 30);

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

    const filteredCitizens = searchCitizens(currentCitizens, searchTerm, filters);

    return (
        <div>
            <CitizensSearch
                citizens={citizens}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filters={filters}
                setFilters={setFilters}
            />
            <TablePagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
            <CitizenTableContent
                citizens={filteredCitizens}
                onSelectedCitizen={onSelectedCitizen}
            />
        </div >
    );
};
