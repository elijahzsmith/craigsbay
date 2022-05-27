import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ setUser, setIsAuthenticated }) {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

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
    console.log(e.target.value);
    fetch("/login", configObjPOST).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setIsAuthenticated(true)
          setError([])
        });
      } else {
        res.json().then((json) => setError(json.error));
      }
    });
  };

  const handleSignup = () => {
    history.push("/signup");
  };

  return (
    <div>
      <h1>Login</h1>
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
        <button type="submit">Login</button>
        {(error) ? <div className="text-danger "><strong>{error}</strong></div> : null}
        <h2>Don't have an account yet?</h2>
        <button onClick={handleSignup}>Signup</button>
      </form>
    </div>
  );
}

export default Login;
