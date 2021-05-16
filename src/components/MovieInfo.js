import React from "react";
import { Card, Container } from "react-bootstrap";

const MovieInfo = (props) => {
  return (
    <Container>
      <Card className={"my-2 border-0 text-center"}>
        <Card.Img variant="top" class="vh-50" src={props.poster} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle>
            {props.length} mins R: {props.rating}
          </Card.Subtitle>
          <Card.Body>
            <Card.Link
              href={props.trailer}
              style={{ padding: ".5rem" }}
              target="_blank"
            >
              Watch Trailer
            </Card.Link>
          </Card.Body>

          <Card.Text>{props.description} </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MovieInfo;
