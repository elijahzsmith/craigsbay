import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ListingItem from "../components/ListingItem";


function Home({ user, handleCardClick }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("/listings")
      .then((res) => res.json())
      .then((listings) => {
        setListings(listings)
        setIsLoaded(true)
      });

  }, [])

  if (!isLoaded) return <h3>Loading...</h3>

  const renderListings = listings.map((listing) => {
    return (
      <ListingItem key={listing.id} listing={listing} user={user} handleCardClick={handleCardClick} />
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
