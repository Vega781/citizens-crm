import CircularProgress from '@mui/material/CircularProgress';
import { ChartCard } from './ChartCard/ChartCard';
import { ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'

export const IncomeByProfessionChart = ({ data, title }) => {
    return (
        <ChartCard title={title}>
            {data.length === 0 ? (<CircularProgress size={24} />) : (
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={data} layout="horizontal">
                        <CartesianGrid strokeDasharray="3 3" />
                        <YAxis type="number" />
                        <XAxis dataKey="profession" type="category" width={80} />
                        <Tooltip formatter={(value) => `${value.toLocaleString()} ₽`} />
                        <Bar dataKey="value" fill="#10b981" radius={[0, 4, 4, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            )}
        </ChartCard>
    )
}