import React from "react";
import Layout from "../../components/Layout";
import "./style.css";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="card home-card">
          <h6 className="home-card-title">vu_huy_khoi</h6>
          <div className="card-image">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1604646358243-a4ea77920d3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div className="card-content">
            <i className="material-icons" style={{ color: "red" }}>
              favorite
            </i>
            <h6>Vote vote vote!</h6>
            <p>Vote for Donal J Trump!</p>
            <input type="text" placeholder="add a comment" />
          </div>
        </div>
        <div className="card home-card">
          <h6 className="home-card-title">vu_huy_khoi</h6>
          <div className="card-image">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1604646358243-a4ea77920d3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div className="card-content">
            <i className="material-icons" style={{ color: "red" }}>
              favorite
            </i>
            <h6>Vote vote vote!</h6>
            <p>Vote for Donal J Trump!</p>
            <input type="text" placeholder="add a comment" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
