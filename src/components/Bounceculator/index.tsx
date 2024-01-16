import { Box, Container } from "@mui/material";
import { useState } from "react";
import CalcDisplay from "./components/CalcDisplay";
import NumPad from "./components/NumPad";

const Bounceculator = () => {
    const [display, setDisplay] = useState<string>("0");
    const [isReset, setIsReset] = useState<boolean>(true);

    const handleDisplay = (selection: string) => {
        if (isReset) {
            setDisplay(selection)
            setIsReset(false);
        } else {
            setDisplay((prev) => (prev + selection))
        }
    };

    const handleDelete = () => {
        if (!isReset) {
            setDisplay((prev) => (prev.slice(0, -1)))
        }
    };

    const handleResult = () => {
        setDisplay((prev) => {
            try {
                return eval(prev)
            } catch (error) {
                setIsReset(true);
                return "Error"
            }
            
        })
    };

    const handleReset = () => {
        setIsReset(true);
        setDisplay("0");
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
                <CalcDisplay value={display} />
                <NumPad
                    handleDisplay={handleDisplay}
                    handleReset={handleReset}
                    handleDelete={handleDelete}
                    handleResult={handleResult}
                />
            </Box>
        </Container>
    );
};

export default Bounceculator;
