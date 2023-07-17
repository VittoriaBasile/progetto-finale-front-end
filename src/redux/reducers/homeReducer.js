import { ADD_TO_PREFERITI, GET_ANNUNCI, GET_DETTAGLIO, REMOVE_FROM_PREFERITI } from "../actions";

const initialState = {
  annunci: [],
  annuncio: null,
  preferiti: [],
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
    case ADD_TO_PREFERITI:
      return {
        ...state,
        preferiti: [...state.preferiti, action.payload],
      };

    case REMOVE_FROM_PREFERITI:
      return {
        ...state,
        preferiti: state.preferiti.filter((annuncio) => annuncio.id !== action.payload),
      };
    default:
      return state;
  }
};

export default homeReducer;
