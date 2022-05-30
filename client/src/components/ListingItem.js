import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListingDetails from "../pages/ListingDetails";

function ListingItem({ listing, user, handleCardClick }) {
  const [buttonClass, setButtonClass] = useState(null)

  const { id, image_url, what_it_is } = listing;

  useEffect(() => {
    if (listing.user_id === user.id) {
      setButtonClass('disabled')
    } else if (user.favorites.filter(fav => fav.listing_id === listing.id).length > 0) {
      setButtonClass('disabled')
    }
  }, [listing.id, listing.user_id, user.favorites, user.id])

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
        // console.log(data);
        setButtonClass('disabled')
      });
  };

  function renderButtonName() {
    if (listing.user_id === user.id) {
      return "Your Listing"
    } else if (buttonClass === 'disabled') {
      return "Favorited"
    } else {
      return "Favorite"
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
                <Button
                  variant="primary"
                  onClick={() => handleAddToFavorites(id)}
                  className={buttonClass}
                >
                  {renderButtonName()}
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ListingItem;
