import React from "react";
import { Button, Card, Container } from "react-bootstrap";

const MovieInfo = (props) => {
  return (
    <Container>
      <Card className={"my-2 border-0"}>
        <Card.Img
          variant="top"
          className={"vh-50"}
          src="https://picsum.photos/100/200"
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle>
            {props.duration} {props.rating}
          </Card.Subtitle>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
      <Button
        size="sm"
        variant="outline-primary"
        href="https://www.youtube.com/watch?v=1VIZ89FEjYI"
      >
        Watch Trailer
      </Button>
    </Container>
  );
};

export default MovieInfo;
