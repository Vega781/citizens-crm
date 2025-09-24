import CircularProgress from '@mui/material/CircularProgress';
import { ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, AreaChart, Area } from 'recharts'
import { ChartCard } from './ChartCard/ChartCard';

export const AppealsByMonthChart = ({ data, title }) => {
    return (
        <ChartCard title={title}>
            {data.length === 0 ? (<CircularProgress size={24} />) : (
                <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={data}>
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
    )
}