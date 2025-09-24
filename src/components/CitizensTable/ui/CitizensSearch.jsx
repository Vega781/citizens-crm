import styles from './CitizensTable.module.scss'
import { Filter, Search } from 'lucide-react';
import { useState } from 'react';

export const CitizensSearch = ({ citizens, searchTerm, setSearchTerm, filters, setFilters }) => {
    const [showFilters, setShowFilters] = useState(false);
    const cities = [...new Set(citizens.map(citizen => citizen.city))].sort();
    const educationLevels = [...new Set(citizens.map(citizen => citizen.education))].sort();
    return (
        <>
            <div className={styles.searchWrapper}>
                <div className={styles.searchContainer}>
                    <div className={styles.inputWrapper}>
                        <Search className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Поиск по ФИО, email, городу..."
                            className={styles.input}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={styles.filterButton}
                >
                    <Filter className={styles.filterIcon} />
                    Фильтры
                </button>
            </div>
            {showFilters && (
                <div className={styles.filtersGrid}>
                    <div className={styles.filterItem}>
                        <label className={styles.filterLabel}>Город</label>
                        <select
                            className={styles.filterSelect}
                            value={filters.city}
                            onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                        >
                            <option value="">Все города</option>
                            {cities.map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.filterItem}>
                        <label className={styles.filterLabel}>Образование</label>
                        <select
                            className={styles.filterSelect}
                            value={filters.education}
                            onChange={(e) => setFilters({ ...filters, education: e.target.value })}
                        >
                            <option value="">Все уровни</option>
                            {educationLevels.map(level => (
                                <option key={level} value={level}>{level}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.filterItem}>
                        <label className={styles.filterLabel}>Статус</label>
                        <select
                            className={styles.filterSelect}
                            value={filters.status}
                            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                        >
                            <option value="">Все статусы</option>
                            <option value="active">Активный</option>
                            <option value="inactive">Неактивный</option>
                        </select>
                    </div>

                    <div className={styles.filterItem}>
                        <label className={styles.filterLabel}>Возраст</label>
                        <select
                            className={styles.filterSelect}
                            value={filters.ageRange}
                            onChange={(e) => setFilters({ ...filters, ageRange: e.target.value })}
                        >
                            <option value="">Все возрасты</option>
                            <option value="18-30">18-30 лет</option>
                            <option value="31-45">31-45 лет</option>
                            <option value="46-60">46-60 лет</option>
                            <option value="61-100">61+ лет</option>
                        </select>
                    </div>
                </div>
            )}
        </>
    )
}