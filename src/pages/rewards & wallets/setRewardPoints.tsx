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
import { VariationTableDatas, StatusOptions, setRewardPointsTableDatas, ProgressValueArrContainer } from "../../utils";
import { saveIcon } from "../../utils/icons";
import useRefContainer from "../../Hooks/useRefContainer";
import ImageSelector from "../../components/elements/inputs/ImageSelector";
import ProgressPageContainer from "../../components/progressPageContainer";

function SetRewardPoints() {
  const { refHolder, pushrefFn } = useRefContainer();


  return (
    <ParentStack>
      <PageHeaderComponent pageName="Set Reward Points">
        <></>
      </PageHeaderComponent>
      <ProgressPageContainer
        progressValArr={ProgressValueArrContainer.rewardPoints}
        refHolder={refHolder}
        progressName={"Reward Points"}
      >
        <div ref={(el) => pushrefFn(el)}>
          <TableComponent
            tableData={setRewardPointsTableDatas}
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
          <form ref={(el) => pushrefFn(el)}>
            <ParentStack>
              <PageHeader>
                <Stack spacing={2} width={"100%"}>
                  <Heading2>Price Range Wise</Heading2>
                  <Stack spacing={1}>
                    <InputLabel> Points</InputLabel>
                    <CustomTextInput
                      type="number"
                      changeFunction={() => {}}
                      iconState={false}
                      holderText={"Type reward points"}
                    />
                  </Stack>
                  <Stack spacing={1}>
                    <InputLabel> Minimum Price</InputLabel>
                    <CustomTextInput
                      changeFunction={() => {}}
                      iconState={false}
                      holderText={" "}
                      type="number"
                    />
                  </Stack>
                  <Stack spacing={1}>
                    <InputLabel> Maximum Price</InputLabel>
                    <CustomTextInput
                      changeFunction={() => {}}
                      iconState={false}
                      holderText={" "}
                      type="number"
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
                  text={"Save Points"}
                  textColor={ColorWhite}
                  routeLink={""}
                />
              </Box>
            </ParentStack>
          </form>
          <form ref={(el) => pushrefFn(el)} style={{marginTop:"30px"}}>
            <ParentStack>
              <PageHeader>
                <Stack spacing={2} width={"100%"}>
                  <Heading2>For All Products</Heading2>
                  <Stack spacing={1}>
                    <InputLabel> Points</InputLabel>
                    <CustomTextInput
                      type="number"
                      changeFunction={() => {}}
                      iconState={false}
                      holderText={"Type reward points"}
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
                  text={"Save Points"}
                  textColor={ColorWhite}
                  routeLink={""}
                />
              </Box>
            </ParentStack>
          </form>
        </ParentStack>
        <SpaceContainer $space="900px" display={{xs:"none",lg:"flex"}} />
      </ProgressPageContainer>
    </ParentStack>
  );
}

export default SetRewardPoints;
