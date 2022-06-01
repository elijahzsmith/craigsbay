import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import ListingDetails from "./pages/ListingDetails";
import Profile from "./pages/Profile";
import PostListingForm from "./pages/PostListingForm";
import "./index.scss";
import EditProfileForm from "./pages/EditProfileForm";
import YourListings from "./pages/YourListings";
import EditYourListingForm from "./pages/EditYourListingForm";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState("");
  const [showForm, setShowForm] = useState(false);


  const history = useHistory();

  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setIsAuthenticated(true);
        });
      }
    });

  }, []);

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(setIsAuthenticated(false));
    history.push("/");
  };

  function handleUser(user) {
    setUser(user);
  }

  function handleAuth(value) {
    setIsAuthenticated(value);
  }

  const handleCardClick = (id, listing) => {
    history.push(`/details/${id}`, listing);
  };

  const handleYourCardClick = (id, listing) => {
    history.push(`/editlisting/${id}`, listing);
  };

  const handleEditListing = (listing) => {
    console.log(listing);
    setShowForm((showForm) => !showForm);
    <EditYourListingForm listing={listing} />;
  };

  if (!isAuthenticated) {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Login setUser={handleUser} setIsAuthenticated={handleAuth} />
          </Route>
          <Route exact path="/signup">
            <Signup setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
          </Route>
        </Switch>
      </div>
    );
  }

  return (
    <div>
      <NavBar handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/">
          <Home
            user={user}
            handleCardClick={handleCardClick}
          />
        </Route>
        <Route exact path="/ongoingraffles">
          <Favorites handleCardClick={handleCardClick} />
        </Route>
        <Route exact path="/details/:id">
          <ListingDetails />
        </Route>
        <Route exact path="/profile">
          <Profile user={user} />
        </Route>
        <Route exact path="/postlisting">
          <PostListingForm
            user={user}
          />
        </Route>
        <Route exact path="/editprofile">
          <EditProfileForm user={user} setUser={setUser} />
        </Route>
        <Route exact path="/yourlistings">
          <YourListings
            user={user}
            showForm={showForm}
            setShowForm={setShowForm}
            handleEditListing={handleEditListing}
            handleYourCardClick={handleYourCardClick}
          />
        </Route>
        <Route exact path="/editlisting/:id">
          <EditYourListingForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
