const AGE_GROUPS = [
    { name: '18-25', color: '#60A5FA' },
    { name: '26-35', color: '#34D399' },
    { name: '36-45', color: '#FBBF24' },
    { name: '46-60', color: '#F87171' },
    { name: '60+', color: '#A78BFA' }
]

export const getDemography = (citizens) => {
    const ageGroups = citizens.reduce((acc, citizen) => {
        const age = new Date().getFullYear() - new Date(citizen.birthDate).getFullYear()
        let group = ''
        if (age <= 25) group = '18-25'
        else if (age <= 35) group = '26-35'
        else if (age <= 45) group = '36-45'
        else if (age <= 60) group = '46-60'
        else group = '60+'

        const existingGroup = acc.find(g => g.name === group)
        if (existingGroup) {
            existingGroup.value++
        } else {
            acc.push({
                name: group,
                value: 1,
                color: AGE_GROUPS.find(g => g.name === group)?.color
            })
        }
        return acc
    }, [])

    return {
        ageGroups
    }
}