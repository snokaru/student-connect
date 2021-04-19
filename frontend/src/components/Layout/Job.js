import React from "react";
import ReactImageFallback from "react-image-fallback";
import { BASE_URL } from "../../utils/config";
import { Link } from "react-router-dom";

const Job = (props) => {
  return (
    <React.Fragment>
      <div className={`card m-3 mx-auto ${props.className}`}>
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="card-title d-flex align-items-center">
            <ReactImageFallback
              src={props.companyPicture}
              fallbackImage={`${BASE_URL}/public/img/default.jpg`}
              alt="profile"
              width="50"
              height="50"
            />
            <p className="card-text m-0 ml-3 d-flex flex-column">
              <span><Link to={`/users/${props.user.id}`}>{props.company}</Link></span>
              <span className="text-muted">{props.when}</span>
            </p>
          </div>
          <p className="card-title text-primary d-inline">{props.name}</p>
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
