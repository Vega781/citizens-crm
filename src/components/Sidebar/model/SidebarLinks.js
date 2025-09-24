import { ChartArea, Contact } from 'lucide-react'

export const SidebarLinks = {
    dashboards: {
        name: 'Меню',
        items: [

            {
                name: 'Картотека',
                path: '/citizens',
                icon: Contact
            },
            {
                name: 'Статистика',
                path: '/dashboard',
                icon: ChartArea
            },
        ]
    },
}