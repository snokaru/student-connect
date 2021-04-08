import React, { useContext } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import UserContext from "../../UserState/userContext";
import { Button } from "reactstrap";

export const Navbar = () => {
  const userContext = useContext(UserContext);
  const { user, Logout } = userContext;
  return (
    <div className={classes.topnav}>
      <NavLink exact to="/" activeClassName={classes.active}>
        Home
      </NavLink>
      {user ? (
        <React.Fragment>
          <NavLink exact to="/users" activeClassName={classes.active}>
            Profile
          </NavLink>
          <Button onClick={Logout} size="lg" color="danger">
            Log Out
          </Button>{" "}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <NavLink exact to="/register" activeClassName={classes.active}>
            Register
          </NavLink>
          <NavLink exact to="/login" activeClassName={classes.active}>
            Log In
          </NavLink>
        </React.Fragment>
      )}
    </div>
  );
};
export default Navbar;
