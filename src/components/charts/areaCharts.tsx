import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler, // 1. Import Filler plugin
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // 1. Register Filler plugin
);
export interface IChartApiData {
  date: [];
  amount: [];
  count: number;
}
interface Props {
  data: any;
  options: {};
  ApiData: any;
}
export function AreaChart({ data, options, ApiData }: Props) {
  const [chartData, setChartData] = useState<{
    labels?: string[];
    datasets?: {}[];
  }>({});
  const [chartOptions, setChartOptions] = useState({});

  const setChartTypesData = () => {
    setChartData(data);
    setChartOptions(options);
  };
  useEffect(() => {
    setChartTypesData();
  }, []);
  console.log("fromCC", chartData);
  useEffect(() => {
    if (ApiData?.date) {
      setChartData((prev) => ({
        ...prev,
        labels: ApiData?.date,
        datasets: prev?.datasets?.map((datasets) => {
          return {
            ...datasets,
            data: ApiData?.amount,
          };
        }),
      }));
    }
    // console.log("StaticEarningsData", ApiData,chartData);
  }, [ApiData]);
  return (
    <>
      {Object?.keys(chartData)?.length > 0 ? (
        <Line
          options={chartOptions}
          data={chartData}
          width={"100%"}
          height={"25vh"}
        />
      ) : (
        "no Data"
      )}
    </>
  );
}
