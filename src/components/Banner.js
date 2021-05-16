import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      id="carousel"
      onSelect={handleSelect}
      className={"w-100 h-50 p-1"}
    >
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src="https://cdn.pixabay.com/photo/2016/01/22/08/17/banner-1155437_1280.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src="https://picsum.photos/id/238/1024/300"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src="https://picsum.photos/id/239/1024/300"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
