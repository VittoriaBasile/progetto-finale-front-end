import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homeReducer from "../reducers/homeReducer";
import preferitiReducer from "../reducers/preferitiReducer";
const rootReducer = combineReducers({
  preferiti: preferitiReducer,
  home: homeReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
