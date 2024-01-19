import { FiSearch } from "react-icons/fi";
import { CustomButton, CustomLink } from "../../../assets/styles";
import Icon from "../icons";
import {
  ColorBlack,
  ColorDarkGreen,
  ColorDullWhite,
  ColorGreen,
  ColorWhite,
  LessLightBlue,
} from "../../../assets/styles/color";

interface IProps {
  routeLink: string;
  onClick: () => void;
  theme: string;
}
function SearchButton({ routeLink, onClick, theme }: IProps) {
  return (
    <CustomButton
      onClick={onClick}
      $variant="search"
      $background={theme === "white" ? ColorDullWhite : ColorGreen}
      $hoverbackground={theme === "white" ? LessLightBlue : ColorDarkGreen}
    >
      <CustomLink
        $textColor={theme === "white" ? ColorBlack : ColorWhite}
        to={`${routeLink}`}
      >
        <Icon paddingValue={"3px"}>{<FiSearch size={20} />}</Icon>
        Search
      </CustomLink>
    </CustomButton>
  );
}

export default SearchButton;
