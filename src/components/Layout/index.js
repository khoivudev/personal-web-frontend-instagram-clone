import React from "react";
import Navbar from "../Navbar";
import "./style.css";

const Layout = (props) => {
  return (
    <div className="layout">
      {<Navbar />}
      {props.children}
    </div>
  );
};

export default Layout;
