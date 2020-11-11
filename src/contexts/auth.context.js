import React, { createContext, useEffect, useReducer } from "react";
import { initialState, authReducer } from "../reducers/auth.reducer";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [auth, dispatch] = useReducer(authReducer, initialState, () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      return { token: token, user: JSON.parse(user), authenticate: true };
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem("token", auth.token);
    localStorage.setItem("user", JSON.stringify(auth.user));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
