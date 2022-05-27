import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ListingItem from "../components/ListingItem";


function Home({ user, handleCardClick, listings, isLoaded}) {

  if (!isLoaded) return <h3>Loading...</h3>

  const renderListings = listings.map((listing) => {
    return (
      <ListingItem key = {listing.id} listing={listing} user={user} handleCardClick={handleCardClick} />
    )
  });

  return (
    <Container fluid>
      <Row xs={1} sm={2} md={3} lg={4}>
        {renderListings}
      </Row>
    </Container>
  )
}

export default Home;
