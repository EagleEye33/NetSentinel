import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">NetSentinel</div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded border border-white text-black"
            />
            <Link to="/login">
              <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">Login</button>
            </Link>
            <Link to="/signup">
              <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">Sign Up</button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto text-center py-20">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">Welcome to NetSentinel</h1>
        <p className="text-xl text-gray-600 mb-6">
          Your Trusted AI-driven Threat Detection System for IoT Networks
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;

