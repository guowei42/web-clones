import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";

const NumPad = () => {
    const [calcVal, setCalcVal] = useState<number>(0);

    return (
        <Grid container spacing={1}>
            <Grid xs={3}>
                <Button>C</Button>
            </Grid>
            <Grid xs={3}>
                <Button>AC</Button>
            </Grid>
            <Grid xs={3}>
                <Button>%</Button>
            </Grid>
            <Grid xs={3}>
                <Button>/</Button>
            </Grid>

            <Grid xs={3}>
                <Button>7</Button>
            </Grid>
            <Grid xs={3}>
                <Button>8</Button>
            </Grid>
            <Grid xs={3}>
                <Button>9</Button>
            </Grid>
            <Grid xs={3}>
                <Button>x</Button>
            </Grid>

            <Grid xs={3}>
                <Button>4</Button>
            </Grid>
            <Grid xs={3}>
                <Button>5</Button>
            </Grid>
            <Grid xs={3}>
                <Button>6</Button>
            </Grid>
            <Grid xs={3}>
                <Button>-</Button>
            </Grid>

            <Grid xs={3}>
                <Button>1</Button>
            </Grid>
            <Grid xs={3}>
                <Button>2</Button>
            </Grid>
            <Grid xs={3}>
                <Button>3</Button>
            </Grid>
            <Grid xs={3}>
                <Button>+</Button>
            </Grid>

            <Grid xs={6}>
                <Button>0</Button>
            </Grid>
            <Grid xs={3}>
                <Button>.</Button>
            </Grid>
            <Grid xs={3}>
                <Button>=</Button>
            </Grid>
        </Grid>
    );
};

export default NumPad;
