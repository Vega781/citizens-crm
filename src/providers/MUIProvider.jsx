import { ThemeProvider } from "@mui/material/styles"
import { RouterProvider } from "./RouterProvider"

export const MUIProvider = ({ theme, citizens, selectedCitizen, setSelectedCitizen }) => {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider citizens={citizens} selectedCitizen={selectedCitizen} setSelectedCitizen={setSelectedCitizen} />
        </ThemeProvider>
    )
}