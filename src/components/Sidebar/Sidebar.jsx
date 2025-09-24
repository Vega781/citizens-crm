import { Link, useLocation, useNavigate } from 'react-router'
import styles from './Sidebar.module.scss'
import { SidebarLinks } from './SidebarLinks'
export const Sidebar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const handleLinkClick = (path) => {
        navigate(path);
    }

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__top}>
                <ul className={styles.sidebar__list}>
                    <span className={styles.sidebar__list__title}>{SidebarLinks.dashboards.name}</span>
                    {SidebarLinks.dashboards.items.map((link) => {
                        const IconComponent = link.icon
                        return (
                            <li onClick={() => handleLinkClick(link.path)} key={link.name} className={`${styles.sidebar__item} ${location.pathname === link.path ? styles.sidebar__item__active : ''}`}>
                                <IconComponent className={styles.sidebar__icon} />
                                {link.name}
                            </li>
                        )
                    })}
                </ul>
                <ul className={styles.sidebar__list}>
                    <span className={styles.sidebar__list__title}>{SidebarLinks.libraries.name}</span>
                    {SidebarLinks.libraries.items.map((link) => {
                        const IconComponent = link.icon
                        return (
                            <li onClick={() => handleLinkClick(link.path)} key={link.name} className={`${styles.sidebar__item} ${location.pathname === link.path ? styles.sidebar__item__active : ''}`}>
                                <IconComponent className={styles.sidebar__icon} />
                                {link.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={styles.sidebar__bottom}>
                <ul className={styles.sidebar__list}>
                    {SidebarLinks.settings.items.map((link) => {
                        const IconComponent = link.icon
                        return (
                            <li onClick={() => handleLinkClick(link.path)} key={link.name} className={`${styles.sidebar__item} ${location.pathname === link.path ? styles.sidebar__item__active : ''}`}>
                                <IconComponent className={styles.sidebar__icon} />
                                {link.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}