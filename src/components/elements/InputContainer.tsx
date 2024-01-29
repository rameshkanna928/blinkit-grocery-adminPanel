import { Stack } from "@mui/material";
import React from "react";

function InputContainer({ children }) {
  return <Stack width={"100%"} rowGap={1}>{children}</Stack>;
}

export default InputContainer;
