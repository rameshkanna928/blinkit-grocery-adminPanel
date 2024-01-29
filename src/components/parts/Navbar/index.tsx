import {
  CustomLink,
  FlexBetween,
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
import {
  ColorBlack,
  ColorDarkGray,
  ColorGreen,
  ColorLightWhite,
  darkBodyBackground,
} from "../../../assets/styles/color";
import { AppLogo } from "../../../utils";
import CustomTooltip from "../../elements/tooltip/CustomTooltip";
import { Stack, Tooltip, Zoom } from "@mui/material";
import { text } from "stream/consumers";
import { RiMenuFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  onSidebarClose,
  onSidebarOpen,
} from "../../../redux/slices/DrawerSlide";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import {
  setGlobalTheme,
  toDark,
  toLight,
} from "../../../redux/slices/modeSlice";
import { useEffect } from "react";
function Navbar({ sideBarStatus }) {
  const idArr = [1, 2, 3];
  const params = useLocation();
  console.log("par", params);
  const posState = params?.pathname.includes("pos");
  const dispatch = useDispatch();
  const {
    mode: { status },
  } = useSelector((state) => state);
  console.log("mode", status);
  useEffect(() => {
    if (localStorage?.getItem("theme")) {
      dispatch(setGlobalTheme(localStorage?.getItem("theme")));
    }
  }, []);

  return (
    <NavWrapper id="nav-wrapper">
      <NavContainer
        $open={sideBarStatus}
        $posStatus={posState}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <FlexStart
          style={{ columnGap: "20px", padding: "3px 15px" }}
          direction={"row"}
          width={"70%"}
        >
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

          <Stack
            className="below1000"
            direction={"row"}
            alignItems={"center"}
            columnGap={1}
          >
            <RiMenuFill
              onClick={() => dispatch(onSidebarOpen())}
              color={ColorGreen}
              size={30}
            />
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
          </Stack>
          <SearchWrapper
            alignItems={"center"}
            direction={"row"}
            justifyContent={"center"}
          >
            <FlexBox>
              <FiSearch color={status ==="light"?ColorBlack:ColorDarkGray} />
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
        <FlexBox direction={"row"} justifyContent={"space-between"} padding={2}>
          {status === "light" && (
            <MdOutlineDarkMode
              size={25}
              onClick={() => {
                dispatch(toDark());
                localStorage.setItem("theme", "dark");
              }}
            />
          )}
          {status === "dark" && (
            <MdOutlineLightMode
               color={ColorLightWhite}
              size={25}
              onClick={() => {
                dispatch(toLight());
                localStorage.setItem("theme", "light");
              }}
            />
          )}
        </FlexBox>
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
