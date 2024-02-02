import { useEffect, useState } from "react";
import PageHeaderComponent from "../../components/parts/pageheader";
import { CountTag, ParentStack, SmallSpan, SpanTag } from "../../assets/styles";
import {
  ColorDarkGreen,
  ColorDarkRed,
  ColorGreen,
  ColorRed,
  ColorWhite,
} from "../../assets/styles/color";
import ReuseButton from "../../components/elements/buttons/ReusableButton";
import { FiShare } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { PiDownloadSimpleBold } from "react-icons/pi";
import TableComponent from "../../components/elements/table";
import {
  NumberFormatter,
  StatusBooleanChanger,
  StatusOptions,
  productsTableHeaders,
  setFormDataByComp,
} from "../../utils";
import { FetchQuery } from "../../API/service";
import { getAllCategories, getAllProductsForAdmin } from "../../API/query";
import UseFetchQuery from "../../Hooks/useFetchQuery";
import TableItems from "../../components/elements/TableItems";
import ToogleButton from "../../components/elements/buttons/ToogleButton";
import TableStatusCard from "../../components/elements/TableStatusCard";
import CustomSelect from "../../components/elements/inputs/CustomSelect";
import SearchButton from "../../components/elements/buttons/search";
import ToolDropdown from "../../components/toolbar/ToolDropdown";
import { editIcon, viewIcon } from "../../utils/icons";
import CustomTextInput from "../../components/elements/inputs/CustomtextInput";
import { RoutePaths } from "../../routes";
import { Box } from "@mui/material";
function AllProducts() {
  let getStorageItem = JSON.parse(
    JSON.stringify(localStorage.getItem("tablePageNumbers"))
  );
  const [pageNumber, setPageNumber] = useState(
    getStorageItem?.AllProducts ? getStorageItem?.AllProducts : 1
  );
  const [tableData, setTableData] = useState({
    columnHeader: productsTableHeaders,
    rowData: [],
  });
  const [categoryOptions, setCategoryOptions] = useState(["Select Category"]);
  const { LoadQuery } = FetchQuery(getAllProductsForAdmin);
  const { LoadQuery: LoadcategoryQuery } = FetchQuery(getAllCategories);
  const {
    ApiResults,
    fetchdatas,
    ApiResults: {
      data: { getAllProductsByAdmin: curdata },
    },
  }: any = UseFetchQuery(LoadQuery, {
    limit: 10,
    index: pageNumber,
  });
  const { ApiResults: allCategory } = UseFetchQuery(LoadcategoryQuery, {});
  const [formDatas, setFormdatas] = useState({
    limit: 10,
    index: pageNumber,
    status: null,
    search: "",
    category: null,
  });

  useEffect(() => {
    setTableData((prev) => ({
      ...prev,
      rowData: curdata?.data?.map((obj: any, i: number) => {
        return {
          "S/L": <SpanTag>{(pageNumber - 1) * 10 + i + 1}</SpanTag>,
          "Product Name": (
            <TableItems
              imgH={30}
              imgW={30}
              data={{
                image: obj?.image?.image,
                name: obj?.name,
                span: null,
              }}
              space={false}
            />
          ),
          ProductType: <SmallSpan>{obj?.ProductType?.name}</SmallSpan>,
          Categories: (
            <TableStatusCard status={obj?.ProductType?.productCategory?.name} />
          ),
          Price: (
            <CountTag style={{ color: "#FF7C08" }}>
              ₹{NumberFormatter(obj?.variant?.[0]?.price)}
            </CountTag>
          ),
          Active: <ToogleButton value={obj?.isActive} />,
          Actions: (
            <ToolDropdown
              arr={[
                {
                  text: "Edit",
                  icon: editIcon,
                  routePath: RoutePaths.products.updateProduct,
                },
                { text: "View Details", icon: viewIcon },
              ]}
              width={"100%"}
            />
          ),
        };
      }),
    }));
  }, [ApiResults]);
  useEffect(() => {
    setFormdatas((prev) => ({
      ...prev,
      index: pageNumber,
    }));
  }, [pageNumber]);
  useEffect(() => {
    fetchdatas(formDatas);
  }, [formDatas.index]);
  useEffect(() => {
    allCategory?.data?.getAllCategories?.map((data) => {
      setCategoryOptions((prev) => [...prev, data?.name]);
    });
  }, [allCategory]);

  const handleFormdatas = ({ name, value }) => {
    setFormDataByComp(name, value, setFormdatas);
    console.log("formDatas", formDatas, name, value);
  };

  console.log("asStore12", tableData);

  return (
    <ParentStack>
      <PageHeaderComponent pageName="Products">
        <ReuseButton
          color={ColorRed}
          iconPadding={"0 5px"}
          icon={<PiDownloadSimpleBold />}
          text={"Export"}
          hovercolor={ColorDarkRed}
          textColor={ColorWhite}
          routeLink={""}
        />
        <ReuseButton
          color={ColorGreen}
          iconPadding={"0 5px"}
          icon={<FiShare />}
          text={"Import"}
          hovercolor={ColorDarkGreen}
          textColor={ColorWhite}
          routeLink={""}
        />
        <ReuseButton
          color={ColorGreen}
          iconPadding={"0 5px"}
          icon={<FiPlus />}
          text={"Add Product"}
          hovercolor={ColorDarkGreen}
          textColor={ColorWhite}
          routeLink={RoutePaths.products.addProduct}
        />
      </PageHeaderComponent>
      <TableComponent
        tableData={tableData}
        totalRows={curdata?.count}
        page={pageNumber}
        setPageNumber={setPageNumber}
      >
        <CustomTextInput
          inputProps={{
            name: "search",
            placeHolder: "search",
            onChange: (e) => handleFormdatas(e.target),
          }}
          iconState={true}
          holderText={"search"}
        />
        <Box maxWidth={"200px"} width={"100%"}>
          <CustomSelect
            inputProps={{
              options: categoryOptions,
              defaultValue: categoryOptions[0],
            }}
          />
        </Box>

        <Box maxWidth={"150px"} width={"100%"}>
          <CustomSelect
            inputProps={{
              options: StatusOptions,
              defaultValue: categoryOptions[0],
            }}
          />
        </Box>

        <SearchButton
          theme={"white"}
          onClick={() => {
            fetchdatas({
              ...formDatas,
              status: StatusBooleanChanger(formDatas?.status),
              category:
                formDatas?.category === "Select Category"
                  ? null
                  : formDatas?.category,
            });
          }}
          routeLink={""}
        />
      </TableComponent>
    </ParentStack>
  );
}

export default AllProducts;
