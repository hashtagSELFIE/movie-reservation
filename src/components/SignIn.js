import React from "react";
import {Button, Form} from "react-bootstrap";

const SignIn = () => {
  return (
    <Form>
      <h3>Log in</h3>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
      </Form.Group>

      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password"/>
      </Form.Group>

      <Form.Check type="checkbox" id="customControlAutosizing" label="Remember my preference" custom/>

      <br/>

      <Button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</Button>
      <p className="forgot-password text-right">
        Don't have account? <a href="/register">Register here.</a>
      </p>
    </Form>
  );
}

export default SignIn