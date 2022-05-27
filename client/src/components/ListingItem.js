import React from "react";
import Card from "react-bootstrap/Card";

function ListingItem({ listing }) {
  console.log(listing);
  const { location, image_url, what_it_is, description } = listing;
  return (
    <Card>
      <h1>{what_it_is}</h1>
      <img src={image_url} alt="listing" />
      <h1>{location}</h1>
      <p>{description}</p>
      <button></button>
    </Card>
  );
}

export default ListingItem;
