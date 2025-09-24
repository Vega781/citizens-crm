import { RouterProvider } from './providers/RouterProvider';
import { useCitizens } from './hooks/useCitizens';
import { MUIProvider } from './providers/MUIProvider';
import { theme } from './utils/theme';

function App() {
    const { citizens, selectedCitizen, setSelectedCitizen } = useCitizens(1000);

    return (
        <MUIProvider theme={theme} citizens={citizens} selectedCitizen={selectedCitizen} setSelectedCitizen={setSelectedCitizen} />
    );
}

export default App;