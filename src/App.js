import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Navigation />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
