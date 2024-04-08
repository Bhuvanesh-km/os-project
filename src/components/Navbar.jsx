import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handelnavigate = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <nav className="nav-container">
      <h1 className="nav-logo">Logo</h1>
      <ul className="nav-list">
        <li>
          <a href="/" onClick={handelnavigate}>
            Home
          </a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="nav-btns">
        <button className="nav-button">Sign Up</button>
        <button className="nav-button">Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;
