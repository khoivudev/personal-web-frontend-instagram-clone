import React, { useState } from "react";
import axios from "../../helpers/axios";
import { emailRegex } from "../../helpers/regex";
import { Link, useHistory } from "react-router-dom";
import Layout from "../../components/Layout";
import M from "materialize-css";
import "./style.css";

const Signup = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateField = () => {
    if (!firstName) {
      M.toast({ html: "First Name required", classes: "red darken-3" });
      return false;
    }
    if (!lastName) {
      M.toast({ html: "Last Name required", classes: "red darken-3" });
      return false;
    }
    if (!emailRegex.test(email)) {
      M.toast({ html: "Invalid Email", classes: "red darken-3" });
      return false;
    }
    if (!password) {
      M.toast({ html: "Password required", classes: "red darken-3" });
      return false;
    }
    if (!confirmPassword) {
      M.toast({ html: "Confirm Password required", classes: "red darken-3" });
      return false;
    }
    if (password !== confirmPassword) {
      M.toast({
        html: "Confirm password does not match",
        classes: "red darken-3",
      });
      return false;
    }
    return true;
  };

  const handleBtnSubmitClick = () => {
    //validate field before send request
    if (!validateField()) return;
    axios
      .post("/auth/signup", { firstName, lastName, email, password })
      .then((res) => {
        if (res.status === 201) {
          M.toast({ html: res.data.message, classes: "green darken-1" });
          history.push("/signin");
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
            <div className="input-field col s6">
              <input
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-field col s6">
              <input
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            className="btn waves-effect waves-light blue darken-2"
            onClick={handleBtnSubmitClick}
          >
            Sign up
          </button>
          <h6>
            <Link to={"/signin"}>Already have an account?</Link>
          </h6>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
