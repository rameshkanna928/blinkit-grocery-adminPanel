import { Stack, Box } from "@mui/material";
import { useEffect, useState } from "react";
import {
  CommonCard,
  SpanTag,
  NumberTag,
  CustomSubList,
} from "../../assets/styles";
import CustomDropDown from "../elements/CustomDropDown";
import { FetchQuery } from "../../API/service";
import UseFetchQuery from "../../Hooks/useFetchQuery";
import {
  getCategoryChart,
  getOrdersChart,
  getCurrentMonthSalesChart,
  getToatalEarnings,
} from "../../API/query";
import { NumberFormatter } from "../../utils";
import { AreaChart } from "../charts/areaCharts";
import { BarChart } from "../charts/barCharts";
import {
  EarningChartData,
  EarningChartOptions,
  MonthlySalesChartData,
  MonthlySalesChartOptions,
} from "../charts/data";
import { DoughnutChart } from "../charts/doughnut";
import { IoMdArrowDropdown } from "react-icons/io";

function ReusableChartCard({
  caseValue,
  filter,
}: {
  caseValue: string;
  filter: boolean;
}) {
  let earningFilterSalesDetails = JSON.parse(
    localStorage?.getItem("earningSaleDetails"));
  const [chartTitle, setChartTitle] = useState("");
  const [chartTotal, setChartTotal] = useState("");
  const [chartApiDatas, setChartApiDatas] = useState(null);

  const [filterValue, setFilterValue] = useState(
    earningFilterSalesDetails?.label
      ? earningFilterSalesDetails?.label
      : "Last 7 days"
  );
  let filterArr = [
    { label: "Last 7 days", value: 7 },
    { label: "Last 30 days", value: 30 },
    { label: "Last 3 months", value: 90 },
  ];
  const { LoadQuery: earningsLoadQuery, data: ApiEarningsData } = FetchQuery(
    getToatalEarnings
  );
  const { LoadQuery: categoryLoadQuery, data: ApicategoryData } = FetchQuery(
    getCategoryChart
  );
  const { LoadQuery: ordersLoadQuery, data: ApiordersData } = FetchQuery(
    getOrdersChart
  );
  const { LoadQuery: salesLoadQuery, data: ApisalesData } = FetchQuery(
    getCurrentMonthSalesChart
  );
  const { ApiResults } = UseFetchQuery(earningsLoadQuery, {
    days: earningFilterSalesDetails?.value
      ? earningFilterSalesDetails?.value
      : 7,
  });
  const { ApiResults: OrdersApiResults } = UseFetchQuery(ordersLoadQuery, null);
  // console.log("forOrdersData", OrdersApiResults);
  const {ApiResults:categoryApiResults} = UseFetchQuery(categoryLoadQuery, null);
  const {ApiResults:salesApiResults} = UseFetchQuery(salesLoadQuery, null);
  const dynDepen = () => {
    switch (caseValue) {
      case "earnings": {
        return ApiEarningsData;
      }
      case "monthlyOrders": {
        return OrdersApiResults;
      }
      case "categorySales": {
        return categoryApiResults;
      }
      case "monthlySales": {
        return salesApiResults;
      }
      default:
        return;
    }
  };
  useEffect(() => {
    if (caseValue === "earnings") {
      setChartApiDatas(ApiEarningsData?.getMonthlyChart);
      setChartTotal(
        `₹ ${
          ApiEarningsData?.getMonthlyChart
            ? NumberFormatter(ApiEarningsData?.getMonthlyChart?.total)
            : 0
        }`
      );
    } else if (caseValue === "monthlyOrders") {
      setChartApiDatas(OrdersApiResults?.data?.getOrdersChart);
      setChartTotal(
        `${
          OrdersApiResults?.data?.getOrdersChart
            ? NumberFormatter(OrdersApiResults?.data?.getOrdersChart?.total)
            : 0
        }`
      );
    } else if (caseValue === "categorySales") {
      setChartApiDatas(categoryApiResults?.data?.getCategoryCharts);
      setChartTotal(
        `${
          categoryApiResults?.data?.getCategoryCharts?.total
            ? NumberFormatter(
                categoryApiResults?.data?.getCategoryCharts?.total
              )
            : 0
        }`
      );
    } else if (caseValue === "monthlySales") {
      // console.log("SalesChartin", salesApiResults);

      setChartApiDatas(salesApiResults?.data?.getSaleThisMonthChart);
      setChartTotal(
        `₹  ${
          salesApiResults?.data?.getSaleThisMonthChart
            ? NumberFormatter(
                salesApiResults?.data?.getSaleThisMonthChart?.total
              )
            : 0
        }`
      );
    }
  }, [dynDepen()]);
  // console.log("updateEarningsChart", ApiEarningsData, ApiResults);

  useEffect(() => {
    const setValueFunction = () => {
      switch (caseValue) {
        case "earnings": {
          setChartTitle("Total Earning");

          break;
        }
        case "categorySales": {
          setChartTitle("Top 5 Category Sales");
          break;
        }
        case "monthlyOrders": {
          setChartTitle("Last 30 Days Orders");
          break;
        }
        case "monthlySales": {
          setChartTitle("Sales This Months");
          break;
        }
        default:
          return null;
      }
    };
    setValueFunction();
  }, []);
  function RenderDynamicCharts() {
    switch (caseValue) {
      case "earnings": {
        return (
          <AreaChart
            data={EarningChartData}
            options={EarningChartOptions}
            ApiData={chartApiDatas}
          />
        );
      }
      case "categorySales": {
        return <DoughnutChart ApiData={chartApiDatas} />;
      }
      case "monthlyOrders": {
        return <BarChart ApiData={chartApiDatas} />;
      }
      case "monthlySales": {
        return (
          <AreaChart
            data={MonthlySalesChartData}
            options={MonthlySalesChartOptions}
            ApiData={chartApiDatas}
          />
        );
      }
      default:
        return null;
    }
  }
  return (
    <CommonCard>
      <Stack width={"100%"}>
        <Stack
          m={"20px"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          direction={"row"}
        >
          <Stack>
            <SpanTag>{chartTitle}</SpanTag>
            <NumberTag>{chartTotal}</NumberTag>
          </Stack>
          {filter && (
            <CustomDropDown value={ <>
            {filterValue}  <IoMdArrowDropdown size={18} /> 
            </>}>
              <Box width={200} px={2}>
                {filterArr.map((data,i) => (
                  <CustomSubList
                  key={i}
                    onClick={() => {
                      setFilterValue(data.label);
                      ApiResults.refetch({
                        days: data.value,
                      });
                      localStorage.setItem(
                        "earningSaleDetails",
                        JSON.stringify({
                          label: data.label,
                          value: data.value,
                        })
                      );
                    }}
                    value={data?.value}
                  >
                    {data?.label}
                  </CustomSubList>
                ))}
              </Box>
            </CustomDropDown>
          )}
        </Stack>
        {RenderDynamicCharts()}
      </Stack>
    </CommonCard>
  );
}

export default ReusableChartCard;
