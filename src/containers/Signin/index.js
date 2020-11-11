import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "../../helpers/axios";
import { emailRegex } from "../../helpers/regex";
import { Link } from "react-router-dom";
import M from "materialize-css";
import Layout from "../../components/Layout";
import "./style.css";
import { AuthContext } from "../../contexts/auth.context";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth, dispatch } = useContext(AuthContext);

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }

  const validateField = () => {
    if (!emailRegex.test(email)) {
      M.toast({ html: "Invalid Email", classes: "red darken-3" });
      return false;
    }
    if (!password) {
      M.toast({ html: "Password required", classes: "red darken-3" });
      return false;
    }
    return true;
  };

  const handleBtnSignInClick = () => {
    if (!validateField()) return;
    axios
      .post("/auth/signin", { email, password })
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: {
              token: res.data.token,
              user: res.data.user,
            },
          });
          M.toast({
            html: "Logged in Successfully",
            classes: "green darken-1",
          });
        }
      })
      .catch((error) => {
        M.toast({ html: error.response.data.error, classes: "red darken-3" });
      });
  };

  return (
    <Layout>
      <div className="my-card">
        <div className="card auth-card">
          <h2 className="text-logo">Instagram</h2>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            className="btn waves-effect waves-light blue darken-2"
            onClick={handleBtnSignInClick}
          >
            Sign in
          </button>
          <h6>
            <Link to={"/signup"}>Don't have an account?</Link>
          </h6>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
