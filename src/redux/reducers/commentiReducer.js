import { ADD_COMMENTO, ELIMINA_COMMENTO, GET_COMMENTI, MODIFICA_COMMENTO } from "../actions";

const initialState = [];

const commentiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTI:
      return action.payload;
    case ADD_COMMENTO:
      return [...state, action.payload];
    case MODIFICA_COMMENTO:
      const newState = state.map((commento) => (commento.id === action.payload.id ? action.payload : commento));
      return newState;
    case ELIMINA_COMMENTO:
      return state.filter((commento) => commento.id !== action.payload);
    default:
      return state;
  }
};

export default commentiReducer;
