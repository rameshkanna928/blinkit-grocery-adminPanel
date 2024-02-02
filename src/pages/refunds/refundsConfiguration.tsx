import CustomTextInput from "../../components/elements/inputs/CustomtextInput";
import { saveIcon } from "../../utils/icons";
import useRefContainer from "../../Hooks/useRefContainer";
import CustomSelect from "../../components/elements/inputs/CustomSelect";
import { Stack, Box } from "@mui/material";
import { ParentStack, PageHeader, Heading2, SpanTag, SpaceContainer, InputLabel } from "../../assets/styles";
import { ColorGreen, ColorDarkGreen, ColorWhite } from "../../assets/styles/color";
import ReuseButton from "../../components/elements/buttons/ReusableButton";
import PageHeaderComponent from "../../components/parts/pageheader";
import ProgressPageContainer from "../../components/progressPageContainer";
import { EnableRefundOptions, ProgressValueArrContainer } from "../../utils";

function RefundsConfigurations() {

  const { refHolder, pushrefFn } = useRefContainer();
  return (
    <ParentStack>
      <PageHeaderComponent pageName={"Refund Configurations"}>
        <></>
      </PageHeaderComponent>
      <ProgressPageContainer
        progressValArr={ProgressValueArrContainer.refundConfigurations}
        refHolder={refHolder}
        progressName={"Refund Information"}
      >
        <div ref={(el) => pushrefFn(el)}>
            <ParentStack>
              <PageHeader>
                <Stack spacing={2} width={"100%"}>
                  <Heading2>Basic Information</Heading2>
                  <Stack rowGap={1}>
                    <InputLabel> Allow Refund Within Days</InputLabel>
                    <CustomTextInput
                      changeFunction={()=>{}}
                      iconState={false}
                      holderText={"Type refund days"}
                      type="number"

                    />
                  </Stack>
                  <Stack rowGap={1}>
                    <InputLabel> Enable Refund System</InputLabel>
                    <CustomSelect
                      width={"100%"}
                      search={true}
                      options={EnableRefundOptions}
                      formData={undefined}
                      setFormData={() => {}}
                      propertyName={undefined}
                    />
       
                  </Stack>
                </Stack>
              </PageHeader>
              <Box >
                <ReuseButton
                  color={ColorGreen}
                  hovercolor={ColorDarkGreen}
                  iconPadding={"0 5px"}
                  icon={saveIcon}
                  text={"Save Configurations"}
                  textColor={ColorWhite}
                  routeLink={""}
                />
              </Box>
            </ParentStack>
          <SpaceContainer $space="900px" />
        </div>
      </ProgressPageContainer>
    </ParentStack>
  );
}

export default RefundsConfigurations;