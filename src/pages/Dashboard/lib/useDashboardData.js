import { useState, useEffect, useMemo } from 'react';
import { getDemography } from '../../../components/Charts/lib/demography';
import { getAppealsByDistrict } from '../../../components/Charts/lib/appealsByDistrict';
import { getAppealsByMonth } from '../../../components/Charts/lib/appealsByMonth';
import { getIncomeByProfession } from '../../../components/Charts/lib/incomeByProfession';

export const useDashboardData = (citizens) => {
    const [isLoading, setIsLoading] = useState(true);

    const stats = useMemo(() => ({
        total: citizens.length,
        active: citizens.filter(c => c.status === 'active').length,
        inactive: citizens.filter(c => c.status === 'inactive').length,
        appeals: citizens.reduce((acc, curr) => acc + curr.totalAppeals, 0),
        averageIncome: citizens.length ?
            `${Math.round(citizens.reduce((acc, curr) => acc + (curr.income || 0), 0) / citizens.length)} руб` : 0,
    }), [citizens]);

    useEffect(() => {
        if (citizens.length > 0) {
            setIsLoading(false);
        }
    }, [citizens]);

    useEffect(() => {
        const updateLocalStorage = () => {
            const { ageGroups } = getDemography(citizens);
            const { appealsByDistrict } = getAppealsByDistrict(citizens);
            const { appealsByMonth } = getAppealsByMonth(citizens);
            const { incomeByProfession } = getIncomeByProfession(citizens);

            localStorage.setItem('ageGroups', JSON.stringify(ageGroups));
            localStorage.setItem('appealsByDistrict', JSON.stringify(appealsByDistrict));
            localStorage.setItem('appealsByMonth', JSON.stringify(appealsByMonth));
            localStorage.setItem('incomeByProfession', JSON.stringify(incomeByProfession));
        }

        if (!localStorage.getItem('appealsByDistrict') ||
            !localStorage.getItem('ageGroups') ||
            !localStorage.getItem('appealsByMonth') ||
            !localStorage.getItem('incomeByProfession')) {
            updateLocalStorage();
        }
    }, [citizens]);


    const chartsData = {
        ageGroups: JSON.parse(localStorage.getItem('ageGroups')),
        appealsByDistrict: JSON.parse(localStorage.getItem('appealsByDistrict')),
        appealsByMonth: JSON.parse(localStorage.getItem('appealsByMonth')),
        incomeByProfession: JSON.parse(localStorage.getItem('incomeByProfession')),
    }

    return { isLoading, stats, chartsData };
}