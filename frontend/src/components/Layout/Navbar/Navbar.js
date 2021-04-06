import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={classes.topnav} id="myTopnav">
<<<<<<< HEAD
  <a className={classes.active}>Home</a>
  <a>ALOOOOOOOOOOOOOOO BUNADIMINETAAAAAA</a>
</div>
    )

            <NavLink exact to="/" activeClassName={classes.active}>Home</NavLink> 
            <NavLink exact to="/login" activeClassName={classes.active}>Log In</NavLink>
            <NavLink exact to="/register" activeClassName={classes.active}>Register</NavLink>
        </div>
    );
>>>>>>> 5717fedb0599b601768ac9b2c45d414ebd06c16f
}
export default Navbar;