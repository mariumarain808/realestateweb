import React from "react";
import homeImage from "../assets/home.webp"; 

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${homeImage})`,
        height: "80vh",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundSize: "cover",
        backgroundPosition: "center"

      }}
    >
      <div>
        <h1 className="text-center">Find Your Dream Home</h1>
        <p className="para">Explore the best properties in your area</p>
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
