import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
<<<<<<< HEAD
import Favorites from "./pages/FavoritesPage";
=======
import Favorites from "./pages/Favorites";
>>>>>>> a7d8c3d144b73eae40ff5510f641a53b81ec95c4

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
<<<<<<< HEAD
  const [listings, setListings] = useState([]);
  // const [favorites, setFavorites] = useState([]);
=======
>>>>>>> a7d8c3d144b73eae40ff5510f641a53b81ec95c4

  useEffect(() => {
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

  if (!isAuthenticated) {
    return <Login setUser={handleUser} setIsAuthenticated={handleAuth} />;
  }

  return (
    <div>
      <NavBar handleLogout={handleLogout} />
      <Switch>
<<<<<<< HEAD
        <Route exact to="/">
          <Home handleAddToFavorites={handleAddToFavorites} />
        </Route>
        <Route exact to="/favorites">
          <Favorites />
=======
        <Route exact path="/home">
          <Home user={user} />
        </Route>
        <Route path="/favorites">
          <Favorites user={user} />
>>>>>>> a7d8c3d144b73eae40ff5510f641a53b81ec95c4
        </Route>
      </Switch>
    </div>
  );
}

export default App;
