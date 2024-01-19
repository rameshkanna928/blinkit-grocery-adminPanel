import React from "react";
import { Route, Routes } from "react-router-dom";
import AddStocks from "./addStocks";
import AllLocations from "./allLocations";

function Stocks() {
  return (
    <Routes>
      <Route path="/add" element={<AddStocks />} />
      <Route path="/locations" element={<AllLocations />} />
    </Routes>
  );
}

export default Stocks;
