import React, { useEffect, useState } from "react";

const PropertiesToggle = () => {
  const [saleProperties, setSaleProperties] = useState([]);
  const [rentProperties, setRentProperties] = useState([]);
  const [activeTab, setActiveTab] = useState(""); // "sale" or "rent"

  useEffect(() => {
    // Fetch sale properties
    fetch("https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing")
      .then((res) => res.json())
      .then((data) => setSaleProperties(data));

    // Fetch rent properties
    fetch("https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing")
      .then((res) => res.json())
      .then((data) => setRentProperties(data));
  }, []);

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    maxWidth: "1100px",
    margin: "40px auto"
  };

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center"
  };

  const imgStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "10px"
  };

  return (
    <section style={{ padding: "60px 20px", textAlign: "center" }}>
      <h2>Available Properties</h2>

      {/* Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setActiveTab("sale")}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            background: activeTab === "sale" ? "#2196f3" : "#eee",
            color: activeTab === "sale" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Sale Properties
        </button>
        <button
          onClick={() => setActiveTab("rent")}
          style={{
            padding: "10px 20px",
            background: activeTab === "rent" ? "#2196f3" : "#eee",
            color: activeTab === "rent" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Rent Properties
        </button>
      </div>

      {/* Show Properties */}
      {activeTab === "sale" && (
        <div style={gridStyle}>
          {saleProperties.map((p) => (
            <div key={p.id} style={cardStyle}>
              <img src={p.image} alt={p.title} style={imgStyle} />
              <h3>{p.title}</h3>
              <p style={{ color: "#2196f3", fontWeight: "bold" }}>${p.price}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "rent" && (
        <div style={gridStyle}>
          {rentProperties.map((p) => (
            <div key={p.id} style={cardStyle}>
              <img src={p.image} alt={p.title} style={imgStyle} />
              <h3>{p.title}</h3>
              <p style={{ color: "#4caf50", fontWeight: "bold" }}>
                ${p.price}/month
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PropertiesToggle;
