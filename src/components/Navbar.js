import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">{props.title}</a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center" style={{ gap: "20px" }}>
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Listing">Listing</Link>
            </li>

            
            <li className="nav-item" style={{ position: "relative" }}>
              <button
                className="btn nav-link"
                onClick={() => setContactOpen(!contactOpen)}
                style={{ background: "none", border: "none" }}
              >
                Contact ▼
              </button>

              {contactOpen && (
                <div style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  zIndex: 1000,
                  minWidth: "120px"
                }}>
                  <Link
                    className="dropdown-item"
                    to="/Contact"
                    state={{ show: "login" }}
                    onClick={() => setContactOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/Contact"
                    state={{ show: "signup" }}
                    onClick={() => setContactOpen(false)}
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
