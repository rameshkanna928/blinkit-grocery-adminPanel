import { useEffect, useState } from "react";
import { ColorGreen, ColorLightGray } from "../../../assets/styles/color";
import { RiArrowDropRightLine } from "react-icons/ri";

import { useSelector } from "react-redux";
import {
  CustomSubList,
  FlexBox,
  FlexStart,
  ImgWrapper,
  LogoContainer,
  SectionHeader,
  SideBarContainer,
  SubMenuWrapper,
} from "../../../assets/styles";
import { AppLogo, AppNameLogo, sideBarList } from "../../../utils";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ISideBar } from "../../../GlobalInterface";
import React from "react";
import useRefContainer from "../../../Hooks/useRefContainer";
function index({ open, setOpen }: ISideBar) {
  const [hoverState, setHoverState] = useState(false);
  const [toogle, setToogle] = useState<number | null>(null);
  const { pathname } = useLocation();
  const stateValue = useSelector((state) => state);
  // console.log("stateValue", pathname);
 const {refHolder,pushrefFn} =useRefContainer();
  useEffect(() => {
    if (!open) {
      setToogle(null);
    }
  }, [open, hoverState]);
  return (
    <SideBarContainer
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      $open={open}
      $hover={hoverState}
    >
      <LogoContainer>
        <ImgWrapper $open={true}>
          <img src={AppLogo} alt="??" />
        </ImgWrapper>
        <ImgWrapper $open={open || hoverState}>
          <img src={AppNameLogo} alt="??" />
        </ImgWrapper>
        {(open || hoverState) && (
          <span className="CloseIcon">
            <IoIosArrowDropleftCircle
              color={ColorGreen}
              size={30}
              onClick={() => {
                setOpen((prev: boolean) => !prev);
              }}
            />
          </span>
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
                    key={pi}
                    $curRoute={Boolean(
                      data.subMenu.find((value) => value.uri === pathname)
                    )}
                    $Toogle={data.id === toogle}
                    $open={open || hoverState}
                    onClick={function () {
                      if (toogle === data.id) {
                        setToogle(null);
                      } else {
                        setToogle(data.id);
                      }
                      
                    }}
                  >
                    <FlexBox ref={(ref)=>pushrefFn(ref)}
                      $routeIcon={Boolean(
                        data.subMenu.find((value) => value.uri === pathname)
                      )}
                    >
                      {" "}
                      {data?.icon}{" "}
                    </FlexBox>
                    <li>{data?.pageName}</li>
                    <FlexBox className="menu-Arrow">
                      {(open || hoverState) && (
                        <RiArrowDropRightLine
                          size={25}
                          color={ColorLightGray}
                        />
                      )}
                    </FlexBox>
                  </FlexStart>
                  <SubMenuWrapper $toogle={data.id === toogle}>
                    {data?.subMenu?.map((subMenu, i) => (
                      <Link to={subMenu.uri} key={i}>
                        <CustomSubList $curRoute={pathname === subMenu.uri} >
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
                    $curRoute={pathname === data.uri}
                    $Toogle={data.id === toogle}
                    $open={open || hoverState}
                    onClick={function(){
                      if (toogle === data.id) {
                        setToogle(null);
                      } else {
                        setToogle(data.id);
                      }
                    }}
                  >
                    <FlexBox $routeIcon={pathname === data.uri}>
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
}

export default index;
