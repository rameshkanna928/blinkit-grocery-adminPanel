import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cureentRouteId: null,
};
export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    setCurrentRouteId: (state, action) => {
      state.cureentRouteId = action.payload;
    },
  },
});
export const {setCurrentRouteId} =sidebarSlice.actions;
export default sidebarSlice.reducer
