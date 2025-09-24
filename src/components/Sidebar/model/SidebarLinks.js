import { ChartArea, Contact } from 'lucide-react'
import { ROUTES } from '../../../providers/Routes.config';

export const SidebarLinks = {
    dashboards: {
        name: 'Меню',
        items: [

            {
                name: 'Картотека',
                path: `${ROUTES.CITIZENS}`,
                icon: Contact,
            },
            {
                name: 'Статистика',
                path: `${ROUTES.DASHBOARD}`,
                icon: ChartArea
            },
        ]
    },
}