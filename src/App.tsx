import Navbar from "./components/parts/Navbar";
import Sidebar from "../src/components/parts/Sidebar";
import { useEffect, useLayoutEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import { ChildContainer, ChildWrapper } from "./assets/styles";
import Footer from "./components/parts/Footer";
import Products from "./pages/Products";
import GalleryDrawer from "./components/elements/galleryDrawer";
import Orders from "./pages/Orders";
import AddStocks from "./pages/stocks/addStocks";
import AllLocations from "./pages/stocks/allLocations";
import Stocks from "./pages/stocks";
import Refunds from "./pages/refunds";
function App() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const params = useLocation();
  console.log("par", params);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior:"instant"
    });
  }, [params]);
  const posState = params?.pathname.includes("pos")
  return (
    <>
      <Navbar sideBarStatus={sideBarOpen} />
      {!posState &&
      <Sidebar open={sideBarOpen} setOpen={setSideBarOpen} />}  

      <ChildWrapper $open={sideBarOpen} justifyContent={"center"}>
        <ChildContainer>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/products/*" element={<Products />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/stocks/*" element={<Stocks />} />
            <Route path="/admin/refunds/*" element={<Refunds />} />
          </Routes>
        </ChildContainer>
      </ChildWrapper>
      <GalleryDrawer />
      <Footer sideBarOpen={sideBarOpen} />
    </>
  );
}

export default App;
