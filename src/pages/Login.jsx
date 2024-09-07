import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLoginStatus } from "../slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/login.module.css";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assume 'admin' as valid credentials for demo
    if (username === "admin" && password === "admin") {
      dispatch(setLoginStatus(true));
      navigate("/cart");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h2>Login</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <p>username and password is 'admin'</p>
        <button type="submit">Login</button>
      </form>
      <p>
        New user?{" "}
        <Link to="/signup" className={styles.link}>
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
