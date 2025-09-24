export const getAppealsByMonth = (citizens) => {
    const months = {
        'январь': 'Янв',
        'февраль': 'Фев',
        'март': 'Мар',
        'апрель': 'Апр',
        'май': 'Май',
        'июнь': 'Июн',
        'июль': 'Июл',
        'август': 'Авг',
        'сентябрь': 'Сен',
        'октябрь': 'Окт',
        'ноябрь': 'Ноя',
        'декабрь': 'Дек'
    };

    const appealsByMonth = citizens.reduce((acc, citizen) => {
        if (!citizen.appeals || !Array.isArray(citizen.appeals)) {
            return acc;
        }

        citizen.appeals.forEach(appeal => {
            if (!appeal.createdDate) return;

            try {
                const date = new Date(appeal.createdDate);
                if (isNaN(date.getTime())) return;

                const monthLong = date.toLocaleString('ru-RU', { month: 'long' }).toLowerCase();
                const monthShort = months[monthLong];

                const existingMonth = acc.find(m => m.month === monthShort);
                if (existingMonth) {
                    existingMonth.appeals += 1;
                } else {
                    acc.push({
                        month: monthShort,
                        appeals: 1
                    });
                }
            } catch (e) {
                console.error('Error processing date:', appeal.createdDate, e);
            }
        });

        return acc;
    }, []);

    const fullMonthsList = Object.values(months).map(month => ({
        month,
        appeals: 0
    }));

    const result = fullMonthsList.map(item => {
        const found = appealsByMonth.find(m => m.month === item.month);
        return found || item;
    });

    const monthOrder = Object.values(months);
    result.sort((a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month));

    return { appealsByMonth: result };
};