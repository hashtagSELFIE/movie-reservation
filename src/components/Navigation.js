import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { Navbar, Nav, Button } from "react-bootstrap";
import Home from "../views/Home.js";
import Movies from "../views/Booking";
import Payment from "../views/Payment";
import Login from "../views/Login";
import Register from "../views/Register";
import Promotion from "../views/Promotion";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { loginState } from "../states/atom";

const Navigation = () => {
  const login = useRecoilValue(loginState);
  const setLogin = useSetRecoilState(loginState);

  const handleLogout = () => {
    setLogin(null);
  };

  return (
    <div>
      <Navbar bg="light" expand="sm">
        <Navbar.Brand href="/">Theater</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/movies">
              Movies
            </Nav.Link>
            <Nav.Link as={Link} to="/promotion">
              Promotion
            </Nav.Link>
            {!login && (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {login && (
              <Nav.Item>
                <Button
                  onClick={handleLogout}
                  className="btn-light"
                  style={{ color: "rgba(0,0,0,.5)" }}
                >
                  Logout
                </Button>
              </Nav.Item>
            )}
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
          <Route path="/promotion" component={Promotion} />
        </Switch>
      </div>
    </div>
  );
};

export default Navigation;
