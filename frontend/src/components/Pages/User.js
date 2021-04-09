import React, { useContext, useEffect } from "react";
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
  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user, history]);
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("-");
  }
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
                  </div>
                </div>
              </div>
            </div>
            <div class="card mt-3">
              <div class="row">
                <div class="col-sm-3 pt-1 d-flex justify-content-center">
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div class="col-sm-9 text-secondary">
                  {user && user.contact.facebook ? (
                    <p class="text-muted font-size-sm">
                      {user.contact.facebook}
                    </p>
                  ) : (
                    <p class="text-muted font-size-sm">Not set</p>
                  )}
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3 pt-1 d-flex justify-content-center">
                  <FontAwesomeIcon icon={faGithub} />
                </div>
                <div class="col-sm-9 text-secondary">
                  {user && user.contact.github ? (
                    <p class="text-muted font-size-sm">{user.contact.github}</p>
                  ) : (
                    <p class="text-muted font-size-sm">Not set</p>
                  )}
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3 pt-1 d-flex justify-content-center">
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div class="col-sm-9 text-secondary">
                  {user && user.contact.linkedin ? (
                    <p class="text-muted font-size-sm">
                      {user.contact.linkedin}
                    </p>
                  ) : (
                    <p class="text-muted font-size-sm">Not set</p>
                  )}
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3 pt-1 d-flex justify-content-center">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div class="col-sm-9 text-secondary">
                  {user && user.contact.phone ? (
                    <p class="text-muted font-size-sm">{user.contact.phone}</p>
                  ) : (
                    <p class="text-muted font-size-sm">Not set</p>
                  )}
                </div>
              </div>
              <div class="row">
                <div class="col-sm-3 pt-1 d-flex justify-content-center">
                  <FontAwesomeIcon icon={faAddressCard} />
                </div>
                <div class="col-sm-9 text-secondary">
                  {user && user.contact.others ? (
                    <p class="text-muted font-size-sm">{user.contact.others}</p>
                  ) : (
                    <p class="text-muted font-size-sm">Not set</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Full Name</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{user && user.name}</div>
                </div>

                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {user && user.email}
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Address</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {user && user.address}
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3">
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
                  <div class="col-sm-9 text-secondary">
                    {user ? (
                      user.type === "student" ? (
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
                  <div class="col-sm-3">
                    <h6 class="mb-0">
                      {user && user.type === "student"
                        ? "Date of birth"
                        : "Creation Date"}
                    </h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {user ? (
                      user.type === "student" ? (
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
                  <div class="col-sm-3">
                    <h6 class="mb-0">Description</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {user && user.description}
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
