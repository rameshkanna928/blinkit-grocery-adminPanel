import  { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {  Doughnut } from "react-chartjs-2";
import { CategoryChartData, categoryChartOptions } from "./data";
import  "../../assets/styles/index.css"

ChartJS.register(ArcElement, Tooltip, Legend);


export function DoughnutChart({ApiData}:any) {
  const [data,setData] =useState(CategoryChartData)
  useEffect(()=>{
    if(ApiData?.category){
      setData((prev) => ({
        ...prev,
        labels: ApiData?.category,
        datasets: prev.datasets?.map((obj) => ({
          ...obj,
          data: ApiData?.sellingCount,
        })),
      }))
    }

  
  },[ApiData])
  // console.log("forDonut",ApiData,data);

  return (
    <Doughnut
      data={data?data:CategoryChartData}
      options={categoryChartOptions}
      width={"100%"}
      height={"25vh"}
    />
  );
}
