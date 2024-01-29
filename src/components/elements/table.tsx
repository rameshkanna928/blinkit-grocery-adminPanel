import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CommonCard, FlexBetween, SpanTag } from "../../assets/styles";
import TableHeader from "./Tableheader";
import { Pagination, Stack } from "@mui/material";
import { ColorBlack, ColorDarkGray, ColorGreen, ColorLightAsh, LightBorderColor } from "../../assets/styles/color";
import DataTable from "react-data-table-component";
import ExpandableTable from "../ExpandableTable";
import index from "../parts/Sidebar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../theme";

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
  const { status } = useSelector((state) => state?.mode);
  const [scrollWidth, setScrollWidth] = useState(window?.innerWidth);
  const ExpandedComponent = ({ data }) => {
    // const parsedObj = JSON.parse(data);
    // console.log("adfsdfgfs", data);

    return <ExpandableTable data={data} />;
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setScrollWidth(window?.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const customStyles = {
    rows: {
      style: {
        backgroundColor:
          status === "light"
            ? lightTheme.partBackground
            : darkTheme.partBackground,

      },
    },
    headCells: {
      style: {
        backgroundColor:
          status === "light"
            ? lightTheme.partBackground
            : darkTheme.partBackground,
        color:
          status === "light"
            ? lightTheme.blackText
            : darkTheme.blackText,
      },
    },
    headRow: {
      style: {
       borderBottomColor: status === "light"?LightBorderColor:ColorDarkGray
      },
    },
    cells: {
      style: {},
    },
  };
  return (
    <CommonCard>
      <Stack width={"100%"}>
        {children && <TableHeader>{children}</TableHeader>}

        <DataTable
          customStyles={customStyles}
          columns={tableData.columnHeader}
          data={tableData.rowData}
          expandableRows={scrollWidth <= 1280 ? true : false}
          expandableRowsComponent={ExpandedComponent}
        />

        {tableData?.rowData?.length > 0 && (
          <FlexBetween
            style={{ padding: "20px" }}
            alignItems={"start"}
            direction={"row"}
          >
            <SpanTag>
              Showing results of {tableData?.rowData?.[0]?.["S/L"]} -{" "}
              {tableData?.rowData?.[tableData?.rowData?.length - 1]?.["S/L"]} of{" "}
              {totalRows ? totalRows : tableData?.rowData?.length} results
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
        )}
      </Stack>
    </CommonCard>
  );
}

export default TableComponent;
