import React from "react";
import Confirmation from "../components/Confirmation";

const Payment = (props) => {
  return (
    <div style={{
      alignItems: 'center',
      display: 'flex',
      justifyContent: "center",
      margin: "5em"
    }}>
      <br/>
      <Confirmation/>
    </div>
  );
};

export default Payment;
