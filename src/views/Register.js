import React, { useState } from "react";
import {Row, Button, Form} from "react-bootstrap";
import UserPool from "../utils/aws"
import { CognitoUserAttribute } from 'amazon-cognito-identity-js'

const Register = (props) => {
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('') 
  const [cPassword, setCPassword] = useState('')
  const [alertMSG, setAlertMSG] = useState('')
  const [successMSG, setSuccessMSG] = useState(false)

  const clearStatePassword = () => {
    setPassword('')
    setCPassword('')
  }

  const clearRegisterState = () => {
    setEmail('')
    setPhoneNumber('')
    setPassword('')
    setCPassword('')
    setAlertMSG('')
  }

  const RegisterSubmit = (event) => {
    event.preventDefault()

    if (email && phoneNumber && password && cPassword) {
      if (password === cPassword) {
        var attributeList = [];

        var dataEmail = {
          Name : 'email',
          Value : email
        };
        var dataPhoneNumber = {
          Name : 'custom:phoneNumber',
          Value : phoneNumber
        };
        var attributeEmail = new CognitoUserAttribute(dataEmail);
        var attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
        attributeList.push(attributeEmail)
        attributeList.push(attributePhoneNumber)
        UserPool.signUp(email, password, attributeList, null, (err, res) => {
          if (err) {
            // console.error(err)
            setAlertMSG(err.message)
          }
          // console.log(res)
          clearRegisterState()
          setSuccessMSG(true)
        })
      } else {
        // clearStatePassword()
        setAlertMSG('ตรวจสอบรหัสผ่านใหม่อีกครั้ง!')
      }
    }
  }

  return (
    <Row className="d-flex justify-content-center m-5">
      <Form onSubmit={RegisterSubmit} className="w-25">
        <h3 className="text-center">Register</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"/>
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter Phone Number"/>
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"/>
        </Form.Group>
        <Form.Group controlId="formGroupCPassword">
          <Form.Label>Confirmed Password</Form.Label>
          <Form.Control type="password" value={cPassword} onChange={(e) => setCPassword(e.target.value)} placeholder="Enter password"/>
        </Form.Group>

        {alertMSG && (
          <div className="alert alert-danger" role="alert">
            {alertMSG}
          </div>
        )}

        {successMSG && (
          <div className="alert alert-success" role="alert">
            Register Success
          </div>
        )}

        <Button type="submit" className="btn btn-dark btn-lg btn-block mt-4">Register</Button>
        <p className="forgot-password text-center">
          Already registered ? <a href="/login">Login here.</a>
        </p>
      </Form>
    </Row>
  );
};

export default Register;
