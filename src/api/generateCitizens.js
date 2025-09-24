import { v4 as uuidv4 } from 'uuid';

export const generateCitizens = (length) => {
    const firstNames = ['Александр', 'Мария', 'Дмитрий', 'Анна', 'Сергей', 'Елена', 'Андрей', 'Ольга', 'Михаил', 'Татьяна'];
    const lastNames = ['Иванов', 'Петров', 'Сидоров', 'Козлов', 'Новиков', 'Морозов', 'Волков', 'Соловьев', 'Васильев', 'Зайцев'];
    const middleNames = ['Александрович', 'Дмитриевич', 'Сергеевич', 'Михайлович', 'Андреевич', 'Владимирович', 'Алексеевич', 'Евгеньевич'];

    const cities = [
        { name: 'Москва', weight: 0.25 },
        { name: 'Санкт-Петербург', weight: 0.15 },
        { name: 'Новосибирск', weight: 0.12 },
        { name: 'Екатеринбург', weight: 0.12 },
        { name: 'Казань', weight: 0.10 },
        { name: 'Нижний Новгород', weight: 0.10 },
        { name: 'Челябинск', weight: 0.08 },
        { name: 'Самара', weight: 0.08 }
    ];

    const educationLevels = [
        { name: 'Среднее', weight: 0.20 },
        { name: 'Среднее специальное', weight: 0.35 },
        { name: 'Высшее', weight: 0.35 },
        { name: 'Незаконченное высшее', weight: 0.08 },
        { name: 'Два высших образования', weight: 0.02 }
    ];

    const maritalStatuses = ['Холост/не замужем', 'Женат/замужем', 'Разведен(а)', 'Вдовец/вдова'];

    const professions = ['Инженер', 'Врач', 'Учитель', 'Программист', 'Менеджер', 'Бухгалтер', 'Юрист', 'Дизайнер'];

    const appealTypes = [
        { name: 'Жалоба на работу ЖКХ', weight: 0.25 },
        { name: 'Коммунальные услуги', weight: 0.15 },
        { name: 'Проблемы благоустройства', weight: 0.12 },
        { name: 'Транспортные вопросы', weight: 0.10 },
        { name: 'Социальные вопросы', weight: 0.08 },
        { name: 'Медицинское обслуживание', weight: 0.08 },
        { name: 'Образовательные услуги', weight: 0.06 },
        { name: 'Экологические нарушения', weight: 0.05 },
        { name: 'Земельные вопросы', weight: 0.04 },
        { name: 'Нарушения в сфере торговли', weight: 0.03 },
        { name: 'Градостроительство', weight: 0.03 },
        { name: 'Безопасность', weight: 0.01 }
    ];

    const departments = [
        'Департамент ЖКХ', 'Экологическая служба', 'Управление благоустройства', 'Транспортное управление',
        'Социальная защита', 'Здравоохранение', 'Образование', 'Земельные ресурсы', 'Потребительский надзор'
    ];

    const statuses = [
        { name: 'Выполнено', weight: 0.45 },
        { name: 'В работе', weight: 0.25 },
        { name: 'Новое', weight: 0.15 },
        { name: 'На проверке', weight: 0.08 },
        { name: 'Просрочено', weight: 0.05 },
        { name: 'Отклонено', weight: 0.02 }
    ];

    const priorities = [
        { name: 'Низкий', weight: 0.15 },
        { name: 'Средний', weight: 0.60 },
        { name: 'Высокий', weight: 0.20 },
        { name: 'Критический', weight: 0.05 }
    ];

    const streets = ['Ленина', 'Советская', 'Центральная', 'Мира', 'Победы', 'Гагарина', 'Пушкина', 'Садовая', 'Молодежная', 'Первомайская'];
    const districts = ['Центральный', 'Северный', 'Южный', 'Восточный', 'Западный'];
    const socialStatuses = ['Работающий', 'Пенсионер', 'Студент', 'Безработный', 'Предприниматель'];

    const weightedChoice = (items) => {
        const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
        let random = Math.random() * totalWeight;

        for (const item of items) {
            random -= item.weight;
            if (random <= 0) return item.name;
        }
        return items[items.length - 1].name;
    };

    const randomChoice = (array) => array[Math.floor(Math.random() * array.length)];

    const randomDate = (start, end) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    };

    const randomBoolean = (probability = 0.5) => Math.random() < probability;

    const normalRandom = (mean, stdDev) => {
        let u = 0, v = 0;
        while (u === 0) u = Math.random();
        while (v === 0) v = Math.random();
        const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        return z * stdDev + mean;
    };

    const exponentialRandom = (lambda) => {
        return -Math.log(1 - Math.random()) / lambda;
    };

    const citizens = Array.from({ length: length }, () => {
        const firstName = randomChoice(firstNames);
        const lastName = randomChoice(lastNames);
        const middleName = randomChoice(middleNames);

        let age = Math.round(normalRandom(45, 18));
        age = Math.max(18, Math.min(85, age));
        const birthYear = new Date().getFullYear() - age;

        const startDate = new Date(2018, 0, 1);
        const endDate = new Date(2024, 11, 31);
        const registrationDate = randomDate(startDate, endDate);

        let appealsCount = Math.floor(exponentialRandom(0.8));
        appealsCount = Math.min(appealsCount, 12);

        const appeals = Array.from({ length: appealsCount }, () => {
            const minAppealDate = new Date(Math.max(registrationDate.getTime(), new Date(2020, 0, 1).getTime()));
            const maxAppealDate = new Date();
            const appealDate = randomDate(minAppealDate, maxAppealDate);

            let deadlineDays = Math.round(normalRandom(30, 15));
            deadlineDays = Math.max(5, Math.min(60, deadlineDays));
            const deadline = new Date(appealDate.getTime() + deadlineDays * 24 * 60 * 60 * 1000);

            const status = weightedChoice(statuses);

            let completedDate = null;
            if (status === 'Выполнено') {
                const minCompleteDate = appealDate;
                const maxCompleteDate = new Date(Math.min(deadline.getTime(), Date.now()));
                completedDate = randomDate(minCompleteDate, maxCompleteDate);
            }

            const appealType = weightedChoice(appealTypes);

            return {
                id: uuidv4(),
                appealNumber: `РЭО-${appealDate.getFullYear()}-${String(Math.floor(Math.random() * 999999) + 1).padStart(6, '0')}`,
                type: appealType,
                description: `Обращение по вопросу ${appealType.toLowerCase()}. ${randomBoolean(0.7) ? 'Подробное описание проблемы и требуемых действий.' : 'Краткое описание ситуации.'}`,
                status,
                priority: weightedChoice(priorities),
                department: randomChoice(departments),
                executor: `${randomChoice(firstNames)} ${randomChoice(lastNames)}`,
                createdDate: appealDate.toLocaleDateString('ru-RU'),
                deadline: deadline.toLocaleDateString('ru-RU'),
                completedDate: completedDate ? completedDate.toLocaleDateString('ru-RU') : null,
                filesAttached: Math.floor(exponentialRandom(1.5)),
                rating: status === 'Выполнено' ? (randomBoolean(0.75) ? Math.floor(normalRandom(3.8, 1.2)) + 1 : null) : null,
                response: status === 'Выполнено' ? (randomBoolean(0.9) ? 'Обращение рассмотрено. Принятые меры: проведена проверка, выявленные нарушения устранены.' : 'Обращение выполнено.') : null
            };
        });

        const birthDay = Math.floor(Math.random() * 28) + 1;
        const birthMonth = Math.floor(Math.random() * 12) + 1;

        const education = weightedChoice(educationLevels);
        let baseIncome = 25000;

        const educationMultiplier = {
            'Среднее': 1.0,
            'Среднее специальное': 1.3,
            'Высшее': 1.8,
            'Незаконченное высшее': 1.1,
            'Два высших образования': 2.2
        };

        const ageMultiplier = age < 25 ? 0.7 :
            age < 35 ? 1.0 :
                age < 50 ? 1.4 :
                    age < 60 ? 1.2 : 0.9;

        let income = Math.round(baseIncome * educationMultiplier[education] * ageMultiplier * normalRandom(1.5, 0.8));
        income = Math.max(15000, Math.min(500000, income));

        let maritalStatus;
        if (age < 25) {
            maritalStatus = randomBoolean(0.8) ? maritalStatuses[0] : maritalStatuses[1];
        } else if (age < 40) {
            const rand = Math.random();
            maritalStatus = rand < 0.65 ? maritalStatuses[1] :
                rand < 0.85 ? maritalStatuses[0] : maritalStatuses[2];
        } else if (age < 65) {
            const rand = Math.random();
            maritalStatus = rand < 0.70 ? maritalStatuses[1] :
                rand < 0.85 ? maritalStatuses[2] :
                    rand < 0.95 ? maritalStatuses[0] : maritalStatuses[3];
        } else {
            const rand = Math.random();
            maritalStatus = rand < 0.60 ? maritalStatuses[1] :
                rand < 0.75 ? maritalStatuses[3] :
                    rand < 0.90 ? maritalStatuses[2] : maritalStatuses[0];
        }

        const hasChildren = age > 25 && maritalStatus !== maritalStatuses[0] ?
            randomBoolean(0.7) :
            randomBoolean(0.2);

        let childrenCount = 0;
        if (hasChildren) {
            if (age < 30) {
                childrenCount = randomBoolean(0.8) ? 1 : 2;
            } else if (age < 45) {
                const rand = Math.random();
                childrenCount = rand < 0.4 ? 1 : rand < 0.75 ? 2 : rand < 0.92 ? 3 : 4;
            } else {
                const rand = Math.random();
                childrenCount = rand < 0.3 ? 1 : rand < 0.60 ? 2 : rand < 0.85 ? 3 : rand < 0.95 ? 4 : 5;
            }
        }

        const houseNumber = Math.floor(Math.random() * 200) + 1;
        const passportSeries = Math.floor(Math.random() * 9000) + 1000;
        const passportNumber = Math.floor(Math.random() * 900000) + 100000;
        const inn = String(Math.floor(Math.random() * 900000000000) + 100000000000);


        let socialStatus;
        if (age >= 60) {
            socialStatus = randomBoolean(0.7) ? socialStatuses[1] : socialStatuses[0];
        } else if (age < 25) {
            socialStatus = randomBoolean(0.4) ? socialStatuses[2] :
                randomBoolean(0.8) ? socialStatuses[0] : socialStatuses[3];
        } else {
            const rand = Math.random();
            socialStatus = rand < 0.80 ? socialStatuses[0] :
                rand < 0.88 ? socialStatuses[4] : socialStatuses[3];
        }

        return {
            id: uuidv4(),
            lastName,
            firstName,
            middleName,
            fullName: `${lastName} ${firstName} ${middleName}`,
            birthDate: `${String(birthDay).padStart(2, '0')}.${String(birthMonth).padStart(2, '0')}.${birthYear}`,
            age,
            city: weightedChoice(cities),
            phone: `+7 ${Math.floor(Math.random() * 900) + 100} ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 90) + 10}-${Math.floor(Math.random() * 90) + 10}`,
            email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${randomChoice(['email.ru', 'mail.ru', 'yandex.ru', 'gmail.com'])}`,
            education,
            maritalStatus,
            profession: randomChoice(professions),
            status: randomBoolean(0.88) ? 'active' : 'inactive',
            income,
            hasChildren,
            childrenCount,
            address: `ул. ${randomChoice(streets)}, д. ${houseNumber}${randomBoolean(0.3) ? `, кв. ${Math.floor(Math.random() * 200) + 1}` : ''}`,
            passport: `${passportSeries} ${passportNumber}`,
            inn,
            district: randomChoice(districts),
            socialStatus,
            registrationDate: registrationDate.toLocaleDateString('ru-RU'),
            appeals,
            totalAppeals: appeals.length,
            completedAppeals: appeals.filter(a => a.status === 'Выполнено').length,
            activeAppeals: appeals.filter(a => !['Выполнено', 'Отклонено'].includes(a.status)).length,
            overdueAppeals: appeals.filter(a => a.status === 'Просрочено').length,
            averageRating: appeals.length > 0 ? (appeals.filter(a => a.rating && a.rating >= 1 && a.rating <= 5).reduce((sum, a) => sum + a.rating, 0) / appeals.filter(a => a.rating && a.rating >= 1 && a.rating <= 5).length || 0) : 0
        };
    });

    return citizens;
};