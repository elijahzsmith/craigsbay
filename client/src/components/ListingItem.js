import React from "react";
import Card from "react-bootstrap/Card";

function ListingItem({ listing, user }) {
  const { id, location, image_url, what_it_is, description } = listing;

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
        console.log(data);
      });
  };

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
