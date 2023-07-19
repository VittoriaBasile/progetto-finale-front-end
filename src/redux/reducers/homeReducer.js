import { GET_ANNUNCI, GET_DETTAGLIO } from "../actions";

const initialState = {
  annunci: [],
  annuncio: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANNUNCI:
      return {
        ...state,
        annunci: action.payload,
      };

    case GET_DETTAGLIO:
      return {
        ...state,
        annuncio: action.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
