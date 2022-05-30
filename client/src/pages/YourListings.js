import React, { useState, useEffect } from "react";
import YourListingCard from "../components/YourListingCard";

function YourListings({
  user,
  showForm,
  setShowForm,
  handleEditListing,
  handleYourCardClick,
}) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(`/users/${user.id}`)
      .then((res) => res.json())
      .then((data) => {
        setListings(data.listings);
      });
  }, []);

  function handleDelete(id) {
    const configObjDELETE = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }

    fetch(`/listings/${id}`, configObjDELETE)
      .then(() => {
        const filteredListings = listings.filter(listing => listing.id !== id)

        setListings(filteredListings)
      })
  }

  const renderYourListings = listings.map((listing) => {
    return (
      <YourListingCard
        user={user}
        listing={listing}
        showForm={showForm}
        setShowForm={setShowForm}
        handleEditListing={handleEditListing}
        handleYourCardClick={handleYourCardClick}
        handleDelete={handleDelete}
      />
    );
  });

  return (
    <div>
      <h1>Your Listings</h1>
      {renderYourListings}
    </div>
  );
}

export default YourListings;
