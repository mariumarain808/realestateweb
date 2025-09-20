import React, { useEffect, useState } from "react";

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing")
      .then(res => res.json())
      .then(data => setProperties(data.slice(0, 6)))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <section style={{ padding: "60px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Featured Properties
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto"
        }}
      >
        {properties.map((property) => (
          <div
            key={property.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center"
            }}
          >
            <img
              src={property.image}
              alt={property.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />
            <h3>{property.title}</h3>
            <p>${property.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;
