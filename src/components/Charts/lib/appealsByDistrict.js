export const getAppealsByDistrict = (citizens) => {
    const appealsByDistrict = citizens.reduce((acc, citizen) => {
        const district = citizen.district || 'Не указан'
        const existingDistrict = acc.find(d => d.name === district)
        if (existingDistrict) {
            existingDistrict.value += citizen.totalAppeals || 0
        } else {
            acc.push({
                name: district,
                value: citizen.totalAppeals || 0
            })
        }
        return acc
    }, [])

    return {
        appealsByDistrict
    }
}