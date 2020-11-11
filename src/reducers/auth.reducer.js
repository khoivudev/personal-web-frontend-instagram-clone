export const initialState = {
  token: "",
  user: {},
  authenticate: false,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        authenticate: true,
      };
    case "LOGOUT_SUCCESS":
      return initialState;
    default:
      return initialState;
  }
};
