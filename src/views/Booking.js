import { Button, Col, Container, Row, Responsive } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import MovieInfo from "../components/MovieInfo.js";
import Showtimes from "../components/Showtimes.js";
import Seats from "../components/Seats.js";
import { SEATS, SHOWTIMES, MOVIES } from "../data/dummy-data.js";
const Booking = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <container>
      <div>
        <Container fluid className="d-flex p-3">
          <Row className={"w-100 mx-auto"}>
            <Col sm>
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

              <p>Collective</p>
              <Row>
                <div
                  style={{ height: 20, width: 20, backgroundColor: "yellow" }}
                ></div>
                <p>ที่นั่งที่เลือก</p>
                <div
                  style={{ height: 20, width: 20, backgroundColor: "gray" }}
                ></div>
                <p>ที่นั่งที่ถูกจองแล้ว</p>
                <div
                  style={{
                    height: 20,
                    width: 20,
                    border: "1px solid black",
                  }}
                ></div>
                <p>ที่นั่งว่าง</p>
                <div>
                  {SEATS.map((item, index) => (
                    <Seats
                      key={index}
                      seat_number={item.seat_number}
                      status={item.status}
                    >
                      {item}
                    </Seats>
                  ))}
                </div>
              </Row>

              <Button variant="warning" href="/payment">
                ชำระเงิน
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </container>
  );
};
export default Booking;
