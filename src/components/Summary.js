import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";

const Summary = (props) => {
  return (
    <div>
      <h1>Summary</h1>
      <h4>Grand total of your purchases can be found below</h4>
      <hr style={{margin: "30px 0 30px"}}/>
      <Card>
        <Card.Body>
          <Card.Title><h1>{props.seat_number}H7</h1></Card.Title>
          <Card.Subtitle><h6>Star wars VII{props.title}</h6></Card.Subtitle>
          <Card.Subtitle><h6>Theater Number: {props.theater_no}, {props.branch}</h6></Card.Subtitle>
          <Card.Subtitle>{props.date} {props.time}</Card.Subtitle>
          <Card.Text>
            <Container style={{marginTop: '30px'}}>
              <Row>
                <Col>
                  Normal ticket
                </Col>
                <Col>
                  {props.price}
                </Col>
              </Row>
              <hr style={{margin: "30px 0 30px", borderTop: "border-top: 3px double #8c8c8c;"}}/>
              <Row>
                <Col>
                  <b>GRAND TOTAL:</b>
                </Col>
                <Col>
                  {props.price}
                </Col>
              </Row>
            </Container>
          </Card.Text>
        </Card.Body>
      </Card>


    </div>
  )
}

export default Summary;
