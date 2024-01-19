import { ParentStack } from "../../assets/styles";
import SearchButton from "../../components/elements/buttons/search";
import CustomSelect from "../../components/elements/inputs/CustomSelect";
import CustomTextInput from "../../components/elements/inputs/CustomtextInput";
import TableComponent from "../../components/elements/table";
import PageHeaderComponent from "../../components/parts/pageheader";
import {
  DeliveryStatus,
  LocationList,
  OrdersTableDatas,
  OrdersVariant,
  StatusOptions,
  paymentStatus,
} from "../../utils";

function Orders() {
  return (
    <ParentStack>
      <PageHeaderComponent pageName="Orders">
        <></>
      </PageHeaderComponent>

      <TableComponent
        tableData={OrdersTableDatas}
        totalRows={null}
        page={1}
        setPageNumber={() => {}}
      >
        <CustomTextInput
          inputLabel ="#G-Store:"
          changeFunction={() => {}}
          iconState={false}
          holderText={"Code"}
        />

        <CustomSelect
          formData={{}}
          setFormData={() => {}}
          width={"450px"}
          search={false}
          options={paymentStatus}
          propertyName={"category"}
        />
        <CustomSelect
          formData={[]}
          setFormData={() => {}}
          width={"430px"}
          search={false}
          options={DeliveryStatus}
          propertyName={"status"}
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
          width={"400px"}
          search={false}
          options={OrdersVariant}
          propertyName={"status"}
        />

        <SearchButton theme={"green"} onClick={() => {}} routeLink={""} />
      </TableComponent>
    </ParentStack>
  );
}

export default Orders;
