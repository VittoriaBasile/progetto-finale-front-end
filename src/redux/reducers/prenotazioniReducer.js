import { CREA_PRENOTAZIONE, ELIMINA_PRENOTAZIONE, GET_MY_PRENOTAZIONI, GET_PRENOTAZIONI } from "../actions";

const initialState = [];

const prenotazioniReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRENOTAZIONI:
      return action.payload;
    case GET_MY_PRENOTAZIONI:
      return action.payload;
    case CREA_PRENOTAZIONE:
      return [...state, action.payload];
    case ELIMINA_PRENOTAZIONE:
      return state.filter((prenotazione) => prenotazione.id !== action.payload);
    default:
      return state;
  }
};

export default prenotazioniReducer;
