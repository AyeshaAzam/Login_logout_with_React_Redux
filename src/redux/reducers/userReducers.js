// const initialState = {
//   name: "Sonny",
//   age: 25,
// };

export const userReducer = (state = {}, action) => {
  // action is an object

  // check which action is being call
  switch (action.type) {
    // REGISTER USER
    case "USER_REGISTER_REQUEST":
      return {
        loading: true,
      };

    case "USER_REGISTER_SUCCESS":
      return { loading: false, userInfo: action.payload, error: null };

    case "USER_REGISTER_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    // LOGIN USER
    case "USER_LOGIN_REQUEST":
      return {
        loading: true,
      };

    case "USER_LOGIN_SUCCESS":
      return { loading: false, userInfo: action.payload, error: null };

    case "USER_LOGIN_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    case "USER_CLEAR_ERROR":
      return {
        ...state,
        error: null,
      };

    // GET ALL USER

    // LOGOUT,
    case "USER_LOGOUT":
      return {}; // the reducer clear in all out as we have empty {}

    default:
      return state;
  }
};
