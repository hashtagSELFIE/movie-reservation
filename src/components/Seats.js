import React from "react";
import { Button } from "react-bootstrap";

const Seats = (props) => {
  return props.status === "available" ? (
    <Button variant="outline-warning">{props.seat_number}</Button>
  ) : (
    <Button variant="outline-secondary" disabled>
      {props.seat_number}
    </Button>
  );
};

export default Seats;
