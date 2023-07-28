"use client";
import { useState, useEffect } from "react";
import DefaultNavbarDropdown from "./DefaultNavbarDropdown";
import MenuIcon from "@mui/icons-material/Menu";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import Icon from "@mui/material/Icon";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import DefaultNavbarMobile from "./DefaultNavbarMobile";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import FeedIcon from "@mui/icons-material/Feed";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const navRoutes = [
  {
    name: "About",
    icon: <DashboardIcon />,
    columns: 1,
    rowsPerColumn: 2,
  },
  {
    name: "contact",
    icon: <PermContactCalendarIcon />,
  },
  {
    name: "blog",
    icon: <FeedIcon />,
  },
  {
    name: "events",
    icon: <CalendarMonthIcon />,
    href: "",
  },
];

// Material Kit 2 React base styles
// import breakpoints from "../base/breakpoints";
const breakpoints = {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 1199,
    xl: 1400,
    xxl: 1400,
  },
};

function DefaultNavbar() {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  const renderNavbarItems = navRoutes.map(({ name, icon, href }) => (
    <DefaultNavbarDropdown
      key={name}
      name={name}
      icon={icon}
      href={href}
      route={navRoutes}
    />
  ));

  return (
    <div className="navbar-wrapper">
      <Box className="nav-cont">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          className="nav-grid"
        >
          <Box component={Link} href="/" lineHeight={1}>
            <Typography variant="button" fontWeight="bold" className="logo">
              Food feast
            </Typography>
          </Box>
          <Box
            color="inherit"
            display={{ xs: "none", lg: "flex" }}
            ml="auto"
            className="nav-links"
          >
            {renderNavbarItems}
          </Box>

          <Box ml={{ xs: "auto", lg: 0 }} className="nav-btn-div">
            <Button component={Link} href="" size="small" className="nav-btn">
              Pre-register
            </Button>
          </Box>

          <Box
            display={{ xs: "inline-block", lg: "none" }}
            lineHeight={0}
            py={1.5}
            pl={1.5}
            sx={{ cursor: "pointer" }}
            onClick={openMobileNavbar}
          >
            <Icon fontSize="default">
              {mobileNavbar ? <RestaurantMenuIcon /> : <MenuIcon />}
            </Icon>
          </Box>
        </Box>

        <Box borderRadius="xl">
          {mobileView && (
            <DefaultNavbarMobile routes={navRoutes} open={mobileNavbar} />
          )}
        </Box>
      </Box>
    </div>
  );
}
export default DefaultNavbar;
