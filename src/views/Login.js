import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil'
import { loginState, emailState } from '../states/atom'
import { Row, Form, Button } from "react-bootstrap";
import Cookies from 'js-cookie'
import UserPool from "../utils/aws"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alertMSG, setAlertMSG] = useState('')
  const setLogin = useSetRecoilState(loginState)
  const setEmailGlobal = useSetRecoilState(emailState)
  let history = useHistory();

  const clearStatePassword = () => {
    setPassword('')
  }

  const clearStateLogin = () => {
    setEmail('')
    setPassword('')
    setAlertMSG('')
  }

  const LoginSubmit = async (event) => {
    event.preventDefault()

    if (email && password) {
      const user = new CognitoUser({
        Username: email,
        Pool: UserPool
      })

      const authDetails = new AuthenticationDetails({
        Username: email,
        Password: password
      })

      user.authenticateUser(authDetails, {
        onSuccess: (res) => {
          Cookies.set('cognito', res.accessToken.jwtToken, { secure: true })
          clearStateLogin()
          setLogin(true)
          setEmailGlobal(res.idToken.payload.email)
          history.push('/')
        },
        onFailure: (err) => {
          clearStatePassword()
          setAlertMSG(err.message)
        }
      })
    }
  }

  return (
    <Row className="d-flex justify-content-center m-5">
      <Form onSubmit={LoginSubmit} className="w-25">
        <h3 className="text-center">Log in</h3>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"/>
        </Form.Group>

        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"/>
        </Form.Group>

        {alertMSG && (
          <div className="alert alert-danger my-3" role="alert">
            {alertMSG}
          </div>
        )}

        <Button type="submit" className="btn btn-dark btn-lg btn-block mt-3">Sign in</Button>
        <p className="forgot-password text-center">
          Don't have account? <a href="/register">Register here.</a>
        </p>
      </Form>
    </Row>
  );
};

export default Login;
