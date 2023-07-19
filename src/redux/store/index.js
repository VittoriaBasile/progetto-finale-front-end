import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homeReducer from "../reducers/homeReducer";
import valutazioneReducer from "../reducers/valutazioneReducer";
import preferitiReducer from "../reducers/preferitiReducer";
import commentiReducer from "../reducers/commentiReducer";
import prenotazioniReducer from "../reducers/prenotazioniReducer";
import userReducer from "../reducers/userReducer";
import annunciReducer from "../reducers/annunciReducer";
const rootReducer = combineReducers({
  preferiti: preferitiReducer,
  home: homeReducer,
  annunci: annunciReducer,
  valutazione: valutazioneReducer,
  commenti: commentiReducer,
  prenotazioni: prenotazioniReducer,
  user: userReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
