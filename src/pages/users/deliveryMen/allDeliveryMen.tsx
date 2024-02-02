import React from "react";
import { ParentStack } from "../../../assets/styles";
import {
  ColorGreen,
  ColorDarkGreen,
  ColorWhite,
} from "../../../assets/styles/color";
import ReuseButton from "../../../components/elements/buttons/ReusableButton";
import SearchButton from "../../../components/elements/buttons/search";
import CustomTextInput from "../../../components/elements/inputs/CustomtextInput";
import TableComponent from "../../../components/elements/table";
import PageHeaderComponent from "../../../components/parts/pageheader";
import { AllDeleiveryManTableDatas, StaffsTableDatas } from "../../../utils";
import { plusIcon } from "../../../utils/icons";
import { RoutePaths } from "../../../routes";

function AllDeliveryMen() {
  return (
    <ParentStack>
      <PageHeaderComponent pageName="All Deliverymen">
        <ReuseButton
          color={ColorGreen}
          hovercolor={ColorDarkGreen}
          iconPadding={"0 5px 0 0"}
          icon={plusIcon}
          text={"Add Deliveryman"}
          textColor={ColorWhite}
          routeLink={RoutePaths.users.deliveryMen.addDeliveryMan}
        />
      </PageHeaderComponent>
      <TableComponent
        tableData={AllDeleiveryManTableDatas}
        setPageNumber={() => {}}
        totalRows={null}
        page={0}
      >
        <CustomTextInput changeFunction={() => {}} iconState={true} />

        <SearchButton routeLink={""} onClick={() => {}} theme={"white"} />
      </TableComponent>
    </ParentStack>
  );
}

export default AllDeliveryMen;
