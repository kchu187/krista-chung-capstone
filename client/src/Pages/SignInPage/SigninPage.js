import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./SigninPage.scss";

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
      <form className="sign-in" onSubmit={handleSubmit}>
        <h1 className="sign-in__heading"> Log in to add some beans! </h1>
        <h3 className="sign-in__field-title">Email</h3>
        <input
          className="sign-in__form-fields"
          name="email"
          type="text"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <h3 className="sign-in__field-title">Password</h3>
        <input
          className="sign-in__form-fields"
          name="password"
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="sign-in__button" type="submit">
          Log In
        </button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default SigninPage;
