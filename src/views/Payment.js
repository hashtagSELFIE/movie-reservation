import React from "react";
import {Card, Button} from "react-bootstrap";

const Payment = (props) => {
  return (
    <div style={{
      alignItems: 'center',
      display: 'flex',
      justifyContent: "center",
      margin: "5em"
    }}>
      <Card border="primary" style={{width: '18rem'}}>
        <Card.Body>
          <Card.Title>Credit Cards</Card.Title>
          <Card.Text>💳</Card.Text>
        </Card.Body>
      </Card>
      <Card border="primary" style={{width: '18rem'}}>
        <Card.Body>
          <Card.Title>QR Code</Card.Title>
          <Card.Text>🤳</Card.Text>
        </Card.Body>
      </Card>
      <br/>
    </div>
  );
};

export default Payment;
