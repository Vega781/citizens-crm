import styles from './MainLayout.module.scss'
import { Header } from '../components/Header/Header'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    return (
        <div className={styles.mainLayout}>
            <header className={styles.mainLayout__header}>
                <Header />
            </header>
            <main className={styles.mainLayout__content}>
                <Sidebar />
                <div className={styles.mainLayout__outlet}>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}