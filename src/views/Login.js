import React from "react";
import SignIn from "../components/SignIn";

const Login = (props) => {
  return (
    <div style={{
      alignItems: 'center',
      display: 'flex',
      justifyContent: "center",
      margin: "5em"
    }}>
      <SignIn/>
    </div>
  );
};

export default Login;
