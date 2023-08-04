// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import Box from "@mui/material/Box";

// Material Kit 2 React examples
import DefaultCounterCard from "./cards/DefaultCounterCards";

function Counters() {
  return (
    <Box component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={3}>
            <DefaultCounterCard
              count={20}
              suffix="+"
              title="Speakers"
              description="Discussing how food connects people and reflects the unique identity of each culture"
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider
              orientation="vertical"
              sx={{ display: { xs: "none", md: "block" }, mx: 0 }}
            />
            <DefaultCounterCard
              count={1500}
              suffix="+"
              title="Food Lovers"
              description="From all over the globe will be in attendance"
            />
            <Divider
              orientation="vertical"
              sx={{ display: { xs: "none", md: "block" }, ml: 0 }}
            />
          </Grid>
          <Grid item xs={12} md={4} marginLeft="3em">
            <DefaultCounterCard
              count={100}
              suffix="+"
              title="Networking Opportunities"
              description="Culinary professionals and food enthusiasts can connect, share ideas, and potentially collaborate on future projects."
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Counters;
