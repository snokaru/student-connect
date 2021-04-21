import React, { useEffect, useState } from "react";
import "./FullPost.css";
import { faFacebookF, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import postService from "../../services/post";
import { useParams, Link } from "react-router-dom";
import { BASE_URL } from "../../utils/config";
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
  const [post, setPost] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchPost = async (id) => {
      try {
        const aux = await postService.getPost(id);
        console.log(aux.user.profilePicture);
        setPost(aux);
      } catch (error) {
        console.log(error);
        setPost(null);
      }
    };
    fetchPost(id);
  }, [id]);
  return (
    <React.Fragment>
      <div className="container shadow p-5 my-3 bg-white text-black rounded-lg shadow-sm p-3">
        <div class="row">
          <div class="col-sm-4 border-right">
            <img
              src={`${BASE_URL}/${post?.user?.profilePicture}`}
              className="d-inline"
              width="200"
              height="200"
              alt="img"
            ></img>
          </div>
          <div class="col-sm-8">
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

      <div class="container p-5 my-3 bg-white text-black rounded-lg shadow ">
        <div class="row justify-content-space-around ">
          <div class="col-sm-6 justify-content-between align-self-center">
            <div class="item">
              <h3>Descriere</h3>
              <p>{post?.description ? post.description : ""}</p>
            </div>
          </div>

          <div class="col-md-4 offset-1 a border-left ">
            <div class="item">
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
