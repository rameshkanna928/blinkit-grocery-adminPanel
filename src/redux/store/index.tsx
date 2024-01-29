import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../slices/SideBarSlice";
import drawerReducer from "../slices/DrawerSlide";
import modeReducer from "../slices/modeSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    drawer: drawerReducer,
    mode:modeReducer,
  },
});
