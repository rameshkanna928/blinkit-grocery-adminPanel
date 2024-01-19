import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  position:null
};
export const drawerSlice = createSlice({
  name: "drawer",
  initialState: initialState,
  reducers: {
    onOpen: (state) => {
      state.open = true;
    },
    onClose:(state)=>{
        state.open =false;
    },
    chooseDrawerPosition:(state,)=>{
        state.position
    }
  },
});
export const {onClose,onOpen} =drawerSlice.actions;
export default drawerSlice.reducer