import React, { useState } from "react";
import {
  CommonCard,
  CommonContainer,
  CustomButton,
  FlexBox,
  Heading2,
  PageHeader,
  ParentStack,
  SmallSpan,
  SpanTag,
  TableHeaderContainer,
} from "../../../assets/styles";
import PageHeaderComponent from "../../../components/parts/pageheader";
import { Box, InputLabel, Stack } from "@mui/material";
import InputContainer from "../../../components/elements/InputContainer";
import CustomSelect from "../../../components/elements/inputs/CustomSelect";
import { MonthOptions } from "../../../utils";
import {
  ColorDarkGreen,
  ColorDarkGreen2,
  ColorDarkRed,
  ColorGreen,
  ColorGreen2,
  ColorRed,
  ColorWhite,
} from "../../../assets/styles/color";
import ReuseButton from "../../../components/elements/buttons/ReusableButton";
import CustomTextInput from "../../../components/elements/inputs/CustomtextInput";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const InfinityInputContainer = ({ arr, setArr }) => {
  return (
    <>
      {arr.map((allowance, ind) => {
        const optional = allowance?.optional ?? null;
        return (
          <Stack direction={"row"} spacing={2}>
            {allowance.id}
            <Stack width={"60%"}>
              <SpanTag>Title</SpanTag>
              <CustomTextInput
                changeFunction={() => {}}
                iconState={false}
                holderText=" "
              />
            </Stack>
            <Stack
              direction={"row"}
              width={"40%"}
              justifyContent={"space-between"}
            >
              <Stack width={optional ? "50%" : "100%"}>
                <SpanTag>Amount</SpanTag>
                <CustomTextInput
                  changeFunction={() => {}}
                  iconState={false}
                  type="number"
                  holderText=" "
                />
              </Stack>
              {optional && (
                <Stack justifyContent={"end"}>
                  <CustomButton
                    onClick={() => {
                      const copyArr = [...arr];

                      let fliterdArr = copyArr.filter(
                        (value) => value.id !== allowance?.id
                      );
                      console.log(fliterdArr);

                      setArr(fliterdArr);
                    }}
                    style={{ padding: "10px 20px" }}
                    $background={ColorRed}
                    $hoverbackground={ColorDarkRed}
                  >
                    <RiDeleteBinLine color={ColorWhite} />
                  </CustomButton>
                </Stack>
              )}
            </Stack>
          </Stack>
        );
      })}
    </>
  );
};
const handleAddObj = (arr, setArr) => {
  const copyArr = [...arr];
  copyArr.push({
    optional: true,
    id: copyArr.length + 1,
  });
  setArr(copyArr);
};
function DeliverymanPayroll() {
  const [allowancesFormDatas, setAllowancesFormDatas] = useState([
    { id: 1 },
    { id: 2 },
  ]);
  const [deductedFormDatas, setDeductedFormDatas] = useState([
    { id: 1 },
    { id: 2 },
  ]);
  return (
    <ParentStack>
      <PageHeaderComponent pageName="Payroll" />
      <CommonCard>
        <TableHeaderContainer>
          <Stack width={"100%"} direction={"row"} gap={4}>
            <Stack width={"20%"}>
              <SpanTag>Select deliveryman</SpanTag>
              <CustomSelect
               type={"HTML"}
                width={"100%"}
                search={false}
                options={["person name"]}
                formData={undefined}
                setFormData={() => {}}
                propertyName={undefined}
              />
            </Stack>
            <Stack width={"20%"}>
              <SpanTag>Select month</SpanTag>
              <CustomSelect
               type={"HTML"}
                width={"100%"}
                search={false}
                options={MonthOptions}
                formData={undefined}
                setFormData={() => {}}
                propertyName={undefined}
              />
            </Stack>
            <Stack justifyContent={"flex-end"}>
              <ReuseButton
                color={ColorGreen}
                hovercolor={ColorDarkGreen}
                iconPadding={""}
                icon={undefined}
                text={"generate"}
                textColor={ColorWhite}
                routeLink={""}
              />
            </Stack>
          </Stack>
        </TableHeaderContainer>
        <ParentStack p={2}>
          <Stack>
            <CommonCard>
              <TableHeaderContainer>
                <Heading2>salary info</Heading2>
              </TableHeaderContainer>
              <Stack direction={"row"} p={2} spacing={3}>
                <Stack width={"50%"}>
                  <SpanTag>Basic salary</SpanTag>
                  <CustomTextInput
                    changeFunction={() => {}}
                    iconState={false}
                    holderText=" "
                    type="number"
                  />
                </Stack>
                <Stack width={"50%"}>
                  {" "}
                  <SpanTag>Status</SpanTag>
                  <CustomSelect
                    type={"HTML"}
                    width={"100%"}
                    search={false}
                    options={["Pending", "Paid"]}
                    formData={undefined}
                    setFormData={function (name: string, data: string): void {
                      throw new Error("Function not implemented.");
                    }}
                    propertyName={undefined}
                  />
                </Stack>
              </Stack>
            </CommonCard>
          </Stack>
          <Stack>
            <Stack direction={"row"} spacing={3}>
              <Stack width={"50%"}>
                <TableHeaderContainer
                  direction={"row"}
                  justifyContent={"space-between"}
                >
                  <Heading2>Alllowances</Heading2>
                  <CustomButton
                    onClick={() =>
                      handleAddObj(allowancesFormDatas, setAllowancesFormDatas)
                    }
                    style={{ padding: "10px 20px" }}
                    $background={ColorGreen2}
                    $hoverbackground={ColorDarkGreen2}
                  >
                    <FiPlusCircle color={ColorWhite} size={20} />
                  </CustomButton>
                </TableHeaderContainer>
                <CommonCard p={2}>
                  <Stack rowGap={1}>
                    <InfinityInputContainer
                      arr={allowancesFormDatas}
                      setArr={setAllowancesFormDatas}
                    />
                  </Stack>
                </CommonCard>
              </Stack>
              <Stack width={"50%"}>
                <TableHeaderContainer
                  direction={"row"}
                  justifyContent={"space-between"}
                >
                  <Heading2>Deduction</Heading2>
                  <CustomButton
                    onClick={() =>
                      handleAddObj(deductedFormDatas, setDeductedFormDatas)
                    }
                    style={{ padding: "10px 20px" }}
                    $background={ColorRed}
                    $hoverbackground={ColorDarkRed}
                  >
                    <FiMinusCircle color={ColorWhite} size={20} />
                  </CustomButton>
                </TableHeaderContainer>
                <CommonCard p={2}>
                  <Stack rowGap={1}>
                    <InfinityInputContainer
                      arr={deductedFormDatas}
                      setArr={setDeductedFormDatas}
                    />
                  </Stack>
                </CommonCard>
              </Stack>
            </Stack>
          </Stack>
          <Stack width={"100%"} alignItems={"flex-end"}>
            <Stack width={"35%"}>
              <TableHeaderContainer
                direction={"row"}
                justifyContent={"space-between"}
              >
                <Heading2>Gross salary</Heading2>
              </TableHeaderContainer>
              <CommonCard p={2}>
                <Stack rowGap={1}>
                  <Stack>
                    <SpanTag>Total allowances</SpanTag>
                    <CustomTextInput
                      changeFunction={() => {}}
                      iconState={false}
                      holderText=" "
                      type="number"
                    />
                  </Stack>
                  <Stack>
                    <SpanTag>Total deductions</SpanTag>
                    <CustomTextInput
                      changeFunction={() => {}}
                      iconState={false}
                      holderText=" "
                      type="number"
                    />
                  </Stack>
                  <Stack>
                    <SpanTag>Net salary</SpanTag>
                    <CustomTextInput
                      changeFunction={() => {}}
                      iconState={false}
                      holderText=" "
                      type="number"
                    />
                  </Stack>
                  <Box maxWidth={"100px"} mt={2}>
                    <CustomButton
                      $background={ColorGreen}
                      $hoverbackground={ColorDarkGreen}
                      style={{ color: ColorWhite, padding: "10px 15px" }}
                    >
                      Create
                    </CustomButton>
                  </Box>
                </Stack>
              </CommonCard>
            </Stack>
          </Stack>
        </ParentStack>
      </CommonCard>
    </ParentStack>
  );
}

export default DeliverymanPayroll;
