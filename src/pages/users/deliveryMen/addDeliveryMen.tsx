import React from "react";
import {
  CustomTextArea,
  Heading2,
  InputLabel,
  PageHeader,
  ParentStack,
  SpaceContainer,
} from "../../../assets/styles";
import PageHeaderComponent from "../../../components/parts/pageheader";
import ProgressPageContainer from "../../../components/progressPageContainer";
import {
  LocationList,
  LocationStatusOptions,
  ProgressValueArrContainer,
} from "../../../utils";
import useRefContainer from "../../../Hooks/useRefContainer";
import InputContainer from "../../../components/elements/InputContainer";
import CustomTextInput from "../../../components/elements/inputs/CustomtextInput";
import CustomSelect from "../../../components/elements/inputs/CustomSelect";
import ImageSelector from "../../../components/elements/inputs/ImageSelector";
import { Box } from "@mui/material";
import {
  ColorGreen,
  ColorDarkGreen,
  ColorWhite,
} from "../../../assets/styles/color";
import ReuseButton from "../../../components/elements/buttons/ReusableButton";
import { saveIcon } from "../../../utils/icons";

function AddDeliveryMen() {
  const { pushrefFn, refHolder } = useRefContainer();
  return (
    <ParentStack>
      <PageHeaderComponent pageName="Add New Deliveryman" />
      <ProgressPageContainer
        progressValArr={ProgressValueArrContainer.addNewDeliveryMen}
        refHolder={refHolder}
        progressName={"Deliveryman Information"}
      >
        <form ref={(ref) => pushrefFn(ref)}>
          <PageHeader spacing={3}>
            <Heading2>Basic Information</Heading2>
            <InputContainer>
              <InputLabel>
                Name <span>*</span>
              </InputLabel>
              <CustomTextInput
                changeFunction={() => {}}
                iconState={false}
                holderText="Type name"
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>
                Email <span>*</span>
              </InputLabel>
              <CustomTextInput
                changeFunction={() => {}}
                iconState={false}
                holderText="Type email"
                type="email"
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>Phone</InputLabel>
              <CustomTextInput
                changeFunction={() => {}}
                iconState={false}
                holderText="Type phone"
                type="number"
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>Select User Location</InputLabel>
              <CustomSelect
                width={"100%"}
                search={true}
                options={LocationList}
                formData={undefined}
                setFormData={() => {}}
                propertyName={undefined}
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>
                Address <span>*</span>
              </InputLabel>
              <CustomTextArea />
            </InputContainer>
            <InputContainer>
              <InputLabel>
                Password <span>*</span>
              </InputLabel>
              <CustomTextInput
                changeFunction={() => {}}
                iconState={false}
                holderText="Type password"
                type="password"
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>Avatar</InputLabel>
              <ImageSelector labelName={"Choose Avatar Image"} />
            </InputContainer>
          </PageHeader>
          <Box maxWidth={200} mt={4}>
            <ReuseButton
              color={ColorGreen}
              hovercolor={ColorDarkGreen}
              iconPadding={"0 5px 0 0"}
              icon={saveIcon}
              text={"Save Changes"}
              textColor={ColorWhite}
              routeLink={""}
            />
          </Box>
        </form>
        <SpaceContainer $space="70vh"/>

      </ProgressPageContainer>
    </ParentStack>
  );
}

export default AddDeliveryMen;
