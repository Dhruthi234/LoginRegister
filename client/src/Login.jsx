import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./Signup.css";


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(res => {
            console.log(res.data)
            if(res.data === "success") {  
              console.log("Navigating to home page");
                    navigate('/home')   ;   
            }else {
              console.log("Either password is incorrect or no record exists.");
              }

            
        }).catch(error => {
          console.error("Error:", error);
    });
  };

    return(
        <div className="sign-up-container">
      <div className="sign-up-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
            
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
         
            <button type="submit">Login</button>
         
          </form>
          <p>Already Have an Account</p>
          <Link to="/register">
            Sign Up
          </Link>
        
      </div>
    </div>
    )
}

export default Login;
