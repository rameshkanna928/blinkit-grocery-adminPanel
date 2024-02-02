import { MdOutlineRemoveRedEye } from "react-icons/md";
import {
  FlexBetween,
  Heading2,
  SpanTag,
  TableNumberTag,
} from "../../assets/styles";
import TableComponent from "../../components/elements/table";
import { FetchQuery } from "../../API/service";
import { useEffect, useState } from "react";
import { getRecentOrders } from "../../API/query";
import { DateFormatter, RecenetOrdersHeaders } from "../../utils";
import TableStatusCard from "../../components/elements/TableStatusCard";
import {
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
  const { LoadQuery } = FetchQuery(getRecentOrders);
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
            "S/L": <SpanTag>{(pageNumber - 1) * 10 + i + 1}</SpanTag>,
            "Order Code": <SpanTag> {data?.orderId}</SpanTag>,
            Customer: (
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
            ),

            "Placed On": <SpanTag>{DateFormatter(data?.orderTime)}</SpanTag>,
            Items: (
              <TableNumberTag>{data?.addToCart?.[0]?.quantity}</TableNumberTag>
            ),
            "Payment Status": <TableStatusCard status={data?.paymentStatus} />,
            "Order Status": <TableStatusCard status={data?.orderStatus} />,
            "Order Type": <TableStatusCard status={data?.orderType} />,
            Actions: <ViewDetails />,
          };
        }),
      }));
  }, [ApiAlApiRecentOrders]);

  // console.log(ApiDataOrders, "Recappppppp");

  return (
    <>
      {" "}
      {ApiDataOrders?.rowData.length>0 ?   <TableComponent
        tableData={ApiDataOrders}
        setPageNumber={() => {}}
        totalRows={10}
        page={pageNumber}
      >
        <FlexBetween direction={"row"}>
          <div>
            <Heading2 style={{ margin: "4px 0" }}>Recent Orders</Heading2>
            <SpanTag>Your {ApiDataOrders?.rowData?.length} Most Recent Orders</SpanTag>
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
      </TableComponent> : 
      <SpanTag>server takes break!</SpanTag>}
   
    </>
  );
}

export default RecentOrders;
