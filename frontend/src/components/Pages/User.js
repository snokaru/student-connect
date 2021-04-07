import React, { useContext } from "react";
import UserContext from "../UserState/userContext";
import "./User.css";
export const User = (props) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
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
            <div class="card mt-3"></div>
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
                    <h6 class="mb-0">Mobile</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">(320) 380-4539</div>
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
                      {user && user.type === "student" ? "School" : "Activity"}
                    </h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {user && (user.student.school || user.company.activity)}
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
                    {user &&
                      (formatDate(user.student.birthDate) ||
                        formatDate(user.company.creationDate))}
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
                <div class="row gutters-sm">
                  <div class="col-sm-6 mb-3">
                    <div class="card h-100">
                      <div class="card-body">
                        <h6 class="d-flex align-items-center mb-3">
                          <i class="material-icons text-info mr-2">
                            assignment
                          </i>
                          Project Status
                        </h6>
                        <small>Web Design</small>
                        <div class="progress mb-3">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small>Website Markup</small>
                        <div class="progress mb-3">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="72"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small>One Page</small>
                        <div class="progress mb-3">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="89"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small>Mobile Template</small>
                        <div class="progress mb-3">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="55"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small>Backend API</small>
                        <div class="progress mb-3">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="66"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 mb-3">
                    <div class="card h-100">
                      <div class="card-body">
                        <h6 class="d-flex align-items-center mb-3">
                          <i class="material-icons text-info mr-2">
                            assignment
                          </i>
                          Project Status
                        </h6>
                        <small>Web Design</small>
                        <div class="progress mb-3">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small>Website Markup</small>
                        <div class="progress mb-3">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="72"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small>One Page</small>
                        <div class="progress mb-3">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="89"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small>Mobile Template</small>
                        <div class="progress mb-3">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="55"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <small>Backend API</small>
                        <div class="progress mb-3">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            aria-valuenow="66"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
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
