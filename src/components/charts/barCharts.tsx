import  { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

import { ArcElement, Tooltip, Legend } from "chart.js";
import { ordersChartOptions, ordersChartdata } from "./data";

Chart.register(ArcElement, Tooltip, Legend);
interface Iprops {
  ApiData:any;
}
export function BarChart({ ApiData }: Iprops) {
  const [chartDatas, setChartDatas] = useState<{
    lables:string[];
    datasets:{}[];
  }>(ordersChartdata);
  useEffect(() => {
    if (ApiData?.date)
      setChartDatas((prev) => ({
        ...prev,
        labels: ApiData?.date,
        datasets: prev.datasets?.map((obj) => ({
          ...obj,
          data: ApiData?.count,
        })),
      }));
  }, [ApiData]);
  // console.log("fromChart COmp", ApiData, chartDatas);

  return (
    <Bar
      data={chartDatas}
      options={ordersChartOptions}
      width={"100%"}
      height={"25vh"}
    />
  );
}
