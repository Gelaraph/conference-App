"use client";
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

import Link from "next/link";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import logoCT from "../../assets/logo-ct-dark.png";
import Image from "next/image";

const brand = { name: "Food Feast", image: logoCT, route: "/" };

const socials = [
  {
    icon: <FacebookIcon />,
    link: "fb",
  },
  {
    icon: <TwitterIcon />,
    link: "tw",
  },
  {
    icon: <GitHubIcon />,
    link: "gb",
  },
  {
    icon: <YouTubeIcon />,
    link: "yo",
  },
];

const menus = [
  {
    name: "company",
    items: [
      { name: "about us", href: "about" },
      { name: "freebies", href: "freebies" },
      { name: "blog", href: "blog" },
    ],
  },
  {
    name: "resources",
    items: [{ name: "illustrations", href: "illustrations" }],
  },
  {
    name: "help & support",
    items: [
      { name: "contact us", href: "contact-us" },
      {
        name: "sponsorships",
        href: "sponsorships",
      },
    ],
  },
  {
    name: "legal",
    items: [
      {
        name: "terms & conditions",
        href: "terms",
      },
      { name: "privacy policy", href: "privacy" },
      { name: "licenses", href: "license" },
    ],
  },
];

const date = new Date().getFullYear();

function DefaultFooter() {
  return (
    <Box component="footer" className="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} sx={{ ml: "auto", mb: 3 }}>
            <Box>
              <Link href={brand.route}>
                <Image
                  component="img"
                  src={brand.image}
                  alt={brand.name}
                  className="footer-img"
                  mb={2}
                />
              </Link>
              <Typography variant="h6">{brand.name}</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={3}>
              {socials.map(({ icon, link }, key) => (
                <Typography
                  key={link}
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="dark"
                  opacity={0.8}
                  mr={key === socials.length - 1 ? 0 : 2.5}
                >
                  {icon}
                </Typography>
              ))}
            </Box>
          </Grid>
          {menus.map(({ name: title, items }) => (
            <Grid key={title} item xs={6} md={2} sx={{ mb: 3 }}>
              <Typography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
              >
                {title}
              </Typography>
              <Box component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                {items.map(({ name, route, href }) => (
                  <Box key={name} component="li" p={0} m={0} lineHeight={1.25}>
                    {href ? (
                      <Typography
                        component="a"
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </Typography>
                    ) : (
                      <Typography
                        component={Link}
                        to={route}
                        variant="button"
                        fontWeight="regular"
                        textTransform="capitalize"
                      >
                        {name}
                      </Typography>
                    )}
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
          <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
            <Typography variant="button" fontWeight="regular">
              All rights reserved. Copyright &copy; {date} by {""}
              <Typography
                component="a"
                href="https://www.creative-tim.com"
                target="_blank"
                rel="noreferrer"
                variant="button"
                fontWeight="regular"
              >
                Gelaraph
              </Typography>
              .
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default DefaultFooter;
