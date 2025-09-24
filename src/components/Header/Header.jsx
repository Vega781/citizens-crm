import { useLocation } from 'react-router'
import styles from './Header.module.scss'
import { SidebarLinks } from '../Sidebar/SidebarLinks';

export const Header = () => {
    const loacation = useLocation();
    const findPageName = () => {
        const allLinks = [...SidebarLinks.dashboards.items, ...SidebarLinks.libraries.items, ...SidebarLinks.settings.items];
        const currentLink = allLinks.find(link => link.path === loacation.pathname);
        return currentLink ? currentLink.name : '';
    }
    return (
        <div className={styles.header}>
            <h1 className={styles.header__title}>Citizens CRM</h1>
            <h2 className={styles.header__subtitle}>{findPageName()}</h2>
        </div>
    )
}