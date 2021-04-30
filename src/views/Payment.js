import React from "react";
import {Card} from "react-bootstrap";
import Confirmation from "../components/Confirmation";

const Payment = (props) => {
  return (
    <div style={{
      alignItems: 'center',
      display: 'flex',
      justifyContent: "center",
      margin: "5em"
    }}>
      {/*<Card border="primary" style={{width: '18rem'}}>*/}
      {/*  <Card.Body>*/}
      {/*    <Card.Title>Credit Cards</Card.Title>*/}
      {/*    <Card.Text style={{fontSize: '10em'}}>💳</Card.Text>*/}
      {/*  </Card.Body>*/}
      {/*</Card>*/}
      {/*<Card border="primary" style={{width: '18rem'}}>*/}
      {/*  <Card.Body>*/}
      {/*    <Card.Title>QR Code</Card.Title>*/}
      {/*    <Card.Text style={{fontSize: '10em'}}>🤳</Card.Text>*/}
      {/*  </Card.Body>*/}
      {/*</Card>*/}
      <br/>
      <Confirmation/>
    </div>
  );
};

export default Payment;
