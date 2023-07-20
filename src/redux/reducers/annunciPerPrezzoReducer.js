import { GET_ANNUNCI_BY_PREZZO } from "../actions";

const initialState = [];
const annunciPerPrezzoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANNUNCI_BY_PREZZO:
      return action.payload;

    default:
      return state;
  }
};

export default annunciPerPrezzoReducer;
