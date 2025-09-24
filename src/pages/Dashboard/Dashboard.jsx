import styles from './Dashboard.module.scss'
import { v4 as uuidv4 } from 'uuid';

import { ProgressBar } from '../../components/Progress/ProgressBar';

import { dashboardStats } from './lib/dashboardStats'
import { useDashboardData } from './lib/useDashboardData'
import { StatCard } from '../../components/StatCard/StatCard'
import { DemographyChart } from '../../components/Charts/DemographyChart'
import { AppealsByMonthChart } from '../../components/Charts/AppealsByMonthChart'
import { AppealsByDistrictChart } from '../../components/Charts/AppealsByDistrict'
import { IncomeByProfessionChart } from '../../components/Charts/IncomeByProfessionChart'


export const Dashboard = ({ citizens }) => {
    const { isLoading, stats, chartsData } = useDashboardData(citizens);

    if (isLoading) {
        return <ProgressBar />
    }

    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboard__body}>
                <div className={styles.dashboard__stats}>
                    {dashboardStats(stats).map(stat => (
                        <StatCard
                            key={uuidv4()}
                            title={stat.title}
                            value={stat.value}
                            icon={stat.icon}
                            color={stat.color}
                        />
                    ))}
                </div>
                <div className={styles.dashboard__charts}>
                    <DemographyChart
                        title="Демография: Возрастные группы"
                        data={chartsData.ageGroups}
                    />
                    <AppealsByMonthChart
                        title="Обращения по месяцам"
                        data={chartsData.appealsByMonth}
                    />
                    <AppealsByDistrictChart
                        title="Обращения по районам"
                        data={chartsData.appealsByDistrict}
                    />
                    <IncomeByProfessionChart
                        title="Экономика: Доходы по профессии"
                        data={chartsData.incomeByProfession}
                    />
                </div>
            </div>
        </div>
    )
}