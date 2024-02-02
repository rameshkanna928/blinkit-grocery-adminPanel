import { Autocomplete, Stack, TextField } from "@mui/material";
import styled, { createGlobalStyle } from "styled-components";
import {
  ColorBlack,
  ColorDarkGray,
  ColorDarkGreen,
  ColorDullWhite,
  ColorGray,
  ColorGreen,
  ColorLightGray,
  ColorLightGreen,
  ColorRed,
  ColorWhite,
  HeaderShadow,
  LessLightBlue,
  LightBorderColor,
} from "./color";
import { StyleProps } from "./interface";
import { Link } from "react-router-dom";

//GS
export const GlobalStyles = createGlobalStyle`
body{
  background:${({ theme }) => theme.bodyBackground};
  margin:0;
}
.slick-prev,
.slick-next {
  display: block;
  background-size: 15px 15px;
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 50%;
  width: 20px !important;
  height: 20px !important;
}
.slick-prev:before,
.slick-next:before {
  content: "";
  font-size:30px !important;
  color:${ColorGreen} !important;
}
.slick-prev {
  background-image: url(https://cdn-icons-png.flaticon.com/512/271/271220.png);
  left: -14px !important;
  z-index:1;
}

.slick-arrow.slick-prev.slick-disabled {
  display: none !important;
}
.slick-arrow.slick-next.slick-disabled {
  display: none !important;
}
.slick-next {
  background-image: url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-ndgxz&psig=AOvVaw1af4krEEM-TMR0ScUDDSb6&ust=1706617205411000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDm59nKgoQDFQAAAAAdAAAAABAD) !important;
  right: 12px !important;
}
.MuiTooltip-tooltip.MuiTooltip-tooltipArrow.MuiTooltip-tooltipPlacementTop{
  background-color:${ColorBlack};
  color:${ColorWhite};
}
.MuiTooltip-arrow::before{
    color:${ColorBlack};
  
}
`;

//navbar
export const NavWrapper = styled(Stack)`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.partBackground};
  width: 100%;
  box-shadow: ${HeaderShadow};
  z-index: 2;
  .below1000 {
    display: none;
    @media only screen and (max-width: 1000px) {
      display: flex;
    }
  }
`;
export const NavContainer = styled(Stack)<StyleProps>`
  transition: ${(props) => (props?.$posStatus ? "none" : "all 0.5s")};
  margin: ${(props) =>
    props?.$posStatus
      ? "3px 0 0 20px"
      : props.$open
      ? "3px 0 0 270px"
      : "3px 0 0 90px"};
  @media only screen and (max-width: 1000px) {
    margin: ${(props) =>
      props?.$posStatus
        ? "9.5px 0 9.5px 0"
        : props.$open
        ? "9.5px 0 9.5px 0"
        : "9.5px 0 9.5px 0"};
  }
`;

export const FlexBox = styled(Stack)<{ $routeIcon?: boolean }>`
  align-items: center;
  justify-content: center;
  .GIcon {
    color: ${({ theme }) => theme?.svgColor};
  }

  ${(props) =>
    props?.$routeIcon !== undefined &&
    `svg{
    color:${props?.$routeIcon ? ColorGreen : ColorLightGray};
    width:20px;
    height:20px;
    margin-right:3px;
  }`}
`;

export const SearchWrapper = styled(FlexBox)<{
  $focusState: boolean;
  $Variant: string;
}>`
  width: 100%;
  justify-content: flex-start;
  ${(props) =>
    props?.$Variant === "productsSearch" &&
    `border: ${
      props.$focusState ? `1px solid ${ColorGreen} ` : props?.theme?.cardBorder
    };
  padding:0 10px;
  border-radius: 4px;
  transition: all 0.7s; 
background-color:${props.theme.inputBackground};
  `}

  input {
    width: 100%;
    padding: 0 5px;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${ColorDarkGray};
    min-height: 40px;
    cursor: pointer;
    min-width: 200px;
  }
`;
export const ImgWrapper = styled(Stack)<StyleProps>`
  ${(props) =>
    `visibility:${props?.$open ? "visible" : "hidden"};
opacity:${props.$open ? 1 : 0};
display:${props?.$open ? "flex" : "none"} !important;
transition:all .4s;
`}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

//sideBar
export const LogoContainer = styled(FlexBox)`
  position: relative;
  padding: 20px 10px;
  justify-content: flex-start;
  column-gap: 10px;
  box-shadow: ${HeaderShadow};
  .CloseIcon {
    position: absolute;
    top: 15px;
    right: -14px;
  }
`;
export const SideBarContainer = styled(Stack)<StyleProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: ${(props) => (props.$open || props.$hover ? "250px" : "70px")};
  height: 100vh;
  transition: all 0.5s;
  box-shadow: ${HeaderShadow};
  background-color: ${({ theme }) => theme.partBackground};
  display: flex !important;
  z-index: 3;
  ul {
    height
  }
`;
export const Rounded = styled.div`
  display: flex;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  padding: 10px;
`;
export const FlexStart = styled(FlexBox)<StyleProps>`
  position:relative;
  justify-content: flex-start;
  padding: 10px 15px;
  margin: 0 8px;
  border-radius: 4px;
  column-gap: 5px;
   background-color: ${(props) => props?.$curRoute && ColorLightGreen};
  position: relative;
  transition: all 0.3s;
  li {
    color: ${(props) => (props?.$curRoute ? ColorGreen : ColorLightGray)} ;
    font-size: 14px;
    ${(props) =>
      props.$open !== undefined &&
      `visibility: ${props.$open ? "visible" : "hidden"};
    opacity: ${props.$open ? 1 : 0};`}
    
    transition:all .4s;
  }
  .menu-Arrow{
    position:absolute;
    right:5px;
    ${(props) => props?.$Toogle && "transform:rotate(90deg);"}
    transition: all 0.4s;

`;
export const FlexBetween = styled(FlexBox)`
  width: 100%;
  justify-content: space-between !important;
`;
export const SubMenuWrapper = styled.ul<StyleProps>`
  max-height: ${(props) => (props?.$toogle ? "100%" : 0)};
  overflow: hidden;
  transition: ${(props) => (props?.$toogle ? "all 1.2s" : "all 0.4s")};
  li {
    font-size: 12px;
    padding: 10px 0;
    color: ${ColorLightGray};
    span {
      margin: 0 10px 0 0;
    }
  }
`;
export const SectionHeader = styled(Stack)<StyleProps>`
  margin-top: 10px;
  padding: 10px 0;
  column-gap: 15px;
  flex-direction: row !important;
  font-size: 12px;
  transform: ${(props) => !props?.$open && "translateX(20px)"};
  color: ${ColorLightGray};
`;
//App
export const ChildWrapper = styled(Stack)<StyleProps>`
  margin: ${(props) =>
    props?.$Pos
      ? "65px auto 0 20px"
      : props?.$open
      ? "65px auto 0 250px"
      : "65px auto 0 70px"};
  transition: all 0.5s;
  min-height: 84vh;
  justify-content: flex-start !important;
  @media only screen and (max-width: 1000px) {
    margin: ${(props) => (props?.$open ? "60px auto 0 0" : "60px auto 0 0")};
  }
`;
export const ChildContainer = styled.div<StyleProps>`
  max-width: ${(props) => (props?.$Pos ? "100%" : "1300px")};
  margin: 15px auto 0 auto;
  display: flex;
  width: 100%;
  @media only screen and (max-width: 1000px) {
    max-width: 100%;
  }
`;
export const CustomSubList = styled.li<StyleProps>`
  list-style: none;
  font-size: 12px;
  padding: 10px 0;
  color: ${(props) =>
    props?.$curRoute ? `${ColorGreen} !important` : ColorDarkGray};
  span {
    margin: 0 10px 0 0;
  }
  &:hover {
    color: ${ColorGreen} !important;
  }
`;
export const CommonCard = styled(Stack)`
  background-color: ${({ theme }) => theme.partBackground};
  border-radius: 6px;
  border:  ${({ theme }) => theme.cardBorder};
  width: 100%;
  
  }
`;
export const CommonContainer = styled(Stack)`
  width: 100%;
  gap: 20px;
`;
export const PageHeader = styled(CommonCard)`
  padding: 20px;
`;
export const Heading2 = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.blackText};
  margin: 0;
  span {
    color: ${ColorRed};
  }
`;
export const Heading6 = styled.h6`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.blackText};
  margin: 0;
`;
export const SpanTag = styled.span`
  font-size: 14px;
  color: ${ColorGray};
`;
export const SmallSpan = styled(SpanTag)`
  font-size: 12px;
`;

export const NumberTag = styled.h4`
  font-size: 21px;
  color: ${({ theme }) => theme.blackText};
  margin: 4px 0;
  font-weight: 600;
  span {
    font-size: 20px;
    color: ${({ theme }) => theme.blackText};
  }
`;
export const CountTag = styled(NumberTag)`
  font-size: 14px;
`;
export const CustomLink = styled(Link)<{ $textColor?: string }>`
  text-decoration: none;
  color: ${(props) => props?.$textColor};
  svg {
    height: 18px;
    width: 18px;
  }
`;
export const CustomButton = styled.button<{
  $background?: string;
  $hoverbackground?: string;
  $variant?: string;
  $hoverTextColor?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  cursor: pointer;
  transition: all 0.7s;

  ${CustomLink} {
    padding: ${(props) =>
      props?.$variant === "search" ? "6px 15px" : "12px 20px"};
  }

  @media only screen and (max-width: 1000px) {
    ${CustomLink} {
      padding: ${(props) => (props?.$variant === "search" ? "12px" : "12px")};
    }
  }
  border: 1px solid transparent;
  background-color: ${(props) => props?.$background};
  border-radius: 6px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background-color: ${(props) => props?.$hoverbackground};
    ${CustomLink} {
      color: ${(props) => props?.$hoverTextColor};
      svg {
        color: ${(props) => props?.$hoverTextColor};
      }
    }
  }
`;

export const ButtonGray = styled(CustomButton)`
  background-color: ${ColorDullWhite};
  border: 1px solid ${LessLightBlue};
  &:hover {
    background-color: ${LessLightBlue};
    ${CustomLink} {
      color: ${({ theme }) => theme.blackText};
    }
  }
`;
export const CustomSelectInput = styled(Autocomplete)<StyleProps>`
  border-radius: ${(props) => (props?.$open ? "6px 6px 0 0" : "6px")};
  border: ${({ theme }) => theme.cardBorder};
  width: 100%;
  background: ${(props) =>
    props?.$disabled
      ? props?.theme.disableInputBackground
      : props?.theme.inputBackground};
      user-select:none;
`;
export const MUISELECT = styled(TextField)``;
export const ButtonGreen = styled(CustomButton)`
  background-color: ${ColorGreen};
  ${CustomLink} {
    color: ${ColorWhite};
  }
  &:hover {
    background-color: ${ColorDarkGreen};
  }
`;
export const ButtonTransparent = styled(CustomButton)`
  background-color: transparent;
  color: ${({ theme }) => theme.blackText};
  padding: 0;
  a {
    column-gap: 2px;
  }
  ${CustomLink} {
    color: ${ColorGray};
  }
  &:hover {
    background-color: transparent;
    ${CustomLink} {
      color: ${ColorGray};
    }
  }
`;
export const PageHeaderToolbar = styled(FlexBox)`
  column-gap: 10px;
`;

//dashboard

export const SmallChartContainer = styled.div`
  width: 100%;
  height: 30vh;
`;
export const SalesCard = styled(FlexBox)`
  margin: 20px;
  gap: 10px;
`;
export const RoundedIcons = styled(FlexBox)<{ $background?: string }>`
  border-radius: 50%;
  padding: 10px;
  background-color: ${(props) => props?.$background};
  svg {
    width: 30px;
    height: 30px;
  }
`;
export const ParentStack = styled(Stack)`
  row-gap: 20px;
  width: 100%;
`;
//table
export const TableHeaderContainer = styled(PageHeader)`
  padding: 20px;
  background-color: #454f5b08;
  border-radius: 4px 4px 0 0;
`;
export const TableSpan = styled(SmallSpan)`
  color: ${ColorDarkGray};
`;
export const TableNumberTag = styled(NumberTag)`
  font-size: 14px;
  color: ${ColorDarkGray};
`;
//Footer
export const FooterContainer = styled(FlexBetween)<{ $open: string }>`
  background-color: ${({ theme }) => theme.partBackground};

  margin-top: 20px;
  transition: all 0.5s;
  padding: 20px;
  div {
    margin-left: ${(props) => (props?.$open ? "230px" : "30px")};
    transition: all 0.5s;
  }
`;
//space
export const SpaceContainer = styled(FlexBox)<{ $space: string }>`
  height: ${(props) => props?.$space};
`;
//form
export const InputLabel = styled(SpanTag)`
  color: ${ColorDarkGray};
  font-weight: 500;
  span {
    color: ${ColorRed};
  }
`;
export const CustomTextArea = styled.textarea`
  width: 100%;
  resize: vertical;
  outline: 0;
  border: 1px solid ${LightBorderColor};
  padding: 10px;
  min-height: 40px;
  max-height: 100%;
  transition: border 0.7s;
  border-radius: 6px;
  background: ${({ theme }) => theme.inputBackground};
  &:focus {
    border: 1px solid ${ColorGreen};
  }
`;
