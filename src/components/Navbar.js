import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [contactOpen, setContactOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // ✅ Navbar toggle state

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>

        {/* ✅ Toggler button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center" style={{ gap: "20px" }}>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Listing" onClick={() => setIsOpen(false)}>
                Listing
              </Link>
            </li>

            {/* Contact Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle"
                style={{ background: "none", border: "none" }}
                onClick={() => setContactOpen(!contactOpen)}
              >
                Contact
              </button>

              {contactOpen && (
                <div
                  className="dropdown-menu show"
                  style={{ position: "absolute", zIndex: 1000 }}
                >
                  <Link
                    className="dropdown-item"
                    to="/Contact"
                    state={{ show: "login" }}
                    onClick={() => {
                      setContactOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    Login
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/Contact"
                    state={{ show: "signup" }}
                    onClick={() => {
                      setContactOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
