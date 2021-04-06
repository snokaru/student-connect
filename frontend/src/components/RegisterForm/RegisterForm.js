import React, { Fragment, useState } from "react";
import classes from "./RegisterForm.module.css";
import { NavLink } from "react-router-dom";
const RegisterForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    address: "",
    password: "",
  });
  const { name, email, age, address, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("inregistrat");
  };
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label className="control-label col-sm-5" for="name">
                  Full name
                </label>
                <div className="col-sm-8">
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
                <div className="col-sm-8">
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
                <label className="control-label col-sm-5" for="age">
                  Age
                </label>
                <div className="col-sm-8">
                  <input
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    name="age"
                    value={age}
                    required
                    placeholder="Age"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-5" for="age">
                  Address
                </label>
                <div className="col-sm-8">
                  <input
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    name="address"
                    value={address}
                    required
                    placeholder="Address"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-5" for="password">
                  Password
                </label>
                <div className="col-sm-8">
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

              <div className="col-sm-offset-2 col-sm-10">
                <input type="submit" class="btn btn-info" value="Submit" />
              </div>
            </form>
          </div>
          <div className="col-sm">
            <h3>
              You already have an account?
              <NavLink to="/login"> Sign in</NavLink>
            </h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterForm;
