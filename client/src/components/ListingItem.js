import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ListingItem({ listing, user, handleCardClick, handleDelete }) {
  const [buttonState, setButtonState] = useState(null);
  const [favorites, setFavorites] = useState([])
  const { id, image_url, what_it_is } = listing;

  useEffect(() => {
    if (listing.user_id === user.id) {
      setButtonState("Owner");
    } else if (
      user.favorites.filter((fav) => fav.listing_id === listing.id).length > 0
    ) {
      setButtonState("Entered");
    }

    fetch('/favorites')
      .then(res => res.json())
      .then(favs => setFavorites(favs))
  }, [listing.id, listing.user_id, user.favorites, user.id]);

  console.log(favorites)
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
      .then((newFav) => {
        setFavorites([...favorites, newFav])
        setButtonState("Entered");
      });
  };

  // console.log(user)

  function handleRemoveFavorite() {
    // const fav = user.favorites.find((fav) => fav.listing_id === id);
    const rmFav = favorites.find(fav => fav.listing_id === id)

    console.log(rmFav)

    const configObjDELETE = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    fetch(`/favorites/${rmFav.id}`, configObjDELETE)
      .then(() => {
        const newFavs = favorites.filter(fav => fav.id !== rmFav.id)
        setFavorites(newFavs)
        setButtonState(null)
      });
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
            onClick={() => handleRemoveFavorite()}
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
