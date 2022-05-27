import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import ListingDetails from "./pages/ListingDetails";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [listings, setListings] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  
  const history = useHistory()

  useEffect(() => {
    fetch("/listings")
    .then((res) => res.json())
    .then((listings) => {
      setListings(listings)
      setIsLoaded(true)
    });

    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser(user);
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
  };

  function handleUser(user) {
    setUser(user);
  }

  function handleAuth(value) {
    setIsAuthenticated(value);
  }

  const handleCardClick = (id, listing) => {
    history.push(`/details/${id}`, listing)
  }

  if (!isAuthenticated) {
    return <Login setUser={handleUser} setIsAuthenticated={handleAuth} />;
  }

  return (
    <div>
      <NavBar handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/home">
          <Home isLoaded={isLoaded} listings={listings} user={user} handleCardClick={handleCardClick} />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/details/:id">
          <ListingDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
