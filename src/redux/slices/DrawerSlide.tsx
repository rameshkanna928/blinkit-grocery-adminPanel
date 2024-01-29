import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  position: null,
  sidebarOpen: false,
};
export const drawerSlice = createSlice({
  name: "drawer",
  initialState: initialState,
  reducers: {
    onOpen: (state) => {
      state.open = true;
    },
    onClose: (state) => {
      state.open = false;
    },
    chooseDrawerPosition: (state) => {
      state.position;
    },
    onSidebarOpen: (state) => {
      state.sidebarOpen = true;
    },
    onSidebarClose: (state) => {
      state.sidebarOpen = false;
    },
  },
});
export const { onClose, onOpen,onSidebarClose,onSidebarOpen } = drawerSlice.actions;
export default drawerSlice.reducer;
