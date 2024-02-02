import PageHeaderComponent from "../../components/parts/pageheader";
import {
  CustomTextArea,
  Heading2,
  InputLabel,
  PageHeader,
  ParentStack,
  SpaceContainer,
} from "../../assets/styles";
import { Box, Stack } from "@mui/material";
import {
  ColorDarkGray,
  ColorDarkGreen,
  ColorGreen,
  ColorWhite,
} from "../../assets/styles/color";
import ReuseButton from "../../components/elements/buttons/ReusableButton";
import SearchButton from "../../components/elements/buttons/search";
import CustomSelect from "../../components/elements/inputs/CustomSelect";
import CustomTextInput from "../../components/elements/inputs/CustomtextInput";
import TableComponent from "../../components/elements/table";
import {
  VariationTableDatas,
  StatusOptions,
  ProgressValueArrContainer,
} from "../../utils";
import { saveIcon } from "../../utils/icons";
import useRefContainer from "../../Hooks/useRefContainer";
import ImageSelector from "../../components/elements/inputs/ImageSelector";
import ProgressPageContainer from "../../components/progressPageContainer";
import SEOForms from "../../components/forms/SEOForms";

function AllBrands() {
  const { refHolder, pushrefFn } = useRefContainer();

  return (
    <ParentStack>
      <PageHeaderComponent pageName="Brands">
        <></>
      </PageHeaderComponent>
      <ProgressPageContainer
        progressValArr={ProgressValueArrContainer.productAllBrands}
        refHolder={refHolder}
        progressName={"Brand Information"}
      >
        <div ref={(el) => pushrefFn(el)}>
          <TableComponent
            tableData={VariationTableDatas}
            setPageNumber={(value) => {
              value;
            }}
            totalRows={null}
            page={1}
          >
            <CustomTextInput
              changeFunction={() => {}}
              iconState={true}
              holderText={undefined}
            />

            <CustomSelect
              width={"200px"}
              search={false}
              options={StatusOptions}
              propertyName={"status"}
              formData={{}}
              setFormData={() => {}}
            />
            <SearchButton
              theme={"green"}
              routeLink={""}
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </TableComponent>
        </div>
          <ParentStack>
            <div ref={(el) => pushrefFn(el)}>
              <ParentStack>
                <PageHeader>
                  <Stack spacing={2} width={"100%"}>
                    <Heading2>Add New Brand</Heading2>
                    <Stack spacing={1}>
                      <InputLabel> Brand Name</InputLabel>
                      <CustomTextInput
                        changeFunction={() => {}}
                        iconState={false}
                        holderText={"Type brand name"}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <ImageSelector inputName="Brand Image" labelName={"Choose Brand Thumbnail"} />
                    </Stack>
                  </Stack>
                </PageHeader>
              </ParentStack>
            </div>
            <div ref={(el) => pushrefFn(el)}>
              <Stack spacing={3}>
                <SEOForms />
                <Box maxWidth={200}>
                  <ReuseButton
                    color={ColorGreen}
                    hovercolor={ColorDarkGreen}
                    iconPadding={"0 5px"}
                    icon={saveIcon}
                    text={"Save Brand"}
                    textColor={ColorWhite}
                    routeLink={""}
                  />
                </Box>
              </Stack>

              <SpaceContainer $space="650px" />
            </div>
          </ParentStack>
      </ProgressPageContainer>
    </ParentStack>
  );
}

export default AllBrands;
