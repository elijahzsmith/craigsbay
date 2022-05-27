import React from "react";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";

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

  const history = useHistory();
  
  const routeChange = (e) => {
    let path = '/details';
    history.push(path, {id:id, location: location, image_url: image_url, what_it_is: what_it_is, description: description})
  }

  return (
    <Card>
      <h1>{what_it_is}</h1>
      <img src={image_url} alt="listing" />
      <h1>{location}</h1>
      <p>{description}</p>
      <button style={{ padding: "10px", margin: "auto"}} onClick={() => handleAddToFavorites(id)} > Add To Favorites </button>
      <button style={{ padding: "10px", margin: "auto"}} onClick={routeChange}> Details </button>
    </Card>
  );
}

export default ListingItem;
