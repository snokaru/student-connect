import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={classes.topnav}>
      <NavLink exact to="/" activeClassName={classes.active}>
        Home
      </NavLink>
      <NavLink exact to="/login" activeClassName={classes.active}>
        Log In
      </NavLink>
      <NavLink exact to="/register" activeClassName={classes.active}>
        Register
      </NavLink>
    </div>
  );
};
export default Navbar;