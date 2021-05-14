import React from "react";
import { Card } from "react-bootstrap";

const MovieCard = (props) => {
  return (
    <Card className={"my-2 border-0"}>
      <Card.Img variant="top" className={"vh-50"} src={props.poster} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.date}</Card.Subtitle>
        <Card.Subtitle>
          {props.duration} {props.rating}
        </Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
