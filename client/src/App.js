import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

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

  if (!isAuthenticated) {
    return <Login setUser={setUser} setIsAuthenticated={setIsAuthenticated} />;
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact to="/login">
          <Login setUser={setUser} setIsAuthenticated={setIsAuthenticated} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
