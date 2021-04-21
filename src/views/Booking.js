import { Button, Col, Container, Row, Responsive } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import MovieInfo from "../components/MovieInfo.js";
import Showtimes from "../components/Showtimes.js";

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
    <div>
      <Container fluid className="d-flex p-3">
        <Row className={"w-100 mx-auto"}>
          <Col sm>
            <h4>Movie Information</h4>
            <MovieInfo
              title="Raya and the last dragon"
              duration="1.35 hr"
              rating="pg13+"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum eget tortor quis posuere. Donec dictum sed leo non tincidunt. Praesent congue, metus eu posuere ornare"
            />
          </Col>
          <Col md>
            <h4>Showtimes</h4>
            <Showtimes date="Wed 21 April" />
            <Showtimes date="Wed 21 April" />
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
                {/* {element.map((row, col) => {
                    return <div key={row}>{col}</div>;
                  })} */}
              </div>
            </Row>

            <Button
              variant="warning"
              href="https://www.youtube.com/watch?v=1VIZ89FEjYI"
            >
              ชำระเงิน
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Booking;
