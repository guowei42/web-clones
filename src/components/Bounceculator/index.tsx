import { Box, Container } from "@mui/material";
import { useState } from "react";
import CalcDisplay from "./components/CalcDisplay";
import NumPad from "./components/NumPad";

const Bounceculator = () => {
    const [calcVal, setCalcVal] = useState<number>(0);

    return (
        <Container
            sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box sx={{ border: "1px solid black" }}>
                <CalcDisplay value={calcVal} />
                <NumPad />
            </Box>
        </Container>
    );
};

export default Bounceculator;
