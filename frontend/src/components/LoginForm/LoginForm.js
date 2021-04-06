import React from 'react';
import classes from "./LoginForm.module.css";

const LoginForm = () => {
    return (
        <React.Fragment>
        <div className={classes.container}>
        <form className={classes.item}>
        <h1>Please Log In</h1>
        <fieldset>
          <label for="email">
            Email
          </label>
          <input type="email" id="email" name="email" />
        </fieldset>
        <fieldset>
            <label>
              <p>Password</p>
              <input type="password" id="password" name="password" />
            </label>
        </fieldset>
        <div >
          <button type="submit" className={classes.button}>Submit</button>
        </div>
        </form>
      </div>
      </React.Fragment>
    );
}

export default LoginForm;
