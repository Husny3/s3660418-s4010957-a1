import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State variable to track login status

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem("signUp");
    setIsLoggedIn(false); // Update login status
    window.location.reload();
  };

  // Effect to check login status when component mounts
  useEffect(() => {
    // Check if user is already logged in
    const loggedInUser = localStorage.getItem("signUp");
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="site-title">
        SOIL
      </Link>
      <ul className="navbar-items">
        <li className="active">
          <Link to="/Specials">Specials</Link>
        </li>
        {!isLoggedIn && ( // Render Sign in and Sign up buttons when not logged in
          <>
            <li className="active">
              <Link to="/Login">Sign in</Link>
            </li>
            <li className="active">
              <Link to="/Form">Sign up</Link>
            </li>
          </>
        )}
        {isLoggedIn && ( // Render Logout button when logged in
          <li>
          <Link className="nav-link" to="/Profile"> Profile </Link>
          </li>
        )}
        {isLoggedIn && ( // Render Profile link when logged in
          <li>
          <Link className="nav-link" to="/login" onClick={logout}> Logout </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;