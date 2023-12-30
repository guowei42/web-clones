import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const numPadData = [
    "C",
    "AC",
    "%",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
];

const NumPad = ({
    handleCalcVal,
    handleReset,
}: {
    handleCalcVal: (num: number) => void;
    handleReset: () => void;
}) => {
    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget.textContent;
        if (!value) {
            return;
        }
        if (value == "C") {
            handleReset();
        } else if (!isNaN(+value)) {
            handleCalcVal(Number(value));
        }
    };

    return (
        <Grid container spacing={1}>
            {numPadData.map((val) =>
                val === "0" ? (
                    <Grid xs={6}>
                        <Button onClick={handleButtonClick}>{val}</Button>
                    </Grid>
                ) : (
                    <Grid xs={3}>
                        <Button onClick={handleButtonClick}>{val}</Button>
                    </Grid>
                )
            )}
        </Grid>
    );
};

export default NumPad;
