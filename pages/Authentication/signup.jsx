import React from "react";
import Header from "../Home/header";
import axios from "axios";
import { useEffect, useState } from "react";

export default function signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupSubmit = async (e) => {
    e.preventDefault();
    let messagecode = "signup";
    try {
      const res = await axios.post(
        "/api/userHandler",
        { name, email, password, messagecode },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(res);
      if (res.status === 200) {
        console.log("user created successfully");
      } else {
        console.log("response error: " + res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <>
        <Header />
        <div className="homeblank"></div>
        <div className="form-container container-fluid card2">
        <div>
          <div>
          <div className="form-container">
            <img
            className="imglogo"
            src="https://i.pinimg.com/originals/17/3f/09/173f09fc264e017acf7de5b14a549c95.png"
            />
            </div>
            <p className="title2 title card">Create New Account</p>
            <div className="line"></div>
            <input
              placeholder="Name"
              class="input-field"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <label for="input-field" class="input-label">
              Name
            </label>

            <span class="input-highlight"></span>
          </div>
          <div>
            <input
              placeholder="Email"
              class="input-field"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label for="input-field" class="input-label">
              Email
            </label>

            <span class="input-highlight"></span>
          </div>
          <div>
            <input
              placeholder="Password"
              class="input-field"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <label for="input-field" class="input-label">
              Password
            </label>

            <span class="input-highlight"></span>
          </div>
        </div>
        <button onClick={signupSubmit} className="bio btn-support">
          Submit
        </button>
        </div>
      </>
    </div>
  );
}
