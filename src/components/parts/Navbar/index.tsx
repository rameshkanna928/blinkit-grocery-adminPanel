import {
  CustomLink,
  FlexBox,
  FlexStart,
  ImgWrapper,
  NavContainer,
  NavWrapper,
  SearchWrapper,
} from "../../../assets/styles";
import { FiSearch } from "react-icons/fi";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { LuPieChart } from "react-icons/lu";
import { ColorGreen } from "../../../assets/styles/color";
import { AppLogo } from "../../../utils";
import CustomTooltip from "../../elements/tooltip/CustomTooltip";
import { Tooltip, Zoom } from "@mui/material";
import { text } from "stream/consumers";
function Navbar({ sideBarStatus }) {
  const idArr = [1, 2, 3];
  const params = useLocation();
  console.log("par", params);
  const posState = params?.pathname.includes("pos");

  return (
    <NavWrapper id="nav-wrapper">
      <NavContainer $open={sideBarStatus} $posStatus={posState}>
        <FlexStart style={{ columnGap: "20px",padding:"3px 15px" }}>
          {posState && (
            <>
              {/* <LuPieChart color={ColorGreen} size={25} /> */}
              <Tooltip
                TransitionComponent={Zoom}
                title={"Go To Dashboard"}
                placement="right"
                arrow
              >
                <CustomLink to={"/"}>
                  <ImgWrapper
                    $open={true}
                    alignItems={"center"}
                    direction={"row"}
                  >
                    <img src={AppLogo} alt="??" />
                  </ImgWrapper>
                </CustomLink>
              </Tooltip>
            </>
          )}

          <SearchWrapper>
            <FlexBox>
              <FiSearch />
            </FlexBox>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "0 5px",
                border: "none",
                outline: "none",
              }}
              placeholder="Search...."
            />
          </SearchWrapper>
        </FlexStart>
      </NavContainer>
    </NavWrapper>
  );
}

export default Navbar;
export const List = ({ toogle, id }) => {
  return (
    <li value={"true"}>
      list{" "}
      {id === toogle ? (
        <FaRegArrowAltCircleLeft />
      ) : (
        <FaRegArrowAltCircleRight />
      )}{" "}
    </li>
  );
};
