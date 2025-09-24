import { useState } from 'react';

export const usePagination = (citizens, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentCitizens = citizens.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(citizens.length / itemsPerPage);

    return {
        currentPage,
        setCurrentPage,
        currentCitizens,
        totalPages
    }
}