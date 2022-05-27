import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ListingItem from "../components/ListingItem";


function Home({ user, handleCardClick }) {
  const [listings, setListings] = useState([])
  const [homeLoaded, setIsHomeLoaded] = useState(false)
  const [category, setCategory] = useState("/All")
  const [filtered, setFiltered] = useState(false)

  useEffect(() => {
    fetch("/listings")
      .then((res) => res.json())
      .then((listings) => {
        setListings(listings)
        setIsHomeLoaded(true)
      })
  }, [])

  const handleSortAlphabetically = () => {
    if (filtered === false) {
      const sortedListings = listings.sort(function(a, b){
        let x = a.what_it_is.toLowerCase();
        let y = b.what_it_is.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      })
      setListings(sortedListings)
      setFiltered(true)
    } else {
      const originalArray = listings.sort(function(a, b){return a.id - b.id})
      setListings(originalArray)
      setFiltered(false)
    }
  }


  const renderListings = listings.map((listing) => {
    return (
      <ListingItem key={listing.id} listing={listing} user={user} handleCardClick={handleCardClick} />
    )
  });

  if (!homeLoaded) return <h3>Loading...</h3>

  return (
    <Container fluid>
      <button onClick={ () => handleSortAlphabetically()}>hey</button>
      <Row xs={1} sm={2} md={3} lg={4}>
        {renderListings}
      </Row>
    </Container>
  )
}

export default Home;
