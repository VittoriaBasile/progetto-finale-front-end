import { GET_COMMENTI } from "../actions";

const initialState = [];

const commentiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTI:
      return action.payload;

    default:
      return state;
  }
};

export default commentiReducer;
