import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Banner from "../components/Banner";
import MovieCard from "../components/MovieCard";
import PromotionCard from "../components/PromotionCard.js";
import SearchBar from "../components/SearchBar";
import { MOVIES, NEWS } from "../data/dummy-data.js";
import { Link } from "react-router-dom";

const Home = () => {
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
      <Banner />
      {/* Display Promotions */}
      <Carousel
        responsive={responsive}
        autoPlay
        infinite
        focusOnSelect
        itemClass="mx-3"
      >
        {NEWS.map((item, index) => (
          <Link to={`/promotion/${item.id}`}>
            <PromotionCard
              key={index}
              title={item.title}
              date={item.published_date}
              thumbnail={item.thumbnail}
            >
              {item}
            </PromotionCard>
          </Link>
        ))}
      </Carousel>
      {/* SearchBar */}
      <SearchBar />
      {/* Display Movies */}
      <Container fluid className="d-flex p-3">
        <Row className={"w-100 justify-content-center"}>
          {MOVIES.map((item, index) => (
            <Col className={"mx-5"} xs={12} sm={6} md={4} lg={3} xl={2}>
              <Link to={`/movies/${item.title}`}>
                <MovieCard key={index} title={item.title} poster={item.poster}>
                  {item}
                </MovieCard>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
