import React, { useEffect, useState } from "react";

const PropertyListing = () => {
  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((res) => res.json())
      .then((data) => {
      
        const updated = data.map((item, i) => ({
          ...item,
          propertyType: i % 2 === 0 ? "sale" : "rent"
        }));
        setProperties(updated);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredProperties =
    filter === "all"
      ? properties
      : properties.filter((p) => p.propertyType === filter);

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
      <h2>Property Listings</h2>

    
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setFilter("all")}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            background: filter === "all" ? "#2196f3" : "#eee",
            color: filter === "all" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          All
        </button>
        <button
          onClick={() => setFilter("sale")}
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            background: filter === "sale" ? "#2196f3" : "#eee",
            color: filter === "sale" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Sale
        </button>
        <button
          onClick={() => setFilter("rent")}
          style={{
            padding: "10px 20px",
            background: filter === "rent" ? "#2196f3" : "#eee",
            color: filter === "rent" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Rent
        </button>
      </div>

      {/* Property Grid */}
      <div style={gridStyle}>
        {filteredProperties.map((p) => (
          <div key={p.id} style={cardStyle}>
            <img src={p.image} alt={p.title} style={imgStyle} />
            <h3>{p.title}</h3>
            <p
              style={{
                color: p.propertyType === "sale" ? "#2196f3" : "#4caf50",
                fontWeight: "bold"
              }}
            >
              {p.propertyType === "sale"
                ? `$${p.price}`
                : `$${p.price}/month`}
            </p>
            <span
              style={{
                display: "inline-block",
                marginTop: "5px",
                background: "#eee",
                padding: "5px 10px",
                borderRadius: "15px",
                fontSize: "12px"
              }}
            >
              {p.propertyType.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyListing;
