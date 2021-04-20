import React from 'react';
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import  Home  from "./views/Home.js"

const Movies = () => <h1>Movies</h1>
const Login = () => <h1>Login</h1>

function App() {
  return (
    <div className="my-app">
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
        <a className="navbar-brand" href="#">Theater</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/movies">Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/login" component={Login} />
      </div>
    </div>
  );
}

export default App;