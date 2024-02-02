import {  ColorGray, ColorGreen,  ColorLightGreen } from "../../assets/styles/color";


export const EarningChartOptions = {
  responsive: true,
  tension: 0.3,
  aspectRatio: 2.5,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      usePointStyle: true,
    },
  },
  scales: {
    y: { display: false },
    x: { display: false },
  },
};
export const MonthlySalesChartOptions = {
  responsive: true,
  tension: 0.3,
  layout: {
    padding: {
      top: 0,
      left: 20,
      right: 20,
      bottom: 40,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      usePointStyle: true,
    },
  },
  scales: {
    x: { display: false },
    y: {
      display: true,
      ticks: {
        beginAtZero: true,
        steps: 10,
        stepValue: 50,
        max: 100,
      },
    },
  },
  yaxis: {
    min: 0,
    max: 200,
  },
};
const labels = Array(30)
  .fill(1)
  .map((_, i) => i + 1);
// console.log("CheckArr", labels);
// console.log("dateArr",labels.map((data) => "Jan" + data));
export const EarningChartData = {
  labels: labels.map((data) => "Jan" + data),
  datasets: [
    {
      label: "Earning",
      data: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
      borderColor: "rgb(255,154,0)",
      backgroundColor: "rgb(255,154,0)",
      pointBorderColor: "rgb(255,154,0)",
      pointBackgroundColor: "rgb(255,154,0)",
      pointHoverBackgroundColor: "rgb(255,154,0)",
      pointHoverBorderColor: "rgb(255,154,0)",
      radius: 1,
      fill: {
        target: "origin", // Set the fill options
        above: "rgb(255,116,0,0.2)",
      },
    },
  ],
};

export const MonthlySalesChartData = {
  labels: labels.map((data) => "Jan" + data),
  datasets: [
    {
      label: "Sales",
      data: [
        1000,
        900,
        0,
        130,
        20,
        0,
        230,
        0,
        0,
        230,
        0,
        433,
        0,
        550,
        540,
        450,
        660,
        0,
        0,
        0,
        7,
        0,
        0,
        0,
        450,
        230,
        1,
        430,
        1,
        10,
      ],
      borderColor: ColorGreen,
      pointBorderColor: ColorGreen,
      pointBackgroundColor: ColorGreen,
      pointHoverBackgroundColor: ColorGreen,
      pointHoverBorderColor: ColorGreen,
      radius: 1,
      fill: {
        target: "origin", // Set the fill options
        above: ColorLightGreen,
      },
    },
  ],
};

export const ordersChartdata:any = {
  labels: [
    "Red",
    "Blue",
    "Yellow",
    "Green",
    "Purple",
    "Blue",
    "Yellow",
    "Green",
    "Purple",
    "Blue",
    "Yellow",
    "Green",
    "Purple",
    "Blue",
    "Yellow",
    "Green",
    "Purple",
    "Blue",
    "Yellow",
    "Green",
    "Purple",
    "Blue",
    "Yellow",
    "Green",
    "Purple",
    "Blue",
    "Yellow",
    "Green",
    "Purple",
    "Blue",
  ],
  datasets: [
    {
      label: "",
      data: [
        5,
        0,
        3,
        5,
        3,
        0,
        5,
        5,
        5,
        2,
        1,
        5,
        5,
        5,
        5,
        5,
        5,
        0,
        0,
        5,
        5,
        5,
        5,
        0,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
      ],
      backgroundColor: "rgba(30, 144, 255, 0.85)",
      borderColor: ["white", "white", "white", "white", "white"],
      borderWidth: 1,
    },
  ],
};

export const ordersChartOptions = {
  responsive: true,
  aspectRatio: 2.5,
  scales: {
    x: { display: false },
    y: { display: false },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const CategoryChartData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
  datasets: [
    {
      label: null,
      data: [5, 5, 5, 5, 5],
      pointStyle: "circle",
      backgroundColor: [
        "rgb(0, 143, 251)",
        "rgb(0, 227, 150)",
        "rgb(254, 176, 25)",
        "rgb(255, 69, 96)",
        "rgb(119, 93, 208)",
      ],
      borderColor: "white",
      borderWidth: 2,
    },
  ],
};
export const categoryChartOptions = {
  responsive: true,
  aspectRatio: 2.5,
  cutout: "70%",

  plugins: {
    legend: {
      display: true,
      position: "right",
      labels: {
        color:ColorGray,
        usePointStyle: true,
        pointStyle: "circle",
        pointStyleWidth: 15,
      },
    },

  },
};
