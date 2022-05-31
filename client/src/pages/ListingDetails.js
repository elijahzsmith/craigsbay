import React from "react";
import Clock from "../components/Clock";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router-dom";

function ListingDetails() {
  let locate = useLocation();

  const { what_it_is, image_url, location, description, end_time } = locate.state;

  return (
    <Container>
      <Row className="mt-3 mb-1">
        <Col className="col-md-8 text-md-start col-12 text-center">
          <h1>{what_it_is}</h1>
        </Col>
        <Col className="text-center d-flex justify-content-center align-items-center text-secondary">
          <h2>{location}</h2>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center my-3">
        <img
          src={image_url}
          alt="listing"
          style={{ maxHeight: 700, maxWidth: 1000 }}
        />
      </Row>

      <Row>
        <p>{description}</p>
      </Row>
      <Row>
        <h2>Time Left:</h2>
        <Clock end_time={end_time}></Clock>
      </Row>
    </Container>
  );
}

export default ListingDetails;
