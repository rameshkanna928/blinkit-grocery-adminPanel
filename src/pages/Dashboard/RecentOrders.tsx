import { MdOutlineRemoveRedEye } from "react-icons/md";
import {
  FlexBetween,
  Heading2,
  SpanTag,
  TableSpan,
  TableNumberTag,
  FlexBox,
} from "../../assets/styles";
import TableComponent from "../../components/elements/table";
import { FetchQuery } from "../../API/service";
import { useEffect, useState } from "react";
import { getRecentOrders } from "../../API/query";
import { DateFormatter, RecenetOrdersHeaders } from "../../utils";
import TableStatusCard from "../../components/elements/TableStatusCard";
import CustomTooltip from "../../components/elements/tooltip/CustomTooltip";
import {
  ColorDarkGray,
  ColorDarkGreen,
  ColorGreen,
  ColorWhite,
} from "../../assets/styles/color";
import TableItems from "../../components/elements/TableItems";
import UseFetchQuery from "../../Hooks/useFetchQuery";
import ReuseButton from "../../components/elements/buttons/ReusableButton";
import ViewDetails from "../../components/elements/tooltip/viewDetails";

function RecentOrders() {
  const [ApiDataOrders, setApiDataOrders] = useState({
    columnHeader: RecenetOrdersHeaders,
    rowData: [],
  });
  const { LoadQuery, data } = FetchQuery(getRecentOrders);
  const { ApiResults: ApiAlApiRecentOrders } = UseFetchQuery(LoadQuery, {
    index: 1,
    limit: 10,
  });
  // console.log("123", ApiAlApiRecentOrders);
  let pageNumber = 1;
  useEffect(() => {
    const data = ApiAlApiRecentOrders?.data?.getAllOrder;
    if (data)
      setApiDataOrders((prev) => ({
        ...prev,
        rowData: data?.data?.map((data, i) => {
          return {
            "1": <TableSpan>{data?.orderId}</TableSpan>,

            "2": (
              <>
                <TableItems
                  data={{
                    image: data?.user?.profileImage,
                    name: data?.user?.firstName + " " + data?.user?.lastName,
                    span: data?.user.phoneNo,
                  }}
                  space={false}
                  imgW={undefined}
                  imgH={undefined}
                />
              </>
            ),
            "3": DateFormatter(data?.orderTime),
            "4": (
              <TableNumberTag>{data?.addToCart?.[0]?.quantity}</TableNumberTag>
            ),
            "5": <TableStatusCard status={data?.paymentStatus} />,
            "6": <TableStatusCard status={data?.orderStatus} />,
            "7": <TableStatusCard status={data?.orderType} />,
            "8": (
                <ViewDetails />
            ),
          };
        }),
      }));
  }, [ApiAlApiRecentOrders]);

  // console.log(ApiDataOrders, "Recappppppp");

  return (
    <>
      {" "}
      {ApiDataOrders?.rowData && ApiDataOrders?.rowData?.length > 0 && (
        <TableComponent
          tableData={ApiDataOrders}
          setPageNumber={() => {}}
          totalRows={10}
          page={pageNumber}
        >
          <FlexBetween>
            <div>
              <Heading2 style={{ margin: "4px 0" }}>Recent Orders</Heading2>
              <SpanTag>Your 10 Most Recent Orders</SpanTag>
            </div>
            <ReuseButton
              color={ColorGreen}
              hovercolor={ColorDarkGreen}
              iconPadding={"0 5px"}
              icon={<MdOutlineRemoveRedEye size={20} />}
              text={"View All"}
              textColor={ColorWhite}
              routeLink={""}
            />
          </FlexBetween>
        </TableComponent>
      )}
    </>
  );
}

export default RecentOrders;
