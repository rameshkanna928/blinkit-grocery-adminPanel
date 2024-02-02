import { Box, Stack } from "@mui/material";
import {
  Heading2,
  InputLabel,
  PageHeader,
  ParentStack,
  SpaceContainer,
} from "../../../assets/styles";
import PageHeaderComponent from "../../../components/parts/pageheader";
import ProgressPageContainer from "../../../components/progressPageContainer";
import InputContainer from "../../../components/elements/InputContainer";
import CustomTextInput from "../../../components/elements/inputs/CustomtextInput";
import CustomSelect from "../../../components/elements/inputs/CustomSelect";
import { ColorGreen, ColorDarkGreen, ColorWhite } from "../../../assets/styles/color";
import ReuseButton from "../../../components/elements/buttons/ReusableButton";
import { saveIcon } from "../../../utils/icons";
import { ProgressValueArrContainer } from "../../../utils";
import useRefContainer from "../../../Hooks/useRefContainer";

function AddNewStaff() {
    const {pushrefFn,refHolder} =useRefContainer();
  return (
    <ParentStack>
      <PageHeaderComponent pageName={"Add New Staff"} />
      <ProgressPageContainer
        progressValArr={ProgressValueArrContainer.addNewStaff}
        refHolder={refHolder}
        progressName={"Staff Information"}
      >
        <form ref={(ref)=>pushrefFn(ref)}>
          <ParentStack>
            <PageHeader spacing={2}>
              <Heading2>Basic Information</Heading2>
              <InputContainer>
                <InputLabel>
                  Staff Name <span> *</span>
                </InputLabel>
                <CustomTextInput
                  changeFunction={() => {}}
                  iconState={false}
                  holderText="Type staff name"
                />
              </InputContainer>
              <InputContainer>
                <InputLabel>
                  Staff Email <span> *</span>
                </InputLabel>
                <CustomTextInput
                  changeFunction={() => {}}
                  iconState={false}
                  holderText="Type staff email"
                />
              </InputContainer>
              <InputContainer>
                <InputLabel>
                  Staff Role <span> *</span>
                </InputLabel>
                <CustomSelect
                  width={"100%"}
                  search={true}
                  options={["Manager"]}
                  formData={undefined}
                  setFormData={() => {}}
                  propertyName={undefined}
                />
              </InputContainer>
              <InputContainer>
                <InputLabel>Staff Phone</InputLabel>
                <CustomTextInput
                  changeFunction={() => {}}
                  iconState={false}
                  type="number"
                  holderText="Type staff phone"
                />
              </InputContainer>
              <InputContainer>
                <InputLabel>
                  Password <span> *</span>
                </InputLabel>
                <CustomTextInput
                  changeFunction={() => {}}
                  iconState={false}
                  type="password"
                  holderText="Type  password"
                />
              </InputContainer>
            </PageHeader>
            <Box maxWidth={200} mt={1}>
                <ReuseButton
                  color={ColorGreen}
                  hovercolor={ColorDarkGreen}
                  iconPadding={"0 5px 0 0"}
                  icon={saveIcon}
                  text={"Save Staff"}
                  textColor={ColorWhite}
                  routeLink={""}
                />
              </Box>
          </ParentStack>
        </form>
        <SpaceContainer $space="40vh"/>
      </ProgressPageContainer>
    </ParentStack>
  );
}

export default AddNewStaff;
