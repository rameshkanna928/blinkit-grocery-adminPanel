import { CommonCard, FlexBetween, SpanTag } from "../../assets/styles";
import TableHeader from "./Tableheader";
import { Pagination, Stack } from "@mui/material";
import {
  ColorBlack,
  ColorDarkGray,
  ColorGreen,
  ColorWhite,
  LightBorderColor,
} from "../../assets/styles/color";
import DataTable, { TableColumn } from "react-data-table-component";
import ExpandableTable from "../ExpandableTable";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../theme";

interface IProps {
  tableData: {
    columnHeader: TableColumn<{}>[];
    rowData: { "S/L": any }[];
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
  const { status } = useSelector(
    (state: { mode: { status: string } }) => state?.mode
  );
  const [scrollWidth, setScrollWidth] = useState(window?.innerWidth);
  const ExpandedComponent = ({ data }: any) => {
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
        color: status === "light" ? ColorBlack : ColorWhite,
        fontSize: 14,
        fontWeight: 600,
      },
    },
    headRow: {
      style: {
        borderBottomColor:
          status === "light" ? LightBorderColor : ColorDarkGray,
      },
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
            {totalRows && totalRows > 10 && (
              <Pagination
                sx={{
                  li: {
                    button: {
                      color: status === "light" ? ColorBlack : ColorWhite,
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                      ":hover": {
                        color: status === "light" ? ColorWhite : ColorBlack,
                        backgroundColor: ColorGreen,
                        fontWeight: 600,
                      },
                      "&.Mui-selected": {
                        backgroundColor: ColorGreen,
                        color: status === "light" ? ColorWhite : ColorBlack,
                        border: "1px solid transparent",
                        fontWeight: 600,

                        ":hover": {
                          backgroundColor: ColorGreen,
                        },
                      },
                    },
                  },
                }}
                onChange={(_, page) => {
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
