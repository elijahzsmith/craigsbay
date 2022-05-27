import React from "react";
import Card from "react-bootstrap/Card";

function ListingItem({ listing, handleAddToFavorites }) {
  console.log(listing);
  const { id, location, image_url, what_it_is, description } = listing;
  return (
    <Card>
      <h1>{what_it_is}</h1>
      <img src={image_url} alt="listing" />
      <h1>{location}</h1>
      <p>{description}</p>
      <button onClick={() => handleAddToFavorites(id)} />
      <label>Add To Favorites</label>
    </Card>
  );
}

export default ListingItem;
