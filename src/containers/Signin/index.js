import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import "./style.css";

const Signin = () => {
  return (
    <Layout>
      <div className="my-card">
        <div className="card auth-card">
          <h2 className="text-logo">Instagram</h2>
          <div className="row">
            <div className="input-field col s12">
              <input type="text" placeholder="Email" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <button className="btn waves-effect waves-light blue darken-2">
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
