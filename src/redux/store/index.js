import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homeReducer from "../reducers/homeReducer";
import valutazioneReducer from "../reducers/valutazioneReducer";
import preferitiReducer from "../reducers/preferitiReducer";
import commentiReducer from "../reducers/commentiReducer";
import prenotazioniReducer from "../reducers/prenotazioniReducer";
import userReducer from "../reducers/userReducer";
import annunciReducer from "../reducers/annunciReducer";
import annunciPerFiltroReducer from "../reducers/annunciPerFiltroReducer";
import annunciPerTipoReducer from "../reducers/annunciPerTipoReducer";
import annunciPerPrezzoReducer from "../reducers/annunciPerPrezzoReducer";
import myPrenotazioniReducer from "../reducers/myPrenotazionireducer";
const rootReducer = combineReducers({
  preferiti: preferitiReducer,
  home: homeReducer,
  annunciPerTipo: annunciPerTipoReducer,
  annunciPerFiltro: annunciPerFiltroReducer,
  annunciPerPrezzo: annunciPerPrezzoReducer,
  annunci: annunciReducer,
  valutazione: valutazioneReducer,
  commenti: commentiReducer,
  prenotazioni: prenotazioniReducer,
  myPrenotazioni: myPrenotazioniReducer,
  user: userReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
