import React from 'react'
import classes from "./RegisterForm.module.css"

const RegisterForm = () => {
  return (

    <React.Fragment>
      <div className={classes.container}>
      <form className={classes.item}>
      <h1>Please Register</h1>
        <label >
          <p>Name</p>
          <input type="text"/>
        </label>
        <label>
          <p>Password</p>
          <input />
        </label>
        <label>
          <p>Type</p>
          <input />
        </label>
        <label>
          <p>Email</p>
          <input />
        </label>
        <div >
          <button type="submit" className={classes.button}>Submit</button>
        </div>
      </form>
    </div>
    </React.Fragment>
  );
};

export default RegisterForm ;