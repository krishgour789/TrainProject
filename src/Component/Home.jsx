import React from "react";
import './TrainBookingApp'


const Home = () => {

  
  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 -z-10"
        style={{ backgroundImage: "url('/MetroTrain.img.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 -z-10" />

      

      {/* HERO */}
      <section className="px-10 lg:px-28 pt-20 pb-32 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
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
            <button className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black px-10 py-4 rounded-xl font-bold hover:scale-105 transition shadow-xl">
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

        {/* BOOKING CARD */}
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            🔍 Search Trains
          </h2>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="From Station"
              className="w-full px-5 py-4 rounded-xl bg-black/40 outline-none placeholder-white/60"
            />
            <input
              type="text"
              placeholder="To Station"
              className="w-full px-5 py-4 rounded-xl bg-black/40 outline-none placeholder-white/60"
            />
            <input
              type="date"
              className="w-full px-5 py-4 rounded-xl bg-black/40 outline-none"
            />

            <button className="w-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-4 rounded-xl font-bold hover:opacity-90 transition">
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

      {/* TESTIMONIALS */}
      <section className="px-10 lg:px-28 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Loved by Travellers ❤️
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Fast booking!", "Clean UI!", "Best train app!"].map((text) => (
            <div
              key={text}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
            >
              <p className="text-white/80 mb-4">“{text}”</p>
              <span className="text-xs text-emerald-400">Verified User</span>
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
