import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const navigatehome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <nav className="nav-container">
      <img
        src="/Logo.svg"
        alt="Logo"
        className="nav-logo"
        onClick={navigatehome}
      />
      <h1>Logo</h1>
      <div className="nav-btns">
        <button className="nav-button">Sign Up</button>
        <button className="nav-button">Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;
