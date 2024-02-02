import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import {
  CommonCard,
  CustomButton,
  FlexBetween,
  Heading2,
  SmallSpan,
  SpanTag,
  TableHeaderContainer,
} from "../../../assets/styles";
import ToogleButton from "../../../components/elements/buttons/ToogleButton";
import {
  ColorBlack,
  ColorDarkGreen,
  ColorGreen,
  ColorWhite,
} from "../../../assets/styles/color";
import ReuseButton from "../../../components/elements/buttons/ReusableButton";
import CustomTextInput from "../../../components/elements/inputs/CustomtextInput";

function Configurations() {
  const [formState, setFormState] = useState({
    sendMail: false,
    monthlySalary: false,
    orderCommission: false,
  });
  const handleToogle = (name, value) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
    console.log(formState);
  };
  return (
    <Stack width={"100%"} alignItems={"center"}>
      <Box maxWidth={"700px"} width={"100%"}>
        <CommonCard>
          <TableHeaderContainer>
            <Heading2 style={{ fontSize: 20, fontWeight: 600 }}>
              Deliveryman Configuration
            </Heading2>
          </TableHeaderContainer>
          <Stack p={2} width={"100%"}>
              <Stack rowGap={1}>
                <FlexBetween direction={"row"} width={"40%"}>
                  <SpanTag style={{ color: ColorBlack }}>Send Mail</SpanTag>
                  <ToogleButton
                    value={formState.sendMail}
                    onChange={(value: boolean) =>
                      handleToogle("sendMail", value)
                    }
                  />
                </FlexBetween>
                <FlexBetween direction={"row"} width={"40%"}>
                  <SpanTag style={{ color: ColorBlack }}>
                    Monthly Salary
                  </SpanTag>
                  <ToogleButton
                    value={formState.monthlySalary}
                    onChange={(value: boolean) => {
                      if (formState.orderCommission && value) {
                        setFormState((prev) => ({
                          ...prev,
                          orderCommission: false,
                        }));
                      }
                      handleToogle("monthlySalary", value);
                    }}
                  />
                </FlexBetween>
                <FlexBetween direction={"row"} width={"40%"}>
                  <SpanTag style={{ color: ColorBlack }}>
                    Per Order Commission
                  </SpanTag>
                  <ToogleButton
                    value={formState.orderCommission}
                    onChange={(value: boolean) => {
                      if (formState.monthlySalary && value) {
                        setFormState((prev) => ({
                          ...prev,
                          monthlySalary: false,
                        }));
                      }
                      handleToogle("orderCommission", value);
                    }}
                  />
                </FlexBetween>
                {!formState.monthlySalary && 
                <FlexBetween direction={"row"} width={"80%"}>
                  <SpanTag style={{ color: ColorBlack }}>
                    Commission Rate
                  </SpanTag>
                  <Stack maxWidth={"310px"} width={"100%"}>
                    <CustomTextInput
                      changeFunction={() => {}}
                      iconState={false}
                      type="number"
                      holderText=" "
                    />
                  </Stack>
                </FlexBetween>}
                <Box maxWidth={50}>
                  <CustomButton
                    $background={ColorGreen}
                    $hoverbackground={ColorDarkGreen}
                    style={{
                      color: ColorWhite,
                      padding: "10px 15px",
                      borderRadius: 4,
                    }}
                  >
                    Update
                  </CustomButton>
                </Box>
              </Stack>
          </Stack>
        </CommonCard>
      </Box>
    </Stack>
  );
}

export default Configurations;
