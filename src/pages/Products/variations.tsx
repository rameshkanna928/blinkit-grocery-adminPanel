import { useRef, useState } from "react";
import PageHeaderComponent from "../../components/parts/pageheader";
import {
  CommonCard,
  CustomButton,
  Heading2,
  InputLabel,
  PageHeader,
  ParentStack,
  SpaceContainer,
  SpanTag,
} from "../../assets/styles";
import { Box, Grid, Stack } from "@mui/material";
import TableComponent from "../../components/elements/table";
import CustomSelect from "../../components/elements/inputs/CustomSelect";
import ReusableSearch from "../../components/elements/inputs/CustomtextInput";
import SearchButton from "../../components/elements/buttons/search";
import { StatusOptions, VariationTableDatas } from "../../utils";
import ScrollProgresscard from "../../components/scrollProgresscard";
import ReuseButton from "../../components/elements/buttons/ReusableButton";
import {
  ColorDarkGreen,
  ColorGreen,
  ColorWhite,
} from "../../assets/styles/color";
import { saveIcon } from "../../utils/icons";
import CustomTextInput from "../../components/elements/inputs/CustomtextInput";
import useRefContainer from "../../Hooks/useRefContainer";
import ProgressPageContainer from "../../components/progressPageContainer";

function AllVariations() {
  const [formData, setFormData] = useState({});
  const { refHolder, pushrefFn } = useRefContainer();
  console.log("checkproductVariationsRef", refHolder);

  const progressValArr = [
    { label: "All Variations", val: "All Variations" },
    { label: "Add New Variation", val: "Add New Variation" },
  ];

  return (
    <ParentStack>
      <PageHeaderComponent pageName="Variations">
        <></>
      </PageHeaderComponent>

      <ProgressPageContainer
        progressValArr={progressValArr}
        refHolder={refHolder}
        progressName={"Variation Information"}
      >
        <div ref={(el) => pushrefFn(el)}>
          <TableComponent
            tableData={VariationTableDatas}
            setPageNumber={() => {}}
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
              formData={formData}
              setFormData={setFormData}
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
          <form>
            <ParentStack>
              <PageHeader>
                <Stack spacing={2} width={"100%"}>
                  <Heading2>Add New Variation</Heading2>
                  <Stack spacing={1}>
                    <InputLabel> Variation Name</InputLabel>
                    <CustomTextInput
                      changeFunction={() => {}}
                      iconState={false}
                      holderText={"Type variation name"}
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
                  text={"Save Variation"}
                  textColor={ColorWhite}
                  routeLink={""}
                />
              </Box>
            </ParentStack>
          </form>
          <SpaceContainer $space="900px" />
        </div>
      </ProgressPageContainer>
    </ParentStack>
  );
}

export default AllVariations;
