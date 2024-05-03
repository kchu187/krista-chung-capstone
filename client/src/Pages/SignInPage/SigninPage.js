import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Header from "../../components/Header/Header";
const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/signin", {
        email,
        password,
      });
      const { userID } = response.data;

      //Store user id in storage for the session
      sessionStorage.setItem("userID", userID);

      //Upon successful login, redirect to the beanmap
      alert("Successful log-in, redirecting to your bean map");
      setLoggedIn(true);
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Invalid email/password, please try again!");
    }
  };

  if (loggedIn) {
    return <Navigate to="/beanmap" />;
  }
  return (
    <>
      <Header></Header>
      <form onSubmit={handleSubmit}>
        <h1> Log in to add some beans! </h1>
        <input
          name="email"
          type="text"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Log In</button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default SigninPage;
