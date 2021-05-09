import React from "react";
import { Card } from "react-bootstrap";

const PromotionCard = (props) => {
  return (
    <Card className={"my-2 border-0"}>
      <Card.Img variant="top" className={"vh-50"} src={props.thumbnail} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.date}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default PromotionCard;
