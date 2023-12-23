import { Box, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";

const Bounceculator = () => {
    const [calcVal, setCalcVal] = useState<number>(0);

    return (
        <Box sx={{ width: "300px", border: "1px solid red" }}>
            <TextField
                disabled
                value={calcVal}
                fullWidth
                sx={{ border: "1px solid red" }}
            />
            <Grid container spacing={{ xs: 2, md: 3 }}>
                {Array.from(Array(9)).map((_, index) => (
                    <Grid
                        xs={4}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Button onClick={() => setCalcVal(index + 1)}>
                            {index + 1}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Bounceculator;
