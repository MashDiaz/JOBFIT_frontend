import React from "react";

const Navbar = ({ onSignIn }) => {
  return (
    <header className="mx-1 mt-1 mb-2 px-6 h-18 bg-gray-900 shadow-md rounded-md">
      <div className="container mx-auto flex justify-between items-baseline py-1 px-5">
        <h1 className="text-xl font-bold text-blue-600">
          <a href="home">
          JobFit
          </a>
          </h1>
        <nav className="ml-4 flex space-x-16">
          <a
            href="home"
            className="text-blue-600 hover:text-blue-600 transition-colors duration-500 ease-in-out"
          >
            Home
          </a>
          <a
            href="account"
            className="text-blue-800 hover:text-blue-600 transition-colors duration-500 ease-in-out"
          >
            Account
          </a>
          <a
            href="about"
            className="text-blue-800 hover:text-blue-600 transition-colors duration-500 ease-in-out"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
