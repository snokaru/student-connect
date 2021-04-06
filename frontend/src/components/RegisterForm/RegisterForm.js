import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./RegisterForm.module.css";

const RegisterForm = () => {
  return (
    <Container>
      <Row>
        <Col>
          <form>
            <h1>Register</h1>
            <label>
              <p>Name</p>
              <input type="name" name="name" />
            </label>
            <label>
              <p>Password</p>
              <input type="password" name="password" />
            </label>
            <div>
              <p>Type</p>
              <input type="radio" value="Student" name="gender" /> Student
              <input type="radio" value="Company" name="gender" /> Company
            </div>
            <label>
              <p>Email</p>
              <input type="email" name="email" />
            </label>
            <div>
              <button type="submit" className={classes.button}>
                Register
              </button>
            </div>
          </form>
        </Col>
        <Col>
          <h1>da</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
