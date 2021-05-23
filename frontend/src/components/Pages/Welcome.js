import React from "react";
import ReactImageFallback from "react-image-fallback";
import Logo from "../../visuals/welcome.png";
import styles from "./Welcome.module.css";
import { NavLink } from "react-router-dom";

export const Welcome = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg">
          <img src={Logo} className={styles.rmSpinner} />
        </div>
        <div class="col-lg">
          <div className={styles.textBox}>
            <h1>
              <b>Welcome to</b>
            </h1>
            <h1>
              <b>Student Connect</b>
            </h1>
            <p>A platform for connecting students with companies.</p>

            <div class="row">
            <NavLink className="nav-link" exact to="/jobs" activeClassName="active">
            <div class="col-sm">
                <div className={styles.button1}>See Our Job Postings!</div>
              </div>
          </NavLink>

          <NavLink className="nav-link" exact to="/register" activeClassName="active">
          <div class="col-sm">
                <div className={styles.button1}>Join Us!</div>
              </div>
          </NavLink>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
