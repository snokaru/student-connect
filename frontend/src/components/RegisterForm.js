import React, { Fragment, useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Layout/Footer";
import UserContext from "./UserState/userContext";
import classes from "../components/Layout/footer.module.css";

const RegisterForm = (props) => {
  let history = useHistory();
  const { isAuthenticated, register, error } = useContext(UserContext);

  useEffect(() => {
    if (isAuthenticated === true) {
      history.push("/");
    }
  });

  const [user, setUser] = useState({
    type: "",
    name: "",
    email: "",
    password: "",
    address: "",
    description: "",
    birthDate: "",
    school: "",
    activity: "",
    creationDate: "",
  });

  const {
    name,
    type,
    email,
    address,
    password,
    description,
    birthDate,
    school,
    activity,
    creationDate,
  } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let newUser = { type, name, email, password, address, description };
    if (type === "Student") {
      newUser = {
        ...newUser,
        birthDate,
        school,
      };
    } else {
      newUser = {
        ...newUser,
        creationDate,
        activity,
      };
    }
    register(newUser);
  };
  let extraField;

  if (type === "Student") {
    extraField = (
      <Fragment>
        <div className="form-group">
          <label className="control-label">Birth Date:</label>
          <div className="">
            <input
              className="form-control"
              onChange={onChange}
              type="date"
              name="birthDate"
              value={birthDate}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label">School:</label>
          <div>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              name="school"
              value={school}
              placeholder="School"
            />
          </div>
        </div>
      </Fragment>
    );
  }
  if (type === "Company") {
    extraField = (
      <Fragment>
        <div className="form-group">
          <label className="control-label">Creation Date:</label>
          <div>
            <input
              className="form-control"
              onChange={onChange}
              type="date"
              name="creationDate"
              value={creationDate}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label">Activity:</label>
          <div>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              name="activity"
              value={activity}
              placeholder="Activity"
            />
          </div>
        </div>
      </Fragment>
    );
  }
  if (type === "") {
    extraField = <Fragment></Fragment>;
  }
  return (
    <Fragment>
      <div className={classes.body}>
        <div className="w-50 mx-auto my-4 p-4 card container">
          <h1 class="mb-4 text-primary">Register now</h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label className="control-label" htmlFor="type">
                Type<span class="text-primary">*</span>:
              </label>
              <div class="ml-4">
                <input
                  onChange={onChange}
                  class="form-check-input"
                  type="radio"
                  name="type"
                  value="Student"
                  id="student-type"
                  required
                />
                <label class="radio-inline" htmlFor="student-type">
                  Student
                </label>
              </div>
              <div class="ml-4">
                <input
                  required
                  onChange={onChange}
                  class="form-check-input"
                  type="radio"
                  name="type"
                  id="company-type"
                  value="Company"
                />
                <label class="radio-inline" htmlFor="company-type">
                  Company
                </label>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label className="control-label" htmlFor="name">
                  Full Name<span class="text-primary">*</span>:
                </label>
                <input
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  required
                  placeholder="Full name"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="control-label" htmlFor="email">
                  Email<span class="text-primary">*</span>:
                </label>
                <input
                  onChange={onChange}
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  required
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="control-label" htmlFor="Address">
                Address:
              </label>
              <div>
                <input
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  name="address"
                  value={address}
                  placeholder="Address"
                  autoComplete="street-address"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label">
                Password<span class="text-primary">*</span>:
              </label>
              <div>
                <input
                  onChange={onChange}
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  required
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label" htmlFor="password">
                Description:
              </label>
              <div>
                <textarea
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="Description"
                  value={description}
                  rows="2"
                />
              </div>
            </div>
            {extraField}
            <div>
              <input type="submit" class="btn btn-primary" value="Submit" />
            </div>
            <p class="text-muted my-2">
              You already have an account? <Link to="/login">Log In</Link>
            </p>
          </form>
        </div>

        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterForm;
