import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Clock from "./Clock";

function ListingItem({ listing, user, handleCardClick }) {
  const { id, image_url, what_it_is } = listing;

  const handleAddToFavorites = (id) => {
    const newFavorite = {
      user_id: user.id,
      listing_id: id,
    };

    const configObjPOST = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newFavorite),
    };

    fetch(`/favorites`, configObjPOST)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Col>
      <Card className="h-100" >
        <Card.Img src={image_url} alt="listing" onClick={() => handleCardClick(id, listing)} role="button" className="h-75" />
        <Card.Body>
          <Card.Title className="text-center">{what_it_is}</Card.Title>
          <Container className="ms-2">
            <Row>
              <Col className="d-flex justify-content-center">
                <Button variant="primary" onClick={() => handleAddToFavorites(id)} > Favorite </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ListingItem;
