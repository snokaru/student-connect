import React, { useContext } from "react";
import UserContext from "../UserState/userContext";
import classes from "./User.module.css";
export const User = (props) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.userdetail}>
          <p className={classes.child}>Numele:{props.nume}</p>
          <p className={classes.child}>Descriere:{props.descriere}</p>
          <p className={classes.child}>Universitate:{props.univeristate}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default User;
