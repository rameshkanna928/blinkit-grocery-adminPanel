import React from "react";
import { CustomTextArea, ParentStack } from "../../../assets/styles";
import PageHeaderComponent from "../../../components/parts/pageheader";
import TableComponent from "../../../components/elements/table";
import CustomTextInput from "../../../components/elements/inputs/CustomtextInput";
import SearchButton from "../../../components/elements/buttons/search";
import CustomSelect from "../../../components/elements/inputs/CustomSelect";
import { PayoutHistoriesTableDatas, paymentStatus } from "../../../utils";

function PayoutHistories() {
  return (
    <ParentStack>
      <PageHeaderComponent pageName="Payouts" />
      <TableComponent
        tableData={PayoutHistoriesTableDatas}
        setPageNumber={() => {}}
        totalRows={null}
        page={0}
      >
        <CustomTextInput
          changeFunction={() => {}}
          iconState={true}
          holderText=""
        />
        <CustomSelect
          width={"200px"}
          search={false}
          options={paymentStatus}
          formData={undefined}
          setFormData={()=>{}}
          propertyName={undefined}
        />
        <SearchButton routeLink={""} onClick={() => {}} theme={""} />
      </TableComponent>
    </ParentStack>
  );
}

export default PayoutHistories;
