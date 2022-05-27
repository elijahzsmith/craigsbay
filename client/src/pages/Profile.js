import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Profile({ user, isUserLoaded }) {
  //   const history = useHistory();

  if (!isUserLoaded) {
    return <h3>Loading...</h3>;
  }

  console.log(user);
  const { name, age, username } = user;
  return (
    <div>
      <h1>Profile Page</h1>
      <h2>Name: {name}</h2>
      <h3>Username: {username}</h3>
      <button></button>
    </div>
  );
}

export default Profile;
