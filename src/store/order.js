import { createSlice } from "@reduxjs/toolkit";

const storeName = "order";
const initialState = {
  id: "test-001-001",
  name: "state 초기 값",
};

const sliceObject = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setOrderInfo(state, action) {
      state = action.payload;
    },
  },
});

export const orderActions = sliceObject.actions;
export default sliceObject.reducer;
