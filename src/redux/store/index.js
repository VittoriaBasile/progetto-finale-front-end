import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homeReducer from "../reducers/homeReducer";
import valutazioneReducer from "../reducers/valutazioneReducer";
import preferitiReducer from "../reducers/preferitiReducer";
import commentiReducer from "../reducers/commentiReducer";
import prenotazioniReducer from "../reducers/prenotazioniReducer";
const rootReducer = combineReducers({
  preferiti: preferitiReducer,
  home: homeReducer,
  valutazione: valutazioneReducer,
  commenti: commentiReducer,
  prenotazioni: prenotazioniReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
