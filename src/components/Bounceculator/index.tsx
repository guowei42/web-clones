import { Box, Container } from "@mui/material";
import { useState } from "react";
import CalcDisplay from "./components/CalcDisplay";
import NumPad from "./components/NumPad";
import { Operation } from "./types/CalcQueue";

type DisplayStore = {
    prev: string;
    current: string;
};

const Bounceculator = () => {
    const [calcVal, setCalcVal] = useState<number>(0);
    const [display, setDisplay] = useState<DisplayStore>({
        prev: "",
        current: "0",
    });
    const [isReset, setIsReset] = useState<boolean>(true);

    const handleCalcVal = (num: number) => {
        if (isReset) {
            setCalcVal(num);
            setIsReset(false);
        } else {
            setCalcVal(calcVal * 10 + num);
        }
        setDisplay({ ...display, current: calcVal.toString() });
    };

    const addOpsToDisplay = (ops: Operation) => {};

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
                <CalcDisplay value={display.prev + display.current} />
                <NumPad
                    handleCalcVal={handleCalcVal}
                    handleReset={handleReset}
                    addOpsToDisplay={addOpsToDisplay}
                />
            </Box>
        </Container>
    );
};

export default Bounceculator;
