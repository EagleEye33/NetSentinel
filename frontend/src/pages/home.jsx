import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 p-4 text-white">
      <div className="text-2xl font-bold">NetSentinel</div>
      <ul className="flex gap-6">
        <li><a href="/index.html" className="hover:text-gray-400">Home</a></li>
        <li><a href="/about" className="hover:text-gray-400">About</a></li>
        <li><a href="/services" className="hover:text-gray-400">Services</a></li>
        <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
        <li><a href="/login" className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600">Login</a></li>
        <li><button className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600">Sign Up</button></li>
      </ul>
    </nav>
  );
};

const Hero = () => {
  return (
    <header className="text-center py-24 bg-gray-800 text-white">
      <h1 className="text-4xl font-bold">Welcome to NetSentinel</h1>
      <p className="text-lg mt-4">AI-driven Threat Detection System for IoT Networks</p>
      <button className="mt-6 bg-orange-500 px-6 py-3 rounded text-white hover:bg-orange-600" onClick={() => alert('Getting Started with NetSentinel!')}>Get Started</button>
    </header>
  );
};

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Homepage;
