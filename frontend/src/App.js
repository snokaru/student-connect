import React from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import UserState from "./components/UserState/UserState";
import Home from "./components/Pages/Home";
import NavBar from "./components/Layout/Navbar";
import User from "./components/Pages/User";
import PostState from "./components/PostState/PostState";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "./components/Layout/Spinner";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FullPost from "./components/Pages/FullPost";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <PostState>
          <UserState>
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
              <Route exact path="/users/:id">
                <User />
              </Route>
              <Route exact path="/post">
                <FullPost />
              </Route>
              <Route exact path="/spinner">
                <Spinner />
              </Route>
            </Switch>
          </UserState>
        </PostState>
      </Router>
    </React.Fragment>
  );
};

export default App;
