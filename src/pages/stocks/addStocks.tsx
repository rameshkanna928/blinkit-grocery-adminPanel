import React, { useState } from "react";
import {
  Heading2,
  InputLabel,
  PageHeader,
  ParentStack,
  SpaceContainer,
} from "../../assets/styles";
import PageHeaderComponent from "../../components/parts/pageheader";
import { Stack, Box } from "@mui/material";
import {
  ColorGreen,
  ColorDarkGreen,
  ColorWhite,
} from "../../assets/styles/color";
import ReuseButton from "../../components/elements/buttons/ReusableButton";
import CustomTextInput from "../../components/elements/inputs/CustomtextInput";
import { saveIcon } from "../../utils/icons";
import useRefContainer from "../../Hooks/useRefContainer";
import CustomSelect from "../../components/elements/inputs/CustomSelect";
import {
  LocationList,
  ProductList,
  ProgressValueArrContainer,
  setFormDataByComp,
} from "../../utils";
import ProgressPageContainer from "../../components/progressPageContainer";

function AddStocks() {
  const { refHolder, pushrefFn } = useRefContainer();
  const [formData, setFormData] = useState({
    location: LocationList[0],
  });

  const handleChange = (name: string, value: string) => {
    setFormDataByComp(name, value, setFormData);
    console.log("formDats", formData);
  };
  return (
    <ParentStack>
      <PageHeaderComponent pageName={"Add Stock"}>
        <></>
      </PageHeaderComponent>
      <ProgressPageContainer
        progressValArr={ProgressValueArrContainer.stockAddStocks}
        refHolder={refHolder}
        progressName={"Stock Information"}
      >
        <div ref={(el) => pushrefFn(el)}>
            <ParentStack>
              <PageHeader>
                <Stack spacing={2} width={"100%"}>
                  <Heading2>Basic Information</Heading2>
                  <Stack rowGap={1}>
                    <InputLabel> Location</InputLabel>
                    <CustomSelect
                      width={"100%"}
                      search={true}
                      options={LocationList}
                      formData={formData}
                      setFormData={(name: string, value: string) =>
                        handleChange(name, value)
                      }
                      propertyName={"location"}
                    />
                  </Stack>
                  <Stack rowGap={1}>
                    <InputLabel> Select Product</InputLabel>
                    <CustomSelect
                      width={"100%"}
                      search={true}
                      options={ProductList}
                      formData={formData}
                      setFormData={(name: string, value: string) =>
                        handleChange(name, value)
                      }
                      propertyName={"product"}
                      disabled={formData["location"] ===LocationList[0]}
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
                  text={"Save Stock"}
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

export default AddStocks;
