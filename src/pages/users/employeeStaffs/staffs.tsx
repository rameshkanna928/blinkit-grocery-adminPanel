import { ParentStack } from "../../../assets/styles";
import PageHeaderComponent from "../../../components/parts/pageheader";
import TableComponent from "../../../components/elements/table";
import CustomTextInput from "../../../components/elements/inputs/CustomtextInput";
import CustomSelect from "../../../components/elements/inputs/CustomSelect";
import SearchButton from "../../../components/elements/buttons/search";
import { CustomersTableDatas, StaffsTableDatas } from "../../../utils";
import ReuseButton from "../../../components/elements/buttons/ReusableButton";
import {
  ColorDarkGreen,
  ColorGreen,
  ColorWhite,
} from "../../../assets/styles/color";
import { plusIcon } from "../../../utils/icons";
import { RoutePaths } from "../../../routes";

function Staffs() {
  return (
<ParentStack>
      <PageHeaderComponent pageName="Employee Staffs">
        <ReuseButton
          color={ColorGreen}
          hovercolor={ColorDarkGreen}
          iconPadding={"0 5px 0 0"}
          icon={plusIcon}
          text={"Add Employee"}
          textColor={ColorWhite}
          routeLink={RoutePaths.users.employeeStaffs.addNewStaff}
        />
      </PageHeaderComponent>
      <TableComponent
        tableData={StaffsTableDatas}
        setPageNumber={() => {}}
        totalRows={null}
        page={0}
      >
        <CustomTextInput changeFunction={() => {}} iconState={true} />

        <SearchButton routeLink={""} onClick={() => {}} theme={"white"} />
      </TableComponent>
    </ParentStack>
  )
}

export default Staffs
