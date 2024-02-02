import {
  ColorDarkGreen,
  ColorGreen,
  ColorWhite,
} from "../../../assets/styles/color";
import { saveIcon } from "../../../utils/icons";
import ReuseButton from "./ReusableButton";
import { Box } from "@mui/material";

interface IProps{
  buttonName:string
}
function FormSaveButton({ buttonName }:IProps) {
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
