import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homeReducer from "../reducers/homeReducer";
import valutazioneReducer from "../reducers/valutazioneReducer";
import preferitiReducer from "../reducers/preferitiReducer";
const rootReducer = combineReducers({
  preferiti: preferitiReducer,
  home: homeReducer,
  valutazione: valutazioneReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
