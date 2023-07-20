import { GET_ANNUNCI_BY_FILTER } from "../actions";

const initialState = [];
const annunciPerFiltroReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANNUNCI_BY_FILTER:
      return action.payload;

    default:
      return state;
  }
};

export default annunciPerFiltroReducer;
