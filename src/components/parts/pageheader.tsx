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
    <PageHeader>
      <Heading2 >{pageName}</Heading2>
      <PageHeaderToolbar>
        {children}
      </PageHeaderToolbar>
    </PageHeader>
  );
}

export default PageHeaderComponent;
