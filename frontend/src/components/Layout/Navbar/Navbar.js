import React from 'react'
import classes from './Navbar.module.css';

export const Navbar = () => {
    return (
        <div className={classes.topnav} id="myTopnav">
  <a className={classes.active}>Home</a>
  <a>Conectati-ma</a>
</div>
    )
}
export default Navbar