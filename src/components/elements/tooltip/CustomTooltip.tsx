import { Button, Stack, Tooltip, Zoom } from "@mui/material";
import { CustomLink } from "../../../assets/styles";

interface IProps {
  text: any;
  tipText: string;
}
function CustomTooltip({ text, tipText }: IProps) {
  return (
    <Tooltip TransitionComponent={Zoom} title={tipText} placement="top" arrow>
      < span>{text}</span>
    </Tooltip>
  );
}

export default CustomTooltip;
