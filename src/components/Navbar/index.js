import React, { useContext } from "react";
import axios from "../../helpers/axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";
import M from "materialize-css";
import "./style.css";

const Navbar = () => {
  const { auth, dispatch } = useContext(AuthContext);

  const hanldeSignOutBtnClick = () => {
    axios
      .post("/auth/signout")
      .then((res) => {
        if (res.status === 200) {
          localStorage.clear();
          dispatch({
            type: "LOGOUT_SUCCESS",
          });

          M.toast({
            html: "Logged out Successfully",
            classes: "green darken-1",
          });
        }
      })
      .catch((error) => {
        M.toast({ html: error.response.data.error, classes: "red darken-3" });
      });
  };

  const renderSignedInLinks = () => {
    return (
      <>
        <Link to={"/"} className="brand-logo">
          Instagram
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
          <li>
            <Link to={"/createpost"}>Create Post</Link>
          </li>
          <li>
            <button
              className="btn waves-effect waves-light red darken-3 "
              onClick={hanldeSignOutBtnClick}
            >
              Sign out
            </button>
          </li>
        </ul>
      </>
    );
  };

  const renderNoneSignedInLinks = () => {
    return (
      <>
        <Link to={"/"} className="brand-logo">
          Instagram
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to={"/signin"}>Sign in</Link>
          </li>
          <li>
            <Link to={"/signup"}>Sign up</Link>
          </li>
        </ul>
      </>
    );
  };

  return (
    <nav>
      <div className="nav-wrapper white">
        {auth.authenticate ? renderSignedInLinks() : renderNoneSignedInLinks()}
      </div>
    </nav>
  );
};

export default Navbar;
