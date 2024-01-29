import React from "react";
import {
  ColorDarkGreen,
  ColorGreen,
  ColorLightGreen,
  ColorWhite,
} from "../../../assets/styles/color";
import { saveIcon } from "../../../utils/icons";
import ReuseButton from "./ReusableButton";
import { Box } from "@mui/material";

function FormSaveButton({ buttonName }) {
  return (
    <Box maxWidth={200}>
      <ReuseButton
        color={ColorGreen}
        hovercolor={ColorDarkGreen}
        iconPadding={"0 5px"}
        icon={saveIcon}
        text={buttonName}
        textColor={ColorWhite}
        routeLink={""}
      />
    </Box>
  );
}

export default FormSaveButton;
