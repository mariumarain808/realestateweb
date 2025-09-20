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
          propertyType: i % 2 === 0 ? "sale" : "rent",
        }));
        setProperties(updated);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredProperties =
    filter === "all"
      ? properties
      : properties.filter((p) => p.propertyType === filter);

  return (
    <section style={{ padding: "60px 20px", textAlign: "center" }}>
      <h2>Property Listings</h2>

      {/* Filter Buttons */}
      <div style={{ marginTop: "20px" }}>
        {["all", "sale", "rent"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            style={{
              padding: "10px 20px",
              marginRight: "10px",
              background: filter === type ? "#2196f3" : "#eee",
              color: filter === type ? "#fff" : "#000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Property Grid */}
      <div className="property-grid">
        {filteredProperties.map((p) => (
          <div key={p.id} className="property-card">
            <img src={p.image} alt={p.title} className="property-img" />
            <h3>{p.title}</h3>
            <p
              style={{
                color: p.propertyType === "sale" ? "#2196f3" : "#4caf50",
                fontWeight: "bold",
              }}
            >
              {p.propertyType === "sale"
                ? `$${p.price}`
                : `$${p.price}/month`}
            </p>
            <span className="property-tag">
              {p.propertyType.toUpperCase()}
            </span>
          </div>
        ))}
      </div>

      {/* ✅ Embedded CSS */}
      <style>{`
        .property-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 1100px;
          margin: 40px auto;
        }

        .property-card {
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 15px;
          text-align: center;
        }

        .property-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 10px;
        }

        .property-tag {
          display: inline-block;
          margin-top: 5px;
          background: #eee;
          padding: 5px 10px;
          border-radius: 15px;
          font-size: 12px;
        }

        /* 📱 Responsive Breakpoints */
        @media (max-width: 1024px) {
          .property-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .property-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default PropertyListing;
