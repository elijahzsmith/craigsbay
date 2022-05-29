import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup({
  setUser,
  setIsAuthenticated,
  usernameInput,
  setUsernameInput,
  passwordInput,
  setPasswordInput,
}) {
  const [error, setError] = useState([]);

  const history = useHistory();

  const user = {
    username: usernameInput,
    password: passwordInput,
  };

  const configObjPOST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/signup", configObjPOST).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setIsAuthenticated(true);
          setError([]);
        });
      } else {
        res.json().then((json) => setError(json.error));
      }
    });
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="username"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <button type="submit">Create Account</button>
        {error ? (
          <div className="text-danger ">
            <strong>{error}</strong>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default Signup;
