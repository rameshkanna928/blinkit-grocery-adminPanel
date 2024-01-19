import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  CommonCard,
  FlexBetween,
  SpanTag,
  TableSpan,
} from "../../assets/styles";
import TableHeader from "./Tableheader";
import { Pagination, Stack } from "@mui/material";
import { ColorBlack, ColorGreen } from "../../assets/styles/color";
import { useEffect, useRef, useState } from "react";
import $ from "jquery";
import "datatables.net";
import "datatables.net-responsive";
import "datatables.net-rowreorder";
import DataTable from "datatables.net";
import ReactDataTables from "./ReactDataTable";
import TableItems from "./TableItems";

interface IProps {
  tableData: {
    columnHeader: string[];
    rowData: {}[];
  };
  children: React.ReactNode;
  setPageNumber: (value: number) => void;
  totalRows: number | null;
  page: number;
}
function TableComponent({
  tableData,
  children,
  setPageNumber,
  totalRows,
  page,
}: IProps) {

  const tableRef = useRef<HTMLDivElement>(null);
  // const [columnVisibility, setColumnVisibility] = useState({});
  useEffect(() => {
    $(document).ready(function () {
      $('#example').DataTable({
        data: tableData?.rowData,
        columns: [
          { data: "1" },
          { data: "2" },
          { data: "3" },
          { data: "4" },
          { data: "5" },
          { data: "6" },
          { data: "7" },
          { data: "8" },
        ],
        columnDefs: [
          {
            targets: [0, 1, 3, 4, 5, 6, 7], // Specify the columns with JSX elements
            render: function (data, type, row, meta) {
              return type === 'display' ? $(data).prop('outerHTML') : data;
            },
          },
        ],
      });
    });
  }, [tableData]);





  const data = [
  {
    id: "1",
    name: "Tiger Nixon",
    position: "System Architect",
    salary: "$320,800",
    start_date: "2011/04/25",
    office: "Edinburgh",
    extn: "5421",
  },
  {
    id: "2",
    name: "Garrett Winters",
    position: "Accountant",
    salary: "$170,750",
    start_date: "2011/07/25",
    office: "Tokyo",
    extn: "8422",
  },
];

const columns = [
  { data: "name", title: "Name" },
  { data: "position", title: "Position" },
];
  return (
    <CommonCard>
      <Stack width={"100%"}>
        {children && <TableHeader>{children}</TableHeader>}

        <TableContainer
          component={Stack}
          sx={{ borderBottom: `1px solid #E0E0E0` }}
        >
          <Table
            // ref={tableRef}
            className="table table-striped"
            width="100%"
            // id="example"
          >
            <TableHead>
              <TableRow>
                {tableData?.columnHeader?.map((data, index, arr) => (
                  <TableCell
                    width={data === "S/L" ? "10px" : "auto"}
                    key={index}
                    sx={{
                      fontWeight: 600,
                      padding: "12px 20px",
                      color: ColorBlack,
                    }}
                    align={index === arr.length - 1 ? "right" : "left"}
                  >
                    {data}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData?.rowData?.map((data, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {Object.values(data).map((value, index, arr) => (
                    <TableCell
                      key={index}
                      align={index === arr.length - 1 ? "right" : "left"}
                    >
                      {value}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* {tableData?.rowData?.length > 0 && (
          <FlexBetween style={{ padding: "20px" }}>
            <SpanTag>
              Showing results of {index} -{" "}
              {tableData?.rowData?.length === 10
                ? tableData?.rowData?.[9]?.["1"]
                : tableData?.rowData?.length}{" "}
              of {totalRows ? totalRows : tableData?.rowData?.length} results
            </SpanTag>
            {totalRows > 10 && (
              <Pagination
                sx={{
                  li: {
                    button: {
                      color: "black",
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                      ":hover": {
                        color: "white",
                        backgroundColor: ColorGreen,
                      },
                      "&.Mui-selected": {
                        backgroundColor: ColorGreen,
                        color: "white",
                        border: "1px solid transparent",

                        ":hover": {
                          backgroundColor: ColorGreen,
                        },
                      },
                    },
                  },
                }}
                onChange={(e, page) => {
                  setPageNumber(page);
                  localStorage.setItem(
                    "tablePageNumbers",
                    JSON.stringify({ AllProducts: page })
                  );
                }}
                count={totalRows ? Math.ceil(totalRows / 10) : 0}
                defaultPage={page}
                variant="outlined"
                shape="rounded"
              />
            )}
          </FlexBetween>
        )} */}
        {/* <ReactDataTables data={[]} columns={[
    { name: 'id', title: 'ID', visible: false },
    { name: 'firstName', title: 'First Name' },
    { name: 'lastName', title: 'Last Name' },
    { name: 'jobTitle', title: 'Job Title' },
    { name: 'started', title: 'Started On', breakpoints: 'xs sm' },
    { name: 'dob', title: 'Date of Birth', breakpoints: 'all' },
  ]}  /> */}
      </Stack>
    </CommonCard>
  );
}

export default TableComponent;
