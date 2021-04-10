import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../UserState/userContext";
import { useHistory } from "react-router-dom";
import ReactImageFallback from "react-image-fallback";

import "./User.css";
export const User = (props) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  console.log(user);
  console.log(`localhost:3003/${user && user.profilePicture}`);
  let history = useHistory();
  const [edit, setEdit] = useState(false);
  const onEdit = () => {
    switch (edit) {
      case true:
        setEdit(false);
        break;
      case false:
        setEdit(true);
        break;
      default:
    }
  };
  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);
  const formatDate = (date) => {
    if (!date) {
      return "Not set";
    }
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("-");
  };
  return (
    <div className="container">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <div className="mt-3">
                    <div class="d-block mb-3">
                      <ReactImageFallback src={user && `http://localhost:3003/${user.profilePicture}`} fallbackImage="http://localhost:3003/public/img/default.jpg" alt="Profile Picture" width="100" height="100" />
                    </div>
                    {edit === true ? (
                      <React.Fragment>
                        <label class="form-label" for="profile-picture"></label>
                        <input type="file" class="form-control-file form-control-sm" id="profile-picture"></input> 
                      </React.Fragment>
                    ) : null }
                    <h4>{user && user.name}</h4>
                    {edit === false ? (
                      <button
                        onClick={onEdit}
                        type="button"
                        className="btn btn-primary"
                      >
                        Edit Profile
                      </button>
                    ) : (
                      <div className="row">
                        <div className="col-sm-6 py-1 d-flex justify-content-center">
                          <button type="button" className="btn btn-success">
                            Save
                          </button>
                        </div>
                        <div className="col-sm-6 py-1 d-flex justify-content-center">
                          <button
                            onClick={() => setEdit(false)}
                            type="button"
                            className="btn btn-danger"
                          >
                            Exit
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3 p-2">
              <div className="row">
                <div className="col-sm-3 py-1 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div className="col-sm-9 py-1 text-secondary">
                  {user ? (
                    edit === true ? (
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        name="facebook"
                        value={user.contact.facebook}
                      />
                    ) : user.contact.facebook ? (
                      <p className="text-muted font-size-sm m-0">
                        {user.contact.facebook}
                      </p>
                    ) : (
                      <p className="text-muted font-size-sm m-0">Not set</p>
                    )
                  ) : (
                    <React.Fragment />
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3 py-1 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faGithub} />
                </div>
                <div className="col-sm-9 py-1 text-secondary">
                  {user ? (
                    edit === true ? (
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        name="github"
                        value={user.contact.github}
                      />
                    ) : user.contact.github ? (
                      <p className="text-muted font-size-sm m-0">
                        {user.contact.github}
                      </p>
                    ) : (
                      <p className="text-muted font-size-sm m-0">Not set</p>
                    )
                  ) : (
                    <React.Fragment />
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3 py-1 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className="col-sm-9 py-1 text-secondary">
                  {user ? (
                    edit === true ? (
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        name="linkedin"
                        value={user.contact.linkedin}
                      />
                    ) : user.contact.linkedin ? (
                      <p className="text-muted font-size-sm m-0 m-0">
                        {user.contact.linkedin}
                      </p>
                    ) : (
                      <p className="text-muted font-size-sm m-0 m-0">Not set</p>
                    )
                  ) : (
                    <React.Fragment />
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3 py-1 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="col-sm-9 py-1 text-secondary">
                  {user ? (
                    edit === true ? (
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        name="phone"
                        value={user.contact.phone}
                      />
                    ) : user.contact.phone ? (
                      <p className="text-muted font-size-sm m-0">
                        {user.contact.phone}
                      </p>
                    ) : (
                      <p className="text-muted font-size-sm m-0">Not set</p>
                    )
                  ) : (
                    <React.Fragment />
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3 py-1 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faAddressCard} />
                </div>
                <div className="col-sm-9 py-1 text-secondary">
                  {user ? (
                    edit === true ? (
                      <input
                        className="form-control form-control-sm-sm form-control form-control-sm"
                        type="text"
                        name="others"
                        value={user.contact.others}
                      />
                    ) : user.contact.others ? (
                      <p className="text-muted font-size-sm m-0">
                        {user.contact.others}
                      </p>
                    ) : (
                      <p className="text-muted font-size-sm m-0">Not set</p>
                    )
                  ) : (
                    <React.Fragment />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3 py-1">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 py-1 text-secondary">
                    {user ? (
                      edit === true ? (
                        <>
                          {user.email}
                          <span className="text-danger">*</span>
                        </>
                      ) : (
                        user.email
                      )
                    ) : (
                      <React.Fragment />
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3 py-1">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 py-1 text-secondary">
                    {user ? (
                      edit === true ? (
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          name="name"
                          value={user.name}
                        />
                      ) : (
                        user.name
                      )
                    ) : (
                      <React.Fragment />
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-3 py-1">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 py-1 text-secondary">
                    {user ? (
                      edit === true ? (
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          name="address"
                          value={user.address}
                        />
                      ) : (
                        user.address
                      )
                    ) : (
                      <React.Fragment />
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3 py-1">
                    <h6 className="mb-0">
                      {user ? (
                        user.type === "student" ? (
                          "School"
                        ) : (
                          "Activity"
                        )
                      ) : (
                        <React.Fragment />
                      )}
                    </h6>
                  </div>
                  <div className="col-sm-9 py-1 text-secondary">
                    {user ? (
                      edit === true ? (
                        user.type === "student" ? (
                          <input
                            className="form-control form-control-sm"
                            type="text"
                            name="school"
                            value={user.student.school}
                          />
                        ) : (
                          <input
                            className="form-control form-control-sm"
                            type="text"
                            name="activity"
                            value={user.company.activity}
                          />
                        )
                      ) : user.type === "student" ? (
                        user.student.school
                      ) : (
                        user.company.activity
                      )
                    ) : (
                      <React.Fragment />
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3 py-1">
                    <h6 className="mb-0">
                      {user && user.type === "student"
                        ? "Date of birth"
                        : "Creation Date"}
                    </h6>
                  </div>
                  <div className="col-sm-9 py-1 text-secondary">
                    {user ? (
                      edit === true ? (
                        user.type === "student" ? (
                          <input
                            className="form-control form-control-sm"
                            type="date"
                            name="birthDate"
                            value={user.student.birthDate}
                          />
                        ) : (
                          <input
                            className="form-control form-control-sm"
                            type="date"
                            name="creationDate"
                            value={user.company.creationDate}
                          />
                        )
                      ) : user.type === "student" ? (
                        formatDate(user.student.birthDate)
                      ) : (
                        formatDate(user.company.creationDate)
                      )
                    ) : (
                      <React.Fragment />
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3 py-1">
                    <h6 className="mb-0">Description</h6>
                  </div>
                  <div className="col-sm-9 py-1 text-secondary">
                    {user ? (
                      edit === true ? (
                        <input
                          className="form-control form-control-sm"
                          type="text"
                          name="description"
                          value={user.description}
                        />
                      ) : (
                        user.description
                      )
                    ) : (
                      <React.Fragment />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
