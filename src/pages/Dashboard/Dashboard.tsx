import {
  ButtonGray,
  CommonCard,
  CommonContainer,
  CountTag,
  CustomLink,
  NumberTag,
  RoundedIcons,
  SalesCard,
  SpanTag,
} from "../../assets/styles";
import { FiShoppingCart } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import {
  ColorBlack,
  ColorDarkGreen,
  ColorDullWhite,
  ColorGreen,
  ColorWhite,
  LessLightBlue,
} from "../../assets/styles/color";
import PageHeaderComponent from "../../components/parts/pageheader";
import { Divider, Grid, Stack } from "@mui/material";

import ReusableChartCard from "../../components/dashboardCharts/reusableCharts";

import RecentOrders from "./RecentOrders";
import TableItems from "../../components/elements/TableItems";
import { FetchQuery } from "../../API/service";
import {
  getTopSellingProducts,
  orderDetailsCountForCard,
} from "../../API/query";
import UseFetchQuery from "../../Hooks/useFetchQuery";
import { useEffect, useState } from "react";
import ReuseButton from "../../components/elements/buttons/ReusableButton";
import { OrdersCardIcon } from "../../utils/icons";
function Dashboard() {
  const [sellingProducts, setSellingProducts] = useState([]);

  const { LoadQuery, data } = FetchQuery(getTopSellingProducts);
  const { LoadQuery: CountForCard } = FetchQuery(orderDetailsCountForCard);

  const { ApiResults: ApiSellingProducts } = UseFetchQuery(LoadQuery, {});
  const { ApiResults: ordersCount } = UseFetchQuery(CountForCard, {});

  // console.log("forSP", ApiSellingProducts);
  useEffect(() => {
    let ApiData = ApiSellingProducts?.data?.getTopSellingProducts;
    if (ApiData) {
      setSellingProducts(ApiData);
    }
  }, [ApiSellingProducts]);
  // console.log("countDeatils", ordersCount);
  const [ordersCountArr, setOrdersCountArr] = useState([]);
  useEffect(() => {
    setOrdersCountArr(ordersCount?.data?.getOrderDetailsCount);
    let we = ordersCount?.data?.getOrderDetailsCount?.map((data) => {
      let letsFindObj = OrdersCardIcon.find(
        (val) => val?.label === data?.label
      );

      if (letsFindObj) {
        return {
          ...data,
          icon: letsFindObj.icon,
          background: letsFindObj.iconBackground,
        };
      } else {
        return { ...data };
      }
    });
    // console.log("weeeeeeeee", we);

    setOrdersCountArr(we);
  }, [ordersCount]);
  // console.log("weeeeeeeee", ordersCountArr);

  return (
    <CommonContainer>
      <PageHeaderComponent pageName="Admin DashBoard">
        <ReuseButton
          color={ColorDullWhite}
          hovercolor={LessLightBlue}
          iconPadding={"0 10px"}
          icon={<FiShoppingCart size={18} />}
          text={"Manage Sales"}
          textColor={ColorBlack}
          routeLink={"/admin/orders"}
        />
        <ReuseButton
          color={ColorGreen}
          hovercolor={ColorDarkGreen}
          iconPadding={"0 10px"}
          icon={<FiPlus size={18} />}
          text={"Add Product"}
          textColor={ColorWhite}
          routeLink={""}
        />
      </PageHeaderComponent>

      <Grid container justifyContent={"space-between"} rowGap={2}>
        <Grid xl={9}  xs={12} container rowGap={2} justifyContent={"space-between"}>
          <Grid item xs={12}  md={5.9} lg={3.9}>
            <ReusableChartCard caseValue={"earnings"} filter={true} />
          </Grid>
          <Grid item xs={12}  md={5.9} lg={3.9}>
            <ReusableChartCard caseValue={"categorySales"} filter={false} />
          </Grid>
          <Grid item xs={12}  md={12} lg={3.9}>
            <ReusableChartCard caseValue={"monthlyOrders"} filter={false} />
          </Grid>
          <Grid xs={12}>
            <ReusableChartCard caseValue={"monthlySales"} filter={false} />
          </Grid>
        </Grid>
        <Grid item  xl={2.8} xs={12}>
          <CommonCard>
            <Stack width={"100%"}>
              <Stack m={"20px"}>
                <NumberTag>Top Selling Products</NumberTag>
                <SpanTag>We have listed count total products.</SpanTag>
              </Stack>
              <Stack
                className="hide-scroll"
                sx={{ maxHeight: "56vh", overflow: "auto" }}
              >
                {sellingProducts?.map((products, index) => (
                  <>
                    <Stack
                      key={index}
                      direction={"row"}
                      px={2}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <TableItems
                        data={{
                          image: products?.image?.image,
                          name: products?.name,
                          span: `Category: ${products?.ProductType?.name}`,
                        }}
                        space={true}
                        imgW={undefined}
                        imgH={undefined}
                      />
                      <CountTag>({products.sellingCount})</CountTag>
                    </Stack>
                    <Divider />
                  </>
                ))}
              </Stack>
            </Stack>
          </CommonCard>
        </Grid>
      </Grid>
      <Grid container justifyContent={"space-between"} rowGap={2}>
        {ordersCountArr?.slice(0, 4).map((data,i) => (
          <Grid item sm={12} md={5.8} lg={3.9} xl={2.9} key={i}>
            <CommonCard>
              <SalesCard>
                <RoundedIcons $background={data?.background}>
                  {data?.icon}
                </RoundedIcons>

                <Stack>
                  <NumberTag>{data?.count}</NumberTag>
                  <SpanTag>{data?.label}</SpanTag>
                </Stack>
              </SalesCard>
            </CommonCard>
          </Grid>
        ))}
      </Grid>

      <RecentOrders />
      <Grid container justifyContent={"space-between"} rowGap={2}>
        {ordersCountArr?.slice(4, ordersCountArr?.length - 1).map((data,i) => (
          <Grid item sm={12} md={5.8} lg={3.9} xl={2.9} key={i}>
            <CommonCard>
              <SalesCard>
                <RoundedIcons $background={data?.background}>
                  {data?.icon}
                </RoundedIcons>

                <Stack>
                  <NumberTag>{data?.count}</NumberTag>
                  <SpanTag>{data.label}</SpanTag>
                </Stack>
              </SalesCard>
            </CommonCard>
          </Grid>
        ))}
      </Grid>
    </CommonContainer>
  );
}

export default Dashboard;
