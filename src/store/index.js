import { createStore, combineReducers } from '@reduxjs/toolkit';

import user from './user';
import order from './order';

const reducer = combineReducers({
    user,
    order
});
  
const store = createStore(reducer);

export default store