import { useState } from 'react';
import styles from './CitizenCard.module.scss'
import { Phone, Calendar, MapPin, Mail } from 'lucide-react';
import { useAgeDeclension } from '../../../hooks/useAgeDeclension';
import { tabs } from '../model/CitizenCardConfig';
import { tabComponents } from '../model/CitizenCardConfig';

export const CitizenCard = ({ citizen }) => {
    const [activeTab, setActiveTab] = useState('personal');
    const TabContent = tabComponents[activeTab];

    return (
        <div className={styles.content}>
            <div className={styles.summary}>
                <div className={styles.summary__grid}>
                    <div className={styles.summary__item}>
                        <Calendar className={styles.summary__icon} />
                        <div>
                            <p className={styles.summary__title}>Возраст</p>
                            <p className={styles.summary__age}>{useAgeDeclension(citizen.age)}</p>
                        </div>
                    </div>
                    <div className={styles.summary__item}>
                        <MapPin className={styles.summary__icon} />
                        <div>
                            <p className={styles.summary__title}>Город</p>
                            <p className={styles.summary__city}>{citizen.city}</p>
                        </div>
                    </div>
                    <div className={styles.summary__item}>
                        <Phone className={styles.summary__icon} />
                        <div>
                            <p className={styles.summary__title}>Телефон</p>
                            <p className={styles.summary__phone}>{citizen.phone}</p>
                        </div>
                    </div>
                    <div className={styles.summary__item}>
                        <Mail className={styles.summary__icon} />
                        <div>
                            <p className={styles.summary__title}>Email</p>
                            <p className={styles.summary__email}>{citizen.email}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.tabs}>
                <nav className={styles.tabs__nav}>
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`${styles.tab} ${activeTab === tab.id ? styles.tab_active : ''}`}
                            >
                                <Icon className={styles.tab__icon} />
                                {tab.name}
                            </button>
                        );
                    })}
                </nav>

                {TabContent && <TabContent citizen={citizen} />}
            </div>
        </div>
    )
}