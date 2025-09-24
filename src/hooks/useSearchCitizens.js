export const filteredCitizens = (currentCitizens, searchTerm, filters) => {
    return currentCitizens.filter(citizen => {
        const matchesSearchTerm =
            citizen.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            citizen.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            citizen.city.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCity = filters.city ? citizen.city === filters.city : true;
        const matchesEducation = filters.education ? citizen.education === filters.education : true;
        const matchesStatus = filters.status ? citizen.status === filters.status : true;
        const matchesAge = filters.ageRange ? checkAgeRange(parseInt(citizen.age), filters.ageRange) : true;
        const matches = matchesSearchTerm && matchesCity && matchesEducation && matchesStatus && matchesAge;
        return matches;
    });
}

const checkAgeRange = (age, range) => {
    if (typeof age !== 'number' || isNaN(age)) {
        return false;
    }

    switch (range) {
        case '18-30': return age >= 18 && age <= 30;
        case '31-45': return age >= 31 && age <= 45;
        case '46-60': return age >= 46 && age <= 60;
        case '60+': return age >= 60;
        default: return true;
    }
}