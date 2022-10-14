import { createSlice } from "@reduxjs/toolkit";

const storeName = "user";
const initialState = {
  id: "test",
  name: "이건 무슨 유저인가",
};

const sliceObject = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
  },
});

export const userActions = sliceObject.actions;
export default sliceObject.reducer;
