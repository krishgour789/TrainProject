import React, { useState } from "react";
import DarkVeil from "./DarkVeil";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate();


  const login = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("users"));

    if (!user) return alert("No user registered yet!");

    const foundUser = user.find(
    (u) => u.email === email && u.password === password
  );

  if (!foundUser) {
    alert("Invalid email or password");
  } else {
    navigate("/");
    alert("Login Successful!");
    return 
    // you can redirect to home page here
  }
  }
return (
  <>
   <div className="absolute inset-x-0 top-0 h-[680px] -z-10 pointer-events-none">
  <DarkVeil />
</div >
<div className="flex justify-center items-center min-h-screen w-full  ">
    <form onSubmit={login} className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
            <h1 className="text-2xl font-bold text-gray-950 text-center mb-6">Welcome , Please Login First</h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>

            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-200">
                Login
            </button>
        </div>
    </form>
    </div>
    </>
);
};

export default LoginPage;
