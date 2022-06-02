import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function FavItem({ fav, handleRemoveFavorite, handleCardClick, user }) {
  const [iconState, setIconState] = useState(null)
  const id = fav.id;

  console.log(fav)

  const { what_it_is, image_url, end_time, winner_id } = fav.listing;

  useEffect(() => {
    const now = new Date().getTime()
    const endTime = new Date(end_time).getTime()

    if (endTime > now) {
      setIconState("Ongoing")
    } else if (endTime < now && winner_id === user.id) {
      setIconState("Winner")
    } else if (endTime < now && winner_id !== user.id) {
      setIconState("Lost")
    }
  }, [end_time, user.id, winner_id])

  function renderIcon() {
    switch (iconState) {
      case "Ongoing": {
        return (
          <Card.ImgOverlay className="d-flex flex-column align-items-end h-75"
            onClick={() => handleCardClick(id, fav.listing)}
            role="button">
            <div className="mt-0 bg-white rounded p-1">
              <i className="bi bi-hourglass-split text-yellow h3"></i>
            </div>
          </Card.ImgOverlay>
        )
      }

      case "Lost": {
        return (
          <Card.ImgOverlay className="d-flex flex-column align-items-end h-75"
            onClick={() => handleCardClick(id, fav.listing)}
            role="button">
            <div className="mt-0 bg-white rounded p-1">
              <i className="bi bi-person-x-fill text-warning h3"></i>
            </div>
          </Card.ImgOverlay>
        )
      }

      case "Winner": {
        return (
          <Card.ImgOverlay className="d-flex flex-column align-items-end h-75"
            onClick={() => handleCardClick(id, fav.listing)}
            role="button">
            <div className="mt-0 bg-white rounded p-1">
              <i className="bi bi-trophy text-green h3"></i>
            </div>
          </Card.ImgOverlay>
        )
      }

      default: {
        return (
          null
        )
      }
    }
  }

  return (
    <Col>
      <Card className="h-100">
        <Card.Img
          src={image_url}
          alt="listing"
          onClick={() => handleCardClick(id, fav.listing)}
          role="button"
          className="h-75"
        />
        {renderIcon()}
        <Card.Body>
          <Card.Title className="text-center">          {what_it_is}
          </Card.Title>
          <Container className="ms-2">
            <Row>
              <Col className="d-flex justify-content-center">
                <Button
                  variant="warning"
                  onClick={() => handleRemoveFavorite(id)}
                >
                  {" "}
                  Exit Raffle{" "}
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default FavItem;
