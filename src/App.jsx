import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { CitizensTable } from './pages/CitizensTable/CitizensTable';
import { MainLayout } from './layouts/MainLayout';
import { generateCitizens } from './api/generateCitizens';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils/theme';
import { CitizenPage } from './pages/CitizenPage/CitizenPage';

function App() {
    const [citizens, setCitizens] = useState([]);
    const [selectedCitizen, setSelectedCitizen] = useState();

    useEffect(() => {
        const data = generateCitizens(1000);
        setCitizens(data);
    }, []);

    useEffect(() => {
        if (selectedCitizen) {
            console.log(selectedCitizen)
        }
    }, [selectedCitizen]);

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/dashboard" element={<Dashboard citizens={citizens} />} />
                        <Route path="/citizens" element={<CitizensTable citizens={citizens} onSelectedCitizen={setSelectedCitizen} />} />
                        <Route path="/citizen/:id" element={<CitizenPage citizen={selectedCitizen} />} />
                    </Route>
                    <Route path="/" element={<MainLayout />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;