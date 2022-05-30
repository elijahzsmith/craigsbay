import React from "react";
import { useHistory } from "react-router-dom";

function Profile({ user, isUserLoaded }) {
  const history = useHistory();

  if (!isUserLoaded) {
    return <h3>Loading...</h3>;
  }

  // console.log(user.favorites);
  const { name, age, username } = user;
  return (
    <div>
      <div>
        <h1>Profile Page</h1>
        <h2>Name: {name}</h2>
        <h3>Username: {username}</h3>
        <button onClick={() => history.push("/favorites")}>
          Your Favorites
        </button>
        <button onClick={() => history.push("/yourlistings")}>
          Your Listings
        </button>
        <button onClick={() => history.push("/editprofile")}>
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
