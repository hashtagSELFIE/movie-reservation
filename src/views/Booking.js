import { Button, Col, Container, Row } from "react-bootstrap";
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
            <Col md>
              <h4>Movie Information</h4>
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
            <Col md>
              <h4>Showtimes</h4>
              {SHOWTIMES.map((item, index) => (
                <Showtimes key={index} date={item.date} time={item.time}>
                  {item}
                </Showtimes>
              ))}
            </Col>
            <Col md>
              <Row>
                <Col>
                  <h4>Seat Selection</h4>
                </Col>
                <Col>Theatre 5</Col>
              </Row>

              <Row class="w-33">
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
              </Row>

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
              <hr style={{ borderTop: "2px solid #00000073" }}></hr>
              <p>จอภาพยนตร์</p>

              <Row
                class="justify-content-center"
                style={{ marginTop: 20, justifyContent: "center" }}
              >
                <Button variant="info" href="/payment">
                  ชำระเงิน
                </Button>
              </Row>
            </Col>
          </Row>
        </Container>
    </Container>
  );
};
export default Booking;
