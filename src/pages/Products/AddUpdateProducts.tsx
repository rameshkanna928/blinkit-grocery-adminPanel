import React, { useState } from "react";
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
  SpanTag,
} from "../../assets/styles";
import PageHeaderComponent from "../../components/parts/pageheader";
import ProgressPageContainer from "../../components/progressPageContainer";
import CustomTextInput from "../../components/elements/inputs/CustomtextInput";
import useRefContainer from "../../Hooks/useRefContainer";
import { Stack } from "@mui/material";
import ImageSelector from "../../components/elements/inputs/ImageSelector";
import FormSaveButton from "../../components/elements/buttons/formSaveButton";
import CustomSelect from "../../components/elements/inputs/CustomSelect";
import CustomMultiSelect from "../../components/elements/inputs/CustomMultiSelect";
import { ProgressValueArrContainer, multiselectOptions } from "../../utils";
import ToogleButton from "../../components/elements/buttons/ToogleButton";
import SEOForms from "../../components/forms/SEOForms";
import { ColorOrange } from "../../assets/styles/color";

function AddUpdateProducts({ pageName }) {
  const { refHolder, pushrefFn } = useRefContainer();
  const [hasVariation, setHasVariation] = useState(false);
  return (
    <ParentStack>
      <PageHeaderComponent pageName={pageName}>
        <></>
      </PageHeaderComponent>
      <ProgressPageContainer
        progressValArr={ProgressValueArrContainer?.productAddProducts}
        refHolder={refHolder}
        progressName={"Product Information"}
        progressLineHeight={"100%"}
      >
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
                  inputProps={{
                    placeHolder: "Type your product name",
                  }}
                />
                <SmallSpan>
                  Product name is required and recommended to be unique.
                </SmallSpan>
              </InputContainer>
              {pageName?.includes("Update") && (
                <InputContainer>
                  <InputLabel> Product Slug</InputLabel>
                  <CustomTextInput
                    inputProps={{
                      placeHolder: "Type your product name",
                    }}
                  />
                </InputContainer>
              )}
              <InputContainer>
                <InputLabel> Short Description</InputLabel>
                <CustomTextArea placeholder="Type your product short description" />
              </InputContainer>
              <InputContainer>
                <InputLabel> Description</InputLabel>
                <CustomTextArea placeholder="Type your product description" />
              </InputContainer>
            </Stack>
          </PageHeader>
          <PageHeader ref={(ref) => pushrefFn(ref)}>
            <Stack width={"100%"} spacing={3}>
              <Heading2>Images</Heading2>
              <InputContainer>
                <ImageSelector
                  inputName="Thumbnail (592x592)"
                  labelName={"Choose Product Thumbnail"}
                />
              </InputContainer>
              <InputContainer>
                <ImageSelector
                  inputName="Gallery"
                  labelName={"Choose Product Thumbnail"}
                />
              </InputContainer>
            </Stack>
          </PageHeader>
          <PageHeader>
            <Stack width={"100%"} spacing={1}>
              <SpanTag>Product Vedio Embeded Link</SpanTag>
              <CustomTextInput inputProps={{}} />
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
                defaultValue={multiselectOptions[0].value}
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
                  inputProps={{
                    options: ["Select Brand"],
                  }}
                  type={""}
                />
              </Stack>
            </PageHeader>
            <PageHeader>
              <Stack width={"100%"} rowGap={3}>
                <Heading2>Product Unit</Heading2>
                <CustomSelect
                  inputProps={{
                    name: "",
                    options: ["Select Unit"],
                  }}
                  type={""}
                />
              </Stack>
            </PageHeader>
          </Stack>
          <PageHeader ref={(ref) => pushrefFn(ref)}>
            <Stack width={"100%"} spacing={1}>
              <FlexBetween direction={"row"}>
                <Heading2>Price, Sku & Stock</Heading2>
                <div>
                  <ToogleButton
                    value={hasVariation}
                    onChange={setHasVariation}
                    label="Has Variation ?"
                  />
                </div>
              </FlexBetween>
              {hasVariation ? (
                <Stack>
                  <Stack direction={"ro"}></Stack>
                  <Stack></Stack>
                  <Stack></Stack>
                </Stack>
              ) : (
                <Stack
                  direction={"row"}
                  spacing={2}
                  className="hasVariationFalse"
                >
                  <Stack width={"25%"} spacing={1}>
                    <InputLabel>
                      Price <span>*</span>
                    </InputLabel>
                    <CustomTextInput
                      changeFunction={() => {}}
                      iconState={false}
                      holderText="Product price"
                      type="number"
                    />
                  </Stack>
                  <Stack width={"25%"} spacing={1}>
                    <InputLabel>
                      Stock{" "}
                      <span>
                        *
                        <SmallSpan style={{ color: ColorOrange }}>
                          (Default Location)
                        </SmallSpan>
                      </span>
                    </InputLabel>
                    <CustomTextInput
                      changeFunction={() => {}}
                      iconState={false}
                      holderText="Stock qty"
                      type="number"
                    />
                  </Stack>
                  <Stack width={"25%"} spacing={1}>
                    <InputLabel>
                      SKU <span>*</span>
                    </InputLabel>
                    <CustomTextInput
                      changeFunction={() => {}}
                      iconState={false}
                      holderText="Product SKU"
                    />
                  </Stack>
                  <Stack width={"25%"} spacing={1}>
                    <InputLabel>
                      {" "}
                      Code <span>*</span>
                    </InputLabel>
                    <CustomTextInput
                      changeFunction={() => {}}
                      iconState={false}
                      holderText="Product code"
                    />
                  </Stack>
                </Stack>
              )}
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
                      inputProps={{
                        options: ["Percent %", "Fixed"],
                      }}
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
                    inputProps={{
                      options: ["Percent %", "Fixed"],
                    }}
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
                    inputProps={{
                      options: ["Percent %", "Fixed"],
                    }}
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
                    inputProps={{
                      options: ["Percent %", "Fixed"],
                    }}
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
                    inputProps={{
                      options: ["Percent %", "Fixed"],
                    }}
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
                    inputProps={{
                      options: ["Percent %", "Fixed"],
                    }}
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
                  inputProps={{
                    options: ["Percent %", "Fixed"],
                  }}
                />
              </Stack>
            </PageHeader>
          </Stack>
          <Stack ref={(ref) => pushrefFn(ref)}>
            <SEOForms />
          </Stack>
          <FormSaveButton buttonName={"Save Product"} />
        <SpaceContainer $space="60vh" />
      </ProgressPageContainer>
    </ParentStack>
  );
}

export default AddUpdateProducts;
