import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Operation } from "../types/CalcQueue";

const numPadData = [
    ["C", "AC", "%", Operation.DIVIDE],
    ["7", "8", "9", Operation.MULTIPLICATION],
    ["4", "5", "6", Operation.MINUS],
    ["1", "2", "3", Operation.ADD],
    ["0", ".", "="],
];


const NumPad = ({
    handleCalcVal,
    handleReset,
    addOpsToDisplay
}: {
    handleCalcVal: (num: number) => void;
    handleReset: () => void;
    addOpsToDisplay: (ops: Operation) => void
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
            {numPadData.flat().map((val) =>
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
