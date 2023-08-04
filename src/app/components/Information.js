"use client";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import RotatingCard from "./cards/RotatingCard";

import DefaultInfoCard from "./cards/InfoCards/DefaultInfoCard";
import { Button } from "@mui/material";

function Information() {
  return (
    <Box component="section" py={6} my={6}>
      <Container>
        <Grid
          container
          marginTop="4em"
          alignItems="center"
          item
          xs={10.5}
          spacing={3}
          sx={{ mx: "auto" }}
          className="features-section"
        >
          <div>
            <Typography
              display="block"
              variant="5"
              fontWeight="bold"
              mb={1.5}
              className="title"
            >
              What is Culinary Conference
            </Typography>
            <div>
              <Box className="features-list-section">
                <p>
                  CULINARY CONFERENCE is a delightful and mouthwatering theme
                  for a conference that celebrates the richness and diversity of
                  global cuisine. This event will be a feast for the senses,
                  bringing together food enthusiasts, chefs, food bloggers, and
                  culinary experts to explore and savor the flavors of various
                  cultures.
                </p>
              </Box>
            </div>
          </div>
        </Grid>

        <Grid
          container
          item
          xs={11}
          spacing={3}
          alignItems="center"
          sx={{ mx: "auto" }}
        >
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <Box
                display="flex"
                justifyContent="center"
                alignContent="center"
                borderRadius="lg"
                width="100%"
                position="relative"
                zIndex={2}
                className="front-rotating-card"
                sx={{
                  backgroundSize: "cover",
                  backfaceVisibility: "hidden",
                }}
              >
                <Box py={12} px={3} textAlign="center" lineHeight={1}>
                  <Typography variant="h3" color="white" gutterBottom>
                    Don&apos;t miss
                    <br />
                    out on this
                  </Typography>
                  <Typography variant="body2" color="white" opacity={0.8}>
                    This takes place twice per year, and gathers culinary
                    professionals from all over the world.
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="lg"
                position="absolute"
                width="100%"
                height="100%"
                top={0}
                left={0}
                zIndex={5}
                className="back-rotating-card"
                sx={{
                  backgroundSize: "cover",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <Box pt={12} pb={2} px={2} textAlign="center" lineHeight={1}>
                  <Typography variant="h3" color="white" gutterBottom>
                    Discover More
                  </Typography>
                  <Typography variant="body2" color="white" opacity={0.8}>
                    You will save a lot of time going from
                  </Typography>
                  <Box width="50%" mt={4} mb={2} mx="auto">
                    <Button
                      href="/sections/page-sections/page-headers"
                      target="_blank"
                      rel="noreferrer"
                      size="small"
                      fullWidth
                    >
                      start with header
                    </Button>
                  </Box>
                </Box>
              </Box>
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }} marginTop="3em">
            <Box>
              <Typography className="title" display="block" mb={1.5}>
                Key Features of the Conference:
              </Typography>
              <Box className="features-list-section">
                <p>
                  <span> Cooking Demonstrations:</span> Renowned chefs and
                  culinary experts from different countries will conduct live
                  cooking demonstrations, showcasing their traditional dishes
                  and cooking techniques. Attendees will have the opportunity to
                  learn new recipes and cooking tips directly from the masters.
                </p>
                <p>
                  <span>Food Tastings:</span> The conference will feature a wide
                  array of food stalls, each representing a different region or
                  country. Attendees can indulge in delicious food tastings,
                  sampling authentic dishes from various cultures. Culinary
                  Workshops: Interactive workshops will be conducted to provide
                  hands-on culinary experiences. Participants can learn how to
                  make signature dishes, regional delicacies, and international
                  favorites.
                </p>{" "}
                <p>
                  <span> Culinary Talks and Panel Discussions:</span> Engaging
                  talks and panel discussions will explore the cultural
                  significance of food, the history of culinary traditions, and
                  the art of fusion gastronomy. Experts will discuss how food
                  connects people and reflects the unique identity of each
                  culture.
                </p>{" "}
                <p>
                  {" "}
                  <span>Celebrity Chef Sessions:</span> Invited celebrity chefs
                  will share their culinary journey, insights, and experiences,
                  inspiring the audience with their stories of success and
                  passion for cooking.
                </p>{" "}
                <p>
                  <span> Global Food Market:</span> A bustling food market will
                  offer a diverse range of international ingredients, spices,
                  and condiments for attendees to purchase and experiment with
                  in their own kitchens.
                </p>{" "}
                <p>
                  <span>Culinary Competitions:</span> Fun and friendly cooking
                  competitions will challenge participants to prepare dishes
                  using mystery ingredients, adding an element of excitement and
                  creativity to the conference.
                </p>{" "}
                <p>
                  {" "}
                  <span> Cultural Entertainment: </span>The conference will
                  include cultural performances, showcasing music and dance from
                  different parts of the world, creating a festive and immersive
                  atmosphere. Chef&apos;s
                </p>{" "}
                <p>
                  <span> Table Experience:</span> Exclusive dining experiences
                  will be offered, where attendees can enjoy a specially curated
                  menu prepared by renowned chefs in an intimate setting.
                </p>
                <p>
                  <span> Food Photography and Blogging:</span> Workshops and
                  sessions on food photography and blogging will cater to food
                  enthusiasts who want to capture and share their culinary
                  experiences on social media.
                </p>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Information;
