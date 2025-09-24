import { Users, UserCheck, UserX, MessageCircle, RussianRuble } from "lucide-react";

export const dashboardStats = (stats) => {
    return [
        {
            title: 'Всего граждан',
            value: stats.total,
            icon: Users,
            color: "#5e35b1"
        },
        {
            title: 'Активные',
            value: stats.active,
            icon: UserCheck,
            color: "#2e7d32"
        },
        {
            title: 'Неактивные',
            value: stats.inactive,
            icon: UserX,
            color: "#d32f2f"
        },
        {
            title: 'Всего обращений',
            value: stats.appeals,
            icon: MessageCircle,
            color: "#1976d2"
        },
        {
            title: 'Средний заработок',
            value: stats.averageIncome,
            icon: RussianRuble,
            color: "#f9a825"
        }
    ]
}