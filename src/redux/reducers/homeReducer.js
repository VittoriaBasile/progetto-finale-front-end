import { ADD_ANNUNCIO, GET_ANNUNCI, GET_DETTAGLIO, MODIFICA_COMMENTO } from "../actions";

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

    case ADD_ANNUNCIO:
      return {
        ...state,
        annunci: [...state.annunci, action.payload],
      };

    case GET_DETTAGLIO:
      return {
        ...state,
        annuncio: action.payload,
      };
    case MODIFICA_COMMENTO:
      const newState = state.annunci.map((annuncio) => (annuncio.id === action.payload.id ? action.payload : annuncio));
      return newState;

    default:
      return state;
  }
};

export default homeReducer;
