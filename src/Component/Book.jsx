import "./TrainBooking.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Book = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    name: "",
    from: "",
    to: "",
    date: "",
    seats: 1,
  });

  const API = "http://localhost:3000/bookings";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login first");
      return;
    }

    const ticketData = {
      ...form,
      userEmail: user.email,
      bookedAt: new Date().toLocaleString(),
    };

    await axios.post(API, ticketData);

    navigate("/myticket");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-2">
          🎫 Book Train Ticket
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Fast • Secure • Easy Booking
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input className="input" name="name" placeholder="Passenger Name" onChange={handleChange} required />
          <input className="input" name="from" placeholder="From Station" onChange={handleChange} required />
          <input className="input" name="to" placeholder="To Station" onChange={handleChange} required />
          <input className="input" type="date" name="date" onChange={handleChange} required />
          <input className="input" type="number" min="1" max="6" name="seats" onChange={handleChange} required />

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-bold">
            🎟️ Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Book;
