import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

function ListingItem({
  listing,
  user,
  handleCardClick,
  handleDelete,
  isAuthenticated,
  setAlert
}) {
  const [buttonState, setButtonState] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const { id, image_url, what_it_is } = listing;

  useEffect(() => {
    if (!isAuthenticated) {
      setButtonState("UnAuth");
    } else if (listing.user_id === user.id) {
      setButtonState("Owner");
    } else if (
      user.favorites.filter((fav) => fav.listing_id === listing.id).length > 0
    ) {
      setButtonState("Entered");
    } else {
      setButtonState(null);
    }

    if (isAuthenticated) {
      setFavorites(user.favorites);
    }
  }, [listing.id, listing.user_id, user.favorites, user.id, isAuthenticated]);

  const handleAddToFavorites = () => {
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
        setFavorites([...favorites, newFav]);
        setButtonState("Entered");
      });
  };

  function handleRemoveFavorite() {
    const rmFav = favorites.find((fav) => fav.listing_id === id);
    const configObjDELETE = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    fetch(`/favorites/${rmFav.id}`, configObjDELETE).then(() => {
      const newFavs = favorites.filter((fav) => fav.id !== rmFav.id);
      setFavorites(newFavs);
      setButtonState(null);
    });
  }

  function handleUnAuth() {
    return (
      <Alert variant="warning" dismissible>
        You must be logged in to enter a raffle.
        <Alert.Link href="/login">Login or Sign Up</Alert.Link>
        to enter.

      </Alert>
    )
    // const answer = window.confirm("Login to continue!");
    // if (answer) {
    //   history.push("/login");
    // }
  }

  function renderButton() {
    switch (buttonState) {
      case "UnAuth":
        return (
          <Button variant="primary" onClick={setAlert}>
            Enter Raffle
          </Button>
        );

      case "Owner":
        return (
          <Button variant="warning" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        );

      case "Entered": {
        return (
          <Button variant="secondary text-white" onClick={handleRemoveFavorite}>
            Entered
          </Button>
        );
      }

      default: {
        return (
          <Button variant="primary" onClick={handleAddToFavorites}>
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
