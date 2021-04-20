import React from 'react';

import { Card } from 'react-bootstrap';

const MovieCard = (props) => {
  return(
    <Card className={"my-2 border-0"}>
      <Card.Img variant="top" className={"vh-50"} src="https://picsum.photos/100/200" />
      <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle>{props.date}</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

export default MovieCard;