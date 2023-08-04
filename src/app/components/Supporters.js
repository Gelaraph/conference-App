// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Images
import appleLogo from "../assets/logos/gray-logos/logo-apple.svg";
import facebookLogo from "../assets/logos/gray-logos/logo-facebook.svg";
import nasaLogo from "../assets/logos/gray-logos/logo-nasa.svg";
import vodafoneLogo from "../assets/logos/gray-logos/logo-vodafone.svg";
import digitalOceanLogo from "../assets/logos/gray-logos/logo-digitalocean.svg";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Supporters = () => {
  return (
    <Container>
      <Divider />
      <Container className="sponsors-section">
        <Grid container spacing={3} justifyContent="center">
          <Typography variant="h4" className="title">
            Sponsored by
          </Typography>
        </Grid>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            <Image
              component="img"
              src={appleLogo}
              alt="Apple"
              className="supporter-logo"
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Image
              component="img"
              src={facebookLogo}
              alt="Facebook"
              className="supporter-logo"
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Image
              component="img"
              src={nasaLogo}
              alt="Nasa"
              className="supporter-logo"
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Image
              component="img"
              src={vodafoneLogo}
              alt="Vodafone"
              className="supporter-logo"
            />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <Image
              component="img"
              src={digitalOceanLogo}
              alt="DigitalOcean"
              className="supporter-logo"
            />
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </Container>
  );
};

export default Supporters;
