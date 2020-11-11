import React, { useState } from "react";
import defaultAxios from "axios";
import axios from "../../helpers/axios";
import { cloud_img_api } from "../../urlConfig";
import Layout from "../../components/Layout";
import M from "materialize-css";
import "./style.css";
import { useHistory } from "react-router-dom";

const CreatePost = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const validateField = () => {
    if (!title) {
      M.toast({ html: "Title required", classes: "red darken-3" });
      return false;
    }
    if (!content) {
      M.toast({ html: "Content required", classes: "red darken-3" });
      return false;
    }
    if (!image) {
      M.toast({ html: "Image required", classes: "red darken-3" });
      return false;
    }
    return true;
  };

  const uploadImgToCloud = () => {
    const imgForm = new FormData();
    imgForm.append("file", image);
    imgForm.append("upload_preset", "instagram-clone");
    imgForm.append("cloud_name", "hedspi");
    return new Promise((resolve, reject) => {
      defaultAxios
        .post(cloud_img_api, imgForm)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const handleCreatePostBtnClick = () => {
    if (!validateField()) return;
    uploadImgToCloud()
      .then((img_res) => {
        axios
          .post("/post/create", {
            title,
            content,
            photo: img_res.data.secure_url,
          })
          .then((res) => {
            if (res.status === 201) {
              M.toast({ html: "Post uploaded", classes: "green darken-1" });
              history.push("/");
            }
          })
          .catch((error) => {
            //console.log(error);
            M.toast({
              html: error.response.data.error,
              classes: "red darken-3",
            });
          });
      })
      .catch((error) => {
        console.log(error);
        M.toast({ html: "Can't upload image", classes: "red darken-3" });
      });
  };

  return (
    <Layout>
      <div className="card create-post-card">
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
        <div className="file-field input-field">
          <div className="btn blue darken-2">
            <span>upload image</span>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path" type="text" />
          </div>
        </div>
        <button
          className="btn waves-effect waves-light blue darken-2"
          onClick={handleCreatePostBtnClick}
        >
          create post
        </button>
      </div>
    </Layout>
  );
};

export default CreatePost;
