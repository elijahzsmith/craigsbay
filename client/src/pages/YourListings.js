import React from "react";
import YourListingCard from "../components/YourListingCard";
import EditYourListingForm from "./EditYourListingForm";

function YourListings({ user, showForm, setShowForm, handleEditListing }) {
  if (!user) {
    return null;
  }

  const renderYourListings = user.listings.map((listing) => {
    return (
      //   <YourListingCard
      //     user={user}
      //     listing={listing}
      //     showForm={showForm}
      //     setShowForm={setShowForm}
      //     handleEditListing={handleEditListing}
      //   />
      //   {
      showForm ? (
        <EditYourListingForm
          showForm={showForm}
          listing={listing}
          setShowForm={setShowForm}
        />
      ) : (
        <YourListingCard
          user={user}
          listing={listing}
          showForm={showForm}
          setShowForm={setShowForm}
          handleEditListing={handleEditListing}
        />
      )
    );
  });

  return (
    <div>
      <h1>Your Listings</h1>
      {/* {showForm ? (
        <EditYourListingForm showForm={showForm} setShowForm={setShowForm} />
      ) : null} */}
      {renderYourListings}
    </div>
  );
}

export default YourListings;
