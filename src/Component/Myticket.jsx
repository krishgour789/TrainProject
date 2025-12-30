import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyTicket = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);

  const API = "http://localhost:3000/bookings";

  useEffect(() => {
    if (!user) return;

    const fetchTicket = async () => {
      const res = await axios.get(API);

      const userTickets = res.data.filter(
        (t) => t.userEmail === user.email
      );

      if (userTickets.length > 0) {
        setTicket(userTickets[userTickets.length - 1]);
      }

      setLoading(false);
    };

    fetchTicket();
  }, [user]);

  const cancelTicket = async () => {
    const confirm = window.confirm("Cancel this ticket?");
    if (!confirm) return;

    await axios.delete(`${API}/${ticket.id}`);
    alert("❌ Ticket Cancelled");
    setTicket(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading ticket...
      </div>
    );
  }

  if (!ticket) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No ticket found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">

        <h1 className="text-3xl font-bold text-center text-green-600 mb-4">
          🎫 My Train Ticket
        </h1>

        <div className="border-dashed border-2 border-gray-300 rounded-lg p-5 space-y-2">
          <p><strong>Passenger:</strong> {ticket.name}</p>
          <p><strong>From:</strong> {ticket.from}</p>
          <p><strong>To:</strong> {ticket.to}</p>
          <p><strong>Date:</strong> {ticket.date}</p>
          <p><strong>Seats:</strong> {ticket.seats}</p>

          <div className="text-xs text-gray-400 mt-3">
            <p>Booked By: {ticket.userEmail}</p>
            <p>Booked At: {ticket.bookedAt}</p>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={cancelTicket}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
          >
            ❌ Cancel Ticket
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyTicket;
