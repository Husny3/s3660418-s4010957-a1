import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const isLoggedIn = props.username !== null;

  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">SOIL</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/Specials">Specials</Link>
        </li>
        <li className="nav-item">
              <Link className="nav-link" to="/Tips">Useful Tips</Link>
            </li>
        {!isLoggedIn && (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/Form">Sign up</Link>
            </li>
          </>
        )}
        {isLoggedIn && (
          <li className="nav-item">
            <Link className="nav-link" to="/profile">My Profile</Link>
          </li>
        )}
      </ul>
      <ul className="navbar-nav">
        {isLoggedIn && (
          <>
            <li className="nav-item">
              <span className="nav-link text-light">Welcome, {props.username}</span>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={props.logoutUser}>Logout</Link>
            </li>
          </>
        )}
        {!isLoggedIn && (
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}  
export default Navbar;