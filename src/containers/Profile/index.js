import React from "react";
import Layout from "../../components/Layout";
import "./style.css";

const Profile = () => {
  return (
    <Layout>
      <div className="profile">
        <div className="profile-info">
          <div className="profile-info-avatar">
            <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80" />
          </div>
          <div>
            <h4>Elisa Sweety</h4>
            <div className="profile-info-amount">
              <h6>50 posts</h6>
              <h6>50 followers</h6>
              <h6>50 following</h6>
            </div>
          </div>
        </div>
        <div className="profile-gallery">
          <div className="profile-gallery-item">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div className="profile-gallery-item">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1520962922320-2038eebab146?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div className="profile-gallery-item">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div className="profile-gallery-item">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1601758125997-67e236238ab0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div className="profile-gallery-item">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div className="profile-gallery-item">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div className="profile-gallery-item">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1542596594-649edbc13630?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
