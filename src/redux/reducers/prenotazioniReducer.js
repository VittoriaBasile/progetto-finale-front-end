import { CREA_PRENOTAZIONE, GET_PRENOTAZIONI } from "../actions";

const initialState = [];

const prenotazioniReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRENOTAZIONI:
      return action.payload;
    case CREA_PRENOTAZIONE:
      return [...state, action.payload];

    /* case ELIMINA_COMMENTO:
      return state.filter((commento) => commento.id !== action.payload);*/
    default:
      return state;
  }
};

export default prenotazioniReducer;
