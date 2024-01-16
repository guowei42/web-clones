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
    handleDisplay,
    handleReset,
    handleDelete,
    handleResult
}: {
    handleDisplay: (selection: string) => void;
    handleReset: () => void;
    handleDelete: () => void;
    handleResult: () => void;
}) => {
    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget.textContent;
        if (value == "C") {
            handleReset();
        } else if (value == "AC") {
            handleDelete();
        } else if (value == "=") {
            handleResult();
        } else if (value) {
            handleDisplay(value);
        }
    };

    return (
        <Grid container spacing={1}>
            {numPadData.flat().map((val, index) =>
                val === "0" ? (
                    <Grid xs={6} key={index}>
                        <Button onClick={handleButtonClick}>{val}</Button>
                    </Grid>
                ) : (
                    <Grid xs={3} key={index}>
                        <Button onClick={handleButtonClick}>{val}</Button>
                    </Grid>
                )
            )}
        </Grid>
    );
};

export default NumPad;
