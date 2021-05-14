import React from "react";
import { Button, Card, Container, Image, Col } from "react-bootstrap";

const MovieInfo = (props) => {
  return (
    <Container>
      <Card className={"my-2 border-0"}>
        <Col>
          <Image src={props.poster} style={{ height: "50%", width: "50%" }} />
        </Col>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle>
            {props.length} mins R: {props.rating}
          </Card.Subtitle>
          <Card.Subtitle style={{ margin: ".5rem" }}>
            <Button size="sm" variant="outline-primary" href={props.trailer}>
              Watch Trailer
            </Button>
          </Card.Subtitle>

          <Card.Text>{props.description} </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MovieInfo;
