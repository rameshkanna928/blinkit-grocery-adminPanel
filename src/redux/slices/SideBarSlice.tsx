import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  curentRouteId: null,
};
export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    setCurrentRouteId: (state, action) => {
      state.curentRouteId = action.payload;
    },
  },
});
export const {setCurrentRouteId} =sidebarSlice.actions;
export default sidebarSlice.reducer
