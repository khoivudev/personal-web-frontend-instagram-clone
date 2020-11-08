import React from "react";
import Layout from "../../components/Layout";
import "./style.css";

const CreatePost = () => {
  return (
    <Layout>
      <div className="card create-post-card">
        <div className="row">
          <div className="input-field col s12">
            <input type="text" placeholder="Title" />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input type="text" placeholder="Content" />
          </div>
        </div>
        <div className="file-field input-field">
          <div className="btn blue darken-2">
            <span>upload image</span>
            <input type="file" />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button class="btn waves-effect waves-light blue darken-2">
          create post
        </button>
      </div>
    </Layout>
  );
};

export default CreatePost;
