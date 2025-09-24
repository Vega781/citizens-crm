import { useMemo } from 'react';

export const useAgeDeclension = (age) => {
    const ageString = useMemo(() => {
        if (!age || typeof age !== 'number') return '';
        const getDeclension = (number) => {
            const lastTwoDigits = number % 100;
            const lastDigit = number % 10;

            if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
                return 'лет';
            }

            switch (lastDigit) {
                case 1:
                    return 'год';
                case 2:
                case 3:
                case 4:
                    return 'года';
                default:
                    return 'лет';
            }
        };

        const declension = getDeclension(age);
        return `${age} ${declension}`;
    }, [age]);

    return ageString;
};