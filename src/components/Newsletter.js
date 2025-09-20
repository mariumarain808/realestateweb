import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email!");
      return;
    }
    alert(`Subscribed successfully with: ${email}`);
    setEmail("");
  };

  return (
    <section
      style={{
        padding: "60px 20px",
        textAlign: "center",
        background: "#f5f5f5"
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Subscribe to Our Newsletter</h2>
      <p style={{ marginBottom: "25px", color: "#555" }}>
        Get the latest updates on new properties and special offers.
      </p>

      <form
        onSubmit={handleSubscribe}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          maxWidth: "500px",
          margin: "0 auto"
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none"
          }}
        />
        <button
          type="submit"
          style={{
            padding: "12px 25px",
            background: "#2196f3",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
