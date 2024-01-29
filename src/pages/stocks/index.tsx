import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import AddStocks from "./addStocks";
import AllLocations from "./allLocations";

function Stocks() {
  return (
 <Outlet/>
  );
}

export default Stocks;
