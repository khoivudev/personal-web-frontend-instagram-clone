import React, { useState, useEffect } from "react";
import axios from "../../helpers/axios";
import Layout from "../../components/Layout";
import M from "materialize-css";
import "./style.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("/post/my")
      .then((res) => {
        if (res.status === 200) {
          setPosts(res.data.posts);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        M.toast({ html: "Something went wrong", classes: "red darken-3" });
      });
  }, []);

  return (
    <Layout>
      {console.log("asdasd")}
      <div className="home">
        {!isLoading && (
          <>
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post._id}>
                  <div className="card home-card">
                    <h6 className="home-card-title">{`${post.postedBy.firstName} ${post.postedBy.lastName}`}</h6>

                    <div className="card-image">
                      <img alt="" src={post.photo} />
                    </div>
                    <div className="card-content">
                      <i className="material-icons" style={{ color: "red" }}>
                        favorite
                      </i>
                      <h6>{post.title}</h6>
                      <p>{post.content}</p>
                      <input type="text" placeholder="add a comment" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="empty">Let's having fun by sharing your things</p>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Home;
