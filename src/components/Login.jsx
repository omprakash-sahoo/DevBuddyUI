import React, { useState } from "react";
import { BANNER_IMAGE_LOGIN } from "../utils/constant";
export default function Login() {
  const [emailId, setEmailId] = useState("rohit@gmai.com");
  const [password, setpassword] = useState("Rohit@1234");

  const handleClick = async () => {
    const response = await fetch("http://localhost:3001/signIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emailId, passWord: password }),
      credentials: "include",
    });
    const loginData = await response.json();
    console.log(loginData);
  };

  return (
    <div className="relative min-h-screen pt-12">
      <img
        src={BANNER_IMAGE_LOGIN}
        alt="logo"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="flex items-center justify-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-80 border p-6 z-10 relative">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <button className="btn btn-neutral mt-4" onClick={handleClick}>
            Login
          </button>
        </fieldset>
      </div>
    </div>
  );
}
