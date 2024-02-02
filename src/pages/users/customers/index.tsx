import React from "react";
import { PageHeader, ParentStack } from "../../../assets/styles";
import PageHeaderComponent from "../../../components/parts/pageheader";
import TableComponent from "../../../components/elements/table";
import CustomTextInput from "../../../components/elements/inputs/CustomtextInput";
import CustomSelect from "../../../components/elements/inputs/CustomSelect";
import SearchButton from "../../../components/elements/buttons/search";
import { CustomersTableDatas } from "../../../utils";

function index() {
  return (
    <ParentStack>
      <PageHeaderComponent
        pageName="Customers"
        children={undefined}
      ></PageHeaderComponent>
      <TableComponent
        tableData={CustomersTableDatas}
        setPageNumber={() => {}}
        totalRows={null}
        page={0}
      >
        <CustomTextInput changeFunction={() => {}} iconState={true} />
        <CustomSelect
          width={"150px"}
          search={false}
          options={["Select Status", "Active", "Banned"]}
          formData={undefined}
          setFormData={() => {}}
          propertyName={undefined}
        />
        <SearchButton
          routeLink={""}
          onClick={()=>{}}
          theme={""}
        />
      </TableComponent>
    </ParentStack>
  );
}

export default index;
