import { useEffect, useState } from "react";
import PageHeaderComponent from "../../components/parts/pageheader";
import {
  CountTag,
  FlexBetween,
  FlexBox,
  ParentStack,
  SmallSpan,
  SpanTag,
} from "../../assets/styles";
import {
  ColorBlack,
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
import { RxDotsVertical } from "react-icons/rx";
import ToogleButton from "../../components/elements/buttons/ToogleButton";
import TableStatusCard from "../../components/elements/TableStatusCard";
import CustomSelect from "../../components/elements/inputs/CustomSelect";
import SearchButton from "../../components/elements/buttons/search";
import CustomDropDown from "../../components/elements/CustomDropDown";
import ToolDropdown from "../../components/toolbar/ToolDropdown";
import { deleteIcon, editIcon, viewIcon } from "../../utils/icons";
import CustomTextInput from "../../components/elements/inputs/CustomtextInput";
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
          "1": <SpanTag>{(pageNumber - 1) * 10 + i + 1}</SpanTag>,
          "2": (
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
          "3": <SmallSpan>{obj?.ProductType?.name}</SmallSpan>,
          "4": (
            <TableStatusCard status={obj?.ProductType?.productCategory?.name} />
          ),
          "5": (
            <CountTag style={{ color: "#FF7C08" }}>
              ₹{NumberFormatter(obj?.variant?.[0]?.price)}
            </CountTag>
          ),
          "6": <ToogleButton value={obj?.isActive} />,
          "7": (
              <ToolDropdown
                arr={[
                  { text: "Edit", icon: editIcon },
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

  const handleFormdatas = (name: string, value: string) => {
    setFormDataByComp(name, value, setFormdatas);
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
          routeLink={""}
        />
      </PageHeaderComponent>
      {tableData?.rowData && tableData?.rowData?.length && (
        <TableComponent
          tableData={tableData}
          totalRows={curdata?.count}
          page={pageNumber}
          setPageNumber={setPageNumber}
        >
          <CustomTextInput
            changeFunction={(value: string) => handleFormdatas("search", value)}
            iconState={true}
            holderText={"search"}
          />

          <CustomSelect
            formData={formDatas}
            setFormData={(name: string, value: string) =>
              handleFormdatas(name, value)
            }
            width={"250px"}
            search={true}
            options={categoryOptions}
            propertyName={"category"}
          />
          <CustomSelect
            formData={formDatas}
            setFormData={(name: string, value: string) =>
              handleFormdatas(name, value)
            }
            width={"200px"}
            search={false}
            options={StatusOptions}
            propertyName={"status"}
          />

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
      )}
    </ParentStack>
  );
}

export default AllProducts;
