
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import PostForm from "./components/PostForm";
import UserState from "./components/UserState/UserState";
import Home from "./components/Pages/Home";
import NavBar from "./components/Layout/Navbar";
import User from "./components/Pages/User";
import PostState from "./components/PostState/PostState";
import Spinner from "./components/Layout/Spinner";
import FullPost from "./components/Pages/FullPost";
import Welcome from "./components/Pages/Welcome";
import Errors from "./components/Layout/Errors";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <PostState>
          <UserState>
            <NavBar />
            <Errors />
            <Switch>
              <Route exact path="/login">
                <LoginForm />
              </Route>
              <Route exact path="/register">
                <RegisterForm />
              </Route>
              <Route exact path="/jobs">
                <Home />
              </Route>
              <Route exact path="/users/:id">
                <User />
              </Route>
              <Route exact path="/post/:id">
                <FullPost />
              </Route>
              <Route exact path="/createpost">
                <PostForm />
              </Route>
              <Route exact path="/spinner">
                <Spinner />
              </Route>
              <Route exact path="/">
              <Welcome/>
              </Route>
            </Switch>
          </UserState>
        </PostState>
      </Router>
    </React.Fragment>
  );
};

export default App;
