import { Grid, Stack, InputLabel, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  ParentStack,
  PageHeader,
  Heading2,
  SpaceContainer,
} from "../assets/styles";
import { ColorGreen, ColorDarkGreen, ColorWhite } from "../assets/styles/color";
import { VariationTableDatas, StatusOptions } from "../utils";
import { saveIcon } from "../utils/icons";
import ReuseButton from "./elements/buttons/ReusableButton";
import SearchButton from "./elements/buttons/search";
import CustomSelect from "./elements/inputs/CustomSelect";
import CustomTextInput from "./elements/inputs/CustomtextInput";
import TableComponent from "./elements/table";
import ScrollProgresscard from "./scrollProgresscard";

function ProgressPageContainer({ progressValArr, refHolder, children,progressName }) {
    const [currentRefs,setCurrentRefs] =useState([])
    useEffect(()=>{
     setCurrentRefs(refHolder)
    },[refHolder])
  return (
    <Grid container justifyContent={"space-between"} alignItems={"flex-start"}>
      <Grid item sm={9}>
        <ParentStack>{children}</ParentStack>
      </Grid>

      <ScrollProgresscard
        progressName={progressName}
        progressValArr={progressValArr}
        refContainer={currentRefs}
      />
    </Grid>
  );
}

export default ProgressPageContainer;


