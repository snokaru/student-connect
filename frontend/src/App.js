import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import UserState from "./components/UserState/UserState";
import Home from "./components/Pages/Home";
import NavBar from "./components/Layout/Navbar/Navbar";
import User from "./components/Pages/User";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <UserState>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/login">
              <LoginForm />
            </Route>
            <Route exact path="/register">
              <RegisterForm />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/users">
              <User />
            </Route>
          </Switch>
        </Router>
      </UserState>
    </React.Fragment>
  );
};

export default App;
