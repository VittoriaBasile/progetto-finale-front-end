import { ADD_ANNUNCIO, ELIMINA_ANNUNCIO, GET_MY_ANNUNCI, MODIFICA_ANNUNCIO } from "../actions";

const initialState = [];
const annunciReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_ANNUNCI:
      return action.payload;

    case ADD_ANNUNCIO:
      return [...state, action.payload];

    case MODIFICA_ANNUNCIO:
      const newState = state.map((annuncio) => (annuncio.id === action.payload.id ? action.payload : annuncio));
      return newState;
    case ELIMINA_ANNUNCIO:
      return state.filter((annuncio) => annuncio.id !== action.payload);
    default:
      return state;
  }
};

export default annunciReducer;
