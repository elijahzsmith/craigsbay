import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Clock from "./Clock";

function ListingItem({ listing, user, handleCardClick, handleDelete }) {
  const [buttonState, setButtonState] = useState(null);

  const { id, image_url, what_it_is } = listing;

  useEffect(() => {
    if (listing.user_id === user.id) {
      setButtonState("Owner");
    } else if (
      user.favorites.filter((fav) => fav.listing_id === listing.id).length > 0
    ) {
      setButtonState("Entered");
    }
  }, [listing.id, listing.user_id, user.favorites, user.id]);

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
      .then(() => {
        setButtonState("Entered");
      });
  };

  function handleRemoveFavorite(id) {
    const fav = user.favorites.find((fav) => fav.listing_id === id);

    const configObjDELETE = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    fetch(`/favorites/${fav.id}`, configObjDELETE).then(setButtonState(null));
  }

  function renderButton() {
    switch (buttonState) {
      case "Owner":
        return (
          <Button variant="warning" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        );

      case "Entered": {
        return (
          <Button
            variant="secondary text-white"
            onClick={() => handleRemoveFavorite(id)}
          >
            Entered
          </Button>
        );
      }

      default: {
        return (
          <Button variant="primary" onClick={() => handleAddToFavorites(id)}>
            Enter Raffle
          </Button>
        );
      }
    }
  }

  return (
    <Col>
      <Card className="h-100">
        <Card.Img
          src={image_url}
          alt="listing"
          onClick={() => handleCardClick(id, listing)}
          role="button"
          className="h-75"
        />
        <Card.Body>
          <Card.Title className="text-center">{what_it_is}</Card.Title>
          <Container className="ms-2">
            <Row>
              <Col className="d-flex justify-content-center">
                {renderButton()}
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ListingItem;
