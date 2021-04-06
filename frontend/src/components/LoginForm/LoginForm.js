import React, { Fragment, useState } from "react";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("logat");
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <form onSubmit={onSubmit}>
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
            <h3>Sign in and search opportunities</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;
