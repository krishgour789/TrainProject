import React from "react";
import { Outlet, Link } from "react-router-dom";
import PillNav from "./PillNav";

const Layout = () => {
  return (
    <>
   
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/40">
        <div className="flex justify-between items-center px-10 py-5">
          <h1 className="text-3xl font-extrabold text-emerald-400">
            {/* <nav className="hidden md:flex gap-10 text-sm font-medium items-center">
              <a className="hover:text-emerald-400">Home</a>
              <a className="hover:text-emerald-400">Routes</a>
              <a className="hover:text-emerald-400">Pricing</a>
              <a className="hover:text-emerald-400">Support</a> */}
              
            {/* </nav> */}
            🚆 RailSwift
          </h1>

          <nav className="hidden md:flex gap-10 text-sm font-medium">
            <a className="hover:text-emerald-400"><Link to="/">Home</Link></a>
            <a className="hover:text-emerald-400">Routes</a>
            <a className="hover:text-emerald-400">Pricing</a>
            <a className="hover:text-emerald-400">Support</a>
          </nav>

              <div>
          <button className="text-white px-6 py-2 rounded-full font-semibold hover:text-emerald-400 transition">
                <Link to="/register">Register</Link>
              </button>
              <button className="bg-emerald-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-emerald-500 transition">
               
        <Link to="/loginpage">Login</Link>
              </button>
              </div>
        
        </div>
      </header>
        <main >
        <Outlet />   {/* 👈 MAIN ITEM SHOWS HERE */}
      </main>
      

     
    </>
  );
};

export default Layout;
