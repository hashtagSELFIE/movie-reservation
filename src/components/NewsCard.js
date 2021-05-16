import React from "react";
import { Card } from "react-bootstrap";

const NewsCard = (props) => {
  return (
    <Card style={{ backgroundColor: "transparent" }}>
      <Card.Header className="text-center">{props.type}</Card.Header>
      <Card.Body>
        <Card.Img className="vh-50" variant="top" src={props.thumbnail} />
        <Card.Title style={{ marginTop: ".75rem" }}>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{props.published_date}</Card.Footer>
    </Card>
  );
};

export default NewsCard;
