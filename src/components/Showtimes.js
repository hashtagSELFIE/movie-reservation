import React from "react";
import { Button, Col, Row, Container, Card } from "react-bootstrap";

const Showtimes = (props) => {
  return (
    <Container className="p-3">
      <Card className="text-center">
        <Card.Header>{props.date}</Card.Header>
        <Card.Body>
          <Button variant="outline-secondary">{props.time}</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Theatre 5</Card.Footer>
      </Card>
    </Container>
  );
};

export default Showtimes;
