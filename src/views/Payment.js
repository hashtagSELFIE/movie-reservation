import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import QRGenerator from "../components/QRGenerator";
import CreditCard from "../components/CreditCard";
import Summary from "../components/Summary";
import {MOVIES, CINEMA, SEATS, SHOWTIMES} from "../data/dummy-data";

const Payment = ({match}) => {
  const title = match.params.title;
  const SelectedMovie = MOVIES.find((movies) => movies.title === title);
  return (
    <div style={{
      alignItems: 'center',
      display: 'flex',
      justifyContent: "center",
      margin: "5em"
    }}>
      <br/>
      <Container>
        <Row className={"w-100 mx-auto"}>
          <Col className={"mx-2"}>
            <Summary
            // title={SelectedMovie.title}
            />
          </Col>
          <Col className={"mx-2"}>
            <CreditCard/>
          </Col>
          <Col className={"mx-2"}>
            <QRGenerator/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Payment;
