import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
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
        console.log(data)
        setListings(data.listings);
      });
  }, [user.id]);

  function handleDelete(id) {
    const configObjDELETE = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    fetch(`/listings/${id}`, configObjDELETE).then(() => {
      const filteredListings = listings.filter((listing) => listing.id !== id);

      setListings(filteredListings);
    });
  }

  const renderYourListings = listings.map((listing) => {
    return (
      <YourListingCard
        key={listing.id}
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
    <Container fluid>
      <Row className="text-center mt-5 mb-3">
        <h1>Your Donations</h1>
      </Row>

      <Row xs={1} sm={2} md={3} lg={4}>
        {renderYourListings}
      </Row>
    </Container>
  );
}

export default YourListings;
