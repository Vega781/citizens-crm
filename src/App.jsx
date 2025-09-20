import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { CitizensList } from './pages/CitizensTable';
import { useEffect } from 'react';
import { generateCitizens } from './api/generateCitizens';

function App() {
    const loadCitizens = generateCitizens(2000);

    useEffect(() => {
        loadCitizens(2000);
    }, [loadCitizens]);

    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/citizens" element={<CitizensTable />} />
                </Routes>
            </Router>
        </ChakraProvider>
    );
}

export default App;