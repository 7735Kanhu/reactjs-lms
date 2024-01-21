import React from "react";
import "../index.css";
import logo from "../assets/logo.webp";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="top-container">
          <div className="top-header">
            <div className="left-top-header">
              <p>needhelp@gmail.com</p>
              <p>444 888 0000</p>
            </div>
            <div className="right-top-header">
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul>
              <NavLink to="/"><a>Home</a></NavLink>
              <NavLink to="/courses"><a>Courses</a></NavLink>
              <NavLink to="/dashboard"><a>Dashboard</a></NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
