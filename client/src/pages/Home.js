import React from "react";

import ListingItem from "../components/ListingItem";

function Home({ listings, handleAddToFavorites }) {
  console.log(listings);
  const renderListings = listings.map((listing) => {
    return <ListingItem key={listing.id} listing={listing} handleAddToFavorites={handleAddToFavorites} />;
  });

  return <div>{renderListings}</div>;
}

export default Home;
