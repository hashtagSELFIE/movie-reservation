import React from 'react';
import { Route } from 'react-router-dom'

import { Navbar, Nav } from "react-bootstrap"
import  Home  from "../views/Home.js"

const Movies = () => <h1>Movies</h1>
const Login = () => <h1>Login</h1>

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="sm">
        <Navbar.Brand href="/">Theater</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/movies">Movies</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/login" component={Login} />
      </div>
    </div>
  );
}

export default Navigation;