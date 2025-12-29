import './TrainBooking.css'
import React, { useEffect, useState } from "react";
import axios from "axios";

const TrainBooking = () => {
  const [form, setForm] = useState({
    name: "",
    from: "",
    to: "",
    date: "",
    seats: "",
  });

  const [bookings, setBookings] = useState([]);

  const API = "http://localhost:3000/bookings";

  // Fetch bookings
  const fetchData = async () => {
    const res = await axios.get(API);
    setBookings(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit booking
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API, form);
    alert("✅ Ticket Booked Successfully");
    setForm({ name: "", from: "", to: "", date: "", seats: "" });
    fetchData();
  };

  // Delete booking
  const deleteBooking = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchData();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          🚆 Train Booking Form
        </h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="input"
            placeholder="Passenger Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="input"
            placeholder="From Station"
            name="from"
            value={form.from}
            onChange={handleChange}
            required
          />
          <input
            className="input"
            placeholder="To Station"
            name="to"
            value={form.to}
            onChange={handleChange}
            required
          />
          <input
            className="input"
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <input
            className="input"
            placeholder="No of Seats"
            name="seats"
            value={form.seats}
            onChange={handleChange}
            required
          />

          <button className="col-span-1 md:col-span-2 bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Book Ticket
          </button>
        </form>

        {/* TABLE */}
        <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-700">
          📋 Booked Tickets
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">From</th>
                <th className="p-2">To</th>
                <th className="p-2">Date</th>
                <th className="p-2">Seats</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr key={b.id} className="text-center border-t">
                  <td className="p-2">{b.name}</td>
                  <td className="p-2">{b.from}</td>
                  <td className="p-2">{b.to}</td>
                  <td className="p-2">{b.date}</td>
                  <td className="p-2">{b.seats}</td>
                  <td className="p-2">
                    <button
                      onClick={() => deleteBooking(b.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {bookings.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-4 text-gray-500">
                    No bookings yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrainBooking;

