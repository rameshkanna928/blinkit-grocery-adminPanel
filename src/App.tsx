import Navbar from "./components/parts/Navbar";
import Sidebar from "../src/components/parts/Sidebar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ChildContainer, ChildWrapper, GlobalStyles } from "./assets/styles";
import Footer from "./components/parts/Footer";
import GalleryDrawer from "./components/elements/galleryDrawer";

import AppRoutes from "./routes";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/theme";
import { useSelector } from "react-redux";
function App() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const params = useLocation();
  console.log("par", params);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [params]);
  const posState = params?.pathname.includes("pos");
  const { status } = useSelector((state) => state.mode);
  console.log("AppMode", status);

  return (
    <ThemeProvider theme={status === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Navbar sideBarStatus={sideBarOpen} />
        {!posState && <Sidebar open={sideBarOpen} setOpen={setSideBarOpen} />}

        <ChildWrapper $open={sideBarOpen} $Pos={posState} justifyContent={"center"}>
          <ChildContainer $Pos={posState}>
            <AppRoutes />
          </ChildContainer>
        </ChildWrapper>
        <GalleryDrawer />
        <Footer sideBarOpen={sideBarOpen} />
      </>
    </ThemeProvider>
  );
}

export default App;
