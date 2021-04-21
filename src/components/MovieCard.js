import React from "react";
import { Card } from "react-bootstrap";

const MovieCard = (props) => {
  return (
    // <a href="/movies">
    <Card
      className={"my-2 border-0"}
      // style={{ cursor: "pointer", textDecoration: "none" }}
    >
      <Card.Img
        variant="top"
        className={"vh-50"}
        src="https://picsum.photos/100/200"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle>{props.date}</Card.Subtitle>
        <Card.Subtitle>
          {props.duration} {props.rating}
        </Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
    // </a>
  );
};

export default MovieCard;
