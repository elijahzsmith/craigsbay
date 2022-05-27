import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import ListingDetails from "./pages/ListingDetails";
//experiment
import Profile from "./pages/Profile";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser(user);
          setIsUserLoaded(true);
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

  if (!isAuthenticated) {
    return <Login setUser={handleUser} setIsAuthenticated={handleAuth} />;
  }

  return (
    <div>
      <NavBar handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/home">
          <Home user={user} />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/details">
          <ListingDetails />
        </Route>
        <Route exact path="/profile">
          <Profile user={user} isUserLoaded={isUserLoaded} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
