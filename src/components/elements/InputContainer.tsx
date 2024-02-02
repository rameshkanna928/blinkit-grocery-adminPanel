import { Stack } from "@mui/material";
import { ReactNode } from "react";

interface IProps{
  children:ReactNode
}
function InputContainer({ children }:IProps) {
  return <Stack width={"100%"} rowGap={1}>{children}</Stack>;
}

export default InputContainer;
