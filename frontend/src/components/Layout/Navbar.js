import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../UserState/userContext";
import { Navbar as BootstrapNavbar, NavItem } from "reactstrap";

export const Navbar = () => {
  const userContext = useContext(UserContext);
  const { user, logout } = userContext;
  return (
    <BootstrapNavbar className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="navbar-nav mr-auto">
        <NavItem className="nav-item">
          <NavLink className="nav-link" exact to="/" activeClassName="active">
            Home
          </NavLink>
        </NavItem>
        {user ? (
          <React.Fragment>
            <NavItem>
              <NavLink
                className="nav-link"
                exact
                to={`/users/${user.id}`}
                activeClassName="active"
              >
                Profile
              </NavLink>
            </NavItem>
            <NavItem></NavItem>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <NavItem>
              <NavLink
                className="nav-link"
                exact
                to="/register"
                activeClassName="active"
              >
                Register
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link"
                exact
                to="/login"
                activeClassName="active"
              >
                Log In
              </NavLink>
            </NavItem>
          </React.Fragment>
        )}
      </div>
      {user ? (
        <button
          className="btn btn-link nav-link border-0 text-white"
          onClick={logout}
        >
          Log Out
        </button>
      ) : null}
    </BootstrapNavbar>
  );
};
export default Navbar;
