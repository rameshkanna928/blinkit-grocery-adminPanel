import React from "react";
import { ParentStack } from "../../../assets/styles";
import PageHeaderComponent from "../../../components/parts/pageheader";
import TableComponent from "../../../components/elements/table";
import CustomSelect from "../../../components/elements/inputs/CustomSelect";
import { CancelRequestsTableDatas, LocationList, OrdersVariant, paymentStatus } from "../../../utils";
import CustomTextInput from "../../../components/elements/inputs/CustomtextInput";
import SearchButton from "../../../components/elements/buttons/search";

function CancelRequests() {
  return (
    <ParentStack>
      <PageHeaderComponent pageName="Orders" />
      <TableComponent
        tableData={CancelRequestsTableDatas}
        setPageNumber={() => {}}
        totalRows={null}
        page={0}
      >
        <CustomTextInput
          changeFunction={() => {}}
          iconState={false}
          inputLabel="#G-Store:"
          holderText="Code"
        />
        <CustomSelect
          width={"170px"}
          search={false}
          options={paymentStatus}
          formData={undefined}
          setFormData={() => {}}
          propertyName={undefined}
        />
        <CustomSelect
          formData={[]}
          setFormData={() => {}}
          width={"400px"}
          search={false}
          options={LocationList}
          propertyName={"status"}
        />
        <CustomSelect
          formData={[]}
          setFormData={() => {}}
          width={"300px"}
          search={false}
          options={OrdersVariant}
          propertyName={"status"}
        />

        <SearchButton theme={"green"} onClick={() => {}} routeLink={""} />
      </TableComponent>
    </ParentStack>
  );
}

export default CancelRequests;
