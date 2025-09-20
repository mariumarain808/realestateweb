import React, { useState } from "react";
import { useAuth } from "./firebase/Authcontext.js"; 
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await signup(email, password, name);
      navigate("/"); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4">Sign Up</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Full Name</label>
          <input className="form-control" value={name} onChange={(e)=>setName(e.target.value)} required/>
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        </div>

        <div className="mb-3">
          <label>Confirm Password</label>
          <input type="password" className="form-control" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required/>
        </div>

        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
      </form>
    </div>
  );
}
