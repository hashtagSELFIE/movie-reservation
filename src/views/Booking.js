import { Button, Col, Container, Row, Card } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import MovieInfo from "../components/MovieInfo.js";
import Showtimes from "../components/Showtimes.js";
import Seats from "../components/Seats.js";
import { SEATS, SHOWTIMES, MOVIES } from "../data/dummy-data.js";
const Booking = ({ match }) => {
  const title = match.params.title;
  const SelectedMovie = MOVIES.find((movies) => movies.title === title);
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
            <MovieInfo
              title={SelectedMovie.title}
              length={SelectedMovie.length}
              rating={SelectedMovie.rating}
              description={SelectedMovie.description}
              poster={SelectedMovie.poster}
              trailer={SelectedMovie.trailer}
            ></MovieInfo>
          </Col>
          <Col className={"mx-3"}>
            <Card
              className="text-center"
              style={{ backgroundColor: "transparent", border: "transparent" }}
            >
              <h4>Showtimes</h4>
            </Card>
            {SHOWTIMES.map((item, index) =>
              item.time.map((element) => (
                <Showtimes key={index} date={item.date} time={element}>
                  {item}
                </Showtimes>
              ))
            )}
          </Col>

          <Col className={"mx-3"}>
            <Card
              className="text-center"
              style={{ border: "transparent", backgroundColor: "transparent" }}
            >
              <h4>Seat Selection</h4>
            </Card>

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
                <Col>
                  <h4>ราคา</h4>
                </Col>
                <Col className="text-right">
                  <h4>160 บาท</h4>
                </Col>
              </Row>

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
