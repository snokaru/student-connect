import React,{useContext} from "react";
import ReactImageFallback from "react-image-fallback";
import Logo from "../../visuals/welcome.png";
import styles from "./Welcome.module.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UserContext from "../UserState/userContext";


export const Welcome = () => {
  let history = useHistory();
  const userContext = useContext(UserContext);
  const { user } = userContext;
  if(user){
    history.push('/jobs');
  }
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
            <NavLink className={styles.button1} exact to="/jobs" activeClassName="active">
            <div class="col-sm">
                <div >See Our Job Postings!</div>
              </div>
          </NavLink>

          <NavLink className={styles.button1} exact to="/register" activeClassName="active">
          <div class="col-sm">
                <div>Join Us!</div>
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
