import React from "react";

const services = [
  {
    id: 1,
    title: "Buy a Home",
    description: "Find your dream home from our wide selection of properties.",
    icon: "🏠",
  },
  {
    id: 2,
    title: "Sell a Home",
    description: "Get the best value for your property with our expert agents.",
    icon: "💰",
  },
  {
    id: 3,
    title: "Rent a Home",
    description: "Browse rental properties that fit your budget and lifestyle.",
    icon: "🔑",
  },
  {
    id: 4,
    title: "Property Management",
    description: "Let us manage your property and take care of everything.",
    icon: "📋",
  },
];

const WhatWeDo = () => {
  return (
    <section style={{ padding: "60px 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>What We Do</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {services.map((service) => (
          <div
            key={service.id} // ✅ Added key
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div style={{ fontSize: "40px", marginBottom: "15px" }}>
              {service.icon}
            </div>
            <h3 style={{ marginBottom: "10px" }}>{service.title}</h3>
            <p style={{ color: "#555" }}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
