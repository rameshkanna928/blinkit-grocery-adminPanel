import React, { ReactNode } from "react";
import { FiShoppingCart, FiPlus } from "react-icons/fi";
import {
  PageHeader,
  Heading2,
  PageHeaderToolbar,
  ButtonGray,
  CustomLink,
  ButtonGreen,
} from "../../assets/styles";
import { ColorWhite } from "../../assets/styles/color";

function PageHeaderComponent({children,pageName}:{children:ReactNode,pageName:string}) {
  return (
    <PageHeader justifyContent={{sm:"space-between"}} direction={{sm:"row"}} alignItems={{sm:"center"}} rowGap={2}>
      <Heading2 >{pageName}</Heading2>
      <PageHeaderToolbar direction={{xs:"row"}}  alignItems={"start"} justifyContent={"space-between"}>
        {children}
      </PageHeaderToolbar>
    </PageHeader>
  );
}

export default PageHeaderComponent;
