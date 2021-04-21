import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";

const Showtimes = (props) => {
  return (
    <Container>
      <p>{props.date}</p>
      <Row>
        <Col>
          <Button variant="outline-secondary">10:30</Button>
        </Col>
        <Col>
          <Button variant="outline-secondary">12:50</Button>
        </Col>
        <Col>
          <Button variant="outline-secondary">14:45</Button>
        </Col>
        <Col>
          <Button variant="outline-secondary">18:30</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Showtimes;
