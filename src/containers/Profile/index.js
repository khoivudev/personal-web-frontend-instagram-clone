import React, { useState, useEffect, useContext } from "react";
import axios from "../../helpers/axios";
import Layout from "../../components/Layout";
import M from "materialize-css";
import "./style.css";
import { AuthContext } from "../../contexts/auth.context";

const Profile = () => {
  const { auth } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("/post/my")
      .then((res) => {
        if (res.status === 200) {
          setPosts(res.data.posts);
        }
      })
      .catch((error) => {
        M.toast({ html: "Something went wrong", classes: "red darken-3" });
      });
  }, []);

  return (
    <Layout>
      <div className="profile">
        <div className="profile-info">
          <div className="profile-info-avatar">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80"
            />
          </div>
          <div>
            <h4>{`${auth.user.firstName} ${auth.user.lastName}`}</h4>
            <div className="profile-info-amount">
              <h6>50 posts</h6>
              <h6>50 followers</h6>
              <h6>50 following</h6>
            </div>
          </div>
        </div>
        <div className="profile-gallery">
          {posts.length > 0
            ? posts.map((post) => (
                <div className="profile-gallery-item" key={post._id}>
                  <img alt="" src={post.photo} />
                </div>
              ))
            : null}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
