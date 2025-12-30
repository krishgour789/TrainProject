import React, { useState } from "react";
import "./TrainBookingApp";
import { useNavigate } from "react-router-dom";

/* स्टेशन लिस्ट – Auto Suggestion के लिए */
const stations = [
  "Delhi",
  "Mumbai",
  "Bhopal",
  "Kolkata",
  "Patna",
  "Jaipur",
  "Chennai",
  "Bengaluru",
  "Hyderabad",
];

const Home = () => {
  const navigate = useNavigate();

  /* Search State */
  const [search, setSearch] = useState({
    from: "",
    to: "",
    date: "",
  });

  /* Handle Input */
  const handleSearchChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  /* Book Now → Login Check */
  const handleBookNow = () => {
    const user = localStorage.getItem("user");

    if (!user) {
      navigate("/loginpage", { state: { from: "/book" } });
    } else {
      navigate("/book");
    }
  };

  /* Search Train → Routes Page */
  const handleSearchTrain = (e) => {
    e.preventDefault();

    if (!search.from || !search.to || !search.date) return;

    navigate("/routes", {
      state: {
        from: search.from,
        to: search.to,
        date: search.date,
      },
    });
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 -z-10"
        style={{ backgroundImage: "url('/MetroTrain.img.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 -z-10" />

      {/* HERO SECTION */}
      <section className="px-10 lg:px-28 pt-20 pb-32 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 px-5 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-sm">
            Trusted by 10M+ Travellers
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            Smarter Way To
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-lg">
              Book Train Tickets
            </span>
          </h1>

          <p className="mt-6 text-white/80 max-w-xl">
            Live seat availability, instant confirmation, zero confusion.
            Designed for speed, reliability & comfort.
          </p>

          <div className="mt-10 flex gap-6">
            <button
              onClick={handleBookNow}
              className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black px-10 py-4 rounded-xl font-bold hover:scale-105 transition shadow-xl"
            >
              Book Now
            </button>

            <button className="border border-white/30 px-10 py-4 rounded-xl hover:bg-white/10 transition">
              Learn More
            </button>
          </div>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-3 gap-8">
            {[
              ["10M+", "Bookings"],
              ["99.9%", "Success Rate"],
              ["24/7", "Customer Support"],
            ].map(([num, label]) => (
              <div key={label}>
                <h3 className="text-3xl font-bold text-emerald-400">{num}</h3>
                <p className="text-xs text-white/60">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEARCH CARD */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            🔍 Search Trains
          </h2>

          <form onSubmit={handleSearchTrain} className="space-y-6">
            <input
              list="stations"
              type="text"
              name="from"
              placeholder="From Station"
              value={search.from}
              onChange={handleSearchChange}
              className="w-full px-5 py-4 rounded-xl bg-black/40 outline-none placeholder-white/60"
            />

            <input
              list="stations"
              type="text"
              name="to"
              placeholder="To Station"
              value={search.to}
              onChange={handleSearchChange}
              className="w-full px-5 py-4 rounded-xl bg-black/40 outline-none placeholder-white/60"
            />

            <input
              type="date"
              name="date"
              value={search.date}
              onChange={handleSearchChange}
              className="w-full px-5 py-4 rounded-xl bg-black/40 outline-none"
            />

            {/* Auto Suggestion Data */}
            <datalist id="stations">
              {stations.map((station) => (
                <option key={station} value={station} />
              ))}
            </datalist>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-4 rounded-xl font-bold hover:opacity-90 transition"
            >
              Search Trains
            </button>
          </form>

          <div className="flex justify-between mt-6 text-xs text-white/60">
            <span>✔ Secure Payments</span>
            <span>✔ Live Tracking</span>
            <span>✔ Easy Refunds</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-10 lg:px-28 pb-28">
        <h2 className="text-3xl font-bold text-center mb-14">
          Book in <span className="text-emerald-400">3 Easy Steps</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            ["Search", "Find best trains instantly"],
            ["Select", "Choose seats & class"],
            ["Travel", "Enjoy smooth journey"],
          ].map(([title, desc], i) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 hover:scale-105 transition"
            >
              <div className="text-emerald-400 text-4xl font-bold mb-4">
                0{i + 1}
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-white/50 text-sm">
        © 2025 RailSwift • Built for modern travellers
      </footer>
    </div>
  );
};

export default Home;
