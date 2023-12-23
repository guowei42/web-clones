import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <Container sx={{ flex: "1" }}>
                <Outlet />
            </Container>
        </Box>
    );
};

export default App;
