import React, { useEffect, useState } from "react";

import ListingItem from "../components/ListingItem";


function Home({ user }) {
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
    return <ListingItem key={listing.id} listing={listing} user={user} />;
  });

  return <div>{renderListings}</div>;
}

export default Home;
