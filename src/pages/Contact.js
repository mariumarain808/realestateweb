import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Firebase.js";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [isLogin, setIsLogin] = useState(true); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
      
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Login successful!");
        localStorage.setItem("user", JSON.stringify({ email }));
        navigate("/"); 
      } else {
      
        if (password !== confirmPassword) {
          toast.error("Passwords do not match!");
          return;
        }
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Signup successful!");
        setIsLogin(true); 
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
      <h1 className="mb-4">{isLogin ? "Login" : "Sign Up"}</h1>

      <div className="card p-4" style={{ width: "350px", backgroundColor: "#f8f9fa" }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {!isLogin && (
            <div className="mb-3">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100 mb-3">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <hr />

        <p className="text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="btn btn-link p-0"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
