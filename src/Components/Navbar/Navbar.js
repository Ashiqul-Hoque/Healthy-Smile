import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Images/logo.png";

const Navbar = () => {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand ms-4">
            <img height={50} src={logo} alt="" /> Healthy Smile
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navList">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to="/about"
                >
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to="/checkout"
                >
                  Checkout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
