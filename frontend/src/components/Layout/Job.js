import React, { useContext } from "react";
import ReactImageFallback from "react-image-fallback";
import { BASE_URL } from "../../utils/config";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../UserState/userContext";
const Job = (props) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
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
  return (
    <React.Fragment>
      <div className={`card m-3 mx-auto ${props.className}`}>
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="card-title d-flex align-items-center">
            <div className="p-1">
              <ReactImageFallback
                src={props.companyPicture}
                fallbackImage={`${BASE_URL}/public/img/default.jpg`}
                alt="profile"
                width="50"
                height="50"
              />
            </div>
            <div className="p-1">
              <p className="card-text m-0 ml-3 d-flex flex-column">
                <span>
                  <Link to={`/users/${props.user.id}`}>{props.user.name}</Link>
                </span>
                <span className="text-muted">{formatDate(props.when)}</span>
              </p>
            </div>
            <div className="ml-auto p-1">
              {user?.id === props.user.id ? (
                <span>
                  <button type="button" class="btn btn-outline-primary">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </span>
              ) : (
                <React.Fragment />
              )}
            </div>
          </div>
          <Link to={`/post/${props.id}`}>
            <p className="card-title text-primary d-inline">{props.title}</p>
          </Link>
          <p className="card-text">{props.description}</p>
          <div>
            <p className="card-subtitle text-muted mb-1">{props.type}</p>
            <p className="card-subtitle text-muted">{props.location}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Job;
