import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TrainBookingApp";

const trains = [
  {
    id: 1,
    name: "Rajdhani Express",
    from: "Delhi",
    to: "Mumbai",
    route: "Delhi ➝ Mumbai",
    date: "02 Jan 2025",
    time: "06:00 AM",
  },
  {
    id: 2,
    name: "Shatabdi Express",
    from: "Delhi",
    to: "Bhopal",
    route: "Delhi ➝ Bhopal",
    date: "03 Jan 2025",
    time: "07:30 AM",
  },
  {
    id: 3,
    name: "Duronto Express",
    from: "Kolkata",
    to: "Delhi",
    route: "Kolkata ➝ Delhi",
    date: "04 Jan 2025",
    time: "09:00 PM",
  },
  {
    id: 4,
    name: "Garib Rath",
    from: "Patna",
    to: "Delhi",
    route: "Patna ➝ Delhi",
    date: "05 Jan 2025",
    time: "05:45 PM",
  },
  {
    id: 5,
    name: "Vande Bharat",
    from: "Delhi",
    to: "Jaipur",
    route: "Delhi ➝ Jaipur",
    date: "06 Jan 2025",
    time: "08:00 AM",
  },
];

const TrainList = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState({
    from: "",
    to: "",
    name: "",
  });

  const stations = [...new Set(trains.flatMap(t => [t.from, t.to]))];

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const filteredTrains = trains.filter((train) => {
    return (
      train.from.toLowerCase().includes(search.from.toLowerCase()) &&
      train.to.toLowerCase().includes(search.to.toLowerCase()) &&
      train.name.toLowerCase().includes(search.name.toLowerCase())
    );
  });

  const handleBookNow = (train) => {
    navigate("/book", { state: train });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        🚆 Search & Book Trains
      </h1>

      {/* SEARCH FILTER */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          list="stations"
          name="from"
          placeholder="From Station"
          value={search.from}
          onChange={handleChange}
          className="input"
        />

        <input
          list="stations"
          name="to"
          placeholder="To Station"
          value={search.to}
          onChange={handleChange}
          className="input"
        />

        <input
          name="name"
          placeholder="Train Name"
          value={search.name}
          onChange={handleChange}
          className="input"
        />

        <datalist id="stations">
          {stations.map((station) => (
            <option key={station} value={station} />
          ))}
        </datalist>
      </div>

      {/* TRAIN LIST */}
      <div className="max-w-4xl mx-auto space-y-4">
        {filteredTrains.length === 0 && (
          <p className="text-center text-gray-500">
            No trains found 🚫
          </p>
        )}

        {filteredTrains.map((train) => (
          <div
            key={train.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row md:justify-between md:items-center hover:shadow-lg transition"
          >
            <div>
              <h2 className="text-xl font-semibold">{train.name}</h2>
              <p className="text-gray-600">{train.route}</p>
              <p className="text-sm text-gray-500">
                📅 {train.date} | ⏰ {train.time}
              </p>
            </div>

            <button
              onClick={() => handleBookNow(train)}
              className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainList;
