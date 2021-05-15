import React from "react";
import { Button, Card, Container, Image, Col } from "react-bootstrap";

const MovieInfo = (props) => {
  return (
    <Container>
      <Card className={"my-2 border-0 text-center"}>
        {/* <Col>
          <Image
            class="vh-50"
            src={props.poster}
            // style={{ height: "50%", width: "50%", justifyContent: "center" }}
          />
        </Col> */}
        <Card.Img
          variant="top"
          // style={{ width: "50%", height: "50%" }}
          class="vh-50"
          src={props.poster}
        />
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
