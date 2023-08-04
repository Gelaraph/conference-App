// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function DefaultInfoCard({
  color,
  icon,
  title,
  description,
  direction,
  small,
}) {
  return (
    <Box
      lineHeight={1}
      p={direction === "center" ? 2 : 0}
      textAlign={direction}
    >
      {typeof icon === "string" ? (
        <Typography
          display="block"
          variant={direction === "center" ? "h2" : "h3"}
          color={color}
        >
          <Icon>{icon}</Icon>{" "}
        </Typography>
      ) : (
        icon
      )}
      <Typography
        className="title"
        display="block"
        mt={direction === "center" ? 1 : 2}
        mb={1.5}
      >
        {title}
      </Typography>
      <Typography
        display="block"
        variant={small ? "button" : "body2"}
        color="text"
        pr={direction === "left" ? 6 : 0}
        pl={direction === "right" ? 6 : 0}
      >
        {description}
      </Typography>
    </Box>
  );
}

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  icon: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  direction: PropTypes.oneOf(["left", "right", "center"]),
  small: PropTypes.bool,
};

export default DefaultInfoCard;
