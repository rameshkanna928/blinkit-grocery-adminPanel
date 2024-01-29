import React, { useState } from "react";
import {
  CommonCard,
  CustomButton,
  CustomLink,
  FlexBetween,
  FlexBox,
  FlexStart,
  Heading2,
  Heading6,
  SearchWrapper,
} from "../../assets/styles";
import { Box, Grid, Stack } from "@mui/material";
import ReuseButton from "../../components/elements/buttons/ReusableButton";
import {
  ColorBlack,
  ColorDarkGray,
  ColorDullWhite,
  ColorGreen,
  ColorLightAsh,
  ColorLightGreen,
  ColorLightGreen2,
  ColorLightOrange,
  ColorLightOrange2,
  ColorOrange,
  ColorOrange2,
  ColorWhite,
} from "../../assets/styles/color";
import CustomDropDown from "../../components/elements/CustomDropDown";
import { IoMdArrowDropdown } from "react-icons/io";
import ToolDropdown from "../../components/toolbar/ToolDropdown";
import { editIcon, viewIcon } from "../../utils/icons";
import IconText from "../../components/elements/iconText";
import { GrLocation } from "react-icons/gr";
import SliderComponent from "../../components/sliders";
import CustomTextInput from "../../components/elements/inputs/CustomtextInput";
import { FiPlus } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { GoPersonAdd } from "react-icons/go";
import CustomSelect from "../../components/elements/inputs/CustomSelect";
function index() {
  const [curVariant, setCurVariant] = useState("categ");
  const variant = [
    { label: "Categories", value: "categ" },
    { label: "Brands", value: "brands" },
  ];
  return (
    <Grid container justifyContent={"space-between"} px={2}>
      <Grid item xs={7.9}>
        
        <Stack spacing={2}>
  
          <FlexBetween direction={"row"}>
            
            <FlexStart direction={"row"} padding={"10px 0"} margin={0}>
              {variant?.map((variant) => (
                <CustomButton
                  onClick={() => setCurVariant(variant.value)}
                  $background={
                    curVariant === variant.value ? ColorGreen : ColorWhite
                  }
                  $hoverbackground={
                    curVariant === variant.value ? ColorGreen : ColorWhite
                  }
                  style={{
                    color:
                      curVariant === variant.value ? ColorWhite : ColorGreen,
                    padding: "5px 15px",
                  }}
                >
                  {variant.label}
                </CustomButton>
              ))}
            </FlexStart>
            <CustomDropDown
              value={
                <CustomButton
                  style={{
                    padding: "10px",
                    backgroundColor: ColorWhite,
                    borderRadius: "3px",
                  }}
                >
                  Default Location
                  <IoMdArrowDropdown size={18} />
                </CustomButton>
              }
            >
              <div style={{ width: "100%", padding: "10px 0" }}>
                <IconText
                  icon={<GrLocation size={18} />}
                  startIcon={true}
                  text={"Default Location "}
                />
                <IconText
                  icon={<GrLocation size={18} />}
                  startIcon={true}
                  text={"Location Two"}
                />
              </div>
            </CustomDropDown>
          </FlexBetween>
          <SliderComponent />

          <FlexBetween direction={"row"}>
            <Heading2>All Listed Products</Heading2>
            <FlexBox maxWidth={"50%"} direction={"row"} columnGap={2}>
              <Box maxWidth={"200px"}>
                <CustomTextInput changeFunction={() => {}} iconState={true} />
              </Box>

              <CustomButton
                $background={ColorDullWhite}
                $hoverbackground={ColorLightAsh}
                style={{
                  padding: "12px 20px",
                  border: `1px solid ${ColorLightAsh}`,
                }}
              >
                Search
              </CustomButton>
              <CustomButton
                $background={ColorLightGreen}
                $hoverbackground={ColorGreen}
                $hoverTextColor={ColorWhite}
                style={{
                  padding: "12px 20px",
                  border: `1px solid ${ColorLightAsh}`,
                }}
              >
                <CustomLink
                  style={{ padding: 0 }}
                  $textColor={ColorGreen}
                  to={""}
                >
                  <FlexStart direction={"row"} p={0}>
                    <FiPlus />
                    Add item by Code
                  </FlexStart>
                </CustomLink>
              </CustomButton>
            </FlexBox>
          </FlexBetween>
        </Stack>
      </Grid>
      <Grid item xs={3.9}>
        <CommonCard direction={"row"} justifyContent={"space-between"} p={2}>
          <FlexBetween direction={"row"} >
            <Heading2>Billing Section</Heading2>
            <Stack direction={"row"} columnGap={1} >
              <CustomSelect
                width={"150px"}
                search={false}
                options={["Delivered", "Order Placed"]}
                formData={undefined}
                setFormData={() => {}}
                propertyName={undefined}
              />
              <CustomButton
                $background={ColorLightGreen2}
                style={{ padding: "5px 10px" }}
                $hoverTextColor={ColorWhite}
                $hoverbackground={ColorGreen}
              >
                <CustomLink
                  to={""}
                  $textColor={ColorGreen}
                  style={{ padding: 0 }}
                >
                  <FlexStart direction={"row"} p={0} m={0}>
                    <GoPersonAdd />
                    Customer
                  </FlexStart>
                </CustomLink>
              </CustomButton>
              <CustomButton 
                 
                $background={ColorLightOrange2}
                style={{ padding: "5px 10px",minWidth:"115px" }}
                $hoverTextColor={ColorWhite}
                $hoverbackground={ColorOrange2}
              >
                <CustomLink
                  to={""}
                  $textColor={ColorOrange2}
                  style={{ padding: 0 }}
                >
                  <FlexStart direction={"row"} p={0} m={0}>
                    <FiPlusCircle />
                    New Order
                  </FlexStart>
                </CustomLink>
              </CustomButton>
            </Stack>
          </FlexBetween>
        </CommonCard>
      </Grid>
    </Grid>
  );
}

export default index;
