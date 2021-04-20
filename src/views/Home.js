import React from 'react';
import Banner from "../components/Banner"
import MovieCard from "../components/MovieCard"

import { Container, Row, Col} from "react-bootstrap"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};
    return(
        <div>
            <Banner/>
						<Container fluid className="d-flex p-3">
							<Row className={"w-100 mx-auto"}>
								<Col xs={12} sm={6} md={4} lg={3} xl={2}>
								<MovieCard/>
							</Col>
							<Col xs={12} sm={6} md={4} lg={3} xl={2}>
								<MovieCard/>
							</Col>
							<Col xs={12} sm={6} md={4} lg={3} xl={2}>
								<MovieCard/>
							</Col>
							<Col xs={12} sm={6} md={4} lg={3} xl={2}>
								<MovieCard/>
							</Col>
							<Col xs={12} sm={6} md={4} lg={3} xl={2}>
								<MovieCard/>
							</Col>
							<Col xs={12} sm={6} md={4} lg={3} xl={2}>
								<MovieCard/>
							</Col>
							</Row>
							
						</Container>
            <Carousel responsive={responsive} autoPlay  infinite focusOnSelect itemClass="mx-3">
							<MovieCard date="Date" />
							<MovieCard date="Date" />
							<MovieCard date="Date" />
							<MovieCard date="Date" />
						</Carousel>;
        </div>
    )
}

export default Home;