import React from "react";

const Job = (props) => {
  return (
    <React.Fragment>
      <div className="card m-3 w-50 mx-auto">
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="card-title d-flex align-items-center">
            <img
              src={props.companyPicture}
              className="d-inline"
              width="50"
              height="50"
              alt="img"
            ></img>
            <p className="card-text m-0 ml-3 d-flex flex-column">
              <span>{props.company}</span>
              <span className="text-muted">{props.when}</span>
            </p>
          </div>
          <p className="card-title text-primary d-inline">{props.nume}</p>
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
