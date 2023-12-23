import { Box, Card, CardActionArea, CardHeader } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ideas } from "../../main";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const nav = useNavigate();

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
                            <CardActionArea
                                disabled={!cardItem.clickable}
                                onClick={() => nav(cardItem.nav)}
                            >
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
