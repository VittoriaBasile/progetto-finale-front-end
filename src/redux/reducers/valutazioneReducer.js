import { GET_VALUTAZIONE, GET_VALUTAZIONI } from "../actions";

const initialState = [];

const valutazioniReducer = (state = initialState, action) => {
  switch (action.type) {
    case "valutazione/AGGIUNGI_VALUTAZIONE":
      return [...state, action.payload];

    case GET_VALUTAZIONI:
      return action.payload;

    case GET_VALUTAZIONE:
      return action.payload;
    default:
      return state;
  }
};

export default valutazioniReducer;
