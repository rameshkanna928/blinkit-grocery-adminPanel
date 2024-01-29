import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "light",
};
export const modeSlice = createSlice({
  name: "mode",
  initialState: initialState,
  reducers: {
    toDark: (state) => {
      state.status = "dark";
    },
    toLight: (state) => {
      state.status = "light";
    },
    setGlobalTheme: (state, action) => {
      state.status = action.payload;
    },
  },
});
export const { toDark, toLight,setGlobalTheme } = modeSlice.actions;
export default modeSlice.reducer;
