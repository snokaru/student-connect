import React, { Fragment, useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import UserContext from "../UserState/userContext";

const RegisterForm = (props) => {
  let history = useHistory();
  const { isAuthenticated, register } = useContext(UserContext);

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

    let newUser = { type, name, email, password, address, description, };
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
      }
    }
    register(newUser);
  };
  let extraField;

  if (type === "Student") {
    extraField = (
      <Fragment>
        <div className="form-group">
          <label className="control-label col-sm-10">Birth Date</label>
          <div className="col-sm-10">
            <input
              onChange={onChange}
              type="date"
              name="birthDate"
              value={birthDate}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-10">School</label>
          <div className="col-sm-10">
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
          <label className="control-label col-sm-10">Creation Date</label>
          <div className="col-sm-10">
            <input
              onChange={onChange}
              type="date"
              name="creationDate"
              value={creationDate}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-10">Activity</label>
          <div className="col-sm-10">
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
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label className="control-label col-sm-5" for="type">
                  Type
                </label>
                <div className="col-sm-10">
                  <label class="radio-inline">
                    <input
                      onChange={onChange}
                      class="form-check-input"
                      type="radio"
                      name="type"
                      value="Student"
                      required
                    />
                    Student
                  </label>
                </div>
                <div className="col-sm-10">
                  <label class="radio-inline" for="exampleRadios1">
                    <input
                      required
                      onChange={onChange}
                      class="form-check-input"
                      type="radio"
                      name="type"
                      value="Company"
                    />
                    Company
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-5" for="name">
                  Full name
                </label>
                <div className="col-sm-10">
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
              </div>
              <div className="form-group">
                <label className="control-label col-sm-5" for="email">
                  Email address
                </label>
                <div className="col-sm-10">
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
                <label className="control-label col-sm-5" for="Address">
                  Address
                </label>
                <div className="col-sm-10">
                  <input
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    name="address"
                    value={address}
                    placeholder="Address"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-5">Password</label>
                <div className="col-sm-10">
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
                <label className="control-label col-sm-10" for="password">
                  Description
                </label>
                <div className="col-sm-10">
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
              <div className="col-sm-offset-2 col-sm-10">
                <input type="submit" class="btn btn-info" value="Submit" />
              </div>
            </form>
          </div>
          <div className="col-sm">
            <h3>
              You already have an account?
              <Link to="/login"> Sign in</Link>
            </h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterForm;
