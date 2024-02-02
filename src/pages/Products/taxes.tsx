import PageHeaderComponent from "../../components/parts/pageheader";
import {
  Heading2,
  InputLabel,
  PageHeader,
  ParentStack,
  SpaceContainer,
  SpanTag,
} from "../../assets/styles";
import { Box, Grid, Stack } from "@mui/material";
import {
  ColorDarkGreen,
  ColorGreen,
  ColorWhite,
} from "../../assets/styles/color";
import ReuseButton from "../../components/elements/buttons/ReusableButton";
import SearchButton from "../../components/elements/buttons/search";
import CustomSelect from "../../components/elements/inputs/CustomSelect";
import CustomTextInput from "../../components/elements/inputs/CustomtextInput";
import TableComponent from "../../components/elements/table";
import ScrollProgresscard from "../../components/scrollProgresscard";
import { VariationTableDatas, StatusOptions, ProgressValueArrContainer } from "../../utils";
import { saveIcon } from "../../utils/icons";
import useRefContainer from "../../Hooks/useRefContainer";
import ProgressPageContainer from "../../components/progressPageContainer";

function AllTaxes() {

  const { refHolder, pushrefFn } = useRefContainer();
  console.log("checkproductUnitsRef", refHolder);

  return (
    <ParentStack>
      <PageHeaderComponent pageName="Taxes">
        <></>
      </PageHeaderComponent>

      <ProgressPageContainer
        progressValArr={ProgressValueArrContainer.productAllTaxes}
        refHolder={refHolder}
        progressName={"Tax Information"}
      >
        <div ref={(el) => pushrefFn(el)}>
          <TableComponent
            tableData={VariationTableDatas}
            setPageNumber={1}
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
        <div ref={(el) => pushrefFn(el)}>
            <ParentStack>
              <PageHeader>
                <Stack spacing={2} width={"100%"}>
                  <Heading2>Add New Taxes</Heading2>
                  <Stack spacing={1}>
                    <InputLabel> Tax Name</InputLabel>
                    <CustomTextInput
                      changeFunction={undefined}
                      iconState={false}
                      holderText={"Type tax name"}
                    />
                  </Stack>
                </Stack>
              </PageHeader>
              <Box maxWidth={200}>
                <ReuseButton
                  color={ColorGreen}
                  hovercolor={ColorDarkGreen}
                  iconPadding={"0 5px"}
                  icon={saveIcon}
                  text={"Save Tax"}
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

export default AllTaxes;
