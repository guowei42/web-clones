import { Box, Container } from "@mui/material";
import { useState } from "react";
import CalcDisplay from "./components/CalcDisplay";
import NumPad from "./components/NumPad";

const Bounceculator = () => {
    const [calcVal, setCalcVal] = useState<number>(0);
    const [isReset, setIsReset] = useState<boolean>(true);

    const handleCalcVal = (num: number) => {
        if (isReset) {
            setCalcVal(num);
            setIsReset(false);
        } else {
            setCalcVal(calcVal * 10 + num);
        }
    };

    const handleReset = () => {
        setIsReset(true);
        setCalcVal(0);
    };

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
                <NumPad handleCalcVal={handleCalcVal} handleReset={handleReset} />
            </Box>
        </Container>
    );
};

export default Bounceculator;
