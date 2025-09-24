import { useState } from 'react';
import styles from './CitizenCard.module.scss'
import { Users, Phone, GraduationCap, Heart, Briefcase, Home, Calendar, MapPin, Mail, MessageCircle } from 'lucide-react';
import { CitizenContacts } from './CitizenContacts';
import { CitizenPersonal } from './CitizenPersonal';
import { CitizenEducation } from './CitizenEducation';
import { CitizenFamily } from './CitizenFamily';
import { CitizenWork } from './CitizenWork';
import { CitizenDocuments } from './CitizenDocuments';
import { CitizenAppeals } from './CitizenAppeals';

export const CitizenCard = ({ citizen }) => {

    const [activeTab, setActiveTab] = useState('personal');

    const tabs = [
        { id: 'personal', name: 'Личные данные', icon: Users },
        { id: 'contact', name: 'Контакты', icon: Phone },
        { id: 'education', name: 'Образование', icon: GraduationCap },
        { id: 'family', name: 'Семья', icon: Heart },
        { id: 'work', name: 'Работа', icon: Briefcase },
        { id: 'documents', name: 'Документы', icon: Home },
        { id: 'appeals', name: 'Обращения', icon: MessageCircle }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'personal':
                return <CitizenPersonal citizen={citizen} />;
            case 'contact':
                return <CitizenContacts citizen={citizen} />;
            case 'education':
                return <CitizenEducation citizen={citizen} />;
            case 'family':
                return <CitizenFamily citizen={citizen} />;
            case 'work':
                return <CitizenWork citizen={citizen} />;
            case 'documents':
                return <CitizenDocuments citizen={citizen} />;
            case 'appeals':
                return <CitizenAppeals citizen={citizen} />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.content}>
            <div className={styles.summary}>
                <div className={styles.summary__grid}>
                    <div className={styles.summary__item}>
                        <Calendar className={styles.summary__icon} />
                        <div>
                            <p className={styles.summary__title}>Возраст</p>
                            <p className={styles.summary__age}>{citizen.age} лет</p>
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

                {renderTabContent()}
            </div>
        </div>
    )
}