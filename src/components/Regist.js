import React from "react";
import {Button, Form} from "react-bootstrap";

const Regist = () => {
  return (
    <Form>
      <h3 className="text-center">Register</h3>

      <Form.Group controlId="formBasicFirstname">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="Enter First name"/>
      </Form.Group>

      <Form.Group controlId="formBasicLastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last name"/>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
      </Form.Group>

      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password"/>
      </Form.Group>
      <Button type="submit" className="btn btn-dark btn-lg btn-block mt-4">Register</Button>
      <p className="forgot-password text-center">
        Already registered ? <a href="/login">Login here.</a>
      </p>
    </Form>
  );
}

export default Regist