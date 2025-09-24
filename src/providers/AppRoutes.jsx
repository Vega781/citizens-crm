import { Route, Routes, Navigate } from "react-router"
import { MainLayout } from "../layouts/MainLayout";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { CitizensTable } from "../pages/CitizensTable/CitizensTable";
import { CitizenPage } from "../pages/CitizenPage/CitizenPage";

export const AppRoutes = ({ citizens, selectedCitizen, setSelectedCitizen }) => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/citizens-crm/dashboard" element={<Dashboard citizens={citizens} />} />
                <Route path="/citizens-crm/citizens" element={<CitizensTable citizens={citizens} onSelectedCitizen={setSelectedCitizen} />} />
                <Route path="/citizens-crm/citizen/:id" element={<CitizenPage citizen={selectedCitizen} />} />
            </Route>
            <Route path="/" element={<Navigate to="/citizens-crm/citizens" />} />
        </Routes>
    )
}