import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import QRGenerator from "../components/QRGenerator";
import CreditCard from "../components/CreditCard";
import Summary from "../components/Summary";

const Payment = ({navigation}) => {
  const movies = useSelector((state) => state.movie)
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
            title={state.title}
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
