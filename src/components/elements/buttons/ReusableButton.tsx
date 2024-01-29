import { ReactHTMLElement } from "react";
import { CustomButton, CustomLink } from "../../../assets/styles";
import Icon from "../icons";

interface IProps {
  color: string;
  hovercolor: string;
  iconPadding: string;
  icon: any;
  text: string;
  textColor: string;
  routeLink: string;
  hoverTextColor?:string
}
function ReuseButton({
  color,
  hovercolor,
  iconPadding,
  icon,
  text,
  textColor,
  routeLink,
  hoverTextColor
}: IProps) {
  return (
    <CustomButton $background={color} $hoverbackground={hovercolor} $hoverTextColor={hoverTextColor}>
      <CustomLink $textColor={textColor} to={`${routeLink}`}>
        <Icon paddingValue={iconPadding}>{icon}</Icon>
        {text}
      </CustomLink>
    </CustomButton>
  );
}

export default ReuseButton;
