import { Button, Col, Container, Row, Card } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import MovieInfo from "../components/MovieInfo.js";
import Showtimes from "../components/Showtimes.js";
import Seats from "../components/Seats.js";
import { SEATS, SHOWTIMES, MOVIES } from "../data/dummy-data.js";
const Booking = () => {
  return (
    <Container>
      <Container fluid className="d-flex p-3">
        <Row className={"w-100 mx-auto"}>
          <Col className={"mx-3"}>
            <Card
              className="text-center"
              style={{ backgroundColor: "transparent", border: "transparent" }}
            >
              <h4>Movie Information</h4>
            </Card>
            {MOVIES.map((item, index) => (
              <MovieInfo
                key={index}
                title={item.title}
                length={item.length}
                rating={item.rating}
                description={item.description}
                poster={item.poster}
                trailer={item.trailer}
              >
                {item}
              </MovieInfo>
            ))}
          </Col>
          <Col className={"mx-3"}>
            <Card
              className="text-center"
              style={{ backgroundColor: "transparent", border: "transparent" }}
            >
              <h4>Showtimes</h4>
            </Card>
            {SHOWTIMES.map((item, index) => (
              <Showtimes key={index} date={item.date} time={item.time}>
                {item}
              </Showtimes>
            ))}
          </Col>

          <Col className={"mx-3"}>
            <Card
              className="text-center"
              style={{ border: "transparent", backgroundColor: "transparent" }}
            >
              <h4>Seat Selection</h4>
            </Card>

            {/* <Row class="w-33">
              <Col>
                <Button variant="warning" size="sm" disabled>
                  1A
                </Button>
                <p>ที่นั่งที่เลือก</p>
              </Col>
              <Col>
                <Button variant="outline-secondary" size="sm" disabled>
                  1A
                </Button>
                <p>ที่นั่งที่ถูกจองแล้ว</p>
              </Col>
              <Col>
                <Button variant="outline-warning" size="sm" disabled>
                  1A
                </Button>
                <p>ที่นั่งว่าง</p>
              </Col>
            </Row> */}
            <Container className="p-3">
              <Row class="justify-content-center">
                {SEATS.map((item, index) => (
                  <Col xs={3} style={{ marginBottom: "5%" }}>
                    <Seats
                      key={index}
                      seat_number={item.seat_number}
                      status={item.status}
                    >
                      {item}
                    </Seats>
                  </Col>
                ))}
              </Row>
              <Card className="text-center" style={{ border: "transparent" }}>
                <hr style={{ borderTop: "2px solid #00000073" }}></hr>
                จอภาพยนตร์
              </Card>
              <Row
                class="justify-content-center"
                style={{ marginTop: 20, justifyContent: "center" }}
              >
                <Button variant="info" href="/payment">
                  ชำระเงิน
                </Button>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Booking;
