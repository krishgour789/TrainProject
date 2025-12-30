import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const validateForm = () => {
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      return "Please enter a valid email address";
    }
    if (form.password.length < 6) {
      return "Password must be at least 6 characters";
    }
    return "";
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
      setError("No account found. Please register first.");
      return;
    }

    const foundUser = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (!foundUser) {
      setError("Invalid email or password");
      return;
    }

    localStorage.setItem("user", JSON.stringify(foundUser));
    setSuccess("Login successful! Redirecting...");

    setTimeout(() => {
      navigate(location.state?.from || "/");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        {/* Header */}
        <h1 className="text-2xl font-bold text-blue-700 text-center mb-1">
          🚆 Train Booking Login
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Sign in to book and manage your journeys
        </p>

        {/* Messages */}
        {error && (
          <p className="text-center text-red-600 mb-3 font-medium">
            {error}
          </p>
        )}
        {success && (
          <p className="text-center text-green-600 mb-3 font-medium">
            {success}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Registered Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Login & Continue
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            New to Train Booking?
          </p>
          <button
            onClick={() => navigate("/register")}
            className="mt-2 w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 rounded-lg transition"
          >
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
