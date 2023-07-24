import { GET_MY_PRENOTAZIONI } from "../actions";

const initialState = [];

const myPrenotazioniReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_PRENOTAZIONI:
      return action.payload;

    default:
      return state;
  }
};

export default myPrenotazioniReducer;
