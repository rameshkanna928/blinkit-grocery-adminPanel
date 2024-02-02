import { Stack, Box } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { ParentStack } from "../assets/styles";

import ScrollProgresscard from "./scrollProgresscard";

interface IProps{
  progressValArr:string[]
  refHolder:never[]
  children:ReactNode,
  progressName:string, 
}
function ProgressPageContainer({
  progressValArr,
  refHolder,
  children,
  progressName,
}:IProps) {
  const [currentRefs, setCurrentRefs] = useState([]);
  useEffect(() => {
    setCurrentRefs(refHolder);
  }, [refHolder]);
  return (
    <Stack
      width={"100%"}
      justifyContent={"space-between"}
      alignItems={"flex-start"}
      direction={{ sm: "column-reverse", lg: "row" }}
      gap={2}
    >
      <Box maxWidth={"1000px"} width={"100%"}>
        <ParentStack>{children}</ParentStack>
      </Box>

      <ScrollProgresscard
        progressName={progressName}
        progressValArr={progressValArr}
        refContainer={currentRefs}
      />
    </Stack>
  );
}

export default ProgressPageContainer;
