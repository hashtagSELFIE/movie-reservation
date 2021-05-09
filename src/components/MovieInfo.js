import React from "react";
import { Button, Card, Container } from "react-bootstrap";

const MovieInfo = (props) => {
  return (
    <Container>
      <Card className={"my-2 border-0"}>
        <Card.Img variant="top" className={"vh-50"} src={props.poster} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle>
            {props.length} mins R: {props.rating}
          </Card.Subtitle>
          <Card.Subtitle>
            <Button size="sm" variant="outline-primary" href={props.trailer}>
              Watch Trailer
            </Button>
          </Card.Subtitle>

          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MovieInfo;
