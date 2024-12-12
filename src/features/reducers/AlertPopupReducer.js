import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  message: "",
  type: "",
  visible: false,
};

const AlertPopupReducer = createSlice({
  name: "AlertReducer",
  initialState: initialState,
  reducers: {
    showAlert: (state, action) => {
      state.message = action.payload.message;
      state.type = action.payload.type;
      state.visible = true;
    },
    hideAlert: (state) => {
      state.visible = false;
    },
  },
});

export const { showAlert, hideAlert } = AlertPopupReducer.actions;
export default AlertPopupReducer.reducer;
