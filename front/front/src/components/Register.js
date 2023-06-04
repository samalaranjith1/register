import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const data = { username, email, password };

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      username &&
      email &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      console.log(
        "Data successfully set to backend ,waiting for response from backend",
        {
          username,
          email,
          password,
          confirmPassword,
        }
      );
      try {
        await axios.post("http://localhost:9002/user/create", {
          username: username,
          email: email,
          password: password,
        });
        alert("User Regsitraion successfull");
      } catch (error) {
        alert(error);
      }

      navigate("/", { state: data });
    }
  }
  const navigate = useNavigate("");

  const handleLogin = (e) => {
    navigate("/", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Confrim Password:
        <br />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
      <button onClick={handleLogin}>Login</button>
    </form>
  );
};

export default Signup;
