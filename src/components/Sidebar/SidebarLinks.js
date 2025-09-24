import { ChartArea, Users, Settings, MessageCircleWarning, RussianRuble, MapPinHouse, Contact } from 'lucide-react'

export const SidebarLinks = {
    dashboards: {
        name: 'Статистика',
        items: [

            {
                name: 'Статистика',
                path: '/dashboard',
                icon: ChartArea
            },
            // {
            //     name: 'Демография',
            //     path: '/demography',
            //     icon: Users
            // },
            // {
            //     name: 'География',
            //     path: '/geography',
            //     icon: MapPinHouse
            // },
            // {
            //     name: 'Экономика',
            //     path: '/economy',
            //     icon: RussianRuble
            // },
        ]
    },
    libraries: {
        name: 'Библиотеки',
        items: [
            {
                name: 'Картотека',
                path: '/citizens',
                icon: Contact
            },
            // {
            //     name: 'Обращения',
            //     path: '/reports',
            //     icon: MessageCircleWarning
            // }
        ]
    },
    settings: {
        name: 'Настройки',
        items: [
            // {
            //     name: 'Настройки',
            //     path: '/settings',
            //     icon: Settings
            // }
        ]
    }
}