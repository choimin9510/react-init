import { configureStore, combineReducers } from "@reduxjs/toolkit";

import user from "./user";
import order from "./order";

const reducer = combineReducers({
  user,
  order,
});

const store = configureStore({ reducer });

export default store;
