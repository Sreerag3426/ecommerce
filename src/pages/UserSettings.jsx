import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUsername,
  updateEmail,
  updateMobileNumber,
} from "../slices/userSlice"; // Import the action creators
import styles from "../styles/userSettings.module.css"; // Adjust the path as necessary
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";

const UserSettings = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [mobileNumber, setMobileNumber] = useState(user.mobileNumber);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUsername(username));
    dispatch(updateEmail(email));
    dispatch(updateMobileNumber(mobileNumber));
    toast.success("User details updated!"); // Replace with toast if needed
  };

  return (
    <>
      <Navbar />
      <div className={styles.settingsContainer}>
        <div className={styles.settingsForm}>
          <h2>User Settings</h2>
          <form onSubmit={handleSubmit}>
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
            <button type="submit">Update Details</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserSettings;
