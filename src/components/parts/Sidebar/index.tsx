import { useEffect, useState } from "react";
import {
  ColorBlack,
  ColorDarkGray,
  ColorDullWhite,
  ColorGray,
  ColorGreen,
  ColorLightGray,
} from "../../../assets/styles/color";
import { RiArrowDropRightLine } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";
import {
  CustomSubList,
  FlexBox,
  FlexStart,
  ImgWrapper,
  LogoContainer,
  NumberTag,
  SectionHeader,
  SideBarContainer,
  SpanTag,
  SubMenuWrapper,
} from "../../../assets/styles";
import { AppLogo, AppNameLogo, sideBarList } from "../../../utils";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ISideBar } from "../../../GlobalInterface";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";

import { setCurrentRouteId } from "../../../redux/slices/SideBarSlice";
import CustomDrawer from "../../elements/CustomDrawer";
import { onSidebarClose } from "../../../redux/slices/DrawerSlide";

function index({ open, setOpen }: ISideBar) {
  const {
    sidebar: { curentRouteId },
    drawer: { sidebarOpen },
  } = useSelector((state) => state);
  const [hoverState, setHoverState] = useState(false);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  // console.log("RState",drawer);
  useEffect(() => {
    if (!open) {
      dispatch(setCurrentRouteId(null));
    }
  }, [open, hoverState]);
  useEffect(() => {
    if (open) {
      dispatch(setCurrentRouteId(Number(localStorage.getItem("routeId"))));
    }
  }, [open]);
  const renderChild = (variation) => {
    return (
      <SideBarContainer $open={open} $hover={hoverState}>
        <LogoContainer direction={"row"} justifyContent={"space-between"}>
          <FlexStart direction={"row"} padding={0} columnGap={"10px"}>
            <img src={AppLogo} alt="??" />

            <ImgWrapper $open={open || hoverState}>
              <NumberTag style={{ fontWeight: 700, fontSize: 24, margin: 0 }}>
                G<SpanTag>rostore</SpanTag>
              </NumberTag>
            </ImgWrapper>
          </FlexStart>

          {variation === "bigScreen" ? (
            (open || hoverState) && (
              <span className="CloseIcon">
                <IoIosArrowDropleftCircle
                  color={ColorGreen}
                  size={30}
                  onClick={() => {
                    setOpen((prev: boolean) => !prev);
                  }}
                />
              </span>
            )
          ) : (
            <IoCloseOutline
              onClick={() => dispatch(onSidebarClose())}
              size={25}
              color={ColorDarkGray}
            />
          )}
        </LogoContainer>

        <ul style={{ padding: 0 }}>
          {sideBarList.map((section, i) => (
            <React.Fragment key={i}>
              {section.sectionName && (
                <SectionHeader $open={open || hoverState}>
                  <span>___</span>
                  {(open || hoverState) && <li> {section.sectionName}</li>}
                </SectionHeader>
              )}

              {section?.List?.map((data, pi) =>
                data.subMenu ? (
                  <>
                    <FlexStart
                      direction={"row"}
                      key={pi}
                      $curRoute={pathname?.includes(data?.defaultURI)}
                      $Toogle={data.id === curentRouteId}
                      $open={open || hoverState}
                      onClick={function () {
                        if (curentRouteId === data.id) {
                          dispatch(setCurrentRouteId(null));
                        } else {
                          dispatch(setCurrentRouteId(data.id));
                        }
                        localStorage.setItem("routeId", data.id);
                      }}
                    >
                      <FlexBox
                        $routeIcon={pathname?.includes(data?.defaultURI)}
                      >
                        {" "}
                        {data?.icon}{" "}
                      </FlexBox>
                      <li>{data?.pageName}</li>
                      <FlexBox className="menu-Arrow">
                        {(open || hoverState) && (
                          <RiArrowDropRightLine
                            size={25}
                            color={
                              pathname?.includes(data?.defaultURI)
                                ? ColorGreen
                                : ColorLightGray
                            }
                          />
                        )}
                      </FlexBox>
                    </FlexStart>
                    <SubMenuWrapper $toogle={data.id === curentRouteId}>
                      {data?.subMenu?.map((subMenu, i, subMenuArr) => (
                        <Link to={subMenu.uri} key={i}>
                          <CustomSubList
                            $curRoute={
                              subMenu.uri === pathname ||
                              subMenu?.childRoutes?.includes(pathname)
                                ? true
                                : false
                            }
                          >
                            <span>-</span>
                            {subMenu.name}
                          </CustomSubList>
                        </Link>
                      ))}
                    </SubMenuWrapper>
                  </>
                ) : (
                  <Link to={data.uri}>
                    <FlexStart
                      direction={"row"}
                      $curRoute={
                        pathname === data.uri ||
                        data?.childRoutes?.includes(pathname)
                          ? true
                          : false
                      }
                      $Toogle={data.id === curentRouteId}
                      $open={open || hoverState}
                      onClick={function () {
                        if (curentRouteId === data.id) {
                          dispatch(setCurrentRouteId(null));
                        } else {
                          dispatch(setCurrentRouteId(data.id));
                        }
                        localStorage.setItem("routeId", data.id);
                      }}
                    >
                      <FlexBox $routeIcon={pathname === data.uri ||
                        data?.childRoutes?.includes(pathname)
                          ? true
                          : false}>
                        {" "}
                        {data?.icon}{" "}
                      </FlexBox>
                      <li>{data?.pageName}</li>
                      <FlexBox></FlexBox>
                    </FlexStart>
                  </Link>
                )
              )}
            </React.Fragment>
          ))}
        </ul>
      </SideBarContainer>
    );
  };

  return (
    <>
      <CustomDrawer
        position={"left"}
        open={sidebarOpen}
        onclose={() => dispatch(onSidebarClose())}
      >
        {renderChild("smallScreen")}
      </CustomDrawer>

      <div
        className="hideOn1000"
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
      >
        {renderChild("bigScreen")}
      </div>
    </>
  );
}

export default index;
