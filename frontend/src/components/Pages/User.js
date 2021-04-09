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
import "./User.css";
export const User = (props) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
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
    <div class="container">
      <div class="main-body">
        <div class="row gutters-sm">
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <div class="mt-3">
                    <h4>{user && user.name}</h4>
                    <p class="text-secondary mb-1">tag-uri</p>
                    <p class="text-muted font-size-sm">imagine</p>
                    {edit === false ? (
                      <button
                        onClick={onEdit}
                        type="button"
                        class="btn btn-primary"
                      >
                        Edit Profile
                      </button>
                    ) : (
                      <div class="row">
                        <div class="col-sm-6 py-1 d-flex justify-content-center">
                          <button type="button" class="btn btn-success">
                            Save
                          </button>
                        </div>
                        <div class="col-sm-6 py-1 d-flex justify-content-center">
                          <button
                            onClick={() => setEdit(false)}
                            type="button"
                            class="btn btn-danger"
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
            <div class="card mt-3">
              <div class="row">
                <div class="col-sm-3 py-1 d-flex justify-content-center">
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div class="col-sm-9 py-1 text-secondary">
                  {user ? (
                    edit === true ? (
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        name="facebook"
                        value={user.contact.facebook}
                      />
                    ) : user.contact.facebook ? (
                      <p class="text-muted font-size-sm">
                        {user.contact.facebook}
                      </p>
                    ) : (
                      <p class="text-muted font-size-sm">Not set</p>
                    )
                  ) : (
                    <React.Fragment />
                  )}
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3 py-1 d-flex justify-content-center">
                  <FontAwesomeIcon icon={faGithub} />
                </div>
                <div class="col-sm-9 py-1 text-secondary">
                  {user ? (
                    edit === true ? (
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        name="github"
                        value={user.contact.github}
                      />
                    ) : user.contact.github ? (
                      <p class="text-muted font-size-sm">
                        {user.contact.github}
                      </p>
                    ) : (
                      <p class="text-muted font-size-sm">Not set</p>
                    )
                  ) : (
                    <React.Fragment />
                  )}
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3 py-1 d-flex justify-content-center">
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div class="col-sm-9 py-1 text-secondary">
                  {user ? (
                    edit === true ? (
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        name="linkedin"
                        value={user.contact.linkedin}
                      />
                    ) : user.contact.linkedin ? (
                      <p class="text-muted font-size-sm">
                        {user.contact.linkedin}
                      </p>
                    ) : (
                      <p class="text-muted font-size-sm">Not set</p>
                    )
                  ) : (
                    <React.Fragment />
                  )}
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3 py-1 d-flex justify-content-center">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div class="col-sm-9 py-1 text-secondary">
                  {user ? (
                    edit === true ? (
                      <input
                        className="form-control form-control-sm"
                        type="text"
                        name="phone"
                        value={user.contact.phone}
                      />
                    ) : user.contact.phone ? (
                      <p class="text-muted font-size-sm">
                        {user.contact.phone}
                      </p>
                    ) : (
                      <p class="text-muted font-size-sm">Not set</p>
                    )
                  ) : (
                    <React.Fragment />
                  )}
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3 py-1 d-flex justify-content-center">
                  <FontAwesomeIcon icon={faAddressCard} />
                </div>
                <div class="col-sm-9 py-1 text-secondary">
                  {user ? (
                    edit === true ? (
                      <input
                        className="form-control form-control-sm-sm form-control form-control-sm"
                        type="text"
                        name="others"
                        value={user.contact.others}
                      />
                    ) : user.contact.others ? (
                      <p class="text-muted font-size-sm">
                        {user.contact.others}
                      </p>
                    ) : (
                      <p class="text-muted font-size-sm">Not set</p>
                    )
                  ) : (
                    <React.Fragment />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3 py-1">
                    <h6 class="mb-0">Full Name</h6>
                  </div>
                  <div class="col-sm-9 py-1 text-secondary">
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

                <div class="row">
                  <div class="col-sm-3 py-1">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 py-1 text-secondary">
                    {user ? (
                      edit === true ? (
                        <p>
                          {user.email}
                          <span class="text-danger">*</span>
                        </p>
                      ) : (
                        user.email
                      )
                    ) : (
                      <React.Fragment />
                    )}
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3 py-1">
                    <h6 class="mb-0">Address</h6>
                  </div>
                  <div class="col-sm-9 py-1 text-secondary">
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
                <div class="row">
                  <div class="col-sm-3 py-1">
                    <h6 class="mb-0">
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
                  <div class="col-sm-9 py-1 text-secondary">
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
                <div class="row">
                  <div class="col-sm-3 py-1">
                    <h6 class="mb-0">
                      {user && user.type === "student"
                        ? "Date of birth"
                        : "Creation Date"}
                    </h6>
                  </div>
                  <div class="col-sm-9 py-1 text-secondary">
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
                <div class="row">
                  <div class="col-sm-3 py-1">
                    <h6 class="mb-0">Description</h6>
                  </div>
                  <div class="col-sm-9 py-1 text-secondary">
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
