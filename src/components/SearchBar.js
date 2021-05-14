import React from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
import { MOVIES, CINEMA } from "../data/dummy-data.js";
const SearchBar = () => {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Row className="align-items-center">
            <Col xs={5}>
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
              >
                <option>ค้นหาภาพยนตร์</option>
                {MOVIES.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </Form.Control>
            </Col>
            <Col xs={5}>
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
              >
                <option value="0">เลือกโรงภาพยนตร์</option>
                {CINEMA.map((item, index) => (
                  <option key={index} value={item.theatre_no}>
                    Theatre {item.theater_no}
                  </option>
                ))}
              </Form.Control>
            </Col>
            <Col>
              <Button variant="primary" type="submit">
                รอบฉาย
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SearchBar;
