import { BrowserRouter } from "react-router"
import { AppRoutes } from "./AppRoutes"

export const RouterProvider = ({ citizens, selectedCitizen, setSelectedCitizen }) => {
    return (
        <BrowserRouter>
            <AppRoutes citizens={citizens} selectedCitizen={selectedCitizen} setSelectedCitizen={setSelectedCitizen} />
        </BrowserRouter>
    )
}