import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setLoginStatus } from "../slices/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    dispatch(setLoginStatus(false));
    navigate("/");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          MyLogo
        </Link>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          <span className="">&#9776;</span>
        </button>
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <li>
            <Link to="/" className={styles.navItem}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className={styles.navItem}>
              Cart
            </Link>
          </li>
          <li>
            <Link to="/settings" className={styles.navItem}>
              Profile
            </Link>
          </li>

          {!isLoggedIn ? (
            <li>
              <Link to="/login" className={styles.navItem}>
                Login
              </Link>
            </li>
          ) : (
            <li>
              <button onClick={handleLogout} className={styles.navItem}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
