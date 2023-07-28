"use client";
import { forwardRef } from "react";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const MKBox = (
  {
    variant,
    bgColor,
    color,
    opacity,
    borderRadius,
    shadow,
    coloredShadow,
    ...rest
  },
  ref
) => {
  return (
    <Box
      {...rest}
      ref={ref}
      ownerState={{
        variant,
        bgColor,
        color,
        opacity,
        borderRadius,
        shadow,
        coloredShadow,
      }}
    />
  );
};

export default MKBox;
