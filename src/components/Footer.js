import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "30px 20px",
        marginTop: "50px"
      }}
    >
      <p style={{ marginBottom: "10px" }}>
        &copy; {new Date().getFullYear()} Dream Home. All rights reserved.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
          Privacy Policy
        </a>
        <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
          Terms of Service
        </a>
        <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
