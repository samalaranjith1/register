import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3000/user/login", {
          username: username,
          password: password,
        })
        .then(
          (res) => {
            console.log(res);
            const data = res.data;
            if (data.status === true) {
              alert("User login successfull");
              navigate("/");
            } else {
              alert("Please check details,Login failed");
            }
          },
          (fail) => {
            console.log("error at line 31 in login front end");
            console.error(fail);
            console.log("error at line 33 in login front end");
          }
        );
    } catch (error) {
      alert(error);
    }
  }
  const handleSignup = (e) => {
    navigate("/register");
  };
  const location = useLocation();
  const data = location.state;
  useEffect(() => {
    if (data) {
      setUsername(data.username);
      setPassword(data.password);
    }
  }, [data]);

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
        Password:
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
      <button onClick={handleSignup}>Signup</button>
    </form>
  );
}

export default Login;
