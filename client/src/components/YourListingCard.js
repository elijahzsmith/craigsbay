import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/esm/Form";

function YourListingCard({ listing, showForm, setShowForm }) {
  console.log("Listing: ", listing);

  const { id, location, image_url, what_it_is, category, description } =
    listing;

  return (
    <Col>
      <Card className="h-100">
        <Card.Img
          src={image_url}
          alt="listing"
          role="button"
          className="h-75"
        />
        <Card.Body>
          <Card.Title className="text-center">{what_it_is}</Card.Title>
          <Container className="ms-2">
            <Row>
              <Col className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  onClick={() => setShowForm((showForm) => !showForm)}
                >
                  {" "}
                  Edit Listing{" "}
                </Button>
              </Col>
              <Col className="d-flex justify-content-center">
                <Button variant="warning"> Delete Listing </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
      {/* )} */}
    </Col>
  );
}

export default YourListingCard;
