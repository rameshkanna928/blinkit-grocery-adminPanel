import React from "react";
import ReusableForm from "../../components/elements/ReusableForm";
import InputContainer from "../../components/elements/InputContainer";
import {
  CommonCard,
  CustomTextArea,
  FlexBetween,
  Heading2,
  InputLabel,
  PageHeader,
  ParentStack,
  SmallSpan,
  SpaceContainer,
} from "../../assets/styles";
import PageHeaderComponent from "../../components/parts/pageheader";
import ProgressPageContainer from "../../components/progressPageContainer";
import CustomTextInput from "../../components/elements/inputs/CustomtextInput";
import useRefContainer from "../../Hooks/useRefContainer";
import { Stack } from "@mui/material";
import ImageSelector from "../../components/elements/inputs/ImageSelector";
import ReuseButton from "../../components/elements/buttons/ReusableButton";
import FormSaveButton from "../../components/elements/buttons/formSaveButton";
import CustomSelect from "../../components/elements/inputs/CustomSelect";
import CustomMultiSelect from "../../components/elements/inputs/CustomMultiSelect";
import { ProgressValueArrContainer, multiselectOptions } from "../../utils";
import ToogleButton from "../../components/elements/buttons/ToogleButton";
import SEOForms from "../../components/forms/SEOForms";

function AddProducts() {

  const { refHolder, pushrefFn } = useRefContainer();
  return (
    <ParentStack>
      <PageHeaderComponent pageName={"Add Product"}>
        <></>
      </PageHeaderComponent>
      <ProgressPageContainer
        progressValArr={ProgressValueArrContainer?.productAddProducts}
        refHolder={refHolder}
        progressName={"Product Information"}
        progressLineHeight={"100%"}
      >
        <ReusableForm>
          <PageHeader ref={(ref) => pushrefFn(ref)}>
            <Stack width={"100%"} spacing={3}>
              <Heading2>Basic Information</Heading2>
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
                <InputLabel> Product Name</InputLabel>
                <CustomTextInput
                  changeFunction={() => {}}
                  iconState={false}
                  holderText={"Type your product name"}
                />
              </InputContainer>
              <InputContainer>
                <InputLabel> Short Description</InputLabel>
                <CustomTextArea />
                <SmallSpan>
                  Product name is required and recommended to be unique.
                </SmallSpan>
              </InputContainer>
              <InputContainer>
                <InputLabel> Description</InputLabel>
                <CustomTextArea />
              </InputContainer>
            </Stack>
          </PageHeader>
          <PageHeader ref={(ref) => pushrefFn(ref)}>
            <Stack width={"100%"} spacing={3}>
              <Heading2>Images</Heading2>
              <InputContainer>
                <ImageSelector inputName="Thumbnail (592x592)" labelName={"Choose Product Thumbnail"} />
              </InputContainer>
              <InputContainer>
                <ImageSelector inputName="Gallery" labelName={"Choose Product Thumbnail"} />
              </InputContainer>
            </Stack>
          </PageHeader>
          <PageHeader ref={(ref) => pushrefFn(ref)}>
            <Stack width={"100%"} spacing={3}>
              <Heading2>
                Product Categories <span>*</span>
              </Heading2>
              <CustomMultiSelect
                options={multiselectOptions}
                defaultValue={null}
                placeHolderText={"Select categories"}
              />
            </Stack>
          </PageHeader>
          <PageHeader ref={(ref) => pushrefFn(ref)}>
            <Stack width={"100%"} spacing={3}>
              <Heading2>Product Tags</Heading2>
              <CustomMultiSelect
                options={multiselectOptions}
                defaultValue={null}
                placeHolderText={"Select tags"}
              />
            </Stack>
          </PageHeader>
          <Stack
            ref={(ref) => pushrefFn(ref)}
            width={"100%"}
            direction={"row"}
            spacing={3}
            justifyContent={"space-between"}
          >
            <PageHeader>
              <Stack width={"100%"} rowGap={3}>
                <Heading2>Product Brand</Heading2>
                <CustomSelect
                  width={"100%"}
                  search={true}
                  options={["Select Brand"]}
                  formData={undefined}
                  setFormData={function (name: string, data: string): void {
                    throw new Error("Function not implemented.");
                  }}
                  propertyName={undefined}
                />
              </Stack>
            </PageHeader>
            <PageHeader>
              <Stack width={"100%"} rowGap={3}>
                <Heading2>Product Unit</Heading2>
                <CustomSelect
                  width={"100%"}
                  search={true}
                  options={["Select Unit"]}
                  formData={undefined}
                  setFormData={function (name: string, data: string): void {
                    throw new Error("Function not implemented.");
                  }}
                  propertyName={undefined}
                />
              </Stack>
            </PageHeader>
          </Stack>
          <PageHeader ref={(ref) => pushrefFn(ref)}>
            <Stack width={"100%"} spacing={3}>
              <FlexBetween>
                <Heading2>Price, Sku & Stock</Heading2>
                <div>
                  <ToogleButton value={true} label="Has Variation ?" />
                </div>
              </FlexBetween>
            </Stack>
          </PageHeader>
          <PageHeader ref={(ref) => pushrefFn(ref)}>
            <Stack width={"100%"} spacing={3}>
              <Heading2>Product Discount</Heading2>
              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-between"}
                spacing={2}
              >
                <Stack maxWidth={"450px"} width={"100%"}>
                  <InputContainer>
                    <InputLabel>Date Range</InputLabel>
                    <CustomTextInput
                      changeFunction={function (value: string): void {
                        throw new Error("Function not implemented.");
                      }}
                      iconState={false}
                      holderText=" "
                    />
                  </InputContainer>
                </Stack>
                <Stack maxWidth={"250px"} width={"100%"} minWidth={"200px"}>
                  <InputContainer>
                    <InputLabel>Discount Amount</InputLabel>
                    <CustomTextInput
                      changeFunction={function (value: string): void {
                        throw new Error("Function not implemented.");
                      }}
                      iconState={false}
                      type="number"
                      holderText=" "
                    />
                  </InputContainer>
                </Stack>
                <Stack maxWidth={"250px"} width={"100%"} minWidth={"200px"}>
                  <InputContainer>
                    <InputLabel>Percent or Fixed</InputLabel>
                    <CustomSelect
                      width={"100%"}
                      search={true}
                      options={["Percent %", "Fixed"]}
                      formData={undefined}
                      setFormData={function (name: string, data: string): void {
                        throw new Error("Function not implemented.");
                      }}
                      propertyName={undefined}
                    />
                  </InputContainer>
                </Stack>
              </Stack>
            </Stack>
          </PageHeader>
          <PageHeader ref={(ref) => pushrefFn(ref)}>
            <Stack width={"100%"} spacing={2}>
              <Heading2>Shipping Configuration</Heading2>

              <Stack
                direction={"row"}
                width={"100%"}
                justifyContent={"space-between"}
                spacing={2}
              >
                <InputContainer>
                  <InputLabel>Minimum Purchase Qty</InputLabel>
                  <CustomTextInput
                    changeFunction={() => {}}
                    iconState={false}
                    holderText=" "
                    type="number"
                  />
                </InputContainer>
                <InputContainer>
                  <InputLabel>Maximum Purchase Qty</InputLabel>
                  <CustomTextInput
                    changeFunction={() => {}}
                    iconState={false}
                    holderText=" "
                    type="number"
                  />
                </InputContainer>
              </Stack>
            </Stack>
          </PageHeader>
          <PageHeader ref={(ref) => pushrefFn(ref)}>
            <Stack width={"100%"} spacing={3}>
              <Heading2>Product Taxes (Default 0%)</Heading2>
              <Stack
                width={"100%"}
                justifyContent={"space-between"}
                direction={"row"}
                spacing={2}
              >
                <InputContainer>
                  <InputLabel>CGST</InputLabel>
                  <CustomTextInput
                    changeFunction={() => {}}
                    iconState={false}
                    holderText=" "
                    type="number"
                  />
                </InputContainer>
                <InputContainer>
                  <InputLabel>Percent or Fixed</InputLabel>
                  <CustomSelect
                    width={"100%"}
                    search={true}
                    options={["Percent %", "Fixed"]}
                    formData={undefined}
                    setFormData={() => {}}
                    propertyName={undefined}
                  />
                </InputContainer>
              </Stack>

              <Stack
                width={"100%"}
                justifyContent={"space-between"}
                direction={"row"}
                spacing={2}
              >
                <InputContainer>
                  <InputLabel>IGST</InputLabel>
                  <CustomTextInput
                    changeFunction={() => {}}
                    iconState={false}
                    holderText=" "
                    type="number"
                  />
                </InputContainer>
                <InputContainer>
                  <InputLabel>Percent or Fixed</InputLabel>
                  <CustomSelect
                    width={"100%"}
                    search={true}
                    options={["Percent %", "Fixed"]}
                    formData={undefined}
                    setFormData={() => {}}
                    propertyName={undefined}
                  />
                </InputContainer>
              </Stack>
              <Stack
                width={"100%"}
                justifyContent={"space-between"}
                direction={"row"}
                spacing={2}
              >
                <InputContainer>
                  <InputLabel>SGST</InputLabel>
                  <CustomTextInput
                    changeFunction={() => {}}
                    iconState={false}
                    holderText=" "
                    type="number"
                  />
                </InputContainer>
                <InputContainer>
                  <InputLabel>Percent or Fixed</InputLabel>
                  <CustomSelect
                    width={"100%"}
                    search={true}
                    options={["Percent %", "Fixed"]}
                    formData={undefined}
                    setFormData={() => {}}
                    propertyName={undefined}
                  />
                </InputContainer>
              </Stack>
              <Stack
                width={"100%"}
                justifyContent={"space-between"}
                direction={"row"}
                spacing={2}
              >
                <InputContainer>
                  <InputLabel>VAT</InputLabel>
                  <CustomTextInput
                    changeFunction={() => {}}
                    iconState={false}
                    holderText=" "
                    type="number"
                  />
                </InputContainer>
                <InputContainer>
                  <InputLabel>Percent or Fixed</InputLabel>
                  <CustomSelect
                    width={"100%"}
                    search={true}
                    options={["Percent %", "Fixed"]}
                    formData={undefined}
                    setFormData={() => {}}
                    propertyName={undefined}
                  />
                </InputContainer>
              </Stack>
              <Stack
                width={"100%"}
                justifyContent={"space-between"}
                direction={"row"}
                spacing={2}
              >
                <InputContainer>
                  <InputLabel>irb</InputLabel>
                  <CustomTextInput
                    changeFunction={() => {}}
                    iconState={false}
                    holderText=" "
                    type="number"
                  />
                </InputContainer>
                <InputContainer>
                  <InputLabel>Percent or Fixed</InputLabel>
                  <CustomSelect
                    width={"100%"}
                    search={true}
                    options={["Percent %", "Fixed"]}
                    formData={undefined}
                    setFormData={() => {}}
                    propertyName={undefined}
                  />
                </InputContainer>
              </Stack>
            </Stack>
          </PageHeader>
          <Stack
            ref={(ref) => pushrefFn(ref)}
            width={"100%"}
            direction={"row"}
            spacing={3}
            justifyContent={"space-between"}
          >
            <PageHeader>
              <Stack width={"100%"} rowGap={3}>
                <Heading2>Sell Target</Heading2>
                <CustomTextInput
                  changeFunction={function (value: string): void {
                    throw new Error("Function not implemented.");
                  }}
                  iconState={false}
                  holderText=" "
                  type="number"
                />
              </Stack>
            </PageHeader>
            <PageHeader>
              <Stack width={"100%"} rowGap={3}>
                <Heading2>Product Status</Heading2>
                <CustomSelect
                  width={"100%"}
                  search={true}
                  options={["Select Unit"]}
                  formData={undefined}
                  setFormData={function (name: string, data: string): void {
                    throw new Error("Function not implemented.");
                  }}
                  propertyName={undefined}
                />
              </Stack>
            </PageHeader>
          </Stack>
          <Stack ref={(ref) => pushrefFn(ref)}>
            <SEOForms />
          </Stack>
          <FormSaveButton buttonName={"Save Product"} />
        </ReusableForm>
        <SpaceContainer $space="60vh" />
      </ProgressPageContainer>
    </ParentStack>
  );
}

export default AddProducts;
