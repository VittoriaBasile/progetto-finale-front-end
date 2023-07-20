import { GET_ANNUNCI_BY_TIPO } from "../actions";

const initialState = [];
const annunciPerTipoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANNUNCI_BY_TIPO:
      return action.payload;

    default:
      return state;
  }
};

export default annunciPerTipoReducer;
