import { Stack } from "@mui/material";
import { CustomButton, CustomLink, ParentStack } from "../../../assets/styles";
import {
  ColorDarkGreen,
  ColorGreen,
  ColorWhite,
} from "../../../assets/styles/color";
import PageHeaderComponent from "../../../components/parts/pageheader";
import { FiPlus } from "react-icons/fi";
import TableComponent from "../../../components/elements/table";

function DeliverymanPayrollList() {
  return (
    <ParentStack>
      <PageHeaderComponent pageName="All Payroll">
        <CustomButton
          $background={ColorGreen}
          $hoverbackground={ColorDarkGreen}
        >
          <CustomLink
            to={""}
            $textColor={ColorWhite}
            style={{ padding: "12px 15px" }}
          >
            <Stack direction="row" gap={"5px"}>
              <FiPlus /> Create Payroll
            </Stack>
          </CustomLink>
        </CustomButton>
      </PageHeaderComponent>
      <TableComponent
        tableData={{
          columnHeader: [],
          rowData: [],
        }}
        setPageNumber={()=>{}}
        totalRows={null}
        page={0}
      >

      </TableComponent>
    </ParentStack>
  );
}

export default DeliverymanPayrollList;
