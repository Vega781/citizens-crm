import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, AreaChart, Area } from 'recharts'
import { StatCard } from '../../components/StatCard/StatCard'
import { ChartCard } from '../../components/ChartCard/ChartCard'
import styles from './Dashboard.module.scss'
import { dashboardStats } from './dashboardStats'
import { v4 as uuidv4 } from 'uuid';
import CircularProgress from '@mui/material/CircularProgress';
import { ProgressBar } from '../../components/Progress/ProgressBar';
import { useMemo } from 'react'
import { useState, useEffect } from 'react'
import { getDemography } from '../../utils/charts/demography'
import { getAppealsByDistrict } from '../../utils/charts/appealsByDistrict'
import { getAppealsByMonth } from '../../utils/charts/appealsByMonth'
import { getIncomeByProfession } from '../../utils/charts/incomeByProfession'


export const Dashboard = ({ citizens }) => {
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
        if (!localStorage.getItem('appealsByDistrict') || !localStorage.getItem('ageGroups') || !localStorage.getItem('appealsByMonth') || !localStorage.getItem('incomeByProfession')) {
            const { ageGroups } = getDemography(citizens);
            const { appealsByDistrict } = getAppealsByDistrict(citizens);
            const { appealsByMonth } = getAppealsByMonth(citizens);
            const { incomeByProfession } = getIncomeByProfession(citizens);

            localStorage.setItem('ageGroups', JSON.stringify(ageGroups));
            localStorage.setItem('appealsByDistrict', JSON.stringify(appealsByDistrict));
            localStorage.setItem('appealsByMonth', JSON.stringify(appealsByMonth));
            localStorage.setItem('incomeByProfession', JSON.stringify(incomeByProfession));
        }
    }, [citizens]);

    const storedAgeGroups = JSON.parse(localStorage.getItem('ageGroups'));
    const storedAppealsByDistrict = JSON.parse(localStorage.getItem('appealsByDistrict'));
    const storedAppealsByMonth = JSON.parse(localStorage.getItem('appealsByMonth'));
    const storedIncomeByProfession = JSON.parse(localStorage.getItem('incomeByProfession'));

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
                    <ChartCard title="Демография: Возрастные группы">
                        {storedAgeGroups.length === 0 ? (<CircularProgress size={24} />) : (
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie
                                        data={storedAgeGroups}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                    >
                                        {storedAgeGroups.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        )}
                    </ChartCard>
                    <ChartCard title="Обращения по месяцам">
                        {storedAppealsByMonth.length === 0 ? (<CircularProgress size={24} />) : (
                            <ResponsiveContainer width="100%" height={250}>
                                <AreaChart data={storedAppealsByMonth}>
                                    <defs>
                                        <linearGradient id="colorAppeals" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area
                                        type="monotone"
                                        dataKey="appeals"
                                        stroke="#8884d8"
                                        fillOpacity={1}
                                        fill="url(#colorAppeals)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        )}
                    </ChartCard>
                    <ChartCard title="Обращения по районам" className={styles.dashboard__charts__appealsByDistrict}>
                        {storedAppealsByDistrict.length === 0 ? (<CircularProgress size={24} />) : (
                            <ResponsiveContainer width="100%" height={250}>
                                <BarChart data={storedAppealsByDistrict} layout='horizontal'>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        )}
                    </ChartCard>
                    <ChartCard title="Экономика: Доходы по профессии" className={styles.dashboard__charts__incomeByProfession}>
                        {storedIncomeByProfession.length === 0 ? (<CircularProgress size={24} />) : (
                            <ResponsiveContainer width="100%" height={250}>
                                <BarChart data={storedIncomeByProfession} layout="horizontal">
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <YAxis type="number" />
                                    <XAxis dataKey="profession" type="category" width={80} />
                                    <Tooltip formatter={(value) => `${value.toLocaleString()} ₽`} />
                                    <Bar dataKey="value" fill="#10b981" radius={[0, 4, 4, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        )}
                    </ChartCard>
                </div>
            </div>
        </div>
    )
}