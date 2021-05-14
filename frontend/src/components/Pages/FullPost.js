import React, { useEffect, useState, useContext } from "react";
import socketIOClient from "socket.io-client";
import "./FullPost.css";
import { faFacebookF, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faAddressCard,
  faTrash,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, Link } from "react-router-dom";
import { BASE_URL } from "../../utils/config";
import postService from "../../services/post";
import UserContext from "../UserState/userContext";
import PostContext from "../PostState/postContext";
const FullPost = (props) => {
  const formatDate = (date) => {
    if (!date) {
      return "Not set";
    }
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear(),
      hours = "" + d.getHours(),
      minutes = "" + d.getMinutes();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    if (hours.length < 2) hours = "0" + hours;
    if (minutes.length < 2) minutes = "0" + minutes;
    return [day, month, year].join("-") + " " + [hours, minutes].join(":");
  };

  const userContext = useContext(UserContext);
  const postContext = useContext(PostContext);
  const { user, isAuthenticated } = userContext;
  const { manageComment } = postContext;
  const [comment, setComment] = useState({ user: user?.id, body: "" });
  const [updatedComment, setupdatedComment] = useState({ user: user?.id });
  const [post, setPost] = useState();
  const [edit, setEdit] = useState({ id: null, bool: false });
  const { body } = comment;
  const { id } = useParams();
  const onChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value, user: user?.id });
  };
  const onChange2 = (e) => {
    setupdatedComment({
      ...updatedComment,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await manageComment(id, comment, "add");
    fetchPost(id);
  };
  const onSubmit2 = async (e) => {
    e.preventDefault();
    fetchPost(id);
    await manageComment(
      id,
      { ...updatedComment, updated: formatDate(Date.now()), id: edit.id },
      "modify"
    );
    setEdit(false);
  };
  const fetchPost = async (id) => {
    try {
      const aux = await postService.getPost(id);
      setPost({ ...aux });
    } catch (error) {
      console.log(error);
      setPost(null);
    }
  };
  useEffect(() => {
    const socket = socketIOClient("http://localhost:3005");
    socket.on("RefreshPage", () => {
      fetchPost(id);
      console.log("emis de frontend");
    });
    fetchPost(id);
  }, [id]);
  return (
    <React.Fragment>
      <div className="container shadow p-5 my-3 bg-white text-black rounded-lg shadow-sm p-3">
        <div className="row">
          <div className="col-sm-4 border-right">
            <img
              src={`${BASE_URL}/${post?.user?.profilePicture}`}
              className="d-inline"
              width="200"
              height="200"
              alt="img"
            ></img>
          </div>
          <div className="col-sm-8">
            <h1>{post?.title ? post.title : ""}</h1>
            <Link to={`/users/${post?.user?.id}`}>
              <h3>{post?.user.name ? post.user.name : ""}</h3>
            </Link>
            <p>Location: {post?.workPlace ? post.workPlace : ""}</p>
            <p>Type: {post?.workHours ? post.workHours : ""}</p>
            <p>
              Created at: {post?.createdAt ? formatDate(post.createdAt) : ""}
            </p>
          </div>
        </div>
      </div>

      <div className="container p-5 my-3 bg-white text-black rounded-lg shadow ">
        <div className="row justify-content-space-around ">
          <div className="col-sm-6 justify-content-between align-self-left">
            <div className="item">
              <h3>Descriere</h3>
              <p>{post?.description ? post.description : ""}</p>
            </div>
          </div>

          <div className="col-md-4 offset-1 a border-left ">
            <div className="item">
              <h3>Aplica acum</h3>
              <p>Date de contact</p>
              <div className="row">
                <div className="col-sm-2 py-1 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div className="col-sm-10 py-1 text-secondary">
                  {post?.user?.contact?.facebook
                    ? post.user.contact.facebook
                    : ""}
                </div>
              </div>

              <div className="row">
                <div className="col-sm-2 py-1 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className="col-sm-10 py-1 text-secondary">
                  {post?.user?.contact?.linkedin
                    ? post.user.contact.linkedin
                    : ""}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2 py-1 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="col-sm-10 py-1 text-secondary">
                  {post?.user?.contact?.phone ? post.user.contact.phone : ""}
                </div>
              </div>

              <div className="row">
                <div className="col-sm-2 py-1 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faAddressCard} />
                </div>
                <div className="col-sm-10 py-1 text-secondary">
                  {post?.user?.contact?.others ? post.user.contact.others : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isAuthenticated ? (
        <div className="container shadow p-5 my-3 bg-white text-black rounded-lg shadow-sm p-3">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>
                <h1>Adauga un comentariu</h1>
              </label>
              <textarea
                onChange={onChange}
                type="text"
                className="form-control"
                required
                row="4"
                name="body"
                value={body}
                placeholder="Comentariu"
              ></textarea>
              <small id="emailHelp" className="form-text text-muted">
                Te rugam sa ai un limbaj adecvat
              </small>
              <div>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Trimite"
                />
              </div>
            </div>
          </form>
        </div>
      ) : (
        <React.Fragment />
      )}
      {post?.comments?.map((comment) => (
        <div
          key={comment.id}
          className="container shadow p-4 my-3 bg-white text-black rounded-lg shadow-sm p-3"
        >
          <div className="row">
            <div className="p-1">
              <Link to={`/users/${comment?.user?.id}`}>
                <h5>{comment?.user?.name}</h5>
              </Link>
              <p>
                {formatDate(comment?.createdAt)}
                {comment?.updated ? ` (modificat la ${comment?.updated})` : ""}
              </p>
            </div>
            {comment?.user?.id === user?.id ? (
              <div className="ml-auto p-1">
                <span>
                  <button
                    onClick={() => {
                      setEdit({
                        id: comment?.id,
                        bool: edit.bool ? false : true,
                      });
                      setupdatedComment({
                        user: user?.id,
                        body: comment?.body,
                      });
                    }}
                    type="button"
                    className="btn btn-outline-primary mx-1"
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </button>
                </span>
                <span>
                  <button
                    onClick={async () => {
                      await manageComment(id, { id: comment.id }, "delete");
                      fetchPost(id);
                    }}
                    type="button"
                    className="btn btn-outline-danger mx-1"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </span>
              </div>
            ) : null}
          </div>
          <div className="row" style={{ backgroundColor: "#efeff0" }}>
            <div className="m-1">
              {edit.bool && edit.id === comment.id ? (
                <form onSubmit={onSubmit2}>
                  <div className="form-group">
                    <textarea
                      onChange={onChange2}
                      type="text"
                      row="1"
                      cols="160"
                      className="form-control my-1"
                      name="body"
                      defaultValue={comment.body}
                    ></textarea>
                    <input
                      type="submit"
                      className="btn btn-primary my-1"
                      value="Modifica"
                    />
                  </div>
                </form>
              ) : (
                <p>{comment?.body}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default FullPost;
