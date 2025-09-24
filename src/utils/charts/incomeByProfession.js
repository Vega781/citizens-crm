export const getIncomeByProfession = (citizens) => {
    const incomeByProfession = citizens.reduce((acc, citizen) => {
        const profession = citizen.profession || 'Unemployed'
        const existingProfession = acc.find(p => p.profession === profession)

        if (existingProfession) {
            existingProfession.totalIncome += citizen.income || 0
            existingProfession.count += 1
        } else {
            acc.push({
                profession,
                totalIncome: citizen.income || 0,
                count: 1
            })
        }
        return acc
    }, [])

    const averageIncomeByProfession = incomeByProfession
        .map(prof => ({
            profession: prof.profession,
            value: Math.round(prof.totalIncome / prof.count),
        }))
        .sort((a, b) => a.profession.localeCompare(b.profession))
        .filter(prof => prof.profession && prof.value > 0)

    return {
        incomeByProfession: averageIncomeByProfession
    }
}