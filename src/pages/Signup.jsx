import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUserDetails } from "../slices/userSlice"; // Import the action creator
import styles from "../styles/signup.module.css"; // Adjust the path as necessary
import { toast } from "react-toastify";

const Signup = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the user details to the store
    dispatch(setUserDetails({ username, email, mobileNumber }));

    // Optionally, handle password storage or further processing here
    // Redirect to settings or home page if needed
    toast.success("Registration successful!"); // Replace with toast if needed
  };

  return (
    <div className={styles.signupContainer}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Mobile Number:
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login" className={styles.link}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
