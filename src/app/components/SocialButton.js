import { Button } from "@mui/material";
import React from "react";

const SocialButton = (
  { children, color, size, iconOnly, circular, ...rest },
  ref
) => {
  // styles for the button with circular={true}
  const circularStyles = () => ({
    borderRadius: "50%",
  });

  // styles for the button with iconOnly={true}
  const iconOnlyStyles = () => {
    // width, height, minWidth, and minHeight values
    let sizeValue = "2.375rem";

    if (size === "small") {
      sizeValue = "1.0rem";
    } else if (size === "large") {
      sizeValue = "3.25rem";
    }

    // padding value
    let paddingValue = "0.6875rem 0.6875rem 0.625rem";

    if (size === "small") {
      paddingValue = "0.5625rem";
    } else if (size === "large") {
      paddingValue = "1.0rem";
    }
  };

  return (
    <Button
      borderRadius={circular && "50%"}
      variant="contained"
      color="primary"
      size={size}
      {...rest}
      ref={ref}
      iconOnly={iconOnly}
      circular={circular}
      {...(circular && circularStyles())}
      {...(iconOnly && iconOnlyStyles())}
    >
      {children}
    </Button>
  );
};

export default SocialButton;
