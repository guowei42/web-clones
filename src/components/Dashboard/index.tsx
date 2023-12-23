import { Box, Card, CardActionArea, CardHeader } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const ideas: IdeaItem[] = [
    {
        title: "2048",
        clickable: false
    },
    {
        title: "Bounceculator",
        clickable: true
    },
    {
        title: "Cine2Nerdle",
        clickable: false
    },
    {
        title: "Github Profile Viewer",
        clickable: false
    },
    {
        title: "Pomodoro Timer",
        clickable: false
    },
    {
        title: "Recipe Roulette",
        clickable: false
    },
    {
        title: "Word Search",
        clickable: false
    },
    {
        title: "Wordle",
        clickable: false
    },
];


const Dashboard = () => {
    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
            }}
        >
            <Grid container spacing={{ xs: 2, md: 3 }}>
                {ideas.map((cardItem, index) => (
                    <Grid xs={3} key={index}>
                        <Card>
                            <CardActionArea disabled={!cardItem.clickable}>
                                <CardHeader title={cardItem.title} />
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Dashboard;
