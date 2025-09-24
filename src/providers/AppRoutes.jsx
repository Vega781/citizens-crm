import { Route, Routes, Navigate } from "react-router"
import { MainLayout } from "../layouts/MainLayout";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { CitizensTable } from "../pages/CitizensTable/CitizensTable";
import { CitizenPage } from "../pages/CitizenPage/CitizenPage";
import { ROUTES, BASE_PATH, REDIRECT_PATH } from "./Routes.config";

export const AppRoutes = ({ citizens, selectedCitizen, setSelectedCitizen }) => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path={ROUTES.DASHBOARD} element={<Dashboard citizens={citizens} />} />
                <Route path={ROUTES.CITIZENS} element={<CitizensTable citizens={citizens} onSelectedCitizen={setSelectedCitizen} />} />
                <Route path={ROUTES.CITIZEN} element={<CitizenPage citizen={selectedCitizen} />} />
            </Route>
            <Route path={ROUTES.ROOT} element={<Navigate to={REDIRECT_PATH} />} />
            <Route path={BASE_PATH} element={<Navigate to={REDIRECT_PATH} />} />
            <Route path={`${BASE_PATH}/`} element={<Navigate to={REDIRECT_PATH} />} />
        </Routes>
    )
}