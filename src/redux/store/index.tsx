import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../slices/SideBarSlice";
import drawerSlice from "../slices/DrawerSlide";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    drawer: drawerSlice,
  },
});
