import React from "react";
import {
  Heading2,
  InputLabel,
  PageHeader,
  ParentStack,
  SpaceContainer,
} from "../../assets/styles";
import PageHeaderComponent from "../../components/parts/pageheader";
import ProgressPageContainer from "../../components/progressPageContainer";
import { ProgressValueArrContainer, multiselectOptions } from "../../utils";
import useRefContainer from "../../Hooks/useRefContainer";
import SEOForms from "../../components/forms/SEOForms";
import InputContainer from "../../components/elements/InputContainer";
import ImageSelector from "../../components/elements/inputs/ImageSelector";
import CustomMultiSelect from "../../components/elements/inputs/CustomMultiSelect";
import { Stack } from "@mui/material";
import CustomTextInput from "../../components/elements/inputs/CustomtextInput";
import CustomSelect from "../../components/elements/inputs/CustomSelect";

function AddCategory({pageName}) {
  const { pushrefFn, refHolder } = useRefContainer();
  console.log(ProgressValueArrContainer.productAddCategory);

  return (
    <ParentStack>
      <PageHeaderComponent pageName={pageName}>
        <></>
      </PageHeaderComponent>
      <ProgressPageContainer
        progressValArr={ProgressValueArrContainer.productAddCategory}
        refHolder={refHolder}
        progressName={"Category Information"}
      >
        <ParentStack>
          <PageHeader ref={(ref) => pushrefFn(ref)} spacing={2}>
            <Heading2>Basic Information</Heading2>
            <Stack spacing={3}>
              <InputContainer>
                <InputLabel>
                  Themes <span>*</span>
                </InputLabel>
                <CustomMultiSelect
                  options={multiselectOptions}
                  defaultValue={multiselectOptions[0]}
                  placeHolderText={"Select themes"}
                />
              </InputContainer>
              <InputContainer>
                <InputLabel>Category Name</InputLabel>
                <CustomTextInput
                  changeFunction={() => {}}
                  iconState={false}
                  holderText="Type your category name"
                />
              </InputContainer>
              <InputContainer>
                <InputLabel>Category Description</InputLabel>
                <CustomTextInput
                  changeFunction={() => {}}
                  iconState={false}
                  holderText="Type your category description"
                />
              </InputContainer>
              <InputContainer>
                <InputLabel>Base Category</InputLabel>
                <CustomSelect
                  width={"100%"}
                  search={true}
                  options={["᎗"]}
                  formData={undefined}
                  setFormData={() => {}}
                  propertyName={undefined}
                />
              </InputContainer>
              <InputContainer>
                <InputLabel>Brands</InputLabel>
                <CustomSelect
                  width={"100%"}
                  search={false}
                  options={["᎗"]}
                  formData={undefined}
                  setFormData={() => {}}
                  propertyName={undefined}
                />
              </InputContainer>
              <InputContainer>
                <InputLabel>Sorting Priority Number</InputLabel>
                <CustomTextInput
                  changeFunction={() => {}}
                  iconState={false}
                  type="number"
                  holderText="Type your priority number"
                />
              </InputContainer>
            </Stack>
          </PageHeader>
          <PageHeader ref={(ref) => pushrefFn(ref)} spacing={2}>
            <Heading2>Images</Heading2>
            <InputContainer>
              <ImageSelector
                inputName={"Thumbnail"}
                labelName={"Choose Category Thumbnail"}
              />
            </InputContainer>
          </PageHeader>
          <div ref={(ref) => pushrefFn(ref)}>
            <SEOForms />
          </div>
        </ParentStack>
        <SpaceContainer $space="50vh" />
      </ProgressPageContainer>
    </ParentStack>
  );
}

export default AddCategory;
