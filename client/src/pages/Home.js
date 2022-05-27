import React from "react";

import ListingItem from "../components/ListingItem";

function Home({ listings }) {
  console.log(listings);
  const renderListings = listings.map((listing) => {
    return <ListingItem key={listing.id} listing={listing} />;
  });

  return <div>{renderListings}</div>;
}

export default Home;
