import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";
import Home from "../views/Home.js";
import Movies from "../views/Booking";
import Payment from "../views/Payment";
import Login from "../views/Login";
import Register from "../views/Register";

// const Movies = () => <h1>Movies</h1>
// const Login = () => <h1>Login</h1>;

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="sm">
        <Navbar.Brand href="/">Theater</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/login" component={Login} />
          <Route path="/payment" component={Payment} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </div>
  );
};

export default Navigation;
