import React from "react";
import { FlexBox } from "../../assets/styles";

interface IProps {
  children: React.ReactNode;
  paddingValue: string;
}
function Icon({ children, paddingValue }: IProps) {
  return <FlexBox style={{ padding: paddingValue,zIndex:0 }}>{children}</FlexBox>;
}

export default Icon;
