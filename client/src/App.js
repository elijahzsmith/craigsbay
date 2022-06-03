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
import About from "./pages/About";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [timers, setTimers] = useState([]);

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
    setShowForm((showForm) => !showForm);
    <EditYourListingForm listing={listing} />;
  };

  function handleCreateTimer(listing_id) {
    const configObjPOST = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ listing_id }),
    };

    fetch("/timers", configObjPOST)
      .then((res) => res.json())
      .then((timer) => setTimers([...timers, timer]));
  }

  useEffect(() => {
    if (timers.length > 0) {
      const timer = timers.at(-1);

      fetch(`/countdown/${timer.id}`);
    }
  }, [timers]);

  return (
    <div>
      <NavBar handleLogout={handleLogout} isAuthenticated={isAuthenticated} />
      <Switch>
        <Route exact path="/">
          <Home
            user={user}
            handleCardClick={handleCardClick}
            isAuthenticated={isAuthenticated}
            // reRenderListings={reRenderListings}
          />
        </Route>
        <Route exact path="/login">
          <Login setUser={handleUser} setIsAuthenticated={handleAuth} />
        </Route>
        <Route exact path="/signup">
          <Signup setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
        </Route>
        <Route exact path="/enteredraffles">
          <Favorites handleCardClick={handleCardClick} user={user} />
        </Route>
        <Route exact path="/details/:id">
          <ListingDetails />
        </Route>
        <Route exact path="/profile">
          <Profile user={user} />
        </Route>
        <Route exact path="/postdonation">
          <PostListingForm user={user} handleCreateTimer={handleCreateTimer} />
        </Route>
        <Route exact path="/editprofile">
          <EditProfileForm user={user} setUser={setUser} />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>
 
        <Route exact path="/yourdonations">

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
