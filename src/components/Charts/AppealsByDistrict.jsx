import CircularProgress from '@mui/material/CircularProgress';
import { ChartCard } from './ChartCard/ChartCard';
import { ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'

export const AppealsByDistrictChart = ({ data, title }) => {
    return (
        <ChartCard title={title}>
            {data.length === 0 ? (<CircularProgress size={24} />) : (
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={data} layout='horizontal'>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            )}
        </ChartCard>
    )
}