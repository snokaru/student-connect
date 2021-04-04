import React from 'react'

const LoginForm = () => {
    return (
        <React.Fragment>
        <div className={classes.container}>
        <form className={classes.item}>
        <h1>Please Log In</h1>
        <label>
            <p>Email</p>
            <input />
          </label>
          <label>
            <p>Password</p>
            <input />
          </label>
          <div >
            <button type="submit" className={classes.button}>Submit</button>
          </div>
        </form>
      </div>
      </React.Fragment>
    )
}

export default LoginForm
