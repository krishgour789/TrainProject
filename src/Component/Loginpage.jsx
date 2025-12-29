import React, { useState } from "react";
import './TrainBooking.css'


export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // fetch existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // check if email already exists
    const exists = users.find((u) => u.email === email);
    if (exists) {
      setMessage("Email already registered!");
      return;
    }

    // push new user
    users.push({ name, email, password });

    // save back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    setMessage("Account created successfully!");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
   
    <div className="max-w-sm mx-auto mt-10 bg-white shadow p-6 rounded">
      <h2 className="text-2xl font-semibold mb-4 text-center">Register</h2>

      {message && <p className="text-center text-blue-600 mb-3">{message}</p>}

      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
    </>
  );
}
