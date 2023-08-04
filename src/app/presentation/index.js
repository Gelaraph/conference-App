"use client";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";
import Counters from "../components/Counters";
import Information from "../components/Information";
import SocialButton from "../components/SocialButton";
import Supporters from "../components/Supporters";
import DefaultFooter from "../components/footer/DefaultFooter";
import Speaker from "../components/Speaker";
import PhotoGrid from "../components/PhotoGrid";
import RegisterModal from "../components/modals/RegisterModal";
import { useState } from "react";

const Presentation = () => {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCloseAlert = () => {
    setSuccess(false);
  };

  return (
    <>
      <Box
        minHeight="100vh"
        height="100%"
        width="100%"
        className="hero-div"
        sx={{
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            paddingTop: "10em",
          }}
        >
          <Container>
            <Grid
              container
              item
              xs={12}
              lg={9}
              justifyContent="center"
              mx="auto"
              textAlign="center"
              paddingBottom="5em"
            >
              <Typography variant="h3" color="white" mb={1}>
                THE BIGGEST CULINARY <br />
                CONFERENCE WORLDWIDE
              </Typography>
              <Typography
                variant="body1"
                color="white"
                textAlign="center"
                px={{ xs: 6, lg: 12 }}
                mt={1}
              >
                Celebrate the diversity of global cuisine, featuring cooking
                demonstrations, food tastings, and discussions about culinary
                traditions and fusion gastronomy. <br />
                <span className="hero-event-date">
                  August 11 - 14 | In-person Event
                </span>
              </Typography>

              <Box
                ml={{ xs: "auto", lg: 0 }}
                mt={{ xs: "2em", lg: "4em" }}
                className=" hero-btn"
              >
                <Box
                  ml={{ xs: "auto", lg: 0 }}
                  className="nav-btn-div  hero-btn"
                >
                  <Button
                    onClick={() => {
                      setOpenRegisterModal(true);
                    }}
                    size="big"
                    className="nav-btn"
                  >
                    Pre-register
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Card
        className="body-card"
        sx={{
          p: 2,
          mx: { xs: 3, lg: 10 },
          mt: -8,
          mb: 4,
          backdropFilter: "saturate(200%) blur(30px)",
        }}
      >
        <Counters />
        <Information />
        <Supporters />
        <Speaker />
        <PhotoGrid />
        <Box pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                lg={5}
                ml="auto"
                sx={{ textAlign: { xs: "center", lg: "left" } }}
              >
                <Typography variant="h4" fontWeight="bold" mb={0.5}>
                  Stay updated
                </Typography>
                <Typography variant="body1" color="text">
                  As we looking forward to having you!
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <SocialButton
                  // component="link"
                  href=""
                  target="_blank"
                  color="twitter"
                  className="social-icons"
                  sx={{ mr: 3 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </SocialButton>
                <SocialButton
                  component="a"
                  href=""
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                  className="social-icons"
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </SocialButton>
                <SocialButton
                  component="a"
                  href=""
                  target="_blank"
                  color="pinterest"
                  className="social-icons"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </SocialButton>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {openRegisterModal && (
          <RegisterModal
            open={openRegisterModal}
            success={success}
            setSuccess={setSuccess}
            onClose={() => setOpenRegisterModal(false)}
          />
        )}
      </Card>
      {success && (
        <Alert onClose={handleCloseAlert} className="register-success">
          Registered successfully!
        </Alert>
      )}
    </>
  );
};

export default Presentation;
