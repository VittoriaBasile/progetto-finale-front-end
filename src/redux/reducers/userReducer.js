import { GET_USER_LOGGED, LOGOUT } from "../actions";

const initialState = null;
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LOGGED:
      return action.payload;

    case LOGOUT:
      return (state = null);
    default:
      return state;
  }
};

export default userReducer;
