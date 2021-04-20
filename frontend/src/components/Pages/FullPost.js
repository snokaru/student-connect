import React, { useEffect, useState } from "react";
import "./FullPost.css";
import postService from "../../services/post";
import { useParams } from "react-router-dom";
const FullPost = (props) => {
  const [post, setPost] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchPost = async (id) => {
      try {
        const aux = await postService.getPost(id);
        console.log(aux);
        setPost(aux);
      } catch (error) {
        console.log(error);
        setPost(null);
      }
    };
    fetchPost(id);
  });
  return (
    <React.Fragment>
      <div className="container shadow p-5 my-3 bg-white text-black rounded-lg shadow-sm p-3">
        <div class="row">
          <div class="col-sm-4 border-right">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQFgRYqaa_6VCA/company-logo_200_200/0/1614621724734?e=1625702400&v=beta&t=9l7X89Suc7Gll9z_Haw8Tcke0yhbEI6I_b3PEHfHSE8"
              className="d-inline"
              width="200"
              height="200"
              alt="img"
            ></img>
          </div>
          <div class="col-sm-8">
            <h1>{post?.title ? post.title : ""}</h1>
            <h3>{post?.user.name ? post.user.name : ""}</h3>
            <p>{post?.workPlace ? post.workPlace : ""}</p>
            <p>{post?.workHours ? post.workHours : ""}</p>
          </div>
        </div>
      </div>

      <div class="container p-5 my-3 bg-white text-black rounded-lg shadow ">
        <div class="row justify-content-space-around ">
          <div class="col-sm-7 justify-content-between align-self-center">
            <div class="item">
              <h3>Descriere</h3>
              <p>{post?.description ? post.description : ""}</p>
            </div>
          </div>

          <div class="col-md-3 offset-1 a border-left ">
            <div class="item">
              <h3>Aplica acum</h3>
              <p>Date de contact</p>
              <ul>
                <li class="align-self-center">
                  {post?.user?.contact?.facebook
                    ? post.user.contact.facebook
                    : ""}
                </li>
                <li class="align-self-center">
                  {post?.user?.contact?.linkedin
                    ? post.user.contact.linkedin
                    : ""}
                </li>
                <li class="align-self-center">
                  {post?.user?.contact?.phone ? post.user.contact.phone : ""}
                </li>
                <li class="align-self-center">
                  {post?.user?.contact?.others ? post.user.contact.others : ""}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container shadow p-5 my-3 bg-white text-black rounded-lg shadow-sm p-3">
        <form>
          <div className="form-group">
            <label>
              <h1>Adauga un comentariu</h1>
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="Comentariu"
              placeholder="Comentariu"
            ></input>
            <small id="emailHelp" class="form-text text-muted">
              Te rugam sa ai un limbaj adecvat
            </small>
          </div>
        </form>
      </div>

      <div className="container shadow p-5 my-3 bg-white text-black rounded-lg shadow-sm p-3">
        <div class="row">
          <div class="item  border-bottom">
            <h3>Nume Comentator</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <div class="item border-bottom">
            <h3>Nume Comentator</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <div class="item border-bottom">
            <h3>Nume Comentator</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <div class="item  border-bottom">
            <h3>Nume Comentator</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FullPost;
