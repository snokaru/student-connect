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
            User
          </NavLink>
          <Button onClick={Logout} size="lg" color="danger">
            >>
          </Button>{" "}
        </React.Fragment>
      ) : (
        <NavLink exact to="/register" activeClassName={classes.active}>
          Register
        </NavLink>
      )}
    </div>
  );
};
export default Navbar;
