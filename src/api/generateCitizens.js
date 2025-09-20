export const generateCitizens = () => {
    const firstNames = ['Александр', 'Мария', 'Дмитрий', 'Анна', 'Сергей', 'Елена', 'Андрей', 'Ольга', 'Михаил', 'Татьяна'];
    const lastNames = ['Иванов', 'Петров', 'Сидоров', 'Козлов', 'Новиков', 'Морозов', 'Волков', 'Соловьев', 'Васильев', 'Зайцев'];
    const middleNames = ['Александрович', 'Дмитриевич', 'Сергеевич', 'Михайлович', 'Андреевич', 'Владимирович', 'Алексеевич', 'Евгеньевич'];
    const cities = ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань', 'Нижний Новгород', 'Челябинск', 'Самара'];
    const educationLevels = ['Среднее', 'Среднее специальное', 'Высшее', 'Незаконченное высшее', 'Два высших образования'];
    const maritalStatuses = ['Холост/не замужем', 'Женат/замужем', 'Разведен(а)', 'Вдовец/вдова'];
    const professions = ['Инженер', 'Врач', 'Учитель', 'Программист', 'Менеджер', 'Бухгалтер', 'Юрист', 'Дизайнер'];

    const appealTypes = [
        'Жалоба на работу ЖКХ', 'Экологические нарушения', 'Проблемы благоустройства', 'Транспортные вопросы',
        'Социальные вопросы', 'Медицинское обслуживание', 'Образовательные услуги', 'Земельные вопросы',
        'Нарушения в сфере торговли', 'Коммунальные услуги', 'Градостроительство', 'Безопасность'
    ];

    const departments = [
        'Департамент ЖКХ', 'Экологическая служба', 'Управление благоустройства', 'Транспортное управление',
        'Социальная защита', 'Здравоохранение', 'Образование', 'Земельные ресурсы', 'Потребительский надзор'
    ];

    const statuses = ['Новое', 'В работе', 'На проверке', 'Выполнено', 'Просрочено', 'Отклонено'];
    const priorities = ['Низкий', 'Средний', 'Высокий', 'Критический'];

    const citizens = Array.from({ length: 2000 }, (_, i) => {
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        const middleName = middleNames[Math.floor(Math.random() * middleNames.length)];
        const birthYear = 1950 + Math.floor(Math.random() * 50);
        const registrationDate = new Date(2020 + Math.floor(Math.random() * 4), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);

        const appealsCount = Math.floor(Math.random() * 5) + 1;
        const appeals = Array.from({ length: appealsCount }, (_, j) => {
            const appealDate = new Date(registrationDate.getTime() + Math.random() * (Date.now() - registrationDate.getTime()));
            const deadline = new Date(appealDate.getTime() + (Math.random() * 30 + 10) * 24 * 60 * 60 * 1000);
            const status = statuses[Math.floor(Math.random() * statuses.length)];

            return {
                id: `${i}-${j}`,
                appealNumber: `РЭО-${2024}-${String(i * appealsCount + j + 1).padStart(6, '0')}`,
                type: appealTypes[Math.floor(Math.random() * appealTypes.length)],
                description: `Обращение по вопросу ${appealTypes[Math.floor(Math.random() * appealTypes.length)].toLowerCase()}. Подробное описание проблемы и требуемых действий.`,
                status,
                priority: priorities[Math.floor(Math.random() * priorities.length)],
                department: departments[Math.floor(Math.random() * departments.length)],
                executor: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
                createdDate: appealDate.toLocaleDateString('ru-RU'),
                deadline: deadline.toLocaleDateString('ru-RU'),
                completedDate: status === 'Выполнено' ? new Date(appealDate.getTime() + Math.random() * (deadline.getTime() - appealDate.getTime())).toLocaleDateString('ru-RU') : null,
                filesAttached: Math.floor(Math.random() * 4),
                rating: status === 'Выполнено' ? Math.floor(Math.random() * 3) + 3 : null,
                response: status === 'Выполнено' ? 'Обращение рассмотрено. Принятые меры: проведена проверка, выявленные нарушения устранены.' : null
            };
        });

        return {
            id: i + 1,
            lastName,
            firstName,
            middleName,
            fullName: `${lastName} ${firstName} ${middleName}`,
            birthDate: `${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}.${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}.${birthYear}`,
            age: new Date().getFullYear() - birthYear,
            city: cities[Math.floor(Math.random() * cities.length)],
            phone: `+7 ${Math.floor(Math.random() * 900) + 100} ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 90) + 10}-${Math.floor(Math.random() * 90) + 10}`,
            email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@email.ru`,
            education: educationLevels[Math.floor(Math.random() * educationLevels.length)],
            maritalStatus: maritalStatuses[Math.floor(Math.random() * maritalStatuses.length)],
            profession: professions[Math.floor(Math.random() * professions.length)],
            status: Math.random() > 0.1 ? 'active' : 'inactive',
            income: Math.floor(Math.random() * 80000) + 20000,
            hasChildren: Math.random() > 0.4,
            childrenCount: Math.random() > 0.4 ? Math.floor(Math.random() * 4) + 1 : 0,
            address: `ул. ${['Ленина', 'Советская', 'Центральная', 'Мира', 'Победы'][Math.floor(Math.random() * 5)]}, д. ${Math.floor(Math.random() * 150) + 1}`,
            passport: `${Math.floor(Math.random() * 9000) + 1000} ${Math.floor(Math.random() * 900000) + 100000}`,
            inn: `${Math.floor(Math.random() * 900000000000) + 100000000000}`,
            district: ['Центральный', 'Северный', 'Южный', 'Восточный', 'Западный'][Math.floor(Math.random() * 5)],
            socialStatus: ['Работающий', 'Пенсионер', 'Студент', 'Безработный', 'Предприниматель'][Math.floor(Math.random() * 5)],
            registrationDate: registrationDate.toLocaleDateString('ru-RU'),
            appeals,
            totalAppeals: appeals.length,
            completedAppeals: appeals.filter(a => a.status === 'Выполнено').length,
            activeAppeals: appeals.filter(a => !['Выполнено', 'Отклонено'].includes(a.status)).length,
            overdueAppeals: appeals.filter(a => a.status === 'Просрочено').length,
            averageRating: appeals.filter(a => a.rating).reduce((sum, a) => sum + a.rating, 0) / appeals.filter(a => a.rating).length || 0
        };
    });

    return citizens;
};