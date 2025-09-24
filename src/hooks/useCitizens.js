import { useEffect, useState } from "react"
import { generateCitizens } from "../api/generateCitizens"

export const useCitizens = (citizensCount) => {
    const [citizens, setCitizens] = useState([]);
    const [selectedCitizen, setSelectedCitizen] = useState();

    useEffect(() => {
        const data = generateCitizens(citizensCount);
        setCitizens(data);
    }, [citizensCount]);

    return { citizens, selectedCitizen, setSelectedCitizen };
}