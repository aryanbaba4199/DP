// Signin.js
import React, { useState } from "react";
import Header from "../Home/header";
import axios from "axios";
import Link from "next/link";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function Signin() {
  
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const signinSubmit = async (e) => {
    e.preventDefault();
    const messagecode = "signin";
    try {
      const response = await axios.post(
        "/api/userHandler",
        { email, password, messagecode },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      try {
        if (response.status === 200) {
          const responseData = response.data;
          console.log(responseData.message);

          if (responseData.message === "Authentication successful") {
            toast("Login Success");
            
          } else {
            toast("Email or password is incorrect");
            console.error("Login failed:", responseData.message);
          }
        }
      } catch (e) {
        console.log(e.message);
      }
    } catch (error) {
      toast("Try again After some time");
      console.error("Error sending data to the backend:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="homeblank"></div>
      <LogIN />
      
      <div className="homeblank"></div>
      <div className="form-control form-container">
        <div className="container-lg card2">
          <div className="">
            <div className="form-container">
            <img
            className="imglogo"
            src="https://i.pinimg.com/originals/17/3f/09/173f09fc264e017acf7de5b14a549c95.png"
            />
            </div>
            
            <p className="title">Log in</p>
            
            <input
              placeholder="Email"
              className="input-field"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label for="input-field" className="input-label">
              Email
            </label>

            <span className="input-highlight"></span>
          </div>
          <div>
            <input
              placeholder="Password"
              className="input-field"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <label for="input-field" className="input-label">
              Password
            </label>

            <span className="input-highlight"></span>
          </div>
          <text className="title2 ">Forget Password </text>
          <div className="icons">
          <button onClick={signinSubmit} className="bio btn-support">
          Submit
        </button>
        <Link href="/Authentication/signup">
          <button className="bio btn-support">Register</button>
        </Link>
        </div>
        </div>
        
      </div>
      <ToastContainer />
    </>
  );
}

export default Signin;
