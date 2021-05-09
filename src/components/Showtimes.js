import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";

const Showtimes = (props) => {
  return (
    <Container>
      <p>{props.date}</p>
      <Row>
        <Col>
          <Button variant="outline-secondary">{props.time}</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Showtimes;
